<?php


// -------------------------------------------------------
// Функция | Возвращает адрес места хранения
//           $level - уровень (склад / секция / уровень и т.д.) для которого нужно вычислить адрес
//           $index - номер элемента по порядку, для которого вычисляется адрес 
//
function addr($level, $index, $withSeparator = false) {

    switch ($level) {
        // предприятие  [1, 2, 3, 4, 5, 6, 7, 8, 9]
        case 1:
            $address = (($index >= 0) && ($index < 10)) ? $index + 1 : false;
            $separator = '';
        break;
        
        // склад        [1, 2, 3, 4, 5, 6, 7, 8, 9]
        case 2:
            $address = (($index >= 0) && ($index < 10)) ? $index + 1 : false;
            $separator = '';
        break;
        
        // секция       [1, 2, 3, 4, 5, 6, 7, 8, 9]
        case 3:
            $address = (($index >= 0) && ($index < 10)) ? $index + 1 : false;
            $separator = '';
        break;
        
        // уровень      [1, 2, 3, 4, 5, 6, 7, 8, 9]
        case 4:
            $address = (($index >= 0) && ($index < 10)) ? $index + 1 : false;
            $separator = '';
        break;
        
        // линия        [1, 2, 3, 4, 5, 6, 7, 8, 9]
        case 5:
            $address = (($index >= 0) && ($index < 10)) ? $index + 1 : false;
            $separator = '.';
        break;
        
        // стеллаж      ['A', 'B', ...,'Z'] исключая 'I', 'O'
        case 6:
            $address = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'][$index];
            $separator = '';
        break;
        
        // полка        [1, 2, 3, 4, 5, 6, 7, 8, 9]
        case 7:
            $address = (($index >= 0) && ($index < 10)) ? $index + 1: false;
            $separator = '.';
        break;
        
        // лоток        [1, 2, ..., 99] 
        case 8:
            $address = ($index >= 0 AND $index < 100) ? $index + 1 : false;
            $separator = '';
        break;
        
        // контейнер    ['A', 'B', ...,'Z'] исключая 'I', 'O'
        case 9:
            $address = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'][$index];
            $separator = '.';
        break;
        
        // ячейка       [1, 2, ..., 99]
        case 10:
            $address = ($index >= 0 AND $index < 100) ? $index + 1 : false;
            $separator = '';
        break;
    }
    if ($withSeparator) {
        $address = $address ? "$separator$address" : $address;
    }
    return $address;
}
    
    
// подключаем логгер
@require_once '../plog.php';

plog_clear();
plog("");
plog("|----------------------------------------------------------------|");
plog("|                     setAddres.php                              |");


// загружаем настройки и
// подключаемся к серверу mysql
@include '../connection.php';


// делаем обновление связей внутренних элементов
// require_once 'updatePlaceRelations.php';

// получаем название таблицы
// $tableName = $_POST["tableName"];    

$level = 4;         // начинаем с уровня склада
$data_id = 1;      // идентификатор корневого элемента данного уровня в таблице place
$data_depth = 6;    // глубина перебора внутренних элементов
$address = [];      // массив накапливает в себе адреса всех предудущих уровней



// -------------------------------------------------------
// Данные | Получаем данные от фронтэнда
//
// $data_id = $_POST["data_id"];     // id запрошенного элемента
// $data_depth = $_POST["data_depth"];               // глубина чтения внутренних элементов



