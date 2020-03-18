"use strict";





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

// формат выпадающего списка
const listFormat = ['code', '|', 'name', '|', 'wx', 'x', 'wy', 'x', 'wz', '|', 'iwx', 'x', 'iwy', 'x', 'iwz', '|', '(Внут item_count шт)']

// формат вывода выбранного элемента выпадающего списка
const selectedFormat = ['code', ' | ', 'name'];


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
    function setStatus(statusText, showTimeout, clearTimeout) {
        console.group("main.setStatus { text: %o", statusText);

        // показываем статус с задержкой showTimeout в миллисекундах
        setTimeout(() => {
            lblStatus.innerText = statusText;
        }, showTimeout);

        // если timeout больше 0
        if (clearTimeout > 0) {
            
            // стираем выведенное сообщение через время timeout в миллисекундах
            setTimeout(() => {
                lblStatus.innerText = "";
            }, clearTimeout);
        }

        console.groupEnd("main.setStatus }");
    }


    // -------------------------------------------------------
    // Функция | Делает элементы доступными для редактирования
    //           если enabled = true, иначе блокирует их
    //           элементы выбирает по селектору selector
    //
    function setDomElementsEnabled(selector, enabled) {
        console.group("main.setDomElementsEnabled { selector: %o; enabled: %o", selector, enabled);

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
    // ЭЛЕМЕНТЫ DOM | Объявляем константы связи с элементами страницы и/или формы
    //
    const selectPanel = domElementById("selectPanel");
    const editPanel = domElementById("editPanel");
    const inpCodeEdit = domElementById("inpCode");
    const inpName = domElementById("inpName");
    const inpPayload = domElementById("inpPayload");
    const inpSizeWx = domElementById("inpSizeWx");
    const inpSizeWy = domElementById("inpSizeWy");
    const inpSizeWz = domElementById("inpSizeWz");
    const inpInternalSizeWx = domElementById("inpInternalSizeWx");
    const inpInternalSizeWy = domElementById("inpInternalSizeWy");
    const inpInternalSizeWz = domElementById("inpInternalSizeWz");
    const inpColor = domElementById("inpColor");
    const inpVolume = domElementById("inpVolume");
    const inpVolumeUnit = domElementById("inpVolumeUnit");
    const checkBoxHasContent = domElementById("checkBoxHasContent");
    const checkBoxByCoordinares = domElementById("checkBoxByCoordinares");
    const btnEdit = domElementById("btnEdit");
    const btnBack = domElementById("btnBack");
    const btnCopy = domElementById("btnCopy");
    const btnTurnByX = domElementById("btnTurnByX");
    const btnTurnByY = domElementById("btnTurnByY");
    const btnApply = domElementById("btnApply");
    const lblStatus = domElementById("lblStatus");
    const lblStatusEdit = domElementById("lblStatusEdit");
    const lblStatusChanged = domElementById("lblStatusChanged");
    const lblStatusInfo = domElementById("lblStatusInfo");
    // получаем и сохраняем указатель на <canvas> где будет вся графика
    var canvas = domElementById("canvas");
    


    // -------------------------------------------------------
    // ИНИЦИАЛИЗАЦИЯ |
    //

    // ссылка на текущий выбранный элемент
    // var selectedItem;
    var selectedItem;
    var dataHendler;
    const subItemTypeCount = 9;

    // флагн режима редактирования
    var editMode = false;

    // настройки отображения, по умолчанию normalView
    settings = normalView;

    // Настраиваем размер и разрешение <canvas>
    canvas.style.width = settings.canvasWx + 'px';
    canvas.style.height = settings.canvasWy + 'px';
    canvas.width = settings.canvasWx * 2;
    canvas.height = settings.canvasWy * 2;

    // Делает все инпуты недоступными для редактирования
    setDomElementsEnabled('.disabled, .mainInput, .subInput, .archeTypeSelectInput, #btnTurnByX, #btnTurnByY, #btnApply, #btnCopy, #btnEdit');


    // выпадающий список для выбора текущего элемента из базы данных
    var packList = new SearchList(domElementById("packList"));
    packList.item0 = 'Новый';
    packList.listFormat = listFormat;
    packList.selectedFormat = selectedFormat;
    
    // если в списке выбран нулевой пункт, то создаем новый элемент
    packList.onItem0 = (event) => newItem(event);
    
    // если в списке выбран не нулевой пункт
    packList.onChange = (id) => setSelectedItem(id);
    
    
    // выпадающий список для выбора прототипа текущего элемента из базы данных
    var patternPackList = new SearchList(domElementById("patternPackList"));
    patternPackList.item0 = 'Тип';
    patternPackList.listFormat = listFormat;
    patternPackList.selectedFormat = selectedFormat;

    // если в списке выбран нулевой пункт, то создаем новый элемент
    // patternPackList.onItem0 = (event) => packNew(event);

    // если в списке базовых элеменотов выбран не нулевой
    patternPackList.onItem0 = (id) => setArchetypeId(id);
    patternPackList.onChange = (id) => setArchetypeId(id);


    // Блоки редактирования внутренних элементов,
    // структура хранящая количество блоков в count
    // и блоки в item с количеством горизонтальных рядов
    // и количеством элементов в каждом ряде
    var subBlock = new SubBlockContainer('subBlock_');


    // загружаем массив элементов
    loadData(
        function() {
            packList.dataSet = dataSet;
            patternPackList.dataSet = dataSet;   
            subBlock.item.forEach( (item, index) => {
                item.dataHendler = dataHendler;
                item.packList.dataSet = dataSet;
                dataHendler.setDataBind(item.packList, 'sub' + (index + 1)+ '_id', 'list', 'change');
                dataHendler.setDataBind('#' + item._inpNx.id, 'x' + (index + 1), 'int', 'input');
                dataHendler.setDataBind('#' + item._inpNy.id, 'y' + (index + 1), 'int', 'input');
                dataHendler.setDataBind('#' + item._checkBox.id, 'inrow' + (index + 1), 'bool', 'change');
            });
            console.log('data: %o', dataSet)     
        },
        function() {},
    )


    // создаем dataHendler
    dataHendler = new DataHendler();

    // добавляем связи в dataHendler
    dataHendler.setDataBind(patternPackList, 'archetype_id', 'list', 'cange');
    dataHendler.setDataBind('#inpCode', 'code', 'text', 'input');
    dataHendler.setDataBind('#inpName', 'name', 'text', 'input');
    dataHendler.setDataBind('#inpPayload', 'payload', 'int', 'input');
    dataHendler.setDataBind('#inpSizeWx', 'wx', 'int', 'input');
    dataHendler.setDataBind('#inpSizeWy', 'wy', 'int', 'input');
    dataHendler.setDataBind('#inpSizeWz', 'wz', 'int', 'input');
    dataHendler.setDataBind('#inpInternalSizeWx', 'iwx', 'int', 'input');
    dataHendler.setDataBind('#inpInternalSizeWy', 'iwy', 'int', 'input');
    dataHendler.setDataBind('#inpInternalSizeWz', 'iwz', 'int', 'input');
    dataHendler.setDataBind('#inpColor', 'color', 'color', 'input');
    dataHendler.setDataBind('', 'turnedx', 'int', 'input');
    dataHendler.setDataBind('', 'turnedy', 'int', 'input');
    dataHendler.setDataBind('#checkBoxByCoordinares', 'bycoordinates', 'bool', 'change');
    dataHendler.setDataBind('#lblStatusChanged', 'changed', 'text', '');


    // создаем placePattern
    // Это обработчик выбранного элемента
    selectedItem = new PlacePattern(canvas, dataHendler);
    selectedItem.iTypeCount = subItemTypeCount;
    selectedItem.normalView = normalView;
    selectedItem.turnedView = turnedView;



    // -------------------------------------------------------
    // Функция | Создание нового элемента
    //
    function newItem(id) {
        console.group('main.packNew');

        selectedItem.createNew();
        
        // включаем режим редактирования
        setEditMode(true);
        
        inpCodeEdit.focus();

        console.groupEnd();
    }



    // -------------------------------------------------------
    // Функция | Копирует элемент pack и добавляет копию в конец массива packs
    //           Добавляет его в список <select>
    //           Отображает скопированный элемент
    //           И включает режим редактирования
    //
    function packCopy(pack) {
        console.group('packCopy');
        console.log('pack: %o', pack);

        // если выделенный элемент существует
        if (pack) {

            var data = {
                id: "0",
                art: pack.art,
                code: pack.code + ' copy',
                name: pack.name,
                color: pack.color.replace("#", ""),
                disposition: pack.disposition,
                wx: pack.wx,
                wy: pack.wy,
                wz: pack.wz,
                iwx: pack.iwx,
                iwy: pack.iwy,
                iwz: pack.iwz,
                payload: pack.payload,
                material_id: pack.material_id,
                photo_id: pack.photo_id,
                created: null,
                updated: null,
                deleted: null,
                depth: pack.depth,
                turned: pack.turned,
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
                        iwx: item.iwx,
                        iwy: item.iwy,
                        iwz: item.iwz,
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
            selectedItem = packCreate(data);

            console.log('Copied Pack: %o', selectedItem);
    
            // Показываем скопированный элемент на <canvas>
            if (selectedItem) {
                selectedItem.show();
            }
    
            // Показываем свойства элемента
            // Передаем блокам внутренних элементов какой элемент сейчамс выбран
            // что бы они отобразили внутреннее содержимое выбранного элемента
            packShowInfo(selectedItem);
            
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
    // Функция | Сохраняет элемент pack в базу данных
    //           если объект новый то выполняет INSERT
    //           Затем добавляет новый элемент в массив packs и в список <select>
    //           иначе оновляет объект в базе
    //
    function packSave(pack) {
        console.group('main.packSave');
        console.log('pack: %o', pack);

        setStatus('Сохранение данных', 0, 3000);

        // если выделенный элемент существует
        let exists = dataSet.find( function(item) {
            return item ? (item.code == selectedItem.dh.data.code) : false;
        });

        if (!exists || !selectedItem.new) {

            // setDomElementsEnabled('#btnApply', false);
            // setDomElementsEnabled('#btnBack', false);

            // сохраняем его в базу данных
            saveData(selectedItem.dh.data,

                // если успешно
                function(result) {
        
                    console.log('pack: %o', pack);
                    if (selectedItem.new && result.data && (parseInt(result.data.id) > 0)) {
                
                        selectedItem.new = false;
                        
                        // присваиваем новый id после сохранения
                        selectedItem.dh.data.id = String(result.data.id);
                        
                        // добавляем новый элемент в набор dataSet
                        dataSet[result.data.id] = selectedItem.dh.data;
                        
                        // делаем сортировку элементов в dataSet
                        // sortDataBy(dataSet, 'code');
                        
                        packList.selectedId = result.data.id;
                        setSelectedItem(result.data.id)
                    }
                    // показываем сообщение в statusbar
                    setStatus('Сохранено', 100, 5000);
                    selectedItem.dh.data.changed = '';
                    setDomElementsEnabled('#btnApply, #btnBack', true);
                },
                
                // если сервер вернулошибку
                function(XMLHttpRequest, textStatus) {
                    
                    setDomElementsEnabled('#btnApply, #btnBack', true);
                }
            );
        } else {
            alert('Элемент с таким обозначением уже существует.');
            setDomElementsEnabled('#btnApply, #btnBack', true);
        }
        console.groupEnd();
    }




    // -------------------------------------------------------
    // СИГНАЛЫ | Привязываем события
    //


    // Привязываем события
    btnEdit.addEventListener('click', eventBtnEditClicked);
    btnBack.addEventListener('click', eventBtnBackClicked);
    btnTurnByX.addEventListener('click', eventBtnTurnByXClicked);   
    btnTurnByY.addEventListener('click', eventBtnTurnByYClicked);   
    btnCopy.addEventListener('click', eventBtnCopyClicked);   
    btnApply.addEventListener('click', eventBtnSaveClicked);
    checkBoxHasContent.addEventListener('change', eventCheckBoxHasContentChanged);
    checkBoxByCoordinares.addEventListener('change', checkBoxByCoordinaresChanged);

    // Привязываем события клика на элементе
    canvas.addEventListener("click", eventClick);



    // -------------------------------------------------------
    // Слот | Масштабирование элемента на canvas
    //
    canvas.addEventListener('wheel', function(evt) {
        return false;
        console.group('canvas.addEventListener wheel {');

        evt.preventDefault();

        var mousePos = getMousePos(canvas, evt);

        // получаем выделленый элемент
        var pack = selectedItem;

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

        // var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        // lblStatusInfo.innerText = message;

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
        return false;
        // console.group('eventMouseMove { ');

        var pos = getMousePos(canvas, evt);

        // получаем выделленый элемент
        var pack = selectedItem;
        
        // если выбранный элемент существует
        if (pack) {
            
            // var message = 'Mouse pos: ' + pos.x + ',' + pos.y + ' | Scaled pos: ' + pos.x * selectedItem.scale + ',' + pos.y * selectedItem.scale;
            // lblStatusInfo.innerText = message;
    
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
    function eventClick(evt) {
        console.group('eventClick');

        // получаем выделленый элемент
        var pack = selectedItem;

        // если выделенный элемент есть
        if (pack) {

            // меняем глубину отображения
            pack.depth = (pack.depth == 3) ? 2 : pack.depth + 1;
            console.log('selectedItem: %o', pack);

            setStatus("Вложенных уровней: " + (pack.depth - 1), 0, 5000);

            // то передаем клик элементу
            // console.log('item mouse down: %o', pack);
            var pos = getMousePos(canvas, evt)
            var selected = pack.onClick(pos.x, pos.y);
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
    function setEditMode(value) {
        console.group('main.setEditMode');
        console.log('selectedItem: %o', selectedItem);
        
        editMode = value;

        if (selectedItem.dh.data) { // && (selectedItem.dh.data.id > 0)
            console.log('set editMode to: %o', editMode);
            
            if (editMode) {
                // включаем режим редактирования [ РЕДАКТИРОВАТЬ ]

                // показываем поле для воода типа
                editPanel.classList.remove('hidden');
                
                // прячем список для выбора типа
                selectPanel.classList.add('hidden');
                
                lblStatusEdit.value = 'Редактирование';
            } else {
                
                // отключаем режим редактирования [ НАЗАД ]
                
                // если элемент был изменен
                console.log('selectedItem.dh.data.changed: %o', selectedItem.dh.data.changed);
                if (selectedItem.dh.data.changed) {
                    
                    // Предлагаем пользователю сохранить изменения
                    var reply = messageBox('Тип "' + selectedItem.code + '" был изменен, хотите сохранить?');
                    
                    // Если пользователь хочет сохранить изменения
                    if (reply == btn.Yes) {
                        
                        console.log('выполнить: Сохранение элемента');
                        
                        // сохраняем элемент в БД
                        packSave(selectedItem);
                    } else {
                                            
                        // и если выбранный элемнт является новым
                        if (selectedItem.new) {
                            
                            // возвращаемся к ранее выбранному элементу
                            setSelectedItem(packList.prevouseId);
                            packList.selectedId = packList.prevouseId;
                        // если элемент не изменен
                        } else {

                            // возвращаемся к ранее выбранному элементу
                            setSelectedItem(selectedItem.id);
                        }
                    }
                }
                // прячем поле для воода типа
                editPanel.classList.add('hidden');
                
                // показываем список для выбора типа
                selectPanel.classList.remove('hidden');     
                
                lblStatusEdit.value = '';
            }       
            // делаем инпуты доступными / блокируем
            setDomElementsEnabled('#btnApply', editMode);
            setDomElementsEnabled('#btnTurnByX', editMode);
            setDomElementsEnabled('#btnTurnByY', editMode);
            setDomElementsEnabled('#btnCopy', !editMode);
            setDomElementsEnabled('.mainInput', editMode && !(selectedItem.dh.data.archetype_id > 0));
            setDomElementsEnabled('#inpCode, #inpName', editMode);
            setDomElementsEnabled('#inpColor', editMode);
            setDomElementsEnabled('.archeTypeSelectInput', editMode);
            setDomElementsEnabled('.subInput', editMode && selectedItem.dh.data.archetype_id > 0);
        }
        console.groupEnd();
    }    
    


    // -------------------------------------------------------
    // Обработка события нажатия кнопки "Редактировать"
    //
    function eventBtnEditClicked() {
        console.group('eventBtnEditClicked');

        // переходим в режим редактирования
        setEditMode(true);

        console.groupEnd();
    }



    // -------------------------------------------------------
    // Обработка события нажатия кнопки "Назад"
    //
    function eventBtnBackClicked() {
        console.group('eventBtnBackClicked');

        // выходим из режима 'редактирования
        setEditMode(false);

        console.groupEnd();
    }



    // -------------------------------------------------------
    // Обработка события нажатия кнопки "Повернуть отображение по оси X"
    //
    function eventBtnTurnByXClicked() {
        console.group('eventBtnTurnByXClicked');
                
        selectedItem.dh.data.turnedx = selectedItem.dh.data.turnedx ? 0 : 1;

        selectedItem.dh.data.changed = 'изменен';

        selectedItem.update();
        
        console.groupEnd();
    }



    // -------------------------------------------------------
    // Обработка события нажатия кнопки "Повернуть отображение по оси Y"
    //
    function eventBtnTurnByYClicked() {
        console.group('eventBtnTurnByYClicked');
                
        selectedItem.dh.data.turnedy = selectedItem.dh.data.turnedy ? 0 : 1;

        selectedItem.dh.data.changed = 'изменен';

        selectedItem.update();
        
        console.groupEnd();
    }



    // -------------------------------------------------------
    // Слот | Обработка события нажатия кнопки SAVE
    //
    function eventBtnSaveClicked() {
        console.group('eventBtnSaveClicked');
    
        // сохраняем выбранный элемент
        packSave(selectedItem);

        console.groupEnd();
    }



    // -------------------------------------------------------
    // Слот | Обработка событие нажатия кнопки "КОПИРОВАТЬ"
    //
    function eventBtnCopyClicked() {
        console.group('main.eventBtnCopyClicked {');

        // копируем выбранный элемент
        packCopy(selectedItem);

        console.groupEnd();
    }
    


    // -------------------------------------------------------
    // Функция | Вычисляет объем элемента
    //
    // function packVolume(pack) {
    //     console.group('main.packVolume {');

    //     var volume = pack.iwx * pack.iwy * pack.iwz;
    //     var volumeString = "";
    //     if (volume > 9999999) {
    //         volume = volume / 1000000000;      // переводим в кубические метры
    //         volumeString = volume + ' м' + '3'.sup();
    //     } else if ((volume > 9999) && (volume <= 9999999)) {
    //         volume = volume / 1000;        // переводим в кубические сантиметры
    //         volumeString = volume + ' см' + '3'.sup();
    //     } else {
    //         volumeString = volume + ' мм' + '3'.sup();
    //     }
    //     console.groupEnd();
    //     return volumeString;
    // }



    // -------------------------------------------------------
    // Слот | Событие изменение checkbox "объект имеет содержимое"
    //
    function eventCheckBoxHasContentChanged(e) {
        console.group('main.eventCheckBoxHasContentChanged');

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
            subBlock.updatePack();
        }
        console.groupEnd();
    }



    // -------------------------------------------------------
    // Слот | Событие изменение checkbox "по координатам"
    //
    function checkBoxByCoordinaresChanged(e) {
        console.group('main.checkBoxByCoordinaresChanged');

        // если установлена галка по координатам
        if (e.target.checked) {

            // меняем тексты полей внутренних элементов
            let itemsX = document.getElementsByClassName('subInputLabelX');
            let itemsY = document.getElementsByClassName('subInputLabelY');
            for (let i  = 0; i < itemsX.length; i++) {
                itemsX[i].innerHTML = "Координата<br>X";
                itemsY[i].innerHTML = "Координата<br>Y";
            }
        } else {
            
            // меняем тексты полей внутренних элементов
            let itemsX = document.getElementsByClassName('subInputLabelX');
            let itemsY = document.getElementsByClassName('subInputLabelY');
            for (let i  = 0; i < itemsX.length; i++) {
                itemsX[i].innerHTML = "Количество<br>по горизонтали";
                itemsY[i].innerHTML = "Количество<br>по вертикали";
            }
        }
        console.groupEnd();
    }



    // -------------------------------------------------------
    // Функция | Изменение выбранного элемента
    //           если в списке выбран новый
    //           то создает новый pack 
    //           и переключает в режим редактирования 
    //
    function setSelectedItem(id) {
        console.group('main.setSelectedItem');
        console.log('id: %o', id);

        selectedItem.id = id;

        checkBoxHasContent.checked = parseInt(selectedItem.dh.data.archetype_id) ? true : false;

        setDomElementsEnabled('#btnCopy, #btnEdit', true);

        // console.log('pack = %o', selectedItem);
        console.groupEnd();
    }



    // -------------------------------------------------------
    // Функция | Изменение прототипа выбранного элемента
    //           Если в списке выбран нулевой (id = 0)
    //           то создается базовый элемент и можно задать размеры 
    //           Если выбран ненулевой элемент, то выбранному
    //           элементу dataHendker сообщает id его прототипа
    //           и обновляем выбранный элемент
    //
    function setArchetypeId(id) {
        console.group('main.setArchetypeId');
        console.log('id: %o', id);

        if (id > 0) {
            selectedItem.archetype_id = id;
        }
        
        checkBoxHasContent.checked = parseInt(selectedItem.dh.data.archetype_id) ? true : false;

        setDomElementsEnabled('.mainInput', editMode && !(id > 0));
        setDomElementsEnabled('.subInput', editMode && selectedItem.dh.data.archetype_id > 0);
        setDomElementsEnabled('#inpCode, #inpName, #inpColor', editMode);

        console.groupEnd();
    }
});