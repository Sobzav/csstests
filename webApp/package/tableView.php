
<html>
    <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.1/css/bulma.min.css" rel="stylesheet">
        <title>  </title>
    <head>
    
    <h1 class="h1">  </h1>
    <body>
<?php

// загружаем настройки и
// подключаемся к серверу mysql
@include '../connection.php';
 
// сохраняем запрос SELECT в строку
$query = " 
    SELECT
        package.id,
        package.name,
        package.code,
        package.wx,
        package.wy,
        package.wz,
        (package.wx * package.wy * package.wz) as package_value,
        package.color,
        package.created,
        package.updated,
        package.deleted,
        material.name as material_name
    FROM
        package
    LEFT JOIN
        material 
    ON (
        package.material_id = material.id OR
        package.material_id = null
    )
    LEFT JOIN
        package_photo
    ON (
        package.photo_id = package_photo.id OR
        package.photo_id = NULL
    )
    ORDER BY package.code;
";

// print_r ($query);
// print_r ('<br/>');
// print_r ('<br/>');

// рисуем шапку таблицы
$output = '';
$output .= '<form class="formTable" action="updateTable.php" method="post">';
$output .= '<input type="hidden" name="tableName" value="product">';
$output .= '<div class="divTable">';
$output .=     '<div class="divTableBody">';
$output .=         '<div class="divTableRow">';

// выводим названия полей таблицы
$row = array("N", "Наименование", "Обозначение", "Ширина", "Высота", "Глубина", "Объем", "X", "Y", "Z", "Внутр. эл-ты", "Тип 1", "кол-во", "Тип 2", "кол-во", "Тип 3", "кол-во", "тип 4", "кол-во");
foreach ($row as $key) {
    $output .=             '<div class="divTableCell divTableHeading">'. $key. '</div>';
}
// закрываем строку в html
$output .= '</div>';
print $output;

$output = "";
// reset($row);

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
        $output .=         '<div class="divTableRow">';

        $index = 0;
        // перебираем значения из строки $row
        // сохраняем каждое в $val
        foreach ($row as $key => $val) {

            // открываем ячейку
            $output .= '<div class="divTableCell">';

            // Проверяем флаг поля
            // flags = 4096 это отличительный признак поля с выпадающим списком 
            // Если поле не содержит выпадающего списка
            if (true || ($fields[$index]->flags != 4096)) {

                // то в ячейке может быть id
                if ($key == 'id') {
                    $output .= '<input class="input" type="text" ' ."value = '$val' name = pack_id[]>";

                // либо в ячейке code
                } elseif ($key == 'code') {
                    $output .= '<input class="input" type="text" ' ."value = '$val' name = pack_code[]>";

                // либо в ячейке name
                } elseif ($key == 'name') {
                    $output .= '<input class="input" type="text" ' ."value = '$val' name = pack_ame[]>";

                // либо в ячейке любое другое значение
                } else {
                    $output .= '<input class="input" type="text" ' ."value = '$val'>";
                }

            // Если поле содержит выпадающий список
            } elseif ($fields[$index]->flags == 4096) {

                // то делаем запрос в базу данных
                // читаем все элементы для наполнения выпадающего списка
                // $query = "SELECT " .$fields[$index]->name ." FROM " .$fields[$index]->table;

                // если запрос вернул элементы
                // if ($result1 = $mysqli->query($query)) {

                //     // то формируем и наполняем выпадающий список
                //     // открываем select
                //     $output .= '<select>';

                //     // Перебираем все записи из sql запроса
                //     while ($row1 = $result1->fetch_array(MYSQLI_ASSOC)) {

                //         // и добаляем по одной в каждый html option
                //         // если очередной элемент выпадающего списка равен текущему значению в базе данных 
                //         if ($row1[$fields[$index]->name] == $val) {

                //             // то делаем этот элемент выпадающего списка выбранным
                //             $output .= '<option class="inputSelect" selected>' .$row1[$fields[$index]->name] .'</option>';
                //         } else {

                //             $output .= '<option class="inputSelect">' .$row1[$fields[$index]->name] .'</option>';
                //         }
                //     }
                //     // закрываем select
                //     $output .= '</select>';
                
                // // а если запрос неудачный 
                // } else {

                //     // сообщаем информацию о технической проблеме
                //     print_r ('Таблица ' .$fields[$index]->table .' пуста <br/>');
                //     print_r("Error: %s\n<br/>", $mysqli->error);
                // }
            }
            
            // закрываем ячейку
            $output .= '</div>';
            
            $index++;
        }
        // закрываем строку divTableRow
        $output .= '</div>';
    }
    // освобождаем ресурсы
    $result->free();

// а если запрос неудачный 
} else {

    // сообщаем информацию о технической проблеме
    print_r ('Таблица пуста <br/>');
    print_r("Error: %s\n<br/>", $mysqli->error);
}

// закрываем TableBody
$output .= '</div>';

// закрываем Table
$output .= '</div>';

// добавляем кнопку сохранить
$output .= '<input class="button" type="submit" value="Сохранить">';

// закрываем форму
$output .= '</form>';

// закрываем подключение
$mySqli->close();

print $output;

?>
        <script src="jquery-3.4.1.min.js"></script>
        <script src="jquery.validate.js"></script>
        <script src="scripts.js"></script>
    </body>

    <footer>
    </footer>
</html>