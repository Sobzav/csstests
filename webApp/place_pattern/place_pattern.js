"use strict";





// -------------------------------------------------------
// Функция | Генерирует уникальный ID
//
function generateId(len) {
    // console.groupCollapsed("global.generateId { ");
    // console.groupEnd();
    var arr = new Uint8Array((len || 7) / 2)
    window.crypto.getRandomValues(arr)
    return Array.from(arr, dec => ('0' + dec.toString(16)).substr(-2)).join('')
}



// -------------------------------------------------------
// Функция | осветляет или затемняет цвет в парамеетре color,
//           переданный в формате #rrggbb
//           на велдечину percent, переданную в процентах 
function shadeColor (color = "#000000", percent = 0) {
    var num = parseInt (color.slice(1), 16); 
    var amt = Math.round(2.55 * percent);
    var R = (num >> 16) + amt;
    var G = (num >> 8 & 0x00FF) + amt;
    var B = (num & 0x0000FF) + amt;
    var new_color = ("#" + (0x1000000 + 
       (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + 
       (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + 
       (B < 255 ? B < 1 ? 0 : B : 255)).toString (16).slice (1));
    return new_color;
 }





// =======================================================
// Объект | Модель данных
//          Массив записей из базы данных, с которым работают
//          все другие объекты, здесь данные храняться, изменяются
//          сюда их можно загрузить и отсюда их можно сохранить
//          И все другие объекты видят все изменения
//
var dataSet = [];

const dataModel = {
    id: 0,
    name: '',
    code: '',
    iwx: 0,
    iwy: 0,
    iwz: 0,
    volume: 0,
    payload: 0,
    nature_id: 'null',
    wx: 0,
    wy: 0,
    wz: 0,
    wxs1: 0,
    wys2: 0,
    wzs3: 0,
    archetype_id: 'null',
    bycoordinates: 0,
    color: 0,
    depth: 0,
    turned: 0,
    deleted: 'null',
    sub1_id: 'null',
    inrow1: 0,
    x1: 0,
    y1: 0,
    sub2_id: 'null',
    inrow2: 0,
    x2: 0,
    y2: 0,
    sub3_id: 'null',
    inrow3: 0,
    x3: 0,
    y3: 0,
    sub4_id: 'null',
    inrow4: 0,
    x4: 0,
    y4: 0,
    sub5_id: 'null',
    inrow5: 0,
    x5: 0,
    y5: 0,
    sub6_id: 'null',
    inrow6: 0,
    x6: 0,
    y6: 0,
    sub7_id: 'null',
    inrow7: 0,
    x7: 0,
    y7: 0,
    sub8_id: 'null',
    inrow8: 0,
    x8: 0,
    y8: 0,
    sub9_id: 'null',
    inrow9: 0,
    x9: 0,
    y9: 0,
};



// -------------------------------------------------------
// Функция | Копирования объекта
//
function copyData(data, key) {
    console.group("sortDataBy ", key);

    var first = true;
    for(let index in data) {
        let prev = data[index];
        first = false;
        if (!first) {
            if (data[index][key] < prev[key]) {
                let buff = Object.assign({}, data[index][key]);
                data[index][key] = Object.assign({}, prev[key]);
                prev[key] = Object.assign({}, buff);
            }
        }
    }
    console.groupEnd();
};



// -------------------------------------------------------
// Функция | Сортировки массива объектов - dataSet
//
function sortDataBy(data, key) {
    console.group("sortDataBy ", key);

    var first = true;
    for(let index in data) {
        let prev = data[index];
        first = false;
        if (!first) {
            if (data[index][key] < prev[key]) {
                let buff = Object.assign({}, data[index][key]);
                data[index][key] = Object.assign({}, prev[key]);
                prev[key] = Object.assign({}, buff);
            }
        }
    }
    console.groupEnd();
};



    // -------------------------------------------------------
    // Функция | Запрос серверу в формате ajax
    //           type = "POST" / "GET"
    //           url = "fileName.php"
    //           dataType = "json"
    //           возвращает данные в формате json в случае успеха
    //           либо false в случае ошибки
    //
    function requestToServer(type, url, dataType, postData, successFunction, errorFunction, context) {
        console.group("requestToServer { url = %o ", url);

        console.time();
        console.log('postData: %o', postData);

        // отправляем запрос серверу
        $.ajax({
            type: type,
            url: url,
            dataType: dataType,
            data: postData,
            context: context,

            // получаем ответ в случае успеха
            success: function(jsonResponce, textStatus, jqXHR) {

                console.log('jsonResponce: %o', jsonResponce);
                // console.log('textStatus: ' + textStatus);
                console.timeEnd();
                // console.log('jqXHR: %o', jqXHR);

                // возвращаем ответ сервера
                successFunction(jsonResponce, textStatus, jqXHR);
            },

            // получаем ответ в случае ошибок
            error: function(XMLHttpRequest, textStatus, jqXHR) {

                console.warn('textStatus: ' + textStatus);
                console.timeEnd();
                console.warn('jqXHR: %o', jqXHR);
                
                // возвращаем ошибку
                errorFunction(XMLHttpRequest, textStatus, jqXHR);
            }
        });
        console.groupEnd();
    };



    // -------------------------------------------------------
    // Метод | Загрузка всех элементов из базы данных
    //
    function loadData(successFunction, errorFunction) {
        console.group("loadData");
        // console.log("this: %o", this);

        // Формируем данные для отправки на сервер
        var url = '../place_pattern/getPlacePattern.php';
        var postData = {};

        // отправляем запрос серверу
        requestToServer('POST', url, 'json', postData,

            // если успешно и сервер вернул данные
            function(jsonResponce) {
                    
                if (parseInt(jsonResponce.errCount) > 0) {
                } else {
                    let data = jsonResponce.data;
                    // передаем загруженные данные 
                    for(var index in data) {
                        dataSet[data[index].id] = {};
                        for(let key in dataModel) {
                            dataSet[data[index].id][key] = data[index][key] ? data[index][key] : dataModel[key];
                        }
                    }
                    // делаем сортировку элементов
                    sortDataBy(dataSet, 'code');
                }

                successFunction(jsonResponce);
            },
            
            // если запрос серверу вернул ошибку
            function(XMLHttpRequest, textStatus) {
                
                errorFunction(XMLHttpRequest, textStatus);
            },
        );   
        console.groupEnd();
    };






// -------------------------------------------------------
// Метод |  Сохраняет элемент pack в базу данных
//         если объект новый то выполняет INSERT
//         Затем добавляет новый элемент в массив packs и в список <select>
//         иначе оновляет объект в базе запросом UPDATE
//
function saveData(data, successFunction, errorFunction, context) {
    console.group('saveData');
    console.log('pack: %o', this);

        // Формируем данные для отправки на сервер
        var url = "setPlacePattern.php";

        let postData = {};
        for(let key in dataModel) {
                
            if (data.id > 0) {
                // обновляем данные в dataSet
                dataSet[data.id][key] = data[key] ? data[key] : dataModel[key];
            }
            
            // данные для отправки на сервер
            postData[key] = data[key] ? data[key] : dataModel[key];
        }

        console.log('postData: %o', postData);
        // отправляем запрос серверу POST (UPDATE)
        requestToServer('POST', url, 'json',
            {"data" :postData
            },

            // если успешно и сервер вернул данные
            function(jsonResponce) {
    
                // ответ сервера
                var result = jsonResponce; //JSON.parse(jsonResponce);

                if (result.id) {

                    console.log('result.id: %o', result.id);

                    //если элемент новый
                    // if (target.new) {
                        
                    //     // обновляем id элемента
                    //     target._id = result.data_id ? parseInt(result.data_id) : 0;
                        
                    //     // снимаем статус "new"
                    //     target._new = false;
                    // }
                    // помечаем что элемент сохранен
                }
                // target.changed = false;    
                successFunction(result);
            },
            // если запрос серверу вернул ошибку
            function(XMLHttpRequest, textStatus) {
                console.log('Сервер вернул ошибку: %o', XMLHttpRequest);
                
                errorFunction(XMLHttpRequest, textStatus);
            },
            context
        );   
    console.groupEnd();
}
    
    
    
// =======================================================
// Класс | DataHendler
//          Класс хранит одно значение и связывает его
//         с визуальным элементом на экранной форме
//          Если значение класса изменилось, то класс
//         отобразит его в визуальном элементе
//          Если событие изменения визуального поля 
//         привязано, то при вводе пользователем нового значения,
//         оно будет присвоено полю класса
//          Параметры инициализации:
//
//         parent   - родительский элемент
//         selector - селектор, по которому будет привязан визуальный элемент экранной формы
//         type     - тип значения ['int', 'uint', 'float', 'text']
//         event    - событие изменения визуального элемента
//
class DataHendler {

    
    // -------------------------------------------------------
    // Метод | Создаем элемент
    //
    constructor() {
        console.group("Class DataHendler.constructor");

        this._target;       // целевой объект
        this.data;          // набор данных целевого объекта
        this.bind = [];     // массив связей

        this.onChange = null;   // этот метод привязан, то будет вызван каждый раз при изменении данных в DOM

        console.log("this: ", this);
        console.groupEnd();
    }



    // -------------------------------------------------------
    // Свойство | Целевой объект
    //
    set target(target) {
        console.group("Class DataHendler.set target");
        
        this._target = target;

        if (this._target) {
            this.setDataModel(this._target);
        } else {
            console.warn('Модель данных получила пустой целевой объект')
        }

        console.groupEnd();
    }

    get target() {return this._target;}



    // -------------------------------------------------------
    // Свойство | Флаг, указывающий на то что данные были изменены
    //
    set changed(value) {
        this._changed = value;
    }

    get changed() {return this._changed;}



    // -------------------------------------------------------
    // Свойство | Модель данных
    //
    setDataModel(target) {
        console.group("Class DataHendler.set dataMonel");
        
        // очищаем модель данных
        this.data = null;
        this.data = {};

        // пересоздаем новому целевому объекту все настроенные связи
        for(let name in this.bind) {

            // если связь не с кастомным списком то удаляем event 
            if (this.bind[name].type != 'list') {
                if (this.bind[name].selector) {

                    // элемент в DOM
                    let domElement = document.querySelector(this.bind[name].selector);

                    // связываем event элемента в DOM с обработчиком
                    domElement.removeEventListener(this.bind[name].event, e => this.slotElementChange(e));
                }
            }

            // связываем значение в модели данных с элемеентов в DOM
            this.setDataBind(this.bind[name].selector, this.bind[name].name, this.bind[name].type, this.bind[name].event);
        }

        // копируем все поля из целевого объекта в модель данных
        for(let key in target) {
            this.data[key] = target[key];
        }

        // сбрасываем флаг changed
        this._changed = false;

        console.groupEnd();
    }



    // -------------------------------------------------------
    // Метод | Добавляет новую связь domElement <=> target.name
    //
    setDataBind(selector, name, type, event) {
        console.group("Class DataHendler.setBind");

        // настраиваем domElement в зависимости от type
        var domElement;
        switch (type) {
            case 'list':
                // кастомный выпадающий список
                domElement = selector;
                break;
            default:
                // элемент в DOM
                domElement = selector ? document.querySelector(selector) : null;
        }

        // если domElement не найден, выводим сообщение и не связываем event
        if (domElement) {
            // связываем event элемента в DOM с обработчиком
            domElement.addEventListener(event, e => this.slotElementChange(e));
        } else {
            console.warn('Не найден элемент с селектором ' + selector);
        }

        // добавляем связь если ее нет
        if (!this.bind[name]) {
            this.bind[name] = {
                name: name,
                type: type,
                event: event,
                selector: selector,
                domElement: domElement,
            };
        }
        console.log("bind.keys: ", Object.keys(this.bind));
        console.log("this.bind: ", this.bind[name]);


        // Добавляем свойство name в dataModel
        if (this.data) {

            // ссылка на себя
            self = this;

            // сылка на целевой объект 
            var target = this._target;

            Object.defineProperty(this.data, name, {
                
                set: function(newValue) {
                    
                    // обновляем значение во внутренней переменой dataModel
                    this['_' + name] = newValue;

                    // обновляем значение в целевом объекте
                    // console.log("target[name]: " + target[name]);
                    // console.log("newValue: " + newValue);
                    // target[name] = newValue;
                    // console.log("target: %o", target);
                    // console.log("target[name]: " + target[name]);

                    // console.log("domElement: ", domElement);
                    // console.log("name: ", name);
                        
                    // если значение было изменено из целевого обюъекта
                    if (domElement) {

                        if (String(domElement.value) !== String(newValue)) {
                            // обновляем его в domElement
                            domElement.value = self.parseValueToView(newValue, self.bind[name].type);
                            // console.log("domElement.value: ", domElement.value);
                        }
                    }
                },
                
                get: function() {
                    console.log("name: ", name , self.bind[name].type);
                    return self.parseValue(this['_' + name], self.bind[name].type);
                },   
                
                configurable: false
            });
        }
        console.groupEnd();
    }



    // -------------------------------------------------------
    // Слот | Если изменилось значение в domElement
    //
    slotElementChange(event) {
        console.group("Class DataHendler.slotElementChange");

        let name = Object.keys(this.bind).find(key => this.bind[key].domElement === event.target);

        let bind = this.bind[name];

        this.data[bind.name] = this.parseDomElementValue(event.target, bind.type);

        // устанавливаем флаг, что набор данных изменен
        this._changed = true;

        // вызываем метод по изменению, если привязан
        if (this.onChange) {this.onChange(event);}
        console.groupEnd();
    }
    
    
    
    // -------------------------------------------------------
    // Метод | Парсит значение из domElement в соответствии с типом
    //
    parseDomElementValue(domElement, type) {

        return this.parseValueFromView(domElement.value, type);
    }


    
    // -------------------------------------------------------
    // Метод | Парсит значение в соответствии с типом
    //         data <-> data
    //
    parseValue(value, type) {

        let parsed;
        switch(type) {
            case 'int':
                parsed = parseInt(value, 10);
                return isNaN(parsed) ? 0 : parsed;
            case 'uint':
                parsed = parseInt(value, 10);
                return isNaN(parsed) ? 0 : parsed;
            case 'float':
                parsed = parseFloat(value);
                return isNaN(parsed) ? 0 : parsed;
            case 'text':
                return value;
            case 'color':
                return value ? value.replace("#", "") : '000000';
            case 'list':
                return value;
            default:
                return value;
        }
    }



    // -------------------------------------------------------
    // Метод | Парсит значение в соответствии с типом
    //         view -> data
    //
    parseValueFromView(value, type) {

        let parsed;
        switch(type) {
            case 'int':
                parsed = parseInt(value, 10);
                return isNaN(parsed) ? 0 : parsed;
            case 'uint':
                parsed = parseInt(value, 10);
                return isNaN(parsed) ? 0 : parsed;
            case 'float':
                parsed = parseFloat(value);
                return isNaN(parsed) ? 0 : parsed;
            case 'text':
                return value;
            case 'color':
                return value.replace("#", "");
            case 'list':
                return value;
            default:
                return value;
        }
    }



    // -------------------------------------------------------
    // Метод | Парсит значение в соответствии с типом
    //         data -> view
    //
    parseValueToView(value, type) {

        let parsed;
        switch(type) {
            case 'int':
                parsed = parseInt(value, 10);
                return (isNaN(parsed) || (parsed == 0)) ? '' : parsed;
            case 'uint':
                parsed = parseInt(value, 10);
                return (isNaN(parsed) || (parsed == 0)) ? '' : parsed;
            case 'float':
                parsed = parseFloat(value);
                return (isNaN(parsed) || (parsed == 0)) ? '' : parsed;
            case 'text':
                return value;
            case 'color':
                return '#' + value;
            case 'list':
                return value;
            default:
                return value;
        }
    }



    // -------------------------------------------------------
    // Метод | Возвращает массив для отправки на сервер в формате json
    //
    parse(targetObject = null) {
        
        var array = {};

        var target = targetObject ? targetObject : this._target;
        // console.log("target: %o", target);

        var names = Object.keys(dataModel);
        // console.log("names: %o", names);

        names.forEach( name => {
            if (name[0] != '_') {
                if (name != 'item') {
                    if (typeof dataModel[name] == 'number') {
                        array[name] = isNaN(target[name]) ? 0 : target[name];
                    } else {
                        array[name] = target[name] ? target[name] : 'NULL';
                    }
                }
            }
        })
        if ((target['item']) && (target['item'].length)) {
            array['item'] = [];
            target['item'].forEach( item => {
                array['item'].push(this.parse(item));
            });
        }
        // console.log("array: %o", array);
        return array;
    }
}





// =======================================================
// Класс | PlacePattern
//         Работает с одним элементом - прототипом места хранения
//         через dataHendler
//         Рисует элемент и внутренние элементы и
//         передает вычисленные данные в dataHendler.data
//
class PlacePattern {

    
    // -------------------------------------------------------
    // Метод | Создаем элемент
    constructor(canvas, dataHendler) {
        console.group("class PlacePattern.constructor");
        
        this.dh = dataHendler;
        this.dh.onChange = (event) => this.update(event);

        this._settings = null;
        this._normalView = null;
        this._turnedView = null;

        this._iTypeCount = 0;

        // Графические свойства отображения
        //
        this._canvas = canvas;       // объект canvas на котором элемент будет отображен
        this._ctx = this._canvas.getContext('2d');

        this._selectedColor = shadeColor(this._color, -20);
        this._mouseOverColor = "#ff0000" //shadeColor(this._color, -90);

        this._border = 0;           // толщина рамки в % от меньшего габарита viewBox
        this._mouseOverBorder = 20; // толщина рамки в % от меньшего габарита viewBox когда указатель мыши над элементом
        this._borderColor = "#000000";
        this._iborder = 0;          // толщина рамки внутренних размеров в % от меньшего габарита viewBox
        this._iBorderColor = "#000000"; // цвет рамки внутренних размеров

        this._showText = false;     // если true, то элемент показывает текст
        this._textColor = "#ffffff";    // цвет текста, белый по умолчанию
        
        // Геометрические сврйства элемента
        //
        this._scale = 1;            // масштаб отображения на canvas

        this._autoFit = 'contain';     // contain / none

        this._padding = 0;          // внутренний отступ в % от меньшего габарита viewBox
        // this._margin = 1.0;         // внешний отступ (1 - без отсьупа, 1.01 - отступ в 1%)
        
        this._viewBox = {           // размер прямоугольника в который должен вписаться элемент при autoFit != 'none
            x: 0,
            y: 0,
            wx: this._canvas.width,
            wy: this._canvas.height
        }    
        
        // расположение элемента в контейнере
        //  это соответствие пространственных осей элемента осям его контейнера
        this._disposition = {
            x: 'x',
            y: 'y',
            wx: 'wx',
            wy: 'wy',
            wz: 'wz'
        };

        // поведенческие свойства элемента
        //
        this._inRow = 0;            // элемент встает в один ряд с предыдущим 
        this._depth = 0;            // количество уровней внутренних элементов
        this._turned = 0;           // элемент отображается повернутым
        this._hidden = true;        // если true, то элемент невидимый
        this._active = false;       // если true, то элемент будет реагировать на указатель мыши
        this._mouseOver = false;    // когда указатель мыши над элементом true
        this._selected = false;     // статуса ВЫБРАН / НЕ ВЫБРАН 
        this._changed = true;       // если true, то элемент был изменен
        this._new = true;           // если true, то элемент новый и его нет в базе данных

        this.onChange;

        console.log("this: %o", this);
        console.groupEnd();
    }



    // -------------------------------------------------------
    // Свойство | id элемента в базе данных
    //
    set id(value) {
        this._id = value;
        this.dh.target = dataSet[value];
        this.update();
    }

    get id() {return this._id;}



    // -------------------------------------------------------
    // Свойство | id базового прототипа элемента в базе данных
    //
    set archetype_id(value) {
        
        // копируем все поля из целевого объекта в модель данных
        this.dh.data.archetype_id = value;

        const keys = [
            // name: '',
            // code: '',
            'iwx',
            'iwy',
            'iwz',
            'volume',
            'payload',
            'nature_id',
            'wx',
            'wy',
            'wz',
            'wxs1',
            'wys2',
            'wzs3',
            // archetype_id: 0,
        ];

        keys.forEach( key => {
            this.dh.data[key] = dataSet[value][key];
        });
                
        this.update();
    }

    get archetype_id() {return this._archetype_id;}



    // -------------------------------------------------------
    // Свойство | Настройки рисования элементов и содержимого
    //
    set normalView(value) {
        this._normalView = value;
    }

    get normalView() {return this._normalView;}



    // -------------------------------------------------------
    // Свойство | Настройки рисования элементов и содержимого
    //
    set turnedView(value) {
        this._turnedView = value;
    }

    get turnedView() {return this._turnedView;}



    // -------------------------------------------------------
    // Свойство | Настройки рисования элементов и содержимого
    //
    set settings(value) {
        this._settings = value;
        this._disposition = this._settings.disposition;
        // this.update();
    }

    get settings() {return this._settings;}



    // -------------------------------------------------------
    // Свойство | Количество типов внутренних элементов
    //
    set iTypeCount(value) {
        this._iTypeCount = value;
        this.update();
    }

    get iTypeCount() {return this._iTypeCount;}



    // -------------------------------------------------------
    // Свойство | Элемент canvas на котором элемент себя рисует
    //
    set canvas(value) {
        this._canvas = value;
                
        // получаем 2d контекст (объект для вывода всей графики)
        this._ctx = this._canvas.getContext('2d');
    }

    get canvas() {return this._canvas;}



    // -------------------------------------------------------
    // Свойство | Рамка элемента когда указатель мыши на ним
    //
    set border(value) {this._border = value;}

    get border() {return this._border;}



    // -------------------------------------------------------
    // Свойство | Цвет рамки
    //
    set borderColor(value) {this._borderColor = value;}

    get borderColor() {return this._borderColor;}



    // -------------------------------------------------------
    // Свойство | Рамка внутренних размеров элемента
    //
    set iBorder(value) {this._iBorder = value;}

    get iBorder() {return this._iBorder;}



    // -------------------------------------------------------
    // Свойство | Цвет рамки внутренних размеров
    //
    set iBorderColor(value) {this._iBorderColor = value;}

    get iBorderColor() {return this._iBorderColor;}



    // -------------------------------------------------------
    // Свойство | Если true, элемент выводит текст
    //
    set showText(value) {this._showText = value;}

    get showText() {return this._showText;}



    // -------------------------------------------------------
    // Свойство | Цвет текста
    //
    set textColor(value) {this._textColor = value;}

    get textColor() {return this._textColor;}



    // -------------------------------------------------------
    // Свойство | масштаб отображения MAX(wx/dispW, wy/dispH) мм/px
    //
    set scale(value) {this._scale = value;}

    get scale() {return this._scale;}



    // -------------------------------------------------------
    // Свойство | Если true, то элемент впишет себя во viewBox
    //
    set autoFit(value) {
        this._autoFit = value;
        this.autoScale();
    }

    get autoFit() {return this._autoFit;}



    // -------------------------------------------------------
    // Свойство | Отступ цветного прямоугольбник от краев элемента
    //
    set padding(value) {this._padding = value;}

    get padding() {return this._padding;}



    // -------------------------------------------------------
    // Свойство | Прямоугольник в котором элемент рисует себя
    //
    set viewBox(value) {
        this._viewBox = value;
        if (this._autoFit == 'contain') {this.autoScale();}
    }

    get viewBox() {return this._viewBox;}



    // -------------------------------------------------------
    // Свойство | Соответствие координат и размеров элемента 
    //            координатам и размерам отображения
    //
    set disposition(value) {
        this._disposition = value;
        // if (this._autoFit == 'contain') {this.autoScale();}
    }

    get disposition() {return this._disposition;}



    // -------------------------------------------------------
    // Свойство | Определяет реагирует ли элемент на указатель мыши
    //
    set active(value) {
        this._active = value;
    }

    get active() {return this._active;}



    // -------------------------------------------------------
    // Свойство | Определяет выбран ли элемент пользователем
    //
    set selected(value) {
        this._selected = value;
        this.draw();
    }

    get selected() {return this._selected;}



    // -------------------------------------------------------
    // Свойство | Если true, то элемента еще нет в базе данных
    //
    set new(value) {this._new = value;}

    get new() {return this._new;}



    // -------------------------------------------------------
    // Метод | Расчет масштаба отображения элемента
    //
    autoScale() {
        // console.groupCollapsed("class PackageContainerItem.updateScale { );

        if (this._autoFit == 'contain') {
            
            let wx = parseFloat(this.dh.data[this._disposition.wx]);
            let wy = parseFloat(this.dh.data[this._disposition.wy]);

            let xScale = wx / this._viewBox.wx;
            let yScale = wy / this._viewBox.wy;
    
            this._scale = Math.max(xScale, yScale);
    
            this.dh.data.x = (this._viewBox.wx * this._scale - wx) / 2;
            this.dh.data.y = (this._viewBox.wy * this._scale - wy) / 2;
        }

        // console.groupEnd();
    }



    // -------------------------------------------------------
    // Метод | Стирает элемент на <canvas>
    //         Если clearCanvas = true, то элемент очистит весь canvas
    //
    clear(clearCanvas) {

        let x, y, wx, wy;

        // если надо очистить всю область canvas
        if (clearCanvas) {

            x = 0;
            y = 0;
            wx = this._canvas.width;
            wy = this._canvas.height;
        } else {

            x = this._viewBox.x + this.dh.data[this._disposition.x];
            y = this._viewBox.y + this.dh.data[this._disposition.y];
            wx = this.dh.data[this._disposition.wx];
            wy = this.dh.data[this._disposition.wy];
        }

        this._ctx.save();
        this._ctx.scale(1/this._scale, 1/this._scale);

        this._ctx.clearRect(x, y, wx, wy);

        this._ctx.restore();
    }



    // -------------------------------------------------------
    // Метод | Делает элемент невидимым
    //
    hide() {
        if (!this._hidden) {

            this._hidden = true;
            
            // стираем элемент
            this.clear(true);
        }
    }



    // -------------------------------------------------------
    // Метод | Делает элемент видимым
    //
    show() {
        this._hidden = false;
        
        // рисуем элемент
        this.draw();
    }
    

    
    // -------------------------------------------------------
    // Метод | Рисуем рамку если есть ._border > 0
    //         Закрашиваем прямоугольник на 
    //         Графику выводлим на ._canvas.context
    //         Пишем текст если эелемент активный ._active = true
    //         
    drawCube(viewBox, x, y, wx, wy, iwx, iwy, color, selected, ctx, scale, text) {

        var _color = selected ? this._selectedColor : color;
        var borderColor = this._mouseOver ? this._mouseOverColor : this._borderColor;
        var border = this._mouseOver ? scale * this._mouseOverBorder / 10 : scale * this._border / 10;
        var iBorderColor = this._iBorderColor;
        var iBorder = scale * this._iBorder / 10;
        var padding = scale * this._padding / 10;

        var _x = viewBox.x + x + padding;
        var _y = viewBox.y + y + padding;
        var _wx = wx - padding * 2;
        var _wy = wy - padding * 2;

        var _ix = viewBox.x + x + (wx - iwx) / 2;
        var _iy = viewBox.y + y + (wy - iwy) / 2;
        var _iwx = iwx;
        var _iwy = iwy;

        ctx.save();
        ctx.scale(1/scale, 1/scale);

        // рисуем прямоугольник
        ctx.fillStyle = _color;
        ctx.fillRect(
            _x,
            _y,
            _wx,
            _wy
        );
        
        // рисуем рамку
        if (border > 0) {
            ctx.lineWidth = border;
            ctx.strokeStyle = borderColor;

            ctx.strokeRect(
                _x + border,
                _y + border,
                _wx - border * 2,
                _wy - border * 2
            );
        }

        // рисуем рамку внутренних размеров
        if (iBorder > 0) {
            ctx.lineWidth = iBorder;
            ctx.strokeStyle = iBorderColor;

            ctx.strokeRect(
                _ix + iBorder,
                _iy + iBorder,
                _iwx - iBorder * 2,
                _iwy - iBorder * 2
            );
        }

        // показываем текст
        if (this._showText) {

            ctx.fillStyle = '#ffffff';
            ctx.font = Math.min(_wx, _wy) * 0.5 + 'px CoreSansDS25Light';
            ctx.fillText(text, _x + _wx * 0.05, _y + _wy * 0.9, _wx * 0.9);
        }

        ctx.restore();
    }



    // -------------------------------------------------------
    // Метод | Вызывает метод рисования прямоугольника с нужными параметрами
    //
    draw() {
            // console.log("class PlacePattern.draw{ id=" + this._id);

            this.drawCube(
            // window.requestAnimationFrame(() => this.drawCube(
                this._viewBox,
                this.dh.data[this._disposition.x],
                this.dh.data[this._disposition.y],
                this.dh.data[this._disposition.wx],
                this.dh.data[this._disposition.wy],
                this.dh.data['i' + this._disposition.wx],
                this.dh.data['i' + this._disposition.wy],
                this.dh.data.color,
                this.selected,
                this._ctx,
                this._scale,
                this.dh.data.code
            );
            // console.log("class PlacePattern.draw }");
    }



    // -------------------------------------------------------
    // Метод | Перерисовывает ячейку на <canvas>
    //
    reDraw() {
        if (!this._hidden) {

            this.clear();
            this.draw();
        }
    }



    // -------------------------------------------------------
    // Метод | Обновляем элемент и все его содержимое
    //
    createNew() {
        console.group("class PlacePattern.createNew");

        if (this.dh.data) {

            for(let key in dataModel) {
                this.dh.data[key] = dataModel[key];
            }
            this._new = true;
        }

        this.update();
        console.log('this: %o', this);
        console.groupEnd();
    }



    // -------------------------------------------------------
    // Метод | Обновляем элемент и все его содержимое
    //
    update() {
        console.group("class PlacePattern.update");

        if (this.dh.data) {

            // настройки отображения
            this.settings = this.dh.data.turned ? this.turnedView : this.normalView;

            // масштабируем элемент в размеры viewBox;
            this.autoScale();
            
            // очищаем элемент
            this.clear(true);
            
            // рисуем прямоугольник по размерам самого объекта
            this.draw();

            // обновляем внутренние элементы
            this.updateItems();
        }
            
        console.log('this: %o', this);
        console.groupEnd();
    }



    updateItems() {
        console.group("class PlacePattern.updateItems");
        console.log('dataSet: %o', dataSet);

        // массив внутренних типов
        let iType = [];

        // перебираем типы внутренних элементов
        for(let index = 1; index <= this.iTypeCount; index++) {
            let id = parseInt(this.dh.data['sub' + index + '_id'] ? this.dh.data['sub' + index + '_id'] : null);
            if (id && this.dh.data['x' + index] && this.dh.data['y' + index]) {

                iType[index] = {
                    id:      id,                            // идентификатор типа внутреннего элемента
                    inrow:   parseInt(dataSet[ id ]['inrow' + index]),  // флаг объединения типов внутренних элементов в ряд 
                    x:       this.dh.data['x' + index],     // количество по горизонтали
                    y:       this.dh.data['y' + index],     // количество по вертикали
                    wx:      parseInt(dataSet[ id ]['wx']),           // ширина внутреннего элемента
                    wy:      parseInt(dataSet[ id ]['wy'])            // высота внутреннего элемента
                };
                console.log('iType: %o', iType);
            }
        }

        // массив рядов внутренних элементов
        let rows = [];
        let rowIndex = 0;   // индекс ряда от 0

        // перебираем типы внутрениих элементов и делаем массив рядов
        iType.forEach( (item, index) => {
            let id = this.dh.data['sub' + index + '_id'] ? this.dh.data['sub' + index + '_id'] : null;
            if (id) {
                if (item.inRow) {

                    rowIndex++; // индекс ряда от 0
                } else {
                    for(let y = 1; y <= item.y; y++) {
                        let rowWx = dataSet[ id ][this._settings.item.disposition.wx] * item.x; // суммараная ширина элементов ряда
                        rows[rowIndex] = {
                            id:     item.id,                // идентификатор типа внутр. эл-ов ряда
                            count:  item.x,                 // количество элементов в ряду
                            wx:     rowWx,                          // суммараная ширина элементов ряда
                            wy:     parseInt(dataSet[ id ][this._settings.item.disposition.wy], 10),  // высота элементов ряда
                            dx:     (this.dh.data.wx - rowWx) / item.x // расстояние между элементами ряда
                        };
                        rowIndex++; // индекс ряда от 0
                    }
                }
            }
        }, this);

        if (rows.length > 0) {
            let wyTotal = rows.reduce( function(dyTotal, row) {return dyTotal + row.wy}, 0);    // суммарная высота рядов внутр. эл-ов

            let y = 0;

            let dy = (this.dh.data[this._settings.item.disposition.wy] - wyTotal) / (rows.length + 1);

            // рисуем внутренние элементы
            for(let rowIndex = 0; rowIndex < rows.length; rowIndex++) {    // перебор рядов от 0
                
                let x = 0;

                let dx = (this.dh.data[this._settings.item.disposition.wx] - rows[rowIndex].wx) / (rows[rowIndex].count + 1);  // расстояние между элементами ряда

                y += dy;   // координата y текжего ряда
                
                for(let itemIndex = 0; itemIndex < rows[rowIndex].count; itemIndex++) {    // перебор элементов ряда

                    x += dx;   // координата x текущего элемента ряда
                
                    this.drawCube(
                    // window.requestAnimationFrame(() => this.drawCube(
                        {x: this.dh.data.x, y: this.dh.data.y,
                            wx: this.dh.data[this._settings.item.disposition.wx],
                            wy: this.dh.data[this._settings.item.disposition.wy]
                        },
                        x,
                        y,
                        dataSet[rows[rowIndex].id][this._settings.item.disposition.wx],
                        dataSet[rows[rowIndex].id][this._settings.item.disposition.wy],
                        dataSet[rows[rowIndex].id]['i' + this._settings.item.disposition.wx],
                        dataSet[rows[rowIndex].id]['i' + this._settings.item.disposition.wy],
                        dataSet[rows[rowIndex].id].color,
                        this.selected,
                        this._ctx,
                        this._scale,
                        dataSet[rows[rowIndex].id].code,
                    );
                    // console.log("class PlacePattern.draw }");

                    x += parseInt(dataSet[rows[rowIndex].id][this._settings.item.disposition.wx]);
                }
                y += rows[rowIndex].wy;
            }
        }
        console.groupEnd();
    }
}