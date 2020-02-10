<?php

// загружаем настройки и
// подключаемся к серверу mysql
@include '../connection.php';

// сохраняем запрос SELECT в строку
$query = " 
SELECT 
    place.id, 
    place.warehouse_id,
    place.zone_id,
    place.floor_id,
    place.line_id,
    place.rack_id,
    place.shelf_id,
    place.tray_id,
    place.container_id,
    place.cell_id,
    place.place_type_id,
    place.place_status_id,
    place.place_purpose_id,
    package.wz,
    package.wx,
    package.wy,
    location.count,
    warehouse.name AS warehouse_name,
    zone.name AS zone_name,
    floor.name AS floor_name,
    line.name AS line_name,
    rack.name AS rack_name,
    shelf.name AS shelf_name,
    tray.name AS tray_name,
    container.name AS container_name,
    place_type.name AS place_type_name,
    place_status.name AS place_status_name,
    place_purpose.name AS place_purpose_name
FROM 
    place
LEFT JOIN (
    warehouse,
    zone,
    floor,
    line,
    rack,
    shelf,
    tray,
    container,
    cell,
    place_type,
    place_status,
    place_purpose
    )
ON (
    place.warehouse_id = warehouse.id AND
    place.zone_id = zone.id AND
    place.floor_id = floor.id AND
    place.line_id = line.id AND
    place.rack_id = rack.id AND
    place.shelf_id = shelf.id AND
    place.tray_id = tray.id AND
    place.container_id = container.id AND
    place.cell_id = cell.id AND
    place.place_type_id = place_type.id AND
    place.place_status_id = place_status.id AND
    place.place_purpose_id = place_purpose.id
    )
LEFT JOIN (
	package
)
ON (
	place.package_id = package.id
)
LEFT JOIN (
	location
)
ON (
    place.id = location.place_id
)
ORDER BY place.id;
";

// print_r ($query);
// print_r ('<br/>');

// делаем запрос SELECT из базы данных
// и сохраняем его в $result
// если результат запросы не пуст
// то заполняем таблицу
if ($result = $mySqli->query($query)) {

    // читаем построчно результаты запроса
    // с параметром MYSQLI_NUM (значения вернутся в нумерованном массиве)
    // сохраняем строку в массив $row

    $json = array();
    while($row = $result->fetch_array(MYSQLI_ASSOC)){
        $json[] = $row;
    }

    // отправляем массив строк из БД в формате json в JS
    echo json_encode($json);
        
    // освобождаем ресурсы
    $result->free();

// а если запрос неудачный 
} else {

    // сообщаем информацию о технической проблеме
    echo json_encode(array(
        'status' => 'error',
        'message'=> $mySqli->error
    ));
}

// закрываем подключение
$mySqli->close();

?>