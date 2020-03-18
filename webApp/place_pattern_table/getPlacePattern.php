<?php

// подключаем логгер
@require_once '../plog.php';

plog_clear();
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
            place_pattern.turnedx,
            place_pattern.turnedy,
            place_pattern.created,
            place_pattern.updated,
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

// plog($data);
$header_keys = [
    'id',
    'name',
    'code',
    'iwx',
    'iwy',
    'iwz',
    'payload',
    'nature_id',
    'wx',
    'wy',
    'wz',
    'archetype_id',
    'bycoordinates',
    'color',
    'depth',
    'turnedx',
    'turnedy',
    'created',
    'updated',
    'deleted',
    'sub1_id',
    'inrow1',
    'x1',
    'y1',
    'sub2_id',
    'inrow2',
    'x2',
    'y2',
    'sub3_id',
    'inrow3',
    'x3',
    'y3',
    'sub4_id',
    'inrow4',
    'x4',
    'y4',
    'sub5_id',
    'inrow5',
    'x5',
    'y5',
    'sub6_id',
    'inrow6',
    'x6',
    'y6',
    'sub7_id',
    'inrow7',
    'x7',
    'y7',
    'sub8_id',
    'inrow8',
    'x8',
    'y8',
    'sub9_id',
    'inrow9',
    'x9',
    'y9'
];
$header_names = [
    'id',
    'name',
    'code',
    'iwx',
    'iwy',
    'iwz',
    'payload',
    'nature_id',
    'wx',
    'wy',
    'wz',
    'archetype_id',
    'bycoordinates',
    'color',
    'depth',
    'turnedx',
    'turnedy',
    'created',
    'updated',
    'deleted',
    'sub1_id',
    'inrow1',
    'x1',
    'y1',
    'sub2_id',
    'inrow2',
    'x2',
    'y2',
    'sub3_id',
    'inrow3',
    'x3',
    'y3',
    'sub4_id',
    'inrow4',
    'x4',
    'y4',
    'sub5_id',
    'inrow5',
    'x5',
    'y5',
    'sub6_id',
    'inrow6',
    'x6',
    'y6',
    'sub7_id',
    'inrow7',
    'x7',
    'y7',
    'sub8_id',
    'inrow8',
    'x8',
    'y8',
    'sub9_id',
    'inrow9',
    'x9',
    'y9'
];
$header = [];


// проверяем были ли ошибки и передаем данные вызвавшей форме
if ($errCount == 0) {

    printTable($data);
    // $jsonText = array(
    //     'errCount' => $errCount,
    //     'errDump' => $errDump,
    //     'data' => $data
    // );

    // // передаем данные
    // echo json_encode($jsonText);
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



// -------------------------------------------------------
// Функция | вывод таблицы с элементами склада
//
function printTable($rows) {

    global $header;
    global $header_keys;
    global $header_names;
    global $address;

    foreach($header_keys as $key => $value) {
        $header[$value] = $header_names[$key];
    }

    echo '<table>';
    echo '<caption> Прототипы </caption>';

    // выводим шапку таблицы
    echo '<thead>';
    echo '<tr>';

    // перебираем и выводим поля элемента
    foreach($header_keys as $key => $value) {
        if ($header[$value]) {
            echo '<th>' .$header[$value] .'</th>';
        }
    }
    echo '</tr>';
    echo '</thead>';


    echo '<tbody>';

    writeItemToTable($rows, $level, 1);

    $depth = 0; // глудина внутреннего элемена
    echo '</tbody>';
    echo '</table>';
}


function writeItemToTable($rows, $level, $depth) {

    plog($rows);
    
    global $header;
    global $header_keys;
    global $address;
    
    // перебираем записи - элементы склада
    foreach($rows as $rowIndex => $row) {
        plog($row);
        
        // даем адрес элементу
        // $row['addr'] = addr($level, $rowIndex);
        // $address[$level] = '<a>' .addr($level, $rowIndex, true) .'</a>';
        // $row['fullAddr'] = implode('', array_slice($address, 0, $depth));

        echo '<tr>';
        
        // перебираем и выводим поля поля и значения элемента
        foreach($header_keys as $key => $value) {
            plog('key: ' .$key .'; value: ' .$value);

            if ($header[$value]) {
                plog('$row[$value]: ' .$row[$value]);
                echo '<td>' .($row[$value] ? $row[$value] : '--') .'</td>';
            }
        }
        
        echo '</tr>';
    }
}

?>