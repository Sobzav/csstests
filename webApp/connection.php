<?php

    // глобальные настройки для подключения к серверу mysql 
    // $db_host = '127.0.0.1:3306';    // адрес сервера 
    // $db_host = '172.17.17.233:3306';    // адрес сервера 
    // $db_host = '172.20.10.3';
    $db_host = 'localhost:3306';
    $db_name = 'sobzav';            // имя базы данных
    $db_user = 'sbus';             // имя пользователя  ИЗМЕНЕН!!
    $db_pass = 'eAwNRYiofwMFD4lg';             // пароль  ИЗМЕНЕН!!

    error_log("connecting to the mySql server on $db_host", 0);
    
    // глобальный линк к серверу mysql
    $mySqli = new mysqli($db_host, $db_user, $db_pass, $db_name);

    // проверяем ошибки подключения
    if ($mySqli->connect_errno) {
        printf("Connect failed: %s\n", $mysqli->connect_errno);
        exit();
    }

?>
