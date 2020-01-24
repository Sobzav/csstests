<?php

$db_host = 'sobzav.ru';    // адрес сервера
$db_name = 'sobzav';            // имя базы данных
$db_user = 'root';             // имя пользователя
$db_pass = '';             // пароль

// $db_host = '172.17.17.203:3306';    // адрес сервера
// $db_name = 'sobzav';            // имя базы данных
// $db_user = 'admin';             // имя пользователя
// $db_pass = 'admin';             // пароль

// подключаемся к серверу
// экземпляр класса mysqli
$mysqli = new mysqli($db_host, $db_user, $db_pass, $db_name);

// проверяем ошибки подключения
if ($mysqli->connect_errno) {
    printf("Connect failed: %s\n", $mysqli->connect_errno);
    exit();
}
?>
