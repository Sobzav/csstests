<?php

// подключаем логгер
@require_once '../plog.php';

    // глобальные настройки для подключения к серверу mysql 
    // $db_host = '127.0.0.1:3306';    // адрес сервера 
    // $db_host = '172.17.17.233:3306';    // адрес сервера 
    // $db_host = '172.20.10.3';
    $db_host = 'localhost:3306';
    $db_name = 'sobzav';            // имя базы данных
    // $db_user = 'admin';             // имя пользователя
    // $db_pass = 'admin';             // пароль
    //$db_name = 'u0959358_sobzav';            // имя базы данных для reg.ru
    //$db_user = 'u0959358_admin';             // имя пользователя для reg.ru
    //$db_pass = '1SobZav3@@@';             // пароль для reg.ru

    $db_user = 'sbus';              // локальная база имя пользователя  ИЗМЕНЕН!!
    $db_pass = 'eAwNRYiofwMFD4lg';  // локальная база пароль  ИЗМЕНЕН!!

    plog("connecting to the mySql server on $db_host");
    
    // глобальный линк к серверу mysql
    $mySqli = new mysqli($db_host, $db_user, $db_pass, $db_name);

    // проверяем ошибки подключения
    if ($mySqli->connect_errno) {
        printf("Ошибка подключения: $mysqli->connect_errno");
        plog("Ошибка подключения: $mysqli->connect_errno");
        exit();
    }

    // изменение набора символов на utf8
    if (!$mySqli->set_charset("utf8")) {
        plog("Ошибка при загрузке набора символов utf8: $mySqli->error");
        exit();
    } else {
        plog("Текущий набор символов: $mySqli->character_set_name()");
    }

?>
