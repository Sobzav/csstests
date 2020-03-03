<?php

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

?>
