<?php

// подключаем логгер
@require_once '../plog.php';

plog("");
plog("|----------------------------------------------------------------|");
plog("|                     addPackage.php                             |");

// загружаем настройки и
// подключаемся к серверу mysql
@include '../connection.php';

// получаем название таблицы
// $tableName = $_POST["tableName"];

// получаем все характеристики элемента от фронтенда
$package_code = $_POST["package_code"];
$package_name = $_POST["package_name"];
$package_material_id = NULL;
$package_photo_id = NULL;
$package_payload = $_POST["package_payload"];
$package_wx = $_POST["package_wx"];
$package_wy = $_POST["package_wy"];
$package_wz = $_POST["package_wz"];
$package_color = $_POST["package_color"];

// сохраняем запрос UPDATE в строку
$query = " 
INSERT INTO
    package (
        package.code,
        package.name,
        package.payload,
        package.wx,
        package.wy,
        package.wz,
        package.color
    )
    VALUES (
        '$package_code',
        '$package_name',
        $package_payload,
        $package_wx,
        $package_wy,
        $package_wz,
        '$package_color'
    );
";

// print_r ($query);
// print_r ('<br/>');

// обнуляем счетчик и конитейнер ошибок
$errCount = 0;
$errDump = "\n";

// делаем запрос в БД
// и запрос выполнен если успешно
if ($mySqli->query($query)) {
    // echo "Record updated successfully";
    $package_id = $mySqli->insert_id;

    // делаем обновление внутренних элементов
    require_once 'updatePlacePrototype.php';
} else {
    $errCount ++;
    $errDump .= $mySqli->error ."\n";
    //echo "Error updating record: " . $mysqli->error;
}    

// проверяем были ли ошибки и передаем данные вызвавшей форме
if ($errCount == 0) {

    $jsonText = "{\"package_id\": $package_id}";

    echo json_encode($jsonText);
} else {
    echo "Ошибка при добавлении нового элемента: " . $errDump;
}    

// закрываем подключение
$mySqli->close();

plog("|                     addPackage.php                             |");
plog("|----------------------------------------------------------------|");

?>