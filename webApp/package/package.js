"use strict";

// Глубина логирования
// 0 - логирование отключено
// logEnt - только входы и выходы в блоки кода
// logInf - только информационные сообщения
// logErr - сообщения об ошибках
// logDat - вывод данных, значений, контейнеров
var logLevel = 1;


function log() {
    if (logLevel === 0) {
        return false;
    } else {
        
        console.log(arguments);
    }
}


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
// Класс | PackageSimple
//         место хранения, простого типа, 
//         состоящее из одного элементарного элемента 
//
class PackageSimple {

    
    // -------------------------------------------------------
    // Метод | Создаем элемент
    constructor(id = 0, canvas) {
        console.group("class PackageSimple.constructor { id: %i", id);
        
        this.hashCode = generateId(7);
        // технологические свойства элемента
        //
        this._id = id;
        this._code;                 // обозначение
        this._name;                 // наименование 
        this._material;             // название материала из которого сделан
        this._payload;              // вес который выдерживает

        // Графические свойства отображения
        //
        this._canvas = canvas;       // объект canvas на котором элемент будет отображен
        this._ctx = this._canvas.getContext('2d');

        this._color = '#646464';    // цвет элемента (по умолчанию #646464)
        this._selectedColor = shadeColor(this._color, -20);
        this._mouseOverColor = shadeColor(this._color, -90);

        this._border = 0;           // толщина рамки в % от меньшего габарита viewBox
        this._mouseOverBorder = 20; // толщина рамки в % от меньшего габарита viewBox когда указатель мыши над элементом
        this._borderColor = "#000000";

        this._showText = false;     // если true, то элемент показывает текст
        this._textColor = "#ffffff";    // цвет текста, белый по умолчанию
        
        // Геометрические сврйства элемента
        //
        this._yScale = 1;           // масштаб по вертикали
        this._xScale = 1;           // масштаб пл горизонтали
        this._scale = 1;            // масштаб отображения на canvas

        this._autoFit = 'none';     // contain / none

        this._padding = 0;          // внутренний отступ в % от меньшего габарита viewBox
        // this._margin = 1.0;         // внешний отступ (1 - без отсьупа, 1.01 - отступ в 1%)
        
        this._x = 0;                // координаты верхнего левого угла прямоугольника элемента
        this._y = 0;                // координаты верхнего левого угла прямоугольника элемента

        this._wx = 0;               // размер вправо от левого верхнего угла с фронта
        this._wy = 0;               // размер вниз от левого верхнего угла с фронта

        this._viewBox = {           // размер прямоугольника в который должен вписаться элемент при autoFit != 'none
            x: 0,
            y: 0,
            wx: this._canvas.width,
            wy: this._canvas.height
        }    
        
        // расположение элемента в контейнере
        //  это соответствие пространственных осей элемента осям его контейнера
        this.disposition = {
            x: 'x',
            y: 'y',
            wx: 'wx',
            wy: 'wy',
            wz: 'wz'
        };

        // поведенческие свойства элемента
        //
        this._hidden = true;        // если true, то элемент невидимый
        this._active = false;       // если true, то элемент будет реагировать на указатель мыши
        this._mouseOver = false;    // когда указатель мыши над элементом true
        this._selected = false;     // статуса ВЫБРАН / НЕ ВЫБРАН 
        this._changed = false;      // если true то элемент был изменен

        console.groupEnd();
    }


    // -------------------------------------------------------
    // Свойство | масштаб отображения MAX(wx/dispW, wy/dispH) мм/px
    //
    set id(value) {this._id = value;}

    get id() {return this._id;}


    // -------------------------------------------------------
    // Свойство | масштаб отображения MAX(wx/dispW, wy/dispH) мм/px
    //
    set code(value) {this._code = value;}

    get code() {return this._code;}


    // -------------------------------------------------------
    // Свойство | масштаб отображения MAX(wx/dispW, wy/dispH) мм/px
    //
    set name(value) {this._name = value;}

    get name() {return this._name;}


    // -------------------------------------------------------
    // Свойство | масштаб отображения MAX(wx/dispW, wy/dispH) мм/px
    //
    set material(value) {this._material = value;}

    get material() {return this._material;}


