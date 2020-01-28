<?php

    // глобальные настройки для подключения к серверу mysql 
    // $db_host = '127.0.0.1:3306';    // адрес сервера 
    $db_host = '10.30.50.10/:3306';    // адрес сервера 
    // $db_host = '172.20.10.3';
    // $db_host = 'localhost:3306';

    $db_name = 'sobzav';            // имя базы данных
    $db_user = 'admin';             // имя пользователя
    $db_pass = 'admin';             // пароль

    // $db_host = 'sobzav.ru';    // адрес сервера
    // $db_name = 'sobzav';            // имя базы данных
    // $db_user = 'root';             // имя пользователя
    // $db_pass = '';             // пароль

    // глобальный линк к серверу mysql
    $mySqli = new mysqli($db_host, $db_user, $db_pass, $db_name);

    // проверяем ошибки подключения
    if ($mySqli->connect_errno) {
        printf("Connect failed: %s\n", $mysqli->connect_errno);
        exit();
    }

?>
