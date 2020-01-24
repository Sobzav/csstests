<?php

// error_reporting(E_ALL);
// ini_set("display_errors", 1);
// include("file_with_errors.php");

// загружаем настройки и
// подключаемся к серверу mysql
@include 'connection.php';

// сохраняем запрос SELECT в строку
$query = " 
SELECT
	package.id,
    package.code,
    package.name,
    package.material_id,
    package.photo_id,
    package.payload,
    package.h,
    package.wx,
    package.wy,
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
ORDER BY package.id;
";

// print_r ($query);
// print_r ('<br/>');

// делаем запрос SELECT в БД
// результат сохраняем в $result
// если результат запросы не пуст
// то заполняем таблицу
if ($result = $mySqli->query($query)) {

    // читаем построчно результаты запроса
    // с параметром MYSQLI_NUM (значения вернутся в нумерованном массиве)
    // сохраняем строку в массив $row

    $json = array();
    while($row = $result->fetch_array(MYSQLI_ASSOC)){
        $json[] = $row;
    }

    // отправляем массив строк из БД в формате json в JS
    echo json_encode($json);
        
    // освобождаем ресурсы
    $result->free();

// а если запрос неудачный 
} else {

    // сообщаем информацию о технической проблеме
    echo json_encode(array(
        'status' => 'error',
        'message'=> $mySqli->error
    ));
}

// закрываем подключение
$mySqli->close();

?>