    // -------------------------------------------------------
    // Свойство | масштаб отображения MAX(wx/dispW, wy/dispH) мм/px
    //
    set payload(value) {this._payload = value;}

    get payload() {return this._payload;}


    // -------------------------------------------------------
    // Свойство | 
    //
    set canvas(value) {
        this._canvas = value;
                
        // получаем 2d контекст (объект для вывода всей графики)
        this._ctx = this._canvas.getContext('2d');
    }

    get canvas() {return this._canvas;}


    // -------------------------------------------------------
    // Свойство | 
    //
    set color(value) {
        this._color = value;
        this._selectedColor = shadeColor(this._color, -20);
    }

    get color() {return this._color;}


    // -------------------------------------------------------
    // Свойство | 
    //
    set border(value) {this._border = value;}

    get border() {return this._border;}


    // -------------------------------------------------------
    // Свойство | 
    //
    set borderColor(value) {this._borderColor = value;}

    get borderColor() {return this._borderColor;}


    // -------------------------------------------------------
    // Свойство | 
    //
    set showText(value) {this._showText = value;}

    get showText() {return this._showText;}


    // -------------------------------------------------------
    // Свойство | 
    //
    set textColor(value) {this._textColor = value;}

    get textColor() {return this._textColor;}


    // -------------------------------------------------------
    // Свойство | масштаб отображения MAX(wx/dispW, wy/dispH) мм/px
    //
    set scale(value) {this._scale = value;}

    get scale() {return this._scale;}


    // -------------------------------------------------------
    // Свойство | 
    //
    set autoFit(value) {
        this._autoFit = value;
        this.setSize(this._wx, this._wy, this._wz, true);
    }

    get autoFit() {return this._autoFit;}


    // -------------------------------------------------------
    // Свойство | 
    //
    set padding(value) {this._padding = value;}

    get padding() {return this._padding;}


    // -------------------------------------------------------
    // Свойство | масштаб отображения MAX(wx/dispW, wy/dispH) мм/px
    //
    set x(value) {
        this._x = value;
        this.setSize(this._wx, this._wy, this._wz, true);
    }

    get x() {return this._x;}


    // -------------------------------------------------------
    // Свойство | масштаб отображения MAX(wx/dispW, wy/dispH) мм/px
    //
    set y(value) {
        this._y = value;
        this.setSize(this._wx, this._wy, this._wz, true);
    }

    get y() {return this._y;}


    // -------------------------------------------------------
    // Свойство | масштаб отображения MAX(wx/dispW, wy/dispH) мм/px
    //
    set wx(value) {
        this.setSize(value, this._wy, this._wz, true);
    }
        
    get wx() {return this._wx;}
        
        
    // -------------------------------------------------------
    // Свойство | масштаб отображения MAX(wx/dispW, wy/dispH) мм/px
    //
    set wy(value) {
        this.setSize(this._wx, value, this._wz, true);
    }
    
    get wy() {return this._wy;}
    
    
    // -------------------------------------------------------
    // Свойство | масштаб отображения MAX(wx/dispW, wy/dispH) мм/px
    //
    set wz(value) {
        this.setSize(this._wx, this._wy, value, true);
    }

    get wz() {return this._wz;}


    // -------------------------------------------------------
    // Свойство | масштаб отображения MAX(wx/dispW, wy/dispH) мм/px
    //
    set viewBox(value) {
        this._viewBox = value;
        this.setSize(this._wx, this._wy, this._wz, true);
    }

    get viewBox() {return this._viewBox;}


    // -------------------------------------------------------
    // Свойство | 
    //
    set active(value) {
        this._active = value;
        // this.draw();
    }

    get active() {return this._active;}


    // -------------------------------------------------------
    // Свойство | 
    //
    set selected(value) {
        this._selected = value;
        this.draw();
    }

    get selected() {return this._selected;}


    // -------------------------------------------------------
    // Свойство | 
    //
    set changed(value) {this._changed = value;}

    get changed() {return this._changed;}


