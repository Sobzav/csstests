<?php

// подключаем логгер
@require_once '../plog.php';

plog("");
plog("|----------------------------------------------------------------|");
plog("|                     getPlacePattern.php                        |");

// загружаем настройки и
// подключаемся к серверу mysql
@include '../connection.php';

// получаем название таблицы
// $tableName = $_POST["tableName"];    

$data_id = 0;

// -------------------------------------------------------
// Функция | Делает один запрос INSERT/UPDATE в таблицу place
//
function selectData($mySqli) {
    plog("|----------------------------------------------------------------|");
    plog("|                     getPlacePattern.php -> selectData          |");

    global $errCount;
    global $errDump;

    if (true) {
        
        $query = " 
        SELECT
            place_pattern.id,
            place_pattern.name,
            place_pattern.code,
            place_pattern.iwx,
            place_pattern.iwy,
            place_pattern.iwz,
            place_pattern.payload,
            place_pattern.nature_id,
            place_pattern.wx,
            place_pattern.wy,
            place_pattern.wz,
            place_pattern.archetype_id,
            place_pattern.bycoordinates,
            place_pattern.color,
            place_pattern.depth,
            place_pattern.turned,
            place_pattern.deleted,
            place_pattern.sub1_id,
            place_pattern.inrow1,
            place_pattern.x1,
            place_pattern.y1,
            place_pattern.sub2_id,
            place_pattern.inrow2,
            place_pattern.x2,
            place_pattern.y2,
            place_pattern.sub3_id,
            place_pattern.inrow3,
            place_pattern.x3,
            place_pattern.y3,
            place_pattern.sub4_id,
            place_pattern.inrow4,
            place_pattern.x4,
            place_pattern.y4,
            place_pattern.sub5_id,
            place_pattern.inrow5,
            place_pattern.x5,
            place_pattern.y5,
            place_pattern.sub6_id,
            place_pattern.inrow6,
            place_pattern.x6,
            place_pattern.y6,
            place_pattern.sub7_id,
            place_pattern.inrow7,
            place_pattern.x7,
            place_pattern.y7,
            place_pattern.sub8_id,
            place_pattern.inrow8,
            place_pattern.x8,
            place_pattern.y8,
            place_pattern.sub9_id,
            place_pattern.inrow9,
            place_pattern.x9,
            place_pattern.y9
        FROM place_pattern
        ORDER BY place_pattern.code
        ;";
    }

    plog("SELECT:");
    plog($query);
    
    // делаем запрос в БД
    // и запрос выполнен если успешно
    if ($rows = $mySqli->query($query)) {
        
        while($row = $rows->fetch_array(MYSQLI_ASSOC)){

            // и каждый кладем в массив
            $data[$row['id']] = $row;
        }

        plog(count($data) ."records successfully selected");
    
    } else {
        // если были ошибки
        $errCount++;
        $errDump .= preg_replace("/[\r\n\']/m", "", $mySqli->error) . " | ";
        plog("Server reply error: $errDump");
    }   

    return $data;
}

$data = selectData($mySqli);

plog($data);


// проверяем были ли ошибки и передаем данные вызвавшей форме
if ($errCount == 0) {

    $jsonText = array(
        'errCount' => $errCount,
        'errDump' => $errDump,
        'data' => $data
    );

    // передаем данные
    echo json_encode($jsonText);
} else {

    // если были ошибки
    $errCount++;
    $errDump .= preg_replace("/[\r\n\']/m", "", $mySqli->error) . " | ";
    plog("Server reply error: $errDump");

    // сообщаем информацию о технической проблеме
    $jsonText = array(
        'errCount' => $errCount,
        'errDump' => $errDump
    );
        
    // передаем данные
    echo json_encode($jsonText);
}    

// закрываем подключение
$mySqli->close();

plog("|                     getPlacePattern.php                        |");
plog("|----------------------------------------------------------------|");

?>