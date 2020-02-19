<?php

function plog( $data=null ){
    // ob_start();                    // start buffer capture
    // var_dump( $object );           // dump the values
    // $contents = ob_get_contents(); // put the buffer into a variable
    // ob_end_clean();                // end capture
    // error_log( $contents );        // log contents of the result of var_dump( $object )
    file_put_contents('/Users/antonlobanov/WebServer/Documents/webApp/package/php_log.log', "\n", FILE_APPEND);
    file_put_contents('/Users/antonlobanov/WebServer/Documents/webApp/package/php_log.log', print_r($data, true), FILE_APPEND);
}

?>
