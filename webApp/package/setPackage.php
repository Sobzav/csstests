<?php

// загружаем настройки и
// подключаемся к серверу mysql
@require_once '../connection.php';

// получаем название таблицы
// $tableName = $_POST["tableName"];

// получаем id элемента
$package_id = $_POST["package_id"];

// получаем все характеристики элемента
$package_code = $_POST["package_code"];
$package_name = $_POST["package_name"];
$package_payload = $_POST["package_payload"];
$package_wx = $_POST["package_wx"];
$package_wy = $_POST["package_wy"];
$package_wz = $_POST["package_wz"];
$package_color = $_POST["package_color"];

// сохраняем запрос UPDATE в строку
$query = " 
    UPDATE
        package
    SET
        package.code = '$package_code',
        package.name = '$package_name',
        package.payload = $package_payload,
        package.wx = $package_wx,
        package.wy = $package_wy,
        package.wz = $package_wz,
        package.color = '$package_color'
    WHERE
        package.id = $package_id;
";

// print_r ($query);
// print_r ('<br/>');

// обнуляем счетчик и конитейнер ошибок
$errCount = 0;
$errDump = "\n";

// делаем запрос в БД
// если успешно
if ($mySqli->query($query)) {
    // echo "Record updated successfully";

    // дезаем обновление внутренних элементов
    require_once 'updatePlacePrototype.php';

} else {
    $errCount ++;
    $errDump .= $mySqli->error ."\n";
    //echo "Error updating record: " . $mysqli->error;
}    

// количество и массив ошибок передаем вызвавшей форме

$jsonText = "{\"errCount\": $errCount}";

echo json_encode($jsonText);

// закрываем подключение
$mySqli->close();

?>