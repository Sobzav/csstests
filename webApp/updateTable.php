
<?php

// загружаем настройки и
// подключаемся к серверу mysql
@include 'connection.php';

// получаем название таблицы
$tableName = $_POST["tableName"];

// получаем массив поля id
$productId = $_POST["productId"];

// получаем массив поля name
$productName = $_POST["productName"];

// получаем массив поля h
$productH = $_POST["productH"];

// получаем массив поля w
$productW = $_POST["productW"];

// получаем массив поля l
$productL = $_POST["productL"];

// обнуляем счетчик ошибок
$errCount = 0;
$errDump = "\n";

// перебираем все элементы массивов
for ($index = 0; $index < count($productName); $index++) {

    $query = "
        UPDATE $tableName 
        SET 
            product.name = '$productName[$index]', 
            product.h = '$productH[$index]', 
            product.w = '$productW[$index]', 
            product.l = '$productL[$index]'
        WHERE id = $productId[$index];
        ";

    if ($mySqli->query($query)) {
        // echo "Record updated successfully";
    } else {
        $errCount ++;
        $errDump .= $mySqli->error ."\n";
        //echo "Error updating record: " . $mysqli->error;
    }    
}

if ($errCount == 0) {
    // echo "Record updated successfully";
    echo "0";
} else {
    echo "Ошибка при сохранении данных: " . $errDump;
}    

$mySqli->close();

?>