    // -------------------------------------------------------
    // Метод | Изменение размеров элемента
    //
    setSize(
        wx = 0, // размер элемента по горизонтали по оси y
        wy = 0, // размер элемента по горизонтали по оси x
        wz = 0,   // высота элемента
        force = false) {

        // console.groupCollapsed("class PackageContainerItem.setSize { id=%o; wx=%o; wy=%o; wh=%o; force=%o", this._id, wx, wy, wz, force);
        
        // если размеры элемента изменились
        if ((this._wx != wx) || (this._wy != wy) || (this._wz != wz) || force) {

            // сохраняем новые значения размеров
            this._wx = wx;
            this._wy = wy;
            this._wz = wz;
         
            // Определяем поведение autoFit 
            switch (this._autoFit) {

                // если autoFit = 'contain' то подгоняем масштаб что бы вписать элемент в контейнер не изменяя пропорции
                case 'contain':
                    // console.log("autoFit : contain");

                    this._xScale = this._wx / this._viewBox.wx;
                    this._yScale = this._wy / this._viewBox.wy;

                    this._scale = Math.max(this._xScale, this._yScale);

                    this._x = (this._viewBox.wx * this._scale - this._wx) / 2;
                    this._y = (this._viewBox.wy * this._scale - this._wy) / 2;

                    // console.log("viewBox: %o", this._viewBox);
                    // console.log("_xScale=" + this._xScale + " _yScale=" + this._yScale);
                    
                    // console.log("_scale=" + this._scale);
                    // console.log("_x=" + this._x  + " _y=" + this._y);
                    break;

                // если autoFit = 'none' то не меняем масштаб вписывае
                case 'none':

                    // console.log("autoFit : none");
                    break;
            }
        }
        // console.groupEnd();
    }

    
    // Стираем ячейку на <canvas>
    clear(clearCanvas) {

        // если надо очистить всю область canvas
        if (clearCanvas) {

            this._ctx.clearRect(0, 0, canvas.width, canvas.height);
        } else {

            var x = this['_' + this.disposition.x];
            var y = this['_' + this.disposition.y];
            var wx = this['_' + this.disposition.wx];
            var wy = this['_' + this.disposition.wy];
            var wz = this['_' + this.disposition.wz];
    
            this._ctx.save();
            this._ctx.scale(1/this._scale, 1/this._scale);
    
            this._ctx.clearRect(this._viewBox.x + x, this._viewBox.y + y, wx, wy);
    
            this._ctx.restore();
        }
    }


    // делаем элемент не видимым
    hide() {
        if (!this._hidden) {

            this._hidden = true;
            
            // стираем элемент
            this.clear(true);
        }
    }


    // делаем элемент видимым
    show() {
        this._hidden = false;
        
        // рисуем элемент
        this.draw();
    }
    
    
    // Метод | Рисуем рамку если есть ._border > 0
    //         Закрашиваем прямоугольник на 
    //         Графику выводлим на ._canvas.context
    //         Пишем текст если эелемент активный ._active = true
    //         
    drawCube(x, y, wx, wy, wz, selected, ctx, scale, text) {

        var color = selected ? this._selectedColor : this._color;
        var borderColor = this._mouseOver ? this._mouseOverColor : this._borderColor;
        var border = this._mouseOver ? scale * this._mouseOverBorder / 10 : scale * this._border / 10;
        var padding = scale * this._padding / 10;

        var _x = this._viewBox.x + x + padding;
        var _y = this._viewBox.y + y + padding;
        var _wx = wx - padding * 2;
        var _wy = wy - padding * 2;

        ctx.save();
        ctx.scale(1/scale, 1/scale);

        // рисуем прямоугольник
        ctx.fillStyle = color;
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

        // показываем текст
        if (this._showText) {

            ctx.fillStyle = '#ffffff';
            ctx.font = _wx * 0.5 + 'px CoreSansDS25Light';
            ctx.fillText(text, _x + _wx * 0.05, _y + _wy * 0.9, _wx * 0.9);
        }

        ctx.restore();
    }


    // Рисуем ячйку на <canvas>
    draw() {

        if (!this._hidden) {

            // console.log("class PackageSimple.draw{ id=" + this._id);

            // this.ctx.fillRect(this.x, this.y, this.width, this.height);
            window.requestAnimationFrame(() => this.drawCube(
                this['_' + this.disposition.x],
                this['_' + this.disposition.y],
                this['_' + this.disposition.wx],
                this['_' + this.disposition.wy],
                this['_' + this.disposition.wz],
                this.selected,
                this._ctx,
                this._scale,
                this._code
            ));
            // console.log("class PackageSimple.draw }");
        }
    }


