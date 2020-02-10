

function getMousePos(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    }
}

window.addEventListener("load", () => {

    console.log("cell.php loaded");

    // окошко с информацией о товаре
    const cellInfoWindow = $("#cellInfoWindow")[0];

    if (cellInfoWindow) {
        console.log(cellInfoWindow);

        // добавляем к окну с информацией о товаре
        // обработчик события клика левой кнопкой мыши
        cellInfoWindow.addEventListener("click", function(){
            if (cellInfoWindow) {
                cellInfoWindow.style.visibility = 'hidden';
            }
        });

    }

    const canvas = $("#canvas")[0];
    
    // canvas.style.position = "absolute";
    
    // Resizing
    // Поведение canvas при изменении размеров окна
    // canvas.width = 500;
    // canvas.height = 500;
    canvas.style.left = '10px';
    canvas.style.top = '50px';
    
    let cells = [];

    $("#cellInfo").text("Загрузка склада...");

    // делаем запросс в базу данных 
    // получаем информацию о ячейках
    $.ajax({
        type: "POST",
        url: 'getCell.php',
        dataType: "json",
        success: function(rows){
            $("#cellInfo").text("");

            console.log("getCell pass the data:");
            console.log(rows);

            rows.forEach(row => {

                // Добавляем новую ячейку
                let cell = new ContainerCell(
                    parseInt(row['id']),    // id элемента, получен из базы
                    1,                      // row - ряд в котором расположен элемент
                    parseInt(row['id']),    // col - столбец в котором расположен элемент
                    parseInt(row['wx']),     // ширина элемента по горизонтали canvas
                    parseInt(row['wy']),     // высота элементы по вертикали canvas
                    3,                      // space - зазор между элементами
                    canvas                  // canvas где будет отображен элемент
                );
                cells.push(cell);
                cell.warehouse = row['warehouse_name'];
                cell.zone = parseInt(row['zone_id']);
                cell.floor = parseInt(row['floor_id']);
                cell.line = parseInt(row['line_id']);
                cell.rack = parseInt(row['rack_id']);
                cell.shelf = parseInt(row['shelf_id']);
                cell.tray = parseInt(row['tray_id']);
                cell.container = parseInt(row['container_id']);
                cell.wz = parseInt(row['wz']);
                cell.wx = parseInt(row['wx']);
                cell.wy = parseInt(row['wy']);
                cell.count = parseInt(row['count']);
            });
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            $("#cellInfo").text("Ошибка: " + + textStatus);

            console.log('getCell.php POST error: ' + textStatus);
        }
    });
  
    // вывод сообщения о текущей позиции курсора мыши
    canvas.addEventListener('mousemove', function(evt) {
        let mousePos = getMousePos(canvas, evt);
        let message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        $("#message").text(message);
    }, false);


    canvas.addEventListener("mousedown", eventMouseDown);

    // Методы
    function eventMouseDown(e) {
        let selected = false;
        cells.forEach(cell => {
            let pos = getMousePos(canvas, e);
            cell.onClick(pos.x, pos.y);
            selected = selected || cell.selected;
            
            if (cell.selected) {

                // показываем окошко с информацией о выбранном элементе
                cellInfoWindow.style.visibility = 'visible';

                let cellInfo = "id=" + cell.id + '\n' +
                    "cell.warehouse=" + cell.warehouse + '\n' +
                    "cell.zone=" + cell.zone + "\n" +
                    "cell.floor=" + cell.floor + "\n" +
                    "cell.line=" + cell.line + "\n" +
                    "cell.rack=" + cell.rack + "\n" +
                    "cell.shelf=" + cell.shelf + "\n" +
                    "cell.tray=" + cell.tray + "\n" +
                    "cell.container=" + cell.container + "\n" +
                    "cell.count=" + cell.count + "\n" +
                    "cell.wz=" + cell.wz + "\n" +
                    "cell.wx=" + cell.wx + "\n" +
                    "cell.wy=" + cell.wy + "\n"
                ;
                $("#cellInfo").text(cellInfo);
            }
            if(!selected) {
                cellInfoWindow.style.visibility = 'hidden'
            }
            // if ((cell.row == 1) && (cell.selected)) {
            //     cell.setSize(30, 30);
            //     console.log("set new row to Cell id=" + cell.id + " selected = " + cell.selected);
            // }
        });            
    }

});
  
