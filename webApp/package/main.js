"use strict";

// Глубина логирования
// 0 - логирование отключено
// logEnt - только входы и выходы в блоки кода
// logInf - только информационные сообщения
// logErr - сообщения об ошибках
// logDat - вывод данных, значений, контейнеров
var logLevel = 1;







// ***********************************************************************  
// **                                                                   **  
// **                             M A I N                               **  
// **                                                                   **  
// ***********************************************************************



// -------------------------------------------------------
// КОНСТАНТЫ |
//


const btn = {
    Ok	            : 0x00000400, 	// An "OK" button defined with the AcceptRole.
    Open	        : 0x00002000, 	// A "Open" button defined with the AcceptRole.
    Save	        : 0x00000800, 	// A "Save" button defined with the AcceptRole.
    Cancel	        : 0x00400000, 	// A "Cancel" button defined with the RejectRole.
    Close	        : 0x00200000, 	// A "Close" button defined with the RejectRole.
    Discard	        : 0x00800000, 	// A "Discard" or "Don't Save" button, depending on the platform, defined with the DestructiveRole.
    Apply	        : 0x02000000, 	// An "Apply" button defined with the ApplyRole.
    Reset	        : 0x04000000, 	// A "Reset" button defined with the ResetRole.
    RestoreDefaults	: 0x08000000, 	// A "Restore Defaults" button defined with the ResetRole.
    Help	        : 0x01000000, 	// A "Help" button defined with the HelpRole.
    SaveAll	        : 0x00001000, 	// A "Save All" button defined with the AcceptRole.
    Yes	            : 0x00004000, 	// A "Yes" button defined with the YesRole.
    YesToAll	    : 0x00008000, 	// A "Yes to All" button defined with the YesRole.
    No	            : 0x00010000, 	// A "No" button defined with the NoRole.
    NoToAll	        : 0x00020000, 	// A "No to All" button defined with the NoRole.
    Abort	        : 0x00040000, 	// An "Abort" button defined with the RejectRole.
    Retry	        : 0x00080000, 	// A "Retry" button defined with the AcceptRole.
    Ignore	        : 0x00100000, 	// An "Ignore" button defined with the AcceptRole.
    NoButton	    : 0x00000000, 	// An invalid button.        
};


var canvas;



// -------------------------------------------------------
// ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ |
//


// контейнер элементов для выпадающих списков
var packs = [];


// -------------------------------------------------------
// ГЛОБАЛЬНЫЕ ФУНКЦИИ |
//

    // -------------------------------------------------------
    // Функция | Возвращает адекватные координаты мыши
    //           внутри клиентской области <canvas>
    //
    function getMousePos(canvas, event) {
        var rect = canvas.getBoundingClientRect();
        return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
        }
    }


    // -------------------------------------------------------
    // Функция | подгоняем размер тега <input> под его содержимое
    //           если параметр min = true то размер всегда будет минимально возможным
    //
    function tuneInputSize(target, min = false) {
        if (min) {
            target.size = target.value.length;
        } else if (target.size < target.value.length) {
            target.size = target.value.length;
        }
    }