// -------------------------------------------------------
// Функция | Загружает внутренние элементы
//
function loadItems($mySqli, $id, $sub_id = null, $data_depth) {

    global $errCount;
    global $errDump;

    if ($data_depth <= 0) {
        return false;
    }

    plog("");
    plog("|----------------------------------------------------------------|");
    plog("|                     getPlace.php > loadItems                   |");

    // Формируем запрос SELECT для получения внутренних элементов текущего
        $query = " 
            SELECT
                place.id,
                place.package_id as refId,
                place.addr,
                if(place.package_id is null, '', package.code) as code,
                if(place.package_id is null, place.name, package.name) as name,
                if(place.package_id is null, place.payload, package.payload) as payload,
                place.x,
                place.y,
                if(place.package_id is null, place.wx, package.wx) as wx,
                if(place.package_id is null, place.wy, package.wy) as wy,
                if(place.package_id is null, place.wz, package.wz) as wz,
                if(place.package_id is null, place.iwx, package.iwx) as iwx,
                if(place.package_id is null, place.iwy, package.iwy) as iwy,
                if(place.package_id is null, place.iwz, package.iwz) as iwz,
                if(place.package_id is null, place.color, package.color) as color,
                place.created,
                place.updated,
                place.deleted,
                place.place_type_id,
                place.place_status_id,
                place.place_purpose_id,
                place_picture.picture
            FROM place
            LEFT JOIN place_relation ON (place_relation.sub_place_id = place.id)
            LEFT JOIN package ON (place.package_id = package.id)
			LEFT JOIN place_picture ON (place.picture_id = place_picture.id)
            WHERE 
        ";
        $query .= ($sub_id > 0) ? " place_relation.place_id = $sub_id;" : " place.id = $id;";
            
        plog($query);

        // если внутренние элементы есть
        if ($subRows = $mySqli->query($query)) {

            // plog("Sub rows:");
            // plog($subRows);

            $subItem = array();

            // перебираем их поштучно
            while($subRow = $subRows->fetch_array(MYSQLI_ASSOC)){

                // загружаем внутренние элементы текущего
                if($item = loadItems($mySqli, $id, $subRow['id'], ($data_depth - 1))) {
                    
                    // добавляем внутренние элементы в текущий элемент если они есть
                    $subRow["item"] = $item;
                }
                
                // и каждый кладем в массив
                $subItem[] = $subRow;
            }
            // plog("Sub items:");
            // plog($subItem);
            
            // возвращаем массив внутренних элементов
            return $subItem;
        } else {
            $errCount++;
            $errDump .= preg_replace("/[\r\n\']/m", "", $mySqli->error) . " | ";
            plog("Server reply error: $errDump");

            return false;
        }
}



// -------------------------------------------------------
// Main | Загружаем запрошенный элемент
//

// сохраняем запрос SELECT в строку
$query = " 
    SELECT
        place.id,
        place.package_id as refId,
        place.addr,
        if(place.package_id is null, '', package.code) as code,
        if(place.package_id is null, place.name, package.name) as name,
        if(place.package_id is null, place.payload, package.payload) as payload,
        place.x,
        place.y,
        if(place.package_id is null, place.wx, package.wx) as wx,
        if(place.package_id is null, place.wy, package.wy) as wy,
        if(place.package_id is null, place.wz, package.wz) as wz,
        if(place.package_id is null, place.iwx, package.iwx) as iwx,
        if(place.package_id is null, place.iwy, package.iwy) as iwy,
        if(place.package_id is null, place.iwz, package.iwz) as iwz,
        if(place.package_id is null, place.color, package.color) as color,
        place.created,
        place.updated,
        place.deleted,
        place.place_type_id,
        place.place_status_id,
        place.place_purpose_id,
        place_picture.picture
    FROM place
    LEFT JOIN package
    ON (package.id = place.package_id)
    LEFT JOIN place_picture
    ON (place.picture_id = place_picture.id)
    WHERE place.id = $data_id;
";

// plog($query);

// делаем запрос SELECT в БД
// результат сохраняем в $result
// если результат запросы не пуст
// то заполняем таблицу
// if ($result = $mySqli->query($query)) {

//     // читаем построчно результаты запроса
//     // с параметром MYSQLI_NUM (значения вернутся в нумерованном массиве)
//     // сохраняем строку в массив $row

//     $json = array();
//     $rows = array();
//     while($row = $result->fetch_array(MYSQLI_ASSOC)){

//         plog("Item:");
//         // plog($row);

