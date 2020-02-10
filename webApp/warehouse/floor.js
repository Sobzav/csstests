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


// функция осветляет или затемняет цвет в парамеетре color,
// переданный в формате #rrggbb
// на велдечину percent, переданную в процентах 
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

    //_id;            // id экземпляра упаковки в базе данных
    //_code;          // обозначение
    //_name;          // наименование экземпляра упаковки 
    // _material;      // название материала из которого сделана упаковка
    // _payload;       // id линии
    // _wz;             // высота элемента
    // _wx;            // размер элемента в гортзонтальной плоскости по оси x
    // _wy;            // резмер элемента в гортзонтальной плоскости по оси y
    // width;          //
    // height;      
    // _color;         // цвет элемента (по умолчанию #202020)
    
    // _yScale;        // масштаб по вертикали
    // _xScale;        // масштаб пл горизонтали
    // _scale;         // масштаб отображения на canvas
    // _d;             // отступ от края canvas в частях от размера canvas
    // _dI;            // коэффициент для размеров элемента учитывающий отступ
    // _dC;            // коэффициент для расчета масштаба учитывающий отступ

    // статуса ВЫБРАН / НЕ ВЫБРАН 
    // _selected;

    // объект canvas на котором элемент будет отображен
    // _canvas;

    // получаем 2d контекст, 
    // это объект для вывода всей графики 
    // _ctx;

    // Создаем элемент
    constructor(id = 0, canvas) {
        console.group("class PackageSimple.constructor {");
        console.log("id = %i", id);
        
        this._hidden = true;
        
        this._id = id;

        this._color = '#202020';        // цвет элемента (по умолчанию #202020)

        this._selectedColor = shadeColor(this._color, 20);

        this._yScale = 1;     // масштаб по вертикали
        this._xScale = 1;     // масштаб пл горизонтали
        this._scale = 1;     // масштаб отображения на canvas
        this._pd = 3;       // внутренний отступ в px
        this._d = 1.0;       // внешний отступ (1 - без отсьупа, 1.01 - отступ в 1%)
        this._x = 0;
        this._y = 0;
        this._x0 = 0;
        this._y0 = 0;

        // расположение элемента в контейнере
        //  это соответствие пространственных осей элемента осям его контейнера
        this.disposition = {
            x: 'x',
            y: 'y',
            wx: 'wx',
            wy: 'wy',
            wz: 'wz'
        };

        this._border = 1;
        this._borderColor = "#000000";
        
        // статуса ВЫБРАН / НЕ ВЫБРАН 
        this._selected = false;
        
        // объект canvas на котором элемент будет отображен
        this.canvas = canvas;

        // если true то элемент был изменен
        this._changed = false;

        console.groupEnd("class PackageSimple.constructor }");
    }


    set id(value) {this._id = value;}

    get id() {return this._id;}


    set code(value) {this._code = value;}

    get code() {return this._code;}


    set name(value) {this._name = value;}

    get name() {return this._name;}


    set material(value) {this._material = value;}

    get material() {return this._material;}


    set payload(value) {this._payload = value;}

    get payload() {return this._payload;}


    set wx(value) {
        this._dispW = value;
        this.setSize(value, this._wy, this._wz, true);}
        
    get wx() {return this._wx;}
        
        
    set wy(value) {
        this._dispH = value;
        this.setSize(this._wx, value, this._wz, true);}
    
    get wy() {return this._wy;}
    
    
    set wz(value) {this.setSize(this._wx, this._wy, value, true);}

    get wz() {return this._wz;}


    set x0(value) {this._x0 = value;}

    get x0() {return this._x0;}


    set y0(value) {this._y0 = value;}

    get y0() {return this._y0;}


    set x(value) {this._x = value;}

    get x() {return this._x;}


    set y(value) {this._y = value;}

    get y() {return this._y;}


    set dispW(value) {
        this._dispW = value;
        this.setSize(this._wx, this._wy, this._wz, true);}

    get dispW() {return this._dispW;}


    set dispH(value) {
        this._dispH = value;
        this.setSize(this._wx, this._wy, this._wz, true);}

    get dispH() {return this.dispH;}


    set scale(value) {this._scale = value;}

    get scale() {return this._scale;}


    set selected(value) {this.setSelected(value)}

    get selected() {return this._selected;}


    set canvas(value) {
        this._canvas = value;
                
        // получаем 2d контекст, 
        // это объект для вывода всей графики 
        this._ctx = this._canvas.getContext('2d');

        if (!this._hidden) {this.draw();}
    }

    get canvas() {return this._canvas;}


    set color(color) {
        console.groupCollapsed("class PackageSimple.set color: %o", color);

        if (!this._hidden) {this.clear();}

        this._color = color;
        this._selectedColor = shadeColor(color, 20);

        if (!this._hidden) {this.draw();}

        console.groupEnd("class PackageSimple.set color");
    }

    get color() {
        return this._color;
    }


    set changed(value) {this._changed = value;}

    get changed() {return this._changed;}


    // изменение размеров элемента
    setSize(
        wx = 0, // размер элемента по горизонтали по оси y
        wy = 0, // размер элемента по горизонтали по оси x
        wz = 0,   // высота элемента
        force = false) {

        console.groupCollapsed("class PackageSimple.setSize { id=%o; wx=%o; wy=%o; wh=%o; force=%o", this._id, wx, wy, wz, force);
        
        // если размеры элемента изменились
        if ((this._wx != wx) || (this._wy != wy) || (this._wz != wz) || force) {

            // стираем элемент в текущих размерах и позиции
            if (!this._hidden) {this.clear();}

            // сохраняем новые значения размеров
            this._wx = wx;
            this._wy = wy;
            this._wz = wz;
                     
            // рисуем элемент в новых размерах и позиции
            if (!this._hidden) {this.draw();}
        }
        console.groupEnd("class PackageSimple.setSize }");
    }


    // Стираем ячейку на <canvas>
    clear() {
        this._ctx.save();
        this._ctx.scale(1/this._scale, 1/this._scale);

        this._ctx.clearRect(this._x0, this._y0, this._wx, this._wy);

        this._ctx.restore();
    }


    // делаем элемент не видимым
    hide() {
        if (!this._hidden) {

            this._hidden = true;
            
            // рисуем элемент
            this.clear();
        }
    }


    // делаем элемент видимым
    show() {
        this._hidden = false;
        
        // рисуем элемент
        this.draw();
    }


    // Рисуем ячйку на <canvas>
    draw(color = this._color) {

        if (!this._hidden) {

            // console.log("class PackageSimple.draw{ id=" + this._id);

            // this.ctx.fillRect(this.x, this.y, this.width, this.height);
            this.drawCube(
                this['_' + this.disposition.x],
                this['_' + this.disposition.y],
                this['_' + this.disposition.wx],
                this['_' + this.disposition.wy],
                this['_' + this.disposition.wz],
                color,
                this._ctx,
                this._scale
            );

            // requestAnimationFrame(this.draw);

            // console.log("class PackageSimple.draw }");
        }
    }


    // перерисуем ячейку на <canvas>
    reDraw(color = this._color) {
        if (!this._hidden) {

            this.clear();
            this.draw(color);
        }
    }


    // изменение и запоминание статуса ВЫБРАН / НЕ ВЫБРАН 
    // усли colored = true то элемент подсетит себя затемнением своего цвета
    setSelected(selected, colored = false) {
        console.groupCollapsed("class PackageSimple.setSelected { id=" + this._id + " selected = " + selected);    

        // запоминаем новое состояние
        this._selected = selected;


        // если colored = true
        // элемент должен подсветить себя когда выбран
        if (colored) {
            if (this._selected) {
                // если новый статус "ВЫБРАН"
                
                    // выделенный элемент подсвечивает себя цветом
                    this.reDraw(this._selectedColor);                
            } else {
                // если новый статус "НЕ ВЫБРАН"
                
                    // перерисовываем елемент в нормальном цвете
                    this.reDraw();                
            }
        } else {
            this.reDraw();
        }
        
        console.groupEnd("class PackageSimple.setSelected }");    
    }


    // обрабатываем клики мышью
    onClick(clickX, clickY) {
        console.group("class PackageSimple.onClick { id: %i; code: %s", this._id, this._code);    
        
        // приводим координаты мыши в клиентской области <canvas>
        // к текущему масштабу
        clickX = clickX * this._scale * 2;
        clickY = clickY * this._scale * 2;
        
        console.log("click: [%.2f; %.2f]  [x: %.2f y: %.2f z: %.2f]  [wx: %.2f wy: %.2f wz: %.2f]", clickX, clickY, this._x, this._y, this._z, this._wx, this._wy, this._wz);    
        // проверяем попадает ли клик мыши по горизонтали в ширину ячейки
        let xClickInside = (clickX > this._x) && (clickX < (this._x + this._wx));

        // проверяем попадает ли по вертикали клик мыши в высоту ячейки
        let yClickInside = (clickY > this._y) && (clickY < (this._y + this._wy));

        // передаем попадание клика в ячейку
        // для изменения и запоминания нового статуса "ВЫБРАН"
        if (xClickInside && yClickInside) {
            console.log("clicked inside");    

            this.setSelected(!(this._selected), true);
        } else {
            console.log("click outside");    
        }
        console.groupEnd("class PackageSimple.onClick }");    
    }
    
    // onTouchend(e) { // обрабатываем касания пальцем
    //     var ex = (e.touches[0].pageX - this.canvas.offsetLeft) | 0;
    //     var ey = (e.touches[0].pageY - this.canvas.offsetTop) | 0;
    //     // event(x, y);
    // }
    
    
    // рисуем прямоугольник на <canvas.context>
    drawCube(x, y, wx, wy, wz, color, ctx, scale) {

        ctx.save();
        ctx.scale(1/scale, 1/scale);

        ctx.fillStyle = color;
        
        ctx.fillRect(this._x0 + x + this._pd, this._y0 + y + this._pd, wx - this._pd * 2, wy - this._pd * 2);
        
        if (this._border > 0) {
            ctx.lineWidth = this._border;
            ctx.strokeStyle = this._borderColor;

            ctx.strokeRect( this._x0 + x + this._border / 2 , this._y0 + y + this._border / 2, wx - this._border, wy - this._border);
        }

        ctx.restore();
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
    constructor(data, canvas) {
        console.groupCollapsed("class PackageContainerItem.constructor { id: %i", data.id);

        // вызов конструктора родителя
        super(data.id, canvas);

        this._rowCount = 0;

        this._colCount = [];

        this.item = [];

        // зазор между вертикальными рядами
        this._mx = 0;

        // зазор между горизонтальными рядами
        this._my = 0;

        // внутренний отступ в px
        this._pd = 0;

        this._border = 0;

        this._scale = 1;

        this._autoFit = 'none'; // contain / none

        // получаем внутренние элементы из структуры data
        var subItem = data.item;

        if (subItem) {

            // то создаем массив внутренних элементов
            // внутри текущего элемента
            subItem.forEach(sub => {
                console.log("subItem = %o }", sub);

                var newSubPack = new PackageContainerItem(sub, canvas);
                newSubPack.code = sub.code;
                newSubPack.name = sub.name;
                newSubPack.color = "#" + sub.color;
                newSubPack._border = 5;
                // newSubPack._borderColor = "#000000";
                if (sub.disposition) {
                    newSubPack.disposition = sub.disposition; //{   //  это соответствие пространственных осей внутреннего элемента осям его контейнера
                }
                //     x: 'y',
                //     y: 'x',
                //     wx: 'wz',
                //     wy: 'wx',
                //     wz: 'wy'
                // };
                newSubPack.x0 = this._x;
                newSubPack.y0 = this._y;
                newSubPack.x = sub.x;
                newSubPack.y = sub.y;
                newSubPack.setSize(
                    parseInt(sub.wx),
                    parseInt(sub.wy),
                    parseInt(sub.wz)
                )
                newSubPack.autoFit = 'none';
                newSubPack.scale = this._scale;

                this.item.push(newSubPack);
                
                newSubPack.show();
            });
        }
        console.groupEnd();
    }


    // -------------------------------------------------------
    // Свойство | 
    //
    set wx(value) {this.setSize(value, this._wy, this._wz, true);}
        
    get wx() {return this._wx;}
        
        
    // -------------------------------------------------------
    // Свойство | 
    //
    set wy(value) {this.setSize(this._wx, value, this._wz, true);}
    
    get wy() {return this._wy;}
    
    
    // -------------------------------------------------------
    // Свойство | 
    //
    set wz(value) {this.setSize(this._wx, this._wy, value, true);}

    get wz() {return this._wz;}


    // -------------------------------------------------------
    // Свойство | 
    //
    set x(value) {
        this._x = value;
        this.item.forEach( sub => {
            sub.x0 = this._x;
        });
        }

    get x() {return this._x;}


    // -------------------------------------------------------
    // Свойство | 
    //
    set y(value) {
        this._y = value;
        this.item.forEach( sub => {
            sub.y0 = this._y;
        });
        }

    get y() {return this._y;}


    // -------------------------------------------------------
    // Свойство | 
    //
    set dispW(value) {
        this._dispW = value;
        this.setSize(this._wx, this._wy, this._wz, true);}

    get dispW() {return this._dispW;}


    // -------------------------------------------------------
    // Свойство | 
    //
    set dispH(value) {
        this._dispH = value;
        this.setSize(this._wx, this._wy, this._wz, true);}

    get dispH() {return this.dispH;}


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
    /**
     * @param {number} rowCount
     */
    get rowCount() {
        return this._rowCount;
    }


    setColCount(rowIndex, colCount) {
        this._colCount[rowIndex] = colCount;

        // если colCount = 0 то будет добавлен пустой ряд
        this._item[rowIndex] = [];

        // если colCount > 0 то в ряд будет добавлено соответствующее количество элементов 
        for (var colIndex = 0; colIndex < colCount; colIndex++) {
            
            var item = new PackageSimple();
            
            this._item[rowIndex].push(item);
        }
        
    }

    getColCount(rowIndex) {
        return this._colCount[rowIndex];
    }


    // -------------------------------------------------------
    // Метод | Добавляет элемент в горизонтальный ряд row 
    //         и в вертикальный столбец col двумерного массива
    //         размеры rowCount и colCount при необходимости увеличивает
    // 
    pushTo(row, col, item) {
        console.group("class PackageContainerItem.pushTo { row: %i; col: %i; item: %o", row, col, item);

        // если такого ряда нет
        if ((row + 1) > this._rowCount) {

            // добавляем ряд
            this.item.push([]);

            // сохраняем новое количество рядов
            this._rowCount++;

            this._colCount[row] = 0;
        }
        
        // если такого столбца нет
        if ((col + 1) > this._colCount[row]) {

            // добавляем столбец
            this.item[row].push(item);
            
            // увеличиваем количество столбцов данноого ряда
            this._colCount[row]++;
        } else {
            this.item[row].splice(col, 1, item);
        }
        console.groupEnd();
    }


    // -------------------------------------------------------
    // Метод | Заменяет строку внутренних элементов
    //
    replaceRow(rowIndex, colCount) {
        console.group("class PackageContainerItem.replaceRow { pack: %o; rowIndex: %i; colCount: %i", this, rowIndex, colCount);

        var result;

        if (rowIndex < this._rowCount) {
            
            // если colCount = 0 то будет добавлен пустой ряд
            var items = [];
    
            // если colCount > 0 то в ряд будет добавлено соответствующее количество элементов 
            for (var colIndex = 0; colIndex < colCount; colIndex++) {
                
                var item = new PackageSimple(0, this._canvas);
                
                items.push(item);
            }
    
            this._item.splice(rowIndex, 1, items);

            result = this._item[this._rowCount -1]
        } else {
            result = false;
        }
        
        console.groupEnd();

        return result;
    }


    // -------------------------------------------------------
    // Метод | Добавляет в конец строку внутренних элементов
    //
    addRow(colCount) {
        console.group("class PackageContainerItem.addRow { pack: %o; colCount: %i", this, colCount);

        // если colCount = 0 то будет добавлен пустой ряд
        var items = [];

        // если colCount > 0 то в ряд будет добавлено соответствующее количество элементов 
        for (var colIndex = 0; colIndex < colCount; colIndex++) {
            
            var item = new PackageSimple(0, this._canvas);
            
            items.push(item);
        }

        this.item.push(items);
        
        this._rowCount++;
        
        this._colCount[this._rowCount - 1] = colCount;

        console.groupEnd();

        return this.item[this._rowCount -1];
    }


    // -------------------------------------------------------
    // Метод | Удаляет все внутренние элементы
    //
    clearItems() {
        console.group("class PackageContainerItem.clearItems { pack: %o", this);

        this.item = [];
        this._rowCount = 0;
        this._colCount = [];

        console.groupEnd();
    }

    // -------------------------------------------------------
    // Метод | Удаляет строку внутренних элементов
    //
    removeRow(rowIndex) {
        console.group("class PackageContainerItem.removeRow { pack: %o; rowIndex: %i", this, rowIndex);

        this.item.splice(rowIndex, 1);

        console.groupEnd();
    }


    // -------------------------------------------------------
    // Метод | Изменение размеров элемента
    //
    setSize(
        wx = 0, // размер элемента по горизонтали по оси y
        wy = 0, // размер элемента по горизонтали по оси x
        wz = 0,   // высота элемента
        force = false) {

        console.groupCollapsed("class PackageContainerItem.setSize { id=%o; wx=%o; wy=%o; wh=%o; force=%o", this._id, wx, wy, wz, force);
        
        // если размеры элемента изменились
        if ((this._wx != wx) || (this._wy != wy) || (this._wz != wz) || force) {

            // стираем элемент в текущей позиции
            if (!this._hidden) {this.clear();}

            // сохраняем новые значения размеров
            this._wx = wx;
            this._wy = wy;
            this._wz = wz;
         
            // Определяем поведение autoFit 
            switch (this._autoFit) {

                // если autoFit = 'contain' то подгоняем масштаб что бы вписать элемент в контейнер не изменяя пропорции
                case 'contain':
                    console.log("autoFit : contain");

                    this._xScale = this._d * this._wx / this._dispW;
                    this._yScale = this._d * this._wy / this._dispH;

                    this._scale = Math.max(this._xScale, this._yScale);

                    this._x = (this._dispW * this._scale - this._wx) / 2;
                    this._y = (this._dispH * this._scale - this._wy) / 2;

                    console.log("_dispW=" + this._dispW + " _dispH=" + this._dispH);
                    console.log("_xScale=" + this._xScale + " _yScale=" + this._yScale);
                    
                    console.log("_scale=" + this._scale);
                    console.log("_x=" + this._x  + " _y=" + this._y);
                    break;

                // если autoFit = 'none' то не меняем масштаб вписывае
                case 'none':

                    console.log("autoFit : none");
                    break;
            }
                        
    
            if (!this._hidden) {this.draw();}

        }
        console.groupEnd();
    }


    // -------------------------------------------------------
    // Метод | Стираем ячейку на <canvas>
    //
    clear() {
        console.groupCollapsed("class PackageContainerItem.clear { item: %o", this);

        this._ctx.clearRect(0, 0, this._dispW, this._dispH);

        console.groupEnd("class PackageContainerItem.clear }");
    }

    
    // -------------------------------------------------------
    // Метод | Коннтейнер рисует себя и внутренние прямоугольники
    //
    draw(color = this._color) {
        console.groupCollapsed("class PackageContainerItem.draw { item: %o", this);

        if (!this._hidden) {

            // рисуем себя как элементарный прямоугольник
            super.draw(color);

            // рисуем внутренние элементы если они есть
            if (this.item.length > 0 ) {
                // console.log("item: %o", this.item);    

                // рисуем блоки
                for (var index = 0; index < this.item.length; index++) {
                    // console.log("item[%i]: %o", index, this.item[index]);    
                    
                    // console.log("class PackageContainerItem.draw { row=" + rowIndex);    

                    // если у елемента не включено автомасштабирование
                    if (this.item[index].autoFit == 'none') {

                        // то даем внутреннему элементу масштаб контейнера
                        this.item[index].scale = this._scale;
                    }
                    // this.item[index]._borderColor = this.color;
                    
                    this.item[index].draw();
                }
            }
        }
        console.groupEnd();
    }


    // -------------------------------------------------------
    // Метод | Перерисуем ячейку на <canvas>
    //
    reDraw(color = this._color) {
        console.groupCollapsed("class PackageContainerItem.reDraw {");
        if (!this._hidden) {

            this.clear();
            this.draw(color);
        }
        console.groupEnd("class PackageContainerItem.reDraw {");
    }


    // -------------------------------------------------------
    // Метод | Делаем элемент не видимым
    //
    hide() {
        if (!this._hidden) {

            this._hidden = true;
            
            // рисуем элемент
            this.clear();
        }
    }


    // -------------------------------------------------------
    // Метод | Делаем элемент видимым
    //
    show() {
        if (this._hidden) {
            this._hidden = false;
            
            // рисуем элемент
            this.draw();
        }
    }
    
}