    // перерисуем ячейку на <canvas>
    reDraw() {
        if (!this._hidden) {

            this.clear();
            this.draw();
        }
    }
}





// =======================================================
// Класс | PackageContainerItem
//         Контеейнер для хранения элементов в двумерном массиве
//         Сам является элементарным элементом, наследником PackageSimple
//         И так же может включать в себя любое количемтво элеементов типра PackageSimple 
//         Элементы располагаются в горизонтальных рядах,
//         Каждый ряд может содержать в себе любое количество элементов
//         количество рядов хранится в свойстве rowCount
//         количество элементов в i-том ряде в свойстве colCount(i)
//
class PackageContainerItem extends PackageSimple {

    // -------------------------------------------------------
    // Метод | Создаем элемент
    //           Если передать data то из этой структуры
    //         будут взяты все параметры элемента и будут созданы внутренние элементы
    //         формат структуры:
    //              {
    //                  id: "0",
    //                  code: "",
    //                  name: "",
    //                  color: "000000",
    //                  x: "".
    //                  y: "".
    //                  z: "".
    //                  wx: "",
    //                  wy: "",
    //                  wz: "",
    //                  payload: "",
    //                  item: [],               // массив внутренних элементов
    //                  material_id: null,
    //                  material_name: null,
    //                  photo_id: null,
    //                  created: null,
    //                  updated: null,
    //                  deleted: null
    //              }
    //
    constructor(data, settings, canvas) {
        console.groupCollapsed("class PackageContainerItem.constructor { data: %i", data.id);

        // вызов конструктора родителя
        super(data.id, canvas);

        // массив внутренних элементов
        this.item = [];

        // массив выделенных элементов
        this.selectedItem = [];

        // создаем внутренние элементы
        this.createItems(data.item, settings.item);

        console.groupEnd();
    }


    // -------------------------------------------------------
    // Свойство | 
    //
    set color(value) {
        if (this._color != value) {
            if (!this._hidden) {this.clear();}
            super.color = value;
            if (!this._hidden) {this.draw();}
        }
    }

    get color() {return this._color;}


    // -------------------------------------------------------
    // Свойство | 
    //
    set border(value) {
        if (this._border != value) {
            if (!this._hidden) {this.clear();}
            super.border = value;
            if (!this._hidden) {this.draw();}
        }
    }

    get border() {return this._border;}


    // -------------------------------------------------------
    // Свойство | 
    //
    set borderColor(value) {
        if (this._borderColor != value) {
            if (!this._hidden) {this.clear();}
            super.borderColor = value;
            if (!this._hidden) {this.draw();}
        }
    }

    get borderColor() {return this._borderColor;}


    // -------------------------------------------------------
    // Свойство | масштаб отображения MAX(wx/viewBox.wx, wy/viewBox.wy) мм/px
    //
    set scale(value) {

        if (this._scale != value) {

            if (!this._hidden) {this.clear(true);}

            // обновляем масштаб элемента
            super.scale = value;
    
            // обновляем масштаб внутренних элементов
            this.item.forEach( subItem => {
                subItem.scale = this._scale;
            });

            if (!this._hidden) {this.draw();}
        }
    }

    get scale() {return this._scale;}


    // -------------------------------------------------------
    // Свойство | 
    //
    set autoFit(value) {

        if (this._autoFit != value) {

            if (!this._hidden) {this.clear();}

            // обновляем autoFit элемента
            super.autoFit = value;
    
            // обновляем viewBox внутренних элементов
            this.setItemsViewBox(this._viewBox.x + this._x, this._viewBox.y + this._y, this._wx, this._wy);
    
            // обновляем масштаб внутренних элементов
            this.item.forEach( subItem => {
                subItem.scale = this._scale;
            });

            if (!this._hidden) {this.draw();}
        }
    }

    get autoFit() {return this._autoFit;}

    
    // -------------------------------------------------------
    // Свойство | 
    //
    set padding(value) {
        if (this._padding != value) {
            if (!this._hidden) {this.clear();}
            super.padding = value;
            if (!this._hidden) {this.draw();}
        }
    }

    get padding() {return this._padding;}