//         // глубина чтения внутренних элементов
//         // если не заданна, то берем из сохраненного значения 
//         $depth = (!$row["depth"]) ? $row["depth"] : $data_depth;
//         plog("depth: $depth");

//         // загружаем внутренние элементы
//         if($item = loadItems($mySqli, $row['id'], ($data_depth - 1))) {

//             // добавляем внутренние элементы в текущий элемент если они есть
//             $row["item"] = $item;
//         }

//         // добавляем текщую запись к результирующему массиву
//         $json[] = $row;
//         $rows[] = $row;
//     }

//     // отправляем массив строк из БД в формате json в JS
//     // echo json_encode($json);
        
//     // освобождаем ресурсы
//     $result->free();

// // а если запрос неудачный 
// } else {

//     $errCount++;
//     $errDump .= preg_replace("/[\r\n\']/m", "", $mySqli->error) . " | ";
//     plog("Server reply error: $errDump");

//     // сообщаем информацию о технической проблеме
//     $jsonText = array(
//         'errCount' => $errCount,
//         'errDump' => $errDump
//     );
        
//     echo json_encode($jsonText);
// }

$depth = (!$row["depth"]) ? $row["depth"] : $data_depth;
plog("depth: $depth");

// загружаем внутренние элементы
if($rows = loadItems($mySqli, $data_id, null, ($data_depth - 1))) {

    // добавляем внутренние элементы в текущий элемент если они есть
    // $row["item"] = $item;
}

// добавляем текщую запись к результирующему массиву
// $rows[] = $row;

// закрываем подключение
$mySqli->close();

plog('Загруженный массив');
plog($rows);


// -------------------------------------------------------
// Функция | вывод таблицы с элементами склада
//
$header_keys = ['id', 'refId', 'addr', 'fullAddr', 'code', 'name', 'payload', 'x', 'y', 'wx', 'wy', 'wz', 'iwx', 'iwy', 'iwz', 'color', 'created', 'updated', 'deleted', 'place_type_id', 'place_status_id', 'place_purpose_id', 'picture', 'item'];
$header_names = ['Id', 'Тип', 'Адрес', 'Полный адрес', 'Обозначение', 'Нименование', 'Маскс. вес', '', '', 'wx', 'wy', 'wz', '', '', '', '', 'Создан', 'Изменен', 'Удален', '', 'Статус', 'Назначение', '', ''];
$header = [];
foreach($header_keys as $key => $value) {
    $header[$value] = $header_names[$key];
}

echo '<table>';
echo '<caption> Адреса мест хранения </caption>';

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
function writeItemToTable($rows, $level, $depth) {

    global $header;
    global $header_keys;
    global $address;

    // перебираем записи - элементы склада
    foreach($rows as $rowIndex => $row) {
        
        // даем адрес элементу
        $row['addr'] = addr($level, $rowIndex);
        $address[$level] = '<a>' .addr($level, $rowIndex, true) .'</a>';
        $row['fullAddr'] = implode('', array_slice($address, 0, $depth));

        echo '<tr>';
        
        // перебираем и выводим поля поля и значения элемента
        foreach($header_keys as $key => $value) {
            if ($header[$value]) {
                echo '<td>' .($row[$value] ? $row[$value] : '--') .'</td>';
            }
        }
        
        echo '</tr>';

        // выводим внутренние элементы данного
        writeItemToTable($row['item'], $level + 1, $depth + 1);
    }
}
echo '</tbody>';
echo '</table>';



exit('технический выход на этапе разработки и отладки');