// -------------------------------------------------------
// Слот | Страница полностью загружена
//
window.addEventListener("load", () => {

    console.group("index.php loaded");


    // -------------------------------------------------------
    // Функция | Выводит статусное сообщение в элемент lblStatus
    //           и убирает его через время timeout в миллисекундах
    //           если timeout=0 то сообщение будет видимым пока
    //           его не перекроет текст нового сообщения
    //
    function setStatus(statusText, timeout) {
        console.group("main.setStatus { text: %o", statusText);

        // показываем статус
        lblStatus.innerText = statusText;
          
        // если timeout больше 0
        if (timeout > 0) {
            
            // стираем выведенное сообщение через время timeout в миллисекундах
            setTimeout(() => {
                lblStatus.innerText = "";
            }, timeout);
        }

        console.groupEnd("main.setStatus }");
    }


    // -------------------------------------------------------
    // Функция | Делает элементы доступными для редактирования
    //           если enabled = true, иначе блокирует их
    //           элементы выбирает по селектору selector
    //
    function setDomElementsEnabled(selector, enabled) {
        console.group("main.setDomElementsEnabled { selector: %o; enabled: %b", selector, enabled);

        // получаем htmlCollection - коллекцию элементов с классом disabled
        var disabledItems = document.querySelectorAll(selector);

        // и делаем их все недоступными для редактирования
        for (var item of disabledItems) {
            item.disabled = !enabled;
        }
        console.groupEnd("main.setDomElementsEnabled }");    
    }


    // -------------------------------------------------------
    // Функция | Возвращает ссылку на элемент DOM по Id
    //
    function domElementById(id) {
        // console.group("main.domElementById { id: %o", id);
        var item = document.getElementById(id);
        // console.log("elment: %o", element);

        // console.groupEnd("main.domElementById }");    
        return item;
    }


    // -------------------------------------------------------
    // Функция | Создает елемент в DOM по названию тэга
    //
    function domCreateElement(tagName) {
        console.group("main.domCreateElement { tagName: %o", tagName);
        var item = document.createElement(tagName);
        console.log("elment=%o", item);

        console.groupEnd("main.domCreateElement }");    
        return item;
    }



    // -------------------------------------------------------
    // ЭЛЕМЕНТЫ DOM | Объявляем константы связи с элементами страницы и/или формы
    //
    const selectPanel = domElementById("selectPanel");
    const editPanel = domElementById("editPanel");
    const selCode = domElementById("selCode");
    const inpCodeEdit = domElementById("inpCodeEdit");
    const inpName = domElementById("inpName");
    const inpPayload = domElementById("inpPayload");
    const inpSizeWx = domElementById("inpSizeWx");
    const inpSizeWy = domElementById("inpSizeWy");
    const inpSizeWz = domElementById("inpSizeWz");
    const inpColor = domElementById("inpColor");
    const inpVolume = domElementById("inpVolume");
    const inpVolumeUnit = domElementById("inpVolumeUnit");
    const checkBoxHasContent = domElementById("checkBoxHasContent");
    const btnEdit = domElementById("btnEdit");
    const btnBack = domElementById("btnBack");
    const btnCopy = domElementById("btnCopy");
    const btnApply = domElementById("btnApply");
    const lblStatus = domElementById("lblStatus");
    const lblStatusChanged = domElementById("lblStatusChanged");
    const lblStatusInfo = domElementById("lblStatusInfo");
    // получаем и сохраняем указатель на <canvas> где будет вся графика
    canvas = domElementById("canvas");



    // -------------------------------------------------------
    // ИНИЦИАЛИЗАЦИЯ |
    //

    // Настраиваем разрешение <canvas>
    canvas.style.width = "500px";
    canvas.style.height = "500px";
    canvas.width = parseInt(canvas.style.width) * 2;
    canvas.height = parseInt(canvas.style.height) * 2;    

    // Делает все инпуты недоступными для редактирования
    setDomElementsEnabled('.disabled, .mainInput, .subInput');


    // структура хранящая количество блоков в count
    // и блоки в item с количеством горизонтальных рядов
    // и количеством элементов в каждом ряде
    var subBlock = new SubBlockContainer();

    // ссылка на ранее выбранный элемент
    var prevousPack;

    // ссылка на текущий выбранный элемент
    var selectedPack;

    // флагн режима редактирования
    var editMode = false;



    // -------------------------------------------------------
    // Создаем 4 блока для редактирования внутренних элементов
    // запоминаем указатели на элементы формы для внутренних прямоцгольников в массиве
    //
    console.group("main.addSubBlockElements {");

    // массив всех вариантов имен внутренних элементов без индексов
    var subBlockElementIds = ['inpSizeWx', 'inpSizeWy', 'selCode', 'inpNy', 'inpNx', 'inpTotal'];
    var subBlockElementNames = ['package_wx', 'package_wy', 'package_code', 'package_Ny', 'package_Nx', 'package_total'];
    
    // получаем темплейт блока внутренних элементов 
    var subBlockTamplate = domElementById('subBlockTamplate');
    
    // получаем контейнер темплейта
    var subBlockContainer = subBlockTamplate.parentNode;
    
    // удаляем из DOM темплейт
    subBlockContainer.removeChild(subBlockTamplate);
    
    console.log("subBlockTamplate: %o", subBlockTamplate);

    // запускаем цикл для всех блоков
    for(var blockIndex = 0; blockIndex < 5; blockIndex++) {
        
        // копированием из темплейта создаем очередной блок внутренних элементов
        var newSubBlock = subBlockTamplate.cloneNode(true);

        // даем id новому блоку
        newSubBlock.id = 'subBlock' + (blockIndex + 1);
        console.log("newSubBlock: %o", newSubBlock);

        // даем номер (для отображения на форме) новому блоку
        var subLabel = newSubBlock.querySelector('#' + 'subLabel');
        subLabel.id = subLabel.id + blockIndex;
        subLabel.innerText = (blockIndex + 1);
                
        // перебираем все варианты имеен элементов в новом блоке
        subBlockElementIds.forEach(subBlockElementId => {
            console.log("subBlockElementId: %o", subBlockElementId);
            
            // получаем очередной элемент блока
            var subBlockElement = newSubBlock.querySelector('#' + subBlockElementId + '_');
            console.log("subBlockElement: %o", subBlockElement);
            
            // даем id и name элементу блока 
            subBlockElement.id = subBlockElementId + blockIndex;
            // subBlockElement.name = subBlockElementNames + (blockIndex + 1);
        });

        // добавляеем созданный блок в конейнер
        subBlockContainer.appendChild(newSubBlock);

        // показываем блок внутренних элементов
        newSubBlock.classList.remove('hidden');

        // добавляем блок внутренних элементов
        subBlock.add(
            blockIndex, 
            document.querySelector('#selCode' + blockIndex),
            document.querySelector('#inpNx' + blockIndex),
            document.querySelector('#inpNy' + blockIndex),
            document.querySelector('#inpSizeWx' + blockIndex),
            document.querySelector('#inpSizeWy' + blockIndex),
            document.querySelector('#inpTotal' + blockIndex)
        );

        var subBlockItem = subBlock.item[blockIndex];

        // привязываем событие изменения полей блока 
        console.log("{ subBlock.item[blockIndex]: %o", subBlockItem);
        // Привязываем событие получения фокуса списком
        subBlockItem.selCode.addEventListener('focus', eventListFocus);

        // Привязываем событие потери списком фокуса 
        subBlockItem.selCode.addEventListener('blur', eventListBlur);
    }
    console.groupEnd("main.addSubBlockElements }");




    // -------------------------------------------------------
    // Функция | Выбор элемента в списке <select>
    //           по <select>.selectedIndex
    //           или ссылке на pack
    //
    function selectPack(value) {
        console.group("main.selectPack { value: %o", value);

        // если прислали <select>.selectedIndex то выбираем  
        // <option> с этим индексом
        if (typeof value == 'number') {

            // назначаем выбранный элемент
            selCode.selectedIndex = value;
        }

        // если прислали ссылку на pack то выбираем  
        // соответствующий данному элемпенту <option> 
        if (typeof value == 'object') {
            
            // назначаем выбранный элемент
            selCode.selectedIndex = value.listItem.index;
        }

        // меняем выбранный элемент
        setSelectedPack(selCode, packs);

        console.groupEnd("main.selectPack }");
    }
    
    
    // -------------------------------------------------------
    // Функция | Создает элемент <option> для списка <select>
    // 
    function addListOption(list, row, 
        showDetailes = ['code', ' | ', 'name', ' | ', 'wx', 'x', 'wy', 'x', 'wz'],  
        detailes = ['code', ' | ', 'name', ' | ', 'wx', 'x', 'wy', 'x', 'wz']) {
        // console.groupCollapsed("main.addListOption { ");

        var item = document.createElement('option');

        item.value = row.id;
        
        showDetailes.forEach( detail => {
            item.label += row[detail] ? row[detail] : detail;
        });

        detailes.forEach( detail => {
            item.innerText += row[detail] ? row[detail] : detail;
        });

        // добавляем новый элемент в выпадающий список список на форме
        list.appendChild(item);

        // console.log("option: %o",  item);
        // console.groupEnd();
        return item;
    }
    

    // -------------------------------------------------------
    // Функция | Создает новый элемент
    //           Если передать data то из этой структуры
    //           будут взяты все параметры элемента
    //           формат структуры:
    //              {
    //                  id: "0",
    //                  code: "",
    //                  name: "",
    //                  color: "000000",
    //                  wx: "",
    //                  wy: "",
    //                  wz: "",
    //                  payload: "",
    //                  material_id: null,
    //                  material_name: null,
    //                  photo_id: null,
    //                  created: null,
    //                  updated: null,
    //                  deleted: null
    //              }
    //
    function packsCreate(data) {
        console.group("main.packsCreate { data: %o", data);
        
        // Создаем новый элемент
        var pack = new PackageContainerItem(
            data,                   // данные элемента, получен из базы
            settings,               // настройки элементов и внутренних элементов
            canvas                  // canvas где будет отображен элемент
        );

        console.groupEnd();
        return pack;
    }


    // -------------------------------------------------------
    // Функция | Удаляет элемент  pack из массива packs
    //           из всех выпадающих списков:
    //           selCode, selCode1...selCode[N]
    //
    function packsRemove(pack) {
        console.group("main.packsRemove { pack = %o ", pack);

        // удаляем элемент из списков selCode1...selCode[N]
        subInp.forEach(subInpItem => {
            if (subInpItem.nodeName === "SELECT") {

                subInpItem.remove(pack.listItem.index)
            }
        });

        // удаляем элемент из списка selCode
        selCode.remove(pack.listItem.index);

        // Удаляем элемент из массива
        packs.splice(packs.indexOf(pack), 1);

        console.groupEnd("main.packsRemove }");
    }


    // -------------------------------------------------------
    // Функция | Запрос серверу в формате ajax
    //           type = "POST" / "GET"
    //           url = "fileName.php"
    //           dataType = "json"
    //           возвращает данные в формате json в случае успеха
    //           либо false в случае ошибки
    //
    function requestToServer(type, url, dataType, data, successFunction, errorFunction) {
        console.group("main.requestToServer { url = %o ", url);

        console.time();

        // отправляем запрос серверу
        $.ajax({
            type: type,
            url: url,
            dataType: dataType,
            data,

            // получаем ответ в случае успеха
            success: function(jsonResponce, textStatus, jqXHR) {
    
                console.log('data: %o', jsonResponce);
                console.log('textStatus: ' + textStatus);
                console.timeEnd();
                console.log('jqXHR: %o', jqXHR);
    
                // возвращаем ответ сервера
                successFunction(jsonResponce);
            },

            // получаем ответ в случае ошибок
            error: function(XMLHttpRequest, textStatus, jqXHR) {
    
                console.warn('textStatus: ' + textStatus);
                console.timeEnd();
                console.warn('jqXHR: %o', jqXHR);
                
                // возвращаем ошибку
                errorFunction(XMLHttpRequest);
            }
        });

        console.groupEnd("main.requestToServer }");
    }


    // -------------------------------------------------------
    // Функция | Загружает один элемент со всем содержимым
    //
    function packLoad(pack, settings) {
        console.group('main.packLoad {');

        // если выделенный элемент есть
        if (pack) {
            
            canvas.style.width = settings.canvasWx + 'px';
            canvas.style.height = settings.canvasWy + 'px';
            canvas.width = settings.canvasWx * 2;
            canvas.height = settings.canvasWy * 2;
            
            // загружаем элемент по id и все его внутренние элементы
            pack.load(this, pack.id, settings, 

                // если элемент успешно загрузился
                function(self, loadedPack) {

                    // запоминаем текущий элемент как ранее выбранный
                    prevousPack = selectedPack;
    
                    // Скрываем ранее выбранный элемент на <canvas>
                    if (prevousPack) {
                        prevousPack.hide();
                    }
    
                    // Запоминаем выбранный элемент как текущий
                    selectedPack = loadedPack;
                    
                    // Показываем текущий элемент на <canvas>
                    if (selectedPack) {
                        // добавляем элемент в панель навигации
                        // navAddItem(selectedPack);
                        settings.id = selectedPack.id;

                        selectedPack.show();

                        // Показываем свойства элемента
                        packsShowInfo(selectedPack);
                    }
    
                    setStatus('ok', 5000);
                },

                // если элемент не загрузился
                function(XMLHttpRequest, textStatus) {

                    setStatus('ошибка загрузки: ' + textStatus, 5000);
                }
            );
        }
        console.groupEnd();
    }
    
    
    // -------------------------------------------------------
    // Функция | Загрузка элементов pack из базы данных в выпадающие списки
    //
    function LoadPackLists(successFunction, errorFunction) {
        console.group("main.LoadPackLists {");

        // отправляем запрос серверу
        requestToServer('POST', 'getPackages.php', 'json', {},

            // если успешно и сервер вернул данные
            function(jsonResponce) {
    
                var rows = jsonResponce;

                // в ответе сервера массив записей, 
                // запись это вся информация одного элемента    

                // перебираем записи прострочно
                rows.forEach(row => {

                    console.log('next data row: %o', row);

                    // Создаем новый элемент в главный спиок
                    addListOption(selCode, row)

                    // добавляем новый элемент в выпадающие списки внутренних прямоугольников
                    subBlock.item.forEach( item => {
                        
                        // создаем <option> соответствующий очередному pack
                        addListOption(item.selCode, row, ['code']);
                    });
                });
                            
                successFunction();
            },
            
            // если запрос серверу вернул ошибку
            function(XMLHttpRequest) {
                
                errorFunction();
            }
        );   
        console.group();
    }


    // -------------------------------------------------------
    // Загружаем данные с сервера 
    // получаем информацию об элементах pack
    //
    setStatus('Загрузка данных с сервера', 3000);

    LoadPackLists( 
        
        // в случае успеха:
        function(){

            // назначаем выбранный элемент
            // 0 - создать новый 
            // 1 - первый элемент в базе
            if (selCode.options.length > 1) {
                selectPack(1);
            } else {
                selectPack(0);
            }

            setStatus('Ok', 3000);
        }, 
    
        // в случае неудачи
        function() {

            setStatus('Сервер вернул ошибку ', 3000);    
        }
    );


    // -------------------------------------------------------
    // СИГНАЛЫ | Привязываем события
    //


    // Привязываем событие нажатия кнопки "Редактировать"
    btnEdit.addEventListener('click', eventBtnEditClicked);

    // Привязываем событие нажатия кнопки "Редактировать"
    btnBack.addEventListener('click', eventBtnEditClicked);

    // Привязываем событие нажатия кнопки "Копировать"
    btnCopy.addEventListener('click', eventBtnCopyClicked);   
    
    // Привязываем событие нажатия кнопки "Сохранить"
    btnApply.addEventListener('click', eventBtnSaveClicked);

    // Привязываем событие изменение checkbox "объект имеет содержимое"
    checkBoxHasContent.addEventListener('change', eventCheckBoxHasContentChanged);

    // Привязываем событие клика на список
    selCode.addEventListener('click', eventListClicked);

    // Привязываем событие получения фокуса списком
    // selCode.addEventListener('focus', eventListFocus);

    // Привязываем событие потери списком фокуса 
    // selCode.addEventListener('blur', eventListBlur);
    
    // Привязываем событие выбор объекта в списке
    selCode.addEventListener('change', eventListItemChanged);

    // Привязываем событие изменения обозначения элемента
    inpCodeEdit.addEventListener('change', eventItemChanged);

    // Привязываем событие изменения имени элемента
    inpName.addEventListener('change', eventItemChanged);

    // Привязываем событие изменения имени элемента
    inpPayload.addEventListener('change', eventItemChanged);

    // Привязываем события изменения размеров элемента
    inpSizeWx.addEventListener('change', eventItemChanged);
    inpSizeWy.addEventListener('change', eventItemChanged);
    inpSizeWz.addEventListener('change', eventItemChanged);

    // Привязываем событие изменения цвета элемента
    inpColor.addEventListener('change', eventItemChanged);          

    // Привязываем события клика на элементе
    canvas.addEventListener("mousedown", eventMouseDown);



    // -------------------------------------------------------
    // Слот | Масштабирование элемента на canvas
    //
    canvas.addEventListener('wheel', function(evt) {
        console.group('canvas.addEventListener wheel {');

        evt.preventDefault();

        var mousePos = getMousePos(canvas, evt);

        // получаем выделленый элемент
        var pack = selectedPack;

        // если выделенный элемент есть
        if (pack) {
            
            var scale = pack.scale;

            // то меняем выбранному элементу масштам
            if (evt.deltaY < 0) {
                console.log('canvas zoom out: ' + evt.deltaY);
                scale = scale * 1.05;
            }
            if (evt.deltaY > 0) {
                console.log('canvas zoom in: ' + evt.deltaY);
                scale = scale * 0.95;
            }
            pack.scale = scale;
        }

        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        lblStatusInfo.innerText = message;

        console.groupEnd('canvas.addEventListener wheel }');
    }, false);
    

    // -------------------------------------------------------
    // СЛОТЫ | Обработка событий
    //


    // -------------------------------------------------------
    // Слот | Перемещение мыши
    //        Вывод сообщения о текущей позиции курсора мыши
    //
    canvas.addEventListener('mousemove', function(evt) {
        // console.group('eventMouseMove { ');

        var pos = getMousePos(canvas, evt);

        // получаем выделленый элемент
        var pack = selectedPack;
        
        // если выбранный элемент существует
        if (pack) {
            
            var message = 'Mouse pos: ' + pos.x + ',' + pos.y + ' | Scaled pos: ' + pos.x * selectedPack.scale + ',' + pos.y * selectedPack.scale;
            lblStatusInfo.innerText = message;
    
            // то передаем элементу координаты курсора
            // console.log('item mouse move: %o', pack);
            // var pos = getMousePos(canvas, evt)
            var mouseOver = pack.onMouseOver(pos.x, pos.y);
            if (mouseOver) {canvas.style.cursor = 'pointer'} else {canvas.style.cursor = 'auto'}
        }
        // console.groupEnd();
    }, false);


    // -------------------------------------------------------
    // Слот | Привязываем события клика на элементе
    //
    function eventMouseDown(evt) {
        console.group('eventMouseDown {');

        // получаем выделленый элемент
        var pack = selectedPack;

        // если выделенный элемент есть
        if (pack) {

            // то передаем клик элементу
            // console.log('item mouse down: %o', pack);
            var pos = getMousePos(canvas, evt)
            var selected = pack.onClick(pos.x, pos.y);
            
            console.log('selectedItems: %o', pack.selectedItem);

            // если выделенный элемент есть
            if (selected && false) {
                // меняем выбранный элемент
                pack.item.forEach( function(item, index) {
                    if (item.hashCode == selectedPack.selectedItem[0].hashCode) {
                        pack = pack.item[index];
                    }
                });

                pack.item.forEach( function(item, index) {
                    if (item.hashCode == selectedPack.selectedItem[0].selectedItem[0].hashCode) {
                        pack = pack.item[index];
                    }
                });
                console.log('selectedItems: %o', pack);

                pack.disposition = {
                    x: 'x',
                    y: 'y',
                    wx: 'wx',
                    wy: 'wy',
                    wz: 'wz'
                };
                pack.viewBox = {x: 0, y: 0, wx: canvas.width, wy: canvas.height};
                pack.autoFit = 'contain'

                // запоминаем текущий элемент как ранее выбранный
                prevousPack = selectedPack;

                // Скрываем ранее выбранный элемент на <canvas>
                if (selectedPack) {
                    selectedPack.hide();
                }

                // Запоминаем выбранный элемент как текущий
                selectedPack = pack;

                // Показываем текущий элемент на <canvas>
                if (selectedPack) {
                    selectedPack.show();
                }

                // Показываем свойства элемента
                // Передаем блокам внутренних элементов какой элемент сейчамс выбран
                // что бы они отобразили внутреннее содержимое выбранного элемента
                packsShowInfo(selectedPack);
            }
        }
        console.groupEnd();
    }


    // -------------------------------------------------------
    // Функция | Показывает модальный диалог с кнопками
    //
    var dialogBox_modal = domElementById('dialog_modal');
    var btnOk_modal = dialogBox_modal.querySelector('#btnOk_modal');
    var btnCancel_modal = dialogBox_modal.querySelector('#btnCancel_modal');

    function messageBox(mess) {
        console.group('messageBox {');

        var reply;
        if (confirm(mess)) {
            reply = btn.Yes;
        } else {
            reply = btn.No;
        }

        btnOk_modal.onclick = function() {
            console.group('messageBox.btnOk_modal { ');

            // modalDialog.close();
            dialogBox_modal.style.display = 'none';
            
            console.groupEnd();
            return btn.Yes;
        }

        btnCancel_modal.onclick = function() {
            console.group('messageBox.modalCancel { ');

            // modalDialog.close();
            dialogBox_modal.style.display = 'none';
            
            console.groupEnd();
            return btn.No;
        }

        // modalDialog.showModal();
        // modalDialog.style.display = 'block';

        console.groupEnd();
        return reply;
    }


    // -------------------------------------------------------
    // Функция | - Переключает форму и все необходимые элементы
    //           в режим редактирования и обратно
    //           - Сохраняем эелемент если он был изменен
    //
    function setEditMode(mode) {
        console.group('set EditMode to: %o', mode);

        console.log('selectedPack = %o', selectedPack);

        if (mode) {
        
            // включаем режим редактирования [ РЕДАКТИРОВАТЬ ]
            editMode = true;

            // сохраняем копию выбранного элемента для отмены изменений
            // beforChangePack = JSON.parse(JSON.stringify(selectedPack));

            setDomElementsEnabled('#btnCopy', false);
            if (selectedPack.item.length > 0) {setDomElementsEnabled('.subInput', true);}
                
            // показываем поле для воода типа
            editPanel.classList.remove('hidden');
            
            // прячем список для выбора типа
            selectPanel.classList.add('hidden');
            
            setStatus('Режим редактирования включен', 3000);
        } else {
            
            // отключаем режим редактирования [ НАЗАД ]
            editMode = false;
            
            // если элемент был изменен
            console.log('selectedPack.changed = %o', selectedPack.changed);
            if (selectedPack.changed) {
                
                // Предлагаем пользователю сохранить изменения
                var reply = messageBox('Тип "' + selectedPack.code + '" был изменен, хотите сохранить?');
                
                // Если пользователь хочет сохранить изменения
                if (reply == btn.Yes) {
                    
                    console.log('выполнить: Сохранение элемента');
                    
                    // сохраняем элемент в БД
                    packSave(selectedPack);
                } else {
                    
                    // восстанавливаем выбранный элемент из копии до изменений
                    // selectedPack = JSON.parse(JSON.stringify(beforChangePack));
                    console.log('selectedPack.id = %o', selectedPack.id);
                    
                    // и если выбранный элемнт является новым
                    if (selectedPack.id == 0) {
                        console.log('элемент новый возвращаемся к ранее выбранному!!!', prevousPack);
                        
                        // удаляем новый и не сохраненный элемент
                        packsRemove(selectedPack);
                        
                        // возвращаемся к ранее выбранному элементу
                        selectedPack = prevousPack;
                    }
                }
                
                // если элемент не изменен
            } else {
                
                // и он новый то удаляем его
                if (selectedPack.id == 0) {
                    console.log('элемент новый, не сохраняем, удаляем его и возвращаемся к ранее выбранному!!!', prevousPack);
                    
                    // убираем его с <canvas>
                    selectedPack.hide();
                    
                    // удаляем новый и не сохраненный элемент
                    packsRemove(selectedPack);
                    
                    // возвращаемся к ранее выбранному элементу
                    selectedPack = prevousPack;
                }
            }
            
            // делаем его выбранным в списке
            // selCode.selectedIndex = selCode.querySelector("[value=\'" + selectedPack.id + "\']").index;
            
            // Показываем текущий элемент на <canvas>
            selectedPack.show();
            
            // Показываем свойства элемента
            // Показываем свойства вложенных элементов
            packsShowInfo(selectedPack);
            
            // блокируем инпуты внутренних элементов
            setDomElementsEnabled('.subInput', false);
            setDomElementsEnabled('#btnCopy', true);

            // прячем поле для воода типа
            editPanel.classList.add('hidden');
            
            // показываем список для выбора типа
            selectPanel.classList.remove('hidden');     
            
            setStatus('Режим редактирования отключен', 3000);
        }       
        
        // делаем инпуты доступными / блокируем делаем инпуты
        setDomElementsEnabled('.mainInput', mode);
        
        console.groupEnd();
    }    
    

    // -------------------------------------------------------
    // Обработка события нажатия кнопки "Редактировать"
    //
    function eventBtnEditClicked() {
        console.group('eventBtnEditClicked {');

        // меняем текущий режим 'редактирование' на противоположенный
        setEditMode(!editMode);

        console.groupEnd('eventBtnEditClicked }');
    }


    // -------------------------------------------------------
    // Функция | Сохраняет элемент pack в базу данных
    //           если объект новый то выполняет INSERT
    //           Затем добавляет новый элемент в массив packs и в список <select>
    //           иначе оновляет объект в базе
    //
    function packSave(pack) {
        console.group('packSave { pack = %o', pack);

        setStatus('Сохранение данных', 3000);

        // если выделенный элемент существует
        if (pack) {

            // Формируем данные для отправки на сервер
            var url;
            var subItems = [];
            pack.item.forEach( item => {
                subItems.push({
                    'sub_package_id': item.id,
                    'x': item.x,
                    'y': item.y
                });
            });

            if (pack.id == 0) {
                
                // элемент новый
                url = "addPackage.php";
            } else {
                
                // елемеент уже еесть в БД
                url = "setPackage.php";
            }

            // отправляем запрос серверу POST (UPDATE)
            requestToServer('POST', url, 'json',
                { 
                    "package_id": pack.id,
                    "package_code": pack.code,
                    "package_name": pack.name,
                    "package_payload": pack.payload,
                    "package_wz": pack.wz,
                    "package_wx": pack.wx,
                    "package_wy": pack.wy,
                    "package_color": pack.color.replace("#", ""),
                    "item": subItems
                },

                // если успешно и сервер вернул данные
                function(jsonResponce) {
        
                    // если элемент был новый то
                    if (pack.id == 0) {

                        // обновляем id элемента
                        var result = JSON.parse(jsonResponce);
                        pack.id = result.package_id;
                    }

                    // помечаем что элемент сохранен
                    pack.changed = false;
                    lblStatusChanged.innerText = "";

                    // показываем сообщение в statusbar
                    setStatus('Сохранено', 5000);
                },
                
                // если запрос серверу вернул ошибку
                function(XMLHttpRequest, textStatus) {
                    
                    // вывод сообщения об ошибке на странице
                    setStatus('Сервер вернул ошибку ' + textStatus, 5000);
                }
            );   

        // вероятно ни один элемент не выделен, сообщаем об этом
        } else {

            setStatus('Сохранение неудачно. Ничего не выбрано', 3000);
            console.log('pack пуст или не существует !!!');
        }
        
        console.groupEnd();
    }


    // -------------------------------------------------------
    // Функция | Копирует элемент pack и добавляет копию в конец массива packs
    //           Добавляет его в список <select>
    //           Отображает скопированный элемент
    //           И включает режим редактирования
    //
    function packCopy(pack) {
        console.group('packCopy { pack: %o', pack);

        // если выделенный элемент существует
        if (pack) {

            var data = {
                id: "0",
                code: pack.code + ' copy',
                name: pack.name,
                color: pack.color.replace("#", ""),
                disposition: pack.disposition,
                wx: pack.wx,
                wy: pack.wy,
                wz: pack.wz,
                payload: pack.payload,
                material_id: pack.material_id,
                photo_id: pack.photo_id,
                created: null,
                updated: null,
                deleted: null,
                item: []
            };

            // копируем внутренние элементы выбранного
            pack.item.forEach( item => {
                data.item.push(
                    {
                        id: item.id,
                        code: item.code,
                        name: item.name,
                        color: item.color,
                        disposition: item.disposition,
                        x: item.x,
                        y: item.y,
                        wx: item.wx,
                        wy: item.wy,
                        wz: item.wz,
                        payload: item.payload,
                        material_id: item.material_id,
                        photo_id: item.photo_id,
                        created: null,
                        updated: null,
                        deleted: null
                    }
                )
            });

            // Создаем новый элемент копируя выбранный
            var newPack = packsCreate(data);

            console.log('newPack = %o', newPack);

            // запоминаем текущий элемент как ранее выбранный
            prevousPack = selectedPack;
    
            // Скрываем ранее выбранный элемент на <canvas>
            if (selectedPack) {
                selectedPack.hide();
            }
    
            // Запоминаем выбранный элемент как текущий
            selectedPack = newPack;
    
            // Показываем текущий элемент на <canvas>
            if (selectedPack) {
                selectedPack.show();
            }
    
            // Показываем свойства элемента
            // Передаем блокам внутренних элементов какой элемент сейчамс выбран
            // что бы они отобразили внутреннее содержимое выбранного элемента
            packsShowInfo(selectedPack);
            
            // включаем режим редактирования
            setEditMode(true);

            inpCodeEdit.focus();

        } else {
            
            console.log('ничего не выбрано для копирования pack = %o', pack);
            console.groupEnd();
            return false;
        }
        console.groupEnd();
    }


    // -------------------------------------------------------
    // Слот | Обработка события нажатия кнопки SAVE
    //
    function eventBtnSaveClicked() {
        console.group('eventBtnSaveClicked {');
    
        // сохраняем выбранный элемент
        packSave(selectedPack);

        console.groupEnd();
    }


    // -------------------------------------------------------
    // Слот | Обработка событие нажатия кнопки "КОПИРОВАТЬ"
    //
    function eventBtnCopyClicked() {
        console.group('eventBtnCopyClicked {');

        // копируем выбранный элемент
        packCopy(selectedPack);

        console.groupEnd();
    }
    

    // -------------------------------------------------------
    // Слот | Обработка события изменения характеристик элемента
    //
    function eventItemChanged(e) {
        console.group('eventItemChanged {');

        // получаем выделенный элемент
        var pack = selectedPack;

        // если выделенный элемент есть
        if (pack) {

            // обновляем все характеристики выбранного элемента 
            switch(e.target.id) {
                case 'inpCodeEdit':
                    pack.code = e.target.value;
                    if (e.target.value !== "") {
                        pack.listItem.innerText = pack.code;
                    }
                    break;
                case 'inpName':
                    pack.name = e.target.value;
                    break;
                case 'inpPayload':
                    pack.payload = e.target.value;
                    break;
                case 'inpColor':
                    pack.color = e.target.value;
                    break;
                case 'inpSizeWx':
                    pack.wx = parseInt(e.target.value) ? parseInt(e.target.value) : 0;
                    break;
                case 'inpSizeWy':
                    pack.wy = parseInt(e.target.value) ? parseInt(e.target.value) : 0;
                    break;
                case 'inpSizeWz':
                    pack.wz = parseInt(e.target.value) ? parseInt(e.target.value) : 0;
                    break;
            }            
            
            // вычисляем объем элемента в кубических миллиметрах
            var volume = pack.wx * pack.wy * pack.wz;
            if (volume > 99999999) {
                volume = volume / 1000000;      // переводим в кубические метры
                inpVolumeUnit.innerHTML = 'м' + '2'.sup();
            } else if ((volume > 999) && (volume <= 99999999)) {
                volume = volume / 10000;        // переводим в кубические сантиметры
                inpVolumeUnit.innerHTML = 'см' + '2'.sup();
            } else {
                inpVolumeUnit.innerHTML = 'мм' + '2'.sup();
            }
            inpVolume.innerText = volume;

            // обновим изображение элемента
            // pack.reDraw();  

            // помечаем что элемент изменен
            pack.changed = true;
            lblStatusChanged.innerText = "Не сохранено";
        } 
        console.groupEnd('eventItemChanged }');
    }


    // -------------------------------------------------------
    // Слот | Событие изменение checkbox "объект имеет содержимое"
    //
    function eventCheckBoxHasContentChanged(e) {
        console.group('eventCheckBoxHasContentChanged {');

        // если установлена галка Внутренние элементы
        if (e.target.checked) {

            // делаем поля внутренних элементов доступными
            setDomElementsEnabled('.subInput', true);
        } else {
            
            // блокируем делаем инпуты
            setDomElementsEnabled('.subInput', false);

            // очищаем внутренние элементы блоков
            subBlock.clear();
            subBlock.clearData();
            subBlock.updateTotal();
            subBlock.updatePack();
        }

        // получаем выделенный элемент
        var pack = selectedPack;

        // если в списке выбран элемент
        if (pack) {
            console.log('item: %o', pack);

            // помечаем что элемент изменен
            pack.changed = true;
            lblStatusChanged.innerText = "Не сохранено";
        }    

        console.groupEnd('eventCheckBoxHasContentChanged }');
    }


    // -------------------------------------------------------
    // Функция | Устанавливаем отображение элементов списка
    //           если detiled = true элементы в нем показаны как Обозначение | Наименование [| Ш х В х Г]
    //           если detiled = false элементы в нем показаны как Обозначение
    //
    function setSelectItemsDetiled(list, detiled) {
        console.groupCollapsed('setSelectItemsDetiled { detiled = %o', detiled);

        // меняем тексты элементов в выпадающем списке на форме
        [].forEach.call(list, function(item) {

            // обновляем текст <option>
            if (detiled) {
                item.label = item.innerText;
            } else {
                item.label = item.innerText.split(' | ')[0];
            }
        });

        console.groupEnd();
    }


    // -------------------------------------------------------
    // Слот | Обрабатываем событие клика на список
    //
    function eventListClicked(e) {
        console.group('eventListClicked {');

        // selCodeOpened = !selCodeOpened;

        // меняем элементы в выпадающем списке на форме
        // setSelectItemsDetiled(selCodeOpened);

        console.groupEnd('eventListClicked }');
    }


    // -------------------------------------------------------
    // Обрабатываем событие раскрытия списка
    // когда список раскрыт элементы в нем показаны как Обозначение | Наименование
    //
    function eventListFocus(e) {
        console.groupCollapsed('eventListFocus {');

        // меняем элементы в выпадающем списке на форме
        setSelectItemsDetiled(e.target, true)

        console.groupEnd();
    }


    // -------------------------------------------------------
    // Обрабатываем событие когда список теряет фокус
    // когда список раскрыт элементы в нем показаны как Обозначение | Наименование
    //
    function eventListBlur(e) {
        console.groupCollapsed('eventListBlur {');

        // меняем элементы в выпадающем списке на форме
        setSelectItemsDetiled(e.target, false)

        console.groupEnd();
    }


    // -------------------------------------------------------
    // Функция | Показываем свойства элемента на форме
    //
    function packsShowInfo(pack) {
        console.group('packsShowInfo {');

        console.log('pack.color: %o', pack.color);

        // если элемент существует
        if (pack) {
            
            inpCodeEdit.value = pack.code;
            inpName.value = pack.name;
            inpPayload.value = pack.payload;
            inpSizeWz.value = pack.wz;
            inpSizeWx.value = pack.wx;
            inpSizeWy.value = pack.wy;
            inpColor.value = pack.color;
            inpVolume.innerText = pack.wz * pack.wx * pack.wy;
    
            // если у элемента pack есть внутренние элементы
            if (pack.item.length > 0) {

                // ставим галочку что есть внутренние элементы 
                checkBoxHasContent.checked = true;
            
                // если внутренних элементов нет
            } else {

                checkBoxHasContent.checked = false;
            }
        } else {

            checkBoxHasContent.checked = false;
        }
        
        // заполняем/очищаем поля внутренних элементов
        subBlock.showInfo(pack);

        // выводим статус что элемент изменен
        lblStatusChanged.innerText = ((pack.changed) ? "Не сохранен" : "");

        console.groupEnd();
    }


    // -------------------------------------------------------
    // Функция | Изменение выбранного элемента
    //           если в списке выбран новый
    //           то создает новый pack 
    //           и переключает в режим редактирования 
    //
    function setSelectedPack(list) {
        console.group('setSelectedPack { list: %o', list);

        // <option> выбранный в списке <select>
        var selectedOption = list.selectedOptions[0];

        console.log('list.selectedOption: %o', selectedOption);

        if (typeof selectedOption !== "object") {
            console.log('list.selectedOption is undefined - exit');
            return false;
        }    
        // получаем id выбранного в списке <option>
        var id = selectedOption.value;

        // Создаем новый пустой элемент
        var pack = packsCreate({id: id}, settings);

        // если выбран <option> НОВЫЙ
        if (id == '0') {
            console.log('создаем новый элемент');

            // если новый элемент создан
            if (pack) {
                // запоминаем текущий элемент как ранее выбранный
                prevousPack = selectedPack;
    
                // Запоминаем выбранный элемент как текущий
                selectedPack = pack;
    
                // Показываем текущий элемент на <canvas>
                selectedPack.show();
                
                // Показываем свойства элемента
                packsShowInfo(selectedPack);
    
                // включаем режим редактирования
                setEditMode(true);
            }                
        } else {
            
            // загружаем свойства элемента и все его содержимое из базы
            packLoad(pack, settings);
        }

        console.log('pack = %o', pack);
        console.groupEnd();
    }


    // -------------------------------------------------------
    // Слот | Выбор объекта в списке
    //
    function eventListItemChanged(e) {
        // e.preventDefault();
        console.group('eventListItemChanged {');
        
        // меняем выбранный элемент
        setSelectedPack(selCode, packs);

        // делаем элементы в выпадающем списке упрощенными (только ТИП)
        // selCode.blur();
        
        console.groupEnd('eventListItemChanged }');
    }

});