    // -------------------------------------------------------
    // Свойство | 
    //
    set x(value) {
        if (this._x != value) {
            if (!this._hidden) {this.clear();}
            super.x = value;
            this.setItemsViewBox(this._viewBox.x + this._x, this._viewBox.y + this._y, this._wx, this._wy);
            if (!this._hidden) {this.draw();}
        }
    }

    get x() {return this._x;}


    // -------------------------------------------------------
    // Свойство | 
    //
    set y(value) {
        if (this._y != value) {
            if (!this._hidden) {this.clear();}
            super.y = value;
            this.setItemsViewBox(this._viewBox.x + this._x, this._viewBox.y + this._y, this._wx, this._wy);
            if (!this._hidden) {this.draw();}
        }
    }

    get y() {return this._y;}


    // -------------------------------------------------------
    // Свойство | 
    //
    set wx(value) {
        if (this._wx != value) {
            if (!this._hidden) {this.clear();}
            super.wx = value;
            this.setItemsViewBox(this._viewBox.x + this._x, this._viewBox.y + this._y, this._wx, this._wy);
            if (!this._hidden) {this.draw();}
        }
    }
        
    get wx() {return this._wx;}
        
        
    // -------------------------------------------------------
    // Свойство | 
    //
    set wy(value) {
        if (this._wy != value) {
            if (!this._hidden) {this.clear();}
            super.wy = value;
            this.setItemsViewBox(this._viewBox.x + this._x, this._viewBox.y + this._y, this._wx, this._wy);
            if (!this._hidden) {this.draw();}
        }
    }
    
    get wy() {return this._wy;}
    
    
    // -------------------------------------------------------
    // Свойство | 
    //
    set wz(value) {
        if (this._wz != value) {
            if (!this._hidden) {this.clear();}
            super.wz = value;
            this.setItemsViewBox(this._viewBox.x + this._x, this._viewBox.y + this._y, this._wx, this._wy);
            if (!this._hidden) {this.draw();}
        }
    }

    get wz() {return this._wz;}


    // -------------------------------------------------------
    // Свойство | масштаб отображения MAX(wx/dispW, wy/dispH) мм/px
    //
    set viewBox(value) {

        if (!this._hidden) {this.clear();}

        // обновляем viewBox элемента
        super.viewBox = value;

        // обновляем viewBox внутренних элементов
        this.setItemsViewBox(this._viewBox.x + this._x, this._viewBox.y + this._y, this._wx, this._wy);

        if (!this._hidden) {this.draw();}
    }

    get viewBox() {return this._viewBox;}


    // -------------------------------------------------------
    // Метод | Обновляет viewBox внутренних элементов
    //
    setItemsViewBox(x, y, wx, wy) {
        if (!this._hidden) {this.clear();}
        this.item.forEach( subItem => {
            var viewBox = {x, y, wx, wy};
            viewBox.x = x;
            viewBox.y = y;
            viewBox.wx = wx;
            viewBox.wy = wy;
            subItem.viewBox = viewBox;
        });
        if (!this._hidden) {this.draw();}
    }


    // -------------------------------------------------------
    // Метод | Удаляет все внутренние элементы
    //
    createItems(data, settings) {
        console.group("class PackageContainerItem.createItems { pack: %o", this);

        // if (!this._hidden) {this.clear();}

        // если информация о внутренних элементах имеется
        if (data) {

            // то создаем массив внутренних элементов
            data.forEach(sub => {
                console.log("sub item: %o }", sub);

                var item = new PackageContainerItem(sub, settings, canvas);
                console.log("settings: %o }", settings);

                item.code = sub.code;
                item.name = sub.name;
                item.color = sub.color[0] == "#" ? sub.color : "#" + sub.color;
                item.border = settings.border ? settings.border : 0;
                item.borderColor = settings.borderColor;
                item.showText = settings.showText;
                item.textColor = settings.textColor;
                item.padding = settings.padding;
                item.disposition = settings.disposition;
                item.viewBox = {x: this._x, y: this._y, wx: this._wx, wy: this._wy};
                item.x = sub.x ? parseInt(sub.x) : 0;
                item.y = sub.y ? parseInt(sub.y) : 0;
                item.setSize(
                    parseInt(sub.wx),
                    parseInt(sub.wy),
                    parseInt(sub.wz)
                )
                item.autoFit = settings.autoFit;
                item.scale = this._scale;
                item.active = settings.active;

                this.item.push(item);
            });
        }
        // if (!this._hidden) {this.draw();}

        console.groupEnd();
    }


