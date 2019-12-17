<link rel="stylesheet" type="text/css" href="styles.css" />
<style type="text/css">
    {box-sizing: border-box;}

   .divTable {display: table; background-color: #F5F5F5; border-collapse: collapse; width: auto;}
   .divTableHeading {display: table-header-group; font-weight:bold; background-color: #DCDCDC;}
   .divTableRow {display: table-row;}
   .divTableCell {display: table-cell;  text-align: center;  border: none;  border: 0px solid #ccc;  width: auto; vertical-align: middle; padding: 10px; border: 3px solid #fff;}

  </style>
<?php

error_reporting(-1);
print_r ('Product Type Editing 0005'. '<br />');
print_r ('Введите информацию о типе товара'. '<br />'. '<br />');

$host = '127.0.0.1:3306'; // адрес сервера 
$db_name = 'sobzav'; // имя базы данных
$db_user = 'sbus'; // имя пользователя
$db_pass = 'eAwNRYiofwMFD4lg'; // пароль
 
// подключаемся к серверу
$mysqli = new mysqli($host, $db_user, $db_pass);

// проверяем ошибки подключения
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_errno);
    exit();
}
 

// сохраняем запрос SELECT в строку
$query = 'SELECT 
            payer.id, 
            payer.payer_type_id,
            payerType.name
        FROM 
            sobzav.payer AS payer
        LEFT JOIN
            (sobzav.payer_type AS payerType)
        ON 
            (payer.payer_type_id = payerType.id);'
            ;


print_r ($query);
print_r ('<br/>');
print_r ('<br/>');

// рисуем шапку таблицы
$output = '';
$output .= '<div class="divTable">';
$output .=     '<div class="divTableBody">';
$output .=         '<div class="divTableHeading">';

// выводим названия полей таблицы
$row = array("ID", "Тип",  "Название");
foreach ($row as $key) {
    $output .=             '<div class="divTableCell", class="divTableHeading">'. $key. '</div>';
}
// закрываем строку в html
$output .= '</div>';
print $output;

$output = "";
reset($row);

// делаем запрос SELECT из базы данных
// и сохраняем его в $result
// если результат запросы не пуст
// то заполняем таблицу
if ($result = $mysqli->query($query)) {

    // читаем построчно результаты запроса
    // с параметром MYSQLI_NUM (значения вернутся в нумерованном массиве)
    // сохраняем строку в массив $row
    while ($row = $result->fetch_array(MYSQLI_NUM)) {

        // открываем строку в html
        $output .=         '<div class="divTableRow">';

        // перебираем значения из строки $row
        // сохраняем каждое в $val
        foreach ($row as $val) {
            $output .=             '<div class="divTableCell", class="divTableHeading">'. $val. '</div>';
        }
        // закрываем строку divTableRow
        $output .= '</div>';
    }
    // освобождаем ресурсы
    $result->free();

} else {
    print_r ('Таблица пуста <br/>');
    print_r("Error: %s\n<br/>", $mysqli->error);
}

// закрываем TableBody
$output .= '</div>';

// закрываем Table
$output .= '</div>';

print $output;
print_r ('<br/>');

// закрываем подключение
$mysqli->close();

{
    echo "Выполнение запроса прошло успешно<br/>";
}


?>