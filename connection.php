<?php

// -------------------------------------------------------
// Логгер | Подключаем и настраиваем логгироавние
// 

// Инициализируем переменные для хранения ошибок
$errCount = 0;
$errDump = " | ";

// Добавлять в отчет все ошибки PHP
error_reporting(E_ALL & ~E_NOTICE);

@require_once '../plog.php';


    // глобальные настройки для подключения к серверу mysql 
    // $db_host = '127.0.0.1:3306';    // адрес сервера 
    // $db_host = '172.17.17.233:3306';    // адрес сервера 
    // $db_host = '172.20.10.3';
    $db_host = 'localhost:3306';
    $db_name = 'sobzav';            // имя базы данных
    //$db_user = 'admin';             // имя пользователя
    //$db_pass = 'admin';             // пароль
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
        $errCount++;
        $errDump .= "Ошибка подключения" .preg_replace("/[\r\n\']/m", "", $mySqli->error) . " | ";
        plog("Server reply error: $errDump");
        // exit();
    }

    // изменение набора символов на utf8
    if (!$mySqli->set_charset("utf8")) {
        $errCount++;
        $errDump .= "Ошибка подключения" .preg_replace("/[\r\n\']/m", "", $mySqli->error) . " | ";
        plog("Server reply error: $errDump");
        // exit();
    } else {
        plog("Текущий набор символов: $mySqli->character_set_name()");
    }

?>