    // -------------------------------------------------------
    // Метод | Удаляет все внутренние элементы
    //
    clearItems() {
        console.group("class PackageContainerItem.clearItems { pack: %o", this);

        if (!this._hidden) {this.clear();}
        
        this.item = [];

        if (!this._hidden) {this.draw();}

        console.groupEnd();
    }


    // -------------------------------------------------------
    // Метод | Стираем ячейку на <canvas>
    //
    clear(clearCanvas) {
        // console.groupCollapsed("class PackageContainerItem.clear { item: %o", this);

        super.clear(clearCanvas);

        this.item.forEach( subItem => {
            subItem.clear();
        });

        // console.groupEnd();
    }

    
    // -------------------------------------------------------
    // Метод | Коннтейнер рисует себя и внутренние прямоугольники
    //
    draw() {
        // console.groupCollapsed("class PackageContainerItem.draw { item: %o", this);

        if (!this._hidden) {

            // рисуем элемент
            super.draw();

            // рисуем блоки
            this.item.forEach( subItem => {
                subItem.draw();
            });
        }
        // console.groupEnd();
    }


    // -------------------------------------------------------
    // Метод | Перерисуем элемент
    //
    reDraw() {
        // console.groupCollapsed("class PackageContainerItem.reDraw {");
        if (!this._hidden) {

            this.clear();
            this.draw();
        }
        // console.groupEnd();
    }


    // -------------------------------------------------------
    // Метод | Перерисуем все внутренние элементы
    //
    reDrawItems() {
        // console.groupCollapsed("class PackageContainerItem.reDrawItems {");
        if (!this._hidden) {

            this.item.forEach( subItem => {
                subItem.clear();
                subItem.draw();
            });
        }
        // console.groupEnd();
    }


    // -------------------------------------------------------
    // Метод | Делаем элемент не видимым
    //
    hide() {
        // console.groupCollapsed("class PackageContainerItem.hide {");
        if (!this._hidden) {

            // скрываем элемент
            super.hide();

            // скрываем внутренние элементы
            this.item.forEach( subItem => {
                subItem.hide();
            });
        }
        // console.groupEnd();
    }


    // -------------------------------------------------------
    // Метод | Делаем элемент видимым
    //
    show() {
        // console.groupCollapsed("class PackageContainerItem.show {");
        if (this._hidden) {
            
            // рисуем элемент
            super.show();

            // показываем внутренние элементы
            this.item.forEach( subItem => {
                subItem.show();
            });
        }
        // console.groupEnd();
    }
    

    // -------------------------------------------------------
    // Слот | Обрабатываем перемещение указателя мыши
    //
    // 
    mouseInRect(mouseX, mouseY) {
        // console.group("class PackageContainerItem.mouseInRect { id: %i; code: %s", this._id, this._code);    

        // приводим координаты к плоскости настроенной в .disposition
        // var x0 = this._viewBox.x;
        // var y0 = this._viewBox.y;
        var x = this['_' + this.disposition.x];
        var y = this['_' + this.disposition.y];
        var z = this['_' + this.disposition.z];
        var wx = this['_' + this.disposition.wx];
        var wy = this['_' + this.disposition.wy];
        var wz = this['_' + this.disposition.wz];

        // приводим координаты мыши в клиентской области <canvas>
        // к текущему масштабу
        var _mouseX = (mouseX * this._scale);
        var _mouseY = (mouseY * this._scale);
        
        // проверяем попадает ли указатель мыши по горизонтали в ширину ячейки
        let xClickInside = (_mouseX > (this._viewBox.x + x)) && (_mouseX < (this._viewBox.x + x + wx));
        
        // проверяем попадает ли по вертикали указатель мыши в высоту ячейки
        let yClickInside = (_mouseY > (this._viewBox.y + y)) && (_mouseY < (this._viewBox.y + y + wy));
        
        // проверяем попадание курсора в ячейку
        var mouseInRect = xClickInside && yClickInside;
        if (mouseInRect) {
            // console.log("mouse inside");    
            // console.log("mouse: [%.2f; %.2f]  [x0: %.2f y0: %.2f]  [x: %.2f y: %.2f z: %.2f]  [wx: %.2f wy: %.2f wz: %.2f]", _mouseX, _mouseY, x0, y0, x, y, z, wx, wy, wz);    
            // console.log("canvas: [%.2f; %.2f]  canvas.style[%i; %i]", this._canvas.width, this._canvas.height);
        } else {
            // console.log("click outside");    
        }
        return mouseInRect
    }

