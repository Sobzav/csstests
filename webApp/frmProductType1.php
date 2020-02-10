<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Форма редактирования таблицы базы данных</title>
    <style>
        .tablecenter80 {
            padding: 0 40px 0 40px;
            text-align: center;
        }
    </style>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.1/css/bulma.min.css" rel="stylesheet">
    <!-- <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script> -->
    <!-- <link href="https://fonts.googleapis.com/css?family=Montserrat|Nunito|Oswald|Ubuntu|Fira+Sans&display=swap" rel="stylesheet"> -->
    <!-- <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet"> -->
</head>
<body>
<section class="hero is-primary">
    <div class="hero-body">
        <div class="container">
    <h1 class="title"> Форма редактирования таблицы базы данных </h1>
    <h2 class="subtitle">
        Просто хорошая <strong>форма</strong>, дающая представление о содержимом таблицы базы данных
    </h2>
        </div>
    </div>
</section>
<section class="section">
      <div class="container">
<?php

// загружаем настройки и
// подключаемся к серверу mysql
@include 'connection.php';

// проверяем ошибки подключения
if ($mySqli->connect_errno) {
    printf("Connect failed: %s\n", $mySqli->connect_errno);
    exit();
}

// сохраняем запрос SELECT в строку
$query = " 
    SELECT 
        product.id, 
        product_info.name, 
        product_type.name,
        product_category.name,
        product.w,
        product.h,
        product.l
    FROM 
        product
    LEFT JOIN (
        product_info,
        product_type,
        product_category
        )
    ON (
        product.id = product_info.id AND
        product.product_type_id = product_type.id AND
        product.product_category_id = product_category.id
        );
";

// print_r ($query);
// print_r ('<br/>');
// print_r ('<br/>');

// рисуем шапку таблицы
$output = '</div>';
$output .= '</section>';
$output .= '<div class="hero is-light">';
$output .= '<div class="hero-body">';
$output .= '<div class="tablecenter80">';
$output .= '<form class="formTable" action="updateTable.php" method="post">';
$output .= '<input type="hidden" name="tableName" value="product">';
$output .= '<table class="table is-bordered is-striped is-hoverable">';
$output .=         '<tr>';

// выводим названия полей таблицы
$row = array("ID", "Наименование", "Тип", "Категория", "Ширина", "Высота", "Длина");
foreach ($row as $key) {
    $output .=             '<th>'. $key. '</th>';
}
// закрываем строку в html
$output .= '</tr>';
print $output;

$output = "";
reset($row);

// делаем запрос SELECT из базы данных
// и сохраняем его в $result
// если результат запросы не пуст
// то заполняем таблицу
if ($result = $mySqli->query($query)) {

    $fields = $result->fetch_fields();
        
    // foreach ($fields_ as $val) {
    //     print $val->table ."." .$val->name ." ";
    // }
// читаем построчно результаты запроса
    // с параметром MYSQLI_NUM (значения вернутся в нумерованном массиве)
    // сохраняем строку в массив $row
    while ($row = $result->fetch_array(MYSQLI_ASSOC)) {

        // открываем строку в html
        $output .=         '<tr>';

        $index = 0;
        // перебираем значения из строки $row
        // сохраняем каждое в $val
        foreach ($row as $key => $val) {

            if ($fields[$index]->flags != 4096) {

                $output .= '<td>' .$fields[$index]->flags;
                if ($key == 'id') {
                    $output .= '<input class="input" type="text" ' ."value = '$val' name = productId[]>";
                } elseif ($key == 'name') {
                    $output .= '<input class="input" type="text" ' ."value = '$val' name = productName[]>";
                } elseif ($key == 'h') {
                    $output .= '<input class="input" type="text" ' ."value = '$val' name = productH[]>";
                } elseif ($key == 'w') {
                    $output .= '<input class="input" type="text" ' ."value = '$val' name = productW[]>";
                } elseif ($key == 'l') {
                    $output .= '<input class="input" type="text" ' ."value = '$val' name = productL[]>";
                } else {
                    $output .= '<input class="input" type="text" ' ."value = '$val'>";
                }
                $output .= '</td>';

            } elseif ($fields[$index]->flags == 4096) {

                $query = "SELECT " .$fields[$index]->name ." FROM " .$fields[$index]->table;

                if ($result1 = $mySqli->query($query)) {

                    $output .= '<td>' .$fields[$index]->flags;
                    $output .= '<div class="select">';
                    $output .= '<select>';
                    while ($row1 = $result1->fetch_array(MYSQLI_ASSOC)) {

                        if ($row1[$fields[$index]->name] == $val) {
                            $output .= '<option class="inputSelect" selected>' .$row1[$fields[$index]->name] .'</option>';
                        } else {
                            $output .= '<option class="inputSelect" >' .$row1[$fields[$index]->name] .'</option>';
                        }
                    }
                    $output .= '</select>';
                    $output .= '</div>'; 
                    $output .= '</td>'; 
                
                } else {
                    print_r ('Таблица ' .$fields[$index]->table .' пуста <br/>');
                    print_r("Error: %s\n<br/>", $mySqli->error);
                }
            } else {

            }
            $index++;
        }
        // закрываем строку Table
        $output .= '</tr>';
    }
    // освобождаем ресурсы
    $result->free();

} else {
    print_r ('Таблица пуста <br/>');
    print_r("Error: %s\n<br/>", $mySqli->error);
}

// закрываем TableBody

// закрываем Table
$output .= '</table>';
$output .= '</div>';
$output .= '</div>';
$output .= '</section>';
$output .= '<section class="section">';
$output .= '<div class="container">';
$output .= '<input class="button is-primary" type="submit" value="Сохранить">';

$output .= '</form>';

print $output;
print_r ('<br/>');

// закрываем подключение
$mySqli->close();

{
    echo "Выполнение запроса прошло успешно<br/>";
}


?>
</div>
</section>
</body>
</html>