// -------------------------------------------------------
// Функция | Делает один запрос INSERT/UPDATE в таблицу place
//
function updatePlace($mySqli, &$item) {

    // если package_refid не null, то
    // данный элемент соответствует элементу из package
    if (isset($place_refid) && ($place_refid > 0)) {
        // в place сохраняем только x, y, type, statuse, purpouse, item
        
    // если package_refid = null, то
    // данный элемент не имеет прототипа в package
    } else {
        // сохраняем все его данные в place

        $query = " 
        INSERT INTO
            place (
                place.id,
                place.package_id,
                place.addr,
                place.name,
                place.payload,
                place.x,
                place.y,
                place.wx,
                place.wy,
                place.wz,
                place.iwx,
                place.iwy,
                place.iwz,
                place.color,
                place.place_type_id,
                place.place_status_id,
                place.place_purpose_id
            )
            VALUES (
                ".$item["id"].",
                ".($item["refId"] > 0 ? $item["refId"] : 'NULL').",
                '".$item["addr"]."',
                '".$item["name"]."',
                ".$item["payload"].",
                ".$item["x"].",
                ".$item["y"].",
                ".$item["wx"].",
                ".$item["wy"].",
                ".$item["wz"].",
                ".$item["iwx"].",
                ".$item["iwy"].",
                ".$item["iwz"].",
                '".$item["color"]."',
                ".$item["type"].",
                ".$item["status"].",
                ".$item["purpose"]."
            )
            ON DUPLICATE KEY UPDATE
                place.id               =  ".$item["id"].",
                place.package_id       =  ".($item["refId"] > 0 ? $item["refId"] : 'NULL').",
                place.addr             = '".$item["addr"]."',
                place.name             = '".$item["name"]."',
                place.payload          =  ".$item["payload"].",
                place.x                =  ".$item["x"].",
                place.y                =  ".$item["y"].",
                place.wx               =  ".$item["wx"].",
                place.wy               =  ".$item["wy"].",
                place.wz               =  ".$item["wz"].",
                place.iwx              =  ".$item["iwx"].",
                place.iwy              =  ".$item["iwy"].",
                place.iwz              =  ".$item["iwz"].",
                place.color            = '".$item["color"]."',
                place.place_type_id    =  ".$item["type"].",
                place.place_status_id  =  ".$item["status"].",
                place.place_purpose_id =  ".$item["purpose"]."
            ;";
    }

    plog("INSERT:");
    plog($query);
    
    // делаем запрос в БД
    // и запрос выполнен если успешно
    if ($mySqli->query($query)) {
        
        // id текущего элемента, если был INSERT
        $item['id'] = $mySqli->insert_id > 0 ? $mySqli->insert_id : $item['id'];
    
        plog("Record inserted/updated successfully, id: " .$item['id']);
    
        // если есть внутренние элементы, сохраняем их сначала в place
        if (is_array($item['item'])) {

            for($index = 0; $index < count($item['item']); $index++) {

                plog("sub item found, id: ". $item['item'][$index]['id']);
                // рекурисивный вызов для сохранения внутренних элементов
                updatePlace($mySqli, $item['item'][$index]);
            }
            // в place_relation сохраняем связь внутренних элементов с данным элементом, их контейнером
            updatePlaceRelations($mySqli, $item['item'], $item['id']);
        }
    } else {
        // если были ошибки
        $errCount++;
        $errDump .= preg_replace("/[\r\n\']/m", "", $mySqli->error) . " | ";
        plog("Server reply error: $errDump");
    }   

    return $place_id;
}



// -------------------------------------------------------
// Main | Перебор всех элементов и сохранение их в таблицу place
//
if (array_key_exists('item', $_POST)) {

    $item = $_POST['item'];
    
    plog('Count of item: ' .count($item));
    plog('Count of item[item]: ' .count($item['item']));
    plog("item:");
    plog($item);

    // Сохраняем элемент со всем содержимым в place,
    // связи внутренних элементов в place_relation 
    $place_id = updatePlace($mySqli, $item);
} else {

    plog("item is NULL");
    plog($item);
}



// проверяем были ли ошибки и передаем данные вызвавшей форме
if ($errCount == 0) {

    // возвращаем id сохраненного элемента
    $jsonText = array('data_id' => $place_id);

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
        
    echo json_encode($jsonText);
}    

// закрываем подключение
$mySqli->close();

plog("|                     setAddres.php                              |");
plog("|----------------------------------------------------------------|");

?>