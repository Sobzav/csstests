<html>
    <head>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.3.1/css/bulma.min.css" rel="stylesheet">
        <title> Форма редактирования таблицы базы даных </title>
    <head>
    
    <h1 class="h1"> Форма редактирования таблицы базы даных </h1>
    <body>
<?php

// загружаем настройки и
// подключаемся к серверу mysql
@include 'connection.php';
 
// сохраняем запрос SELECT в строку
$query = " 
        SELECT 
            product.id, 
            product.name, 
            product_type.product_type_name,
            product_category.product_category_name,
            product.w,
            product.wz,
            product.l
        FROM 
            sobzav.product
        LEFT JOIN
            (sobzav.product_type,
            sobzav.product_category)
        ON 
            (product.product_type_id = product_type.product_type_id AND
            product.product_category_id = product_category.product_category_id);
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
$row = array("ID", "Наименование", "Тип", "Категория", "Ширина", "Высота", "Длина");
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
            if ($fields[$index]->flags != 4096) {

                // то в ячейке может быть id
                if ($key == 'id') {
                    $output .= '<input class="input" type="text" ' ."value = '$val' name = productId[]>";

                // либо в ячейке name
                } elseif ($key == 'name') {
                    $output .= '<input class="input" type="text" ' ."value = '$val' name = productName[]>";

                // либо в ячейке любое другое значение
                } else {
                    $output .= '<input class="input" type="text" ' ."value = '$val'>";
                }

            // Если поле содержит выпадающий список
            } elseif ($fields[$index]->flags == 4096) {

                // то делаем запрос в базу данных
                // читаем все элементы для наполнения выпадающего списка
                $query = "SELECT " .$fields[$index]->name ." FROM " .$fields[$index]->table;

                // если запрос вернул элементы
                if ($result1 = $mysqli->query($query)) {

                    // то формируем и наполняем выпадающий список
                    // открываем select
                    $output .= '<select>';

                    // Перебираем все записи из sql запроса
                    while ($row1 = $result1->fetch_array(MYSQLI_ASSOC)) {

                        // и добаляем по одной в каждый html option
                        // если очередной элемент выпадающего списка равен текущему значению в базе данных 
                        if ($row1[$fields[$index]->name] == $val) {

                            // то делаем этот элемент выпадающего списка выбранным
                            $output .= '<option class="inputSelect" selected>' .$row1[$fields[$index]->name] .'</option>';
                        } else {

                            $output .= '<option class="inputSelect">' .$row1[$fields[$index]->name] .'</option>';
                        }
                    }
                    // закрываем select
                    $output .= '</select>';
                
                // а если запрос неудачный 
                } else {

                    // сообщаем информацию о технической проблеме
                    print_r ('Таблица ' .$fields[$index]->table .' пуста <br/>');
                    print_r("Error: %s\n<br/>", $mysqli->error);
                }
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