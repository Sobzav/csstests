<?php

// -------------------------------------------------------
// Функция | Дописывает в конец файла лога данные из $data
//
function plog( $data = null ){
    // ob_start();                    // start buffer capture
    // var_dump( $object );           // dump the values
    // $contents = ob_get_contents(); // put the buffer into a variable
    // ob_end_clean();                // end capture
    // error_log( $contents );        // log contents of the result of var_dump( $object )
    $logFile = 'php.log';

    if (!is_writable($logFile)) {

        file_put_contents(__DIR__. "/". $logFile, "\n", FILE_APPEND);
        file_put_contents(__DIR__. "/". $logFile, print_r($data, true), FILE_APPEND);
    }

}



// -------------------------------------------------------
// Функция | очищает файл лога
//
function plog_clear(){
    // ob_start();                    // start buffer capture
    // var_dump( $object );           // dump the values
    // $contents = ob_get_contents(); // put the buffer into a variable
    // ob_end_clean();                // end capture
    // error_log( $contents );        // log contents of the result of var_dump( $object )
    $logFile = 'php.log';

    if (!is_writable($logFile)) {

        file_put_contents(__DIR__. "/". $logFile, "");

        // установка временной зоны по умолчанию. Доступно с PHP 5.1
        // date_default_timezone_set('UTC');

        // выведет примерно следующее: Monday 8th of August 2005 03:12:46 PM
        plog( ' Файл очищен' );
        plog( date('l jS \of F Y h:i:s A') );
        plog( '' );
    }

}

?>