    // -------------------------------------------------------
    // Слот | Обрабатываем перемещение указателя мыши
    //
    // 
    onMouseOver(mouseX, mouseY) {
        // console.group("class PackageContainerItem.onMouseOver { id: %i; code: %s", this._id, this._code);    
        
        // если элемент видимый
        if (!this._hidden) {
        
            // передаем попадание указателя мыши в ячейку
            if (this._active && this.mouseInRect(mouseX, mouseY)) {
                
                if (!this._mouseOver) {
                    // выделенный элемент подсвечивает себя цветом
                    this._mouseOver = true;
                    this.draw();
                }
            } else {
                
                if (this._mouseOver) {

                    // перерисовываем елемент в нормальном цвете
                    this._mouseOver = false;
                    this.draw();
                }
            }

            //  передаем событие дальше внутренним элементам
            var subMouseOver = false;
            this.item.forEach( subItem => {
                subMouseOver = subItem.onMouseOver(mouseX, mouseY) || subMouseOver;
            });

            return (this._mouseOver || subMouseOver);
        } else {

            return false;
        }
        // console.groupEnd();    
    }
    
    
    // -------------------------------------------------------
    // Слот | Обрабатываем клик мышью
    // 
    onClick(mouseX, mouseY) {
        // console.group("class PackageContainerItem.onClick { pack: %o; code: %s", this, this._code);    
                
        // если элемент видимый
        if (!this._hidden) {

            // очищаем массив выделенных внутренних элементов
            this.selectedItem = [];
    
            // передаем попадание клика в ячейку
            // для изменения и запоминания нового статуса "ВЫБРАН"
            if (this._active && this.mouseInRect(mouseX, mouseY)) {
    
                if (!this._selected) {
                    // выделенный элемент подсвечивает себя цветом
                    this.selected = true;
                }
            } else {

                if (this._selected) {

                    // элемент не выделен, убирает подсвечивание себя цветом
                    this.selected = false;
                }
            }
    
            //  передаем событие дальше внутренним элементам
            var subSelected;
            this.item.forEach( subItem => {
                subSelected = subItem.onClick(mouseX, mouseY);
                if (subSelected) {
                    this.selectedItem.push(subItem);
                }
            });
    
            // возвращаем массив выбранных элементов: [this, item0.selected, item1.selected, ...]
            return (this._selected || this.selectedItem.length > 0);
        } else {

            return false;
        }
        // console.groupEnd();    
    }


    // -------------------------------------------------------
    // Слот | Обрабатываем двойной клик мышью
    // 
    onDblClick(mouseX, mouseY) {
        // console.group("class PackageContainerItem.onClick { pack: %o; code: %s", this, this._code);    
                
        // если элемент видимый
        if (!this._hidden) {

            // очищаем массив выделенных внутренних элементов
            this.selectedItem = [];
    
            // передаем попадание клика в ячейку
            // для изменения и запоминания нового статуса "ВЫБРАН"
            if (this._active && this.mouseInRect(mouseX, mouseY)) {
    
                if (!this._selected) {
                    // выделенный элемент подсвечивает себя цветом
                    this.selected = true;
                }
            } else {

                if (this._selected) {

                    // элемент не выделен, убирает подсвечивание себя цветом
                    this.selected = false;
                }
            }
    
            //  передаем событие дальше внутренним элементам
            var subSelected;
            this.item.forEach( subItem => {
                subSelected = subItem.onClick(mouseX, mouseY);
                if (subSelected) {
                    this.selectedItem.push(subItem);
                }
            });
    
            // возвращаем массив выбранных элементов: [this, item0.selected, item1.selected, ...]
            return (this._selected || this.selectedItem.length > 0);
        } else {

            return false;
        }
        // console.groupEnd();    
    }
}