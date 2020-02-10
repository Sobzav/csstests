<?php

error_log("\\n", 0);
error_log("updatePlacePrototype.php {", 0);

// загружаем настройки и
// подключаемся к серверу mysql
// @include '../connection.php';

// получаем package_id - родительский контейнер, его содержимое будем обновлять
// $package_id = $_POST['package_id'];

// получаем массив элементов внутри package_id в формате:
//      [
//          0: {sub_package_id: value, row: value, col: value},
//          1: {sub_package_id: value, row: value, col: value}.
//          ...
//          N: {sub_package_id: value, row: value, col: value}.
//      ]
$subItems = $_POST['subItem'];
error_log( print_r("subItem: $subItem", 1), 0);

if ($subItems) {
    // читаем из БД все записи для заданного package_id из таблицы place_prototype 
    //
    // Формируем запрос SELECT для получения внутренних элементов
    $query = " 
        SELECT
            place_prototype.sub_package_id,
            place_prototype.row,
            place_prototype.col
        FROM
            place_prototype
        WHERE package_id = $package_id
        ORDER BY
            place_prototype.row,
            place_prototype.col;
    ";

    // делаем запрос SELECT в БД
    // результат сохраняем в $result
    // если результат запросы не пуст
    // то заполняем таблицу
    if ($result = $mySqli->query($query)) {
        error_log( print_r("record count: $result->num_rows", 1), 0);

        $recSet = [];
        $index = 0;
        $result->data_seek(0);
        while ($item = $result->fetch_array(MYSQLI_ASSOC)) {
            $recSet[$index]['sub_package_id'] = $item['sub_package_id'];
            $recSet[$index]['row'] = $item['row'];
            $recSet[$index]['col'] = $item['col'];
            $index++;
        }
        $result->close();
        unset($result);
        unset($item);

        // перебираем все элементы в массиве сохраняемых элементов subItem
        for ($index = 0; $index < count($subItems); $index++) {
            $subItem = $subItems[$index];

            // ищем очередной элемент массива subItem в записях БД
            $itemExists = findItem($recSet, $subItem);

            // если запись с заданными row, col существует
            // (если найдена то сразу будет удалена из записей)
            if ( $itemExists ) {
                error_log( print_r("record $item->sub_package_id exists - updating", 1), 0);
                
                // обновляем ее sub_package_id
                
                    // сохраняем запрос UPDATE в строку
                    $item_sub_package_id = $subItem['sub_package_id'];
                    $item_row = $subItem['row'];
                    $item_col = $subItem['col'];
                    $query = " 
                        UPDATE
                            place_prototype
                        SET
                            place_prototype.sub_package_id = $item_sub_package_id
                        WHERE
                            place_prototype.package_id = $package_id AND
                            place_prototype.row = $item_row AND
                            place_prototype.col = $item_col
                        ;
                    ";
                    error_log( print_r("query: $query", 1), 0);

                    // делаем запрос в БД
                    if ($mySqli->query($query)) {
                        // echo "Record updated successfully";
                        // $package_id = $mySqli->insert_id;
                    } else {
                        $errCount ++;
                        $errDump .= $mySqli->error ."\n";
                        error_log( print_r("Server reply error: $errDump", 1), 0);
                        //echo "Error updating record: " . $mysqli->error;
                    }    

            // если такой записи нет
            } else {
                error_log( print_r("record $item->sub_package_id is not exists - inserting new", 1), 0);

                // добавляем в базу новую запись

                    // сохраняем запрос INSERT в строку
                    $item_sub_package_id = $subItem['sub_package_id'];
                    $item_row = $subItem['row'];
                    $item_col = $subItem['col'];

                    $query = " 
                        INSERT INTO
                            place_prototype (
                                place_prototype.package_id,
                                place_prototype.sub_package_id,
                                place_prototype.row,
                                place_prototype.col
                            )
                        VALUES (
                                $package_id,
                                $item_sub_package_id,
                                $item_row,
                                $item_col
                        );
                    ";
                    // error_log( print_r("query: $query", 1), 0);

                    // делаем запрос в БД
                    if ($mySqli->query($query)) {
                        // echo "Record updated successfully";
                        // $package_id = $mySqli->insert_id;
                    } else {
                        $errCount ++;
                        $errDump .= $mySqli->error ."\n";
                        error_log( print_r("Server reply error: $errDump", 1), 0);
                        //echo "Error updating record: " . $mysqli->error;
                    }    
            }
        }
        unset($subItem);
        unset($subItems);
        
        // то что осталось в массиве записей удалим из БД
        $recCount = count($recSet);
        error_log( print_r("deleting $recCount", 1), 0);
        foreach ($recSet as $rec) {

                // удаляем из базы оставшиеся записи, они лишние

                    $item_sub_package_id = $rec['sub_package_id'];
                    error_log( print_r("item_sub_package_id: $item_sub_package_id", 1), 0);
                    if ($item_sub_package_id > 0) {

                        // сохраняем запрос DELETE в строку
                        $item_row = $rec['row'];
                        $item_col = $rec['col'];
                        
                        $query = " 
                            DELETE FROM
                                place_prototype 
                            WHERE
                                place_prototype.package_id = $package_id AND
                                place_prototype.sub_package_id = $item_sub_package_id AND
                                place_prototype.row = $item_row AND
                                place_prototype.col = $item_col
                            ;
                        ";
                        error_log( print_r("query: $query", 1), 0);

                        // делаем запрос в БД
                        if ($mySqli->query($query)) {
                            // echo "Record updated successfully";
                            // $package_id = $mySqli->insert_id;
                        } else {
                            $errCount ++;
                            $errDump .= $mySqli->error ."\n";
                            error_log( print_r("Server reply error: $errDump", 1), 0);
                            //echo "Error updating record: " . $mysqli->error;
                        }    
                    }
        }
        unset($recSet);

    // если запрос вернул ошибку
    } else {

        $errCount ++;
        $errDump .= $mySqli->error ."\n";    
        error_log( print_r("Server reply error: $errDump", 1), 0);
    }
}    


function findItem(&$itemSet, $item) {
    error_log( print_r("findItem {", 1), 0);

    // перебираем все записи из place_prototype где package_id
    // с параметром MYSQLI_ASSOC (значения вернутся в ассоциативном массиве)
    for ($index = 0; $index < count($itemSet); $index++) {

        $rec = $itemSet[$index];

        $itemRow = $item['row'];
        $itemCol = $item['col'];
        $recRow = $rec['row'];
        $recCol = $rec['col'];
        // error_log( print_r("item['row']: $itemRow; rec['row']: $recRow", 1), 0);
        // error_log( print_r("item['col']: $itemCol; rec['col']: $recCol", 1), 0);

        // если совпадают row и col 
        if (($itemRow == $recRow) && ($itemCol == $recCol)) {

            // то запись найдена удаляем ее и возвращаем true
            $itemSet[$index]['sub_package_id'] = 0;
            // $rec_sub_package_id = $rec['sub_package_id'];
            // error_log( print_r("rec_sub_package_id: $rec_sub_package_id", 1), 0);
            // unset($itemSet[$index]);

            // error_log( print_r("record set after serch and deleting has count: $itemSet->num_rows", 1), 0);
            return true;
        }
    }
    
    // если ничего не найдено возвращаем false
    return false;
}
?>