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

        this._border = 1;
        this._borderColor = "#505050";
        
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

            console.log("id = %i, wx = %i, wy = %i, wz = %i", this._id, this._wx, this._wy, this._wz);
        }
        console.groupEnd("class PackageSimple.setSize }");
    }


    // Стираем ячейку на <canvas>
    clear() {
        this._ctx.save();
        this._ctx.scale(1/this._scale, 1/this._scale);

        this._ctx.clearRect(0, 0, this._wx, this._wy);

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

        if (!this._wzidden) {

            // console.log("class PackageSimple.draw{ id=" + this._id);

            // this.ctx.fillRect(this.x, this.y, this.width, this.height);
            this.drawCube(
                this._x,
                this._y,
                this._wx, 
                this._wy, 
                this._wz, 
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
        console.groupCollapsed("class PackageSimple.onClick {");    
        
        // приводим координаты мыши в клиентской области <canvas>
        // к текущему масштабированию
        clickX = clickX * this._scale * 2;
        clickY = clickY * this._scale * 2;
        
        console.log("class PackageSimple.onClick { ", clickX, clickY, this._x, this._y, this._wx, this._wy);    
        // проверяем попадает ли клик мыши по горизонтали в ширину ячейки
        let xClickInside = (clickX > this._x) && (clickX < (this._x + this._wx));

        // проверяем попадает ли по вертикали клик мыши в высоту ячейки
        let yClickInside = (clickY > this._y) && (clickY < (this._y + this._wy));

        // передаем попадание клика в ячейку
        // для изменения и запоминания нового статуса "ВЫБРАН"
        if (xClickInside && yClickInside) {
            console.log("clicked");    

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
        
        ctx.fillRect(x + this._pd, y + this._pd, wx - this._pd * 2, wy - this._pd * 2);
        
        if (this._border > 0) {
            ctx.lineWidth = this._border;
            ctx.strokeStyle = this._borderColor;

            ctx.strokeRect( this._x0 + x + this._border / 2 , this._y0 + y + this._border / 2, wx - this._border, wy - this._border);
        }

        ctx.restore();
    }
}





// =======================================================
// Класс | PackageContainer
//         Контеейнер для хранения элементов в двумерном массиве
//         Сам является элементарным элементом, наследником PackageSimple
//         И так же может включать в себя любое количемтво элеементов типра PackageSimple 
//         Элементы располагаются в горизонтальных рядах,
//         Каждый ряд может содержать в себе любое количество элементов
//         количество рядов хранится в свойстве rowCount
//         количество элементов в i-том ряде в свойстве colCount(i)
//
class PackageContainerItem extends PackageSimple {

    // Создаем элемент
    constructor(id, canvas) {
        console.groupCollapsed("class PackageContainerItem.constructor { id: %i", id);

        // вызов конструктора родителя
        super(id, canvas);

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

        // размер прямоугольника в котором будет нарисован элемент
        this._dispW = canvas.width;
        this._dispH = canvas.height;

        console.groupEnd("class PackageContainerItem.constructor }");
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
         
            this._xScale = this._d * this._wx / this._dispW;
            this._yScale = this._d * this._wy / this._dispH;
            
            console.log("_dispW=" + this._dispW + " _dispH=" + this._dispH);
            console.log("_xScale=" + this._xScale + " _yScale=" + this._yScale);
            
            
            this._scale = Math.max(this._xScale, this._yScale);

            this._x = (this._dispW * this._scale - this._wx) / 2;
            this._y = (this._dispH * this._scale - this._wy) / 2;
                   
            console.log("_scale=" + this._scale);
            console.log("_x=" + this._x  + " _y=" + this._y);
    
            if (!this._hidden) {this.draw();}

            console.log("wx=" + this._wx  + " wy=" + this._wy + " wz=" + this._wz);
        }
        console.groupEnd();
    }


    // -------------------------------------------------------
    // Метод | Стираем ячейку на <canvas>
    //
    clear() {
        console.groupCollapsed("class PackageContainerItem.clear { item=%o", this);

        this._ctx.clearRect(0, 0, this._dispW, this._dispH);

        console.groupEnd("class PackageContainerItem.clear }");
    }

    
    // -------------------------------------------------------
    // Метод | Коннтейнер рисует себя и внутренние прямоугольники
    //
    draw(color = this._color) {
        console.groupCollapsed("class PackageContainerItem.draw { item=%o", this);

        if (!this._hidden) {

            // рисуем себя как элементарный прямоугольник
            super.draw(color);

            // рисуем внутренние элементы если они есть
            if (this.item.length > 0 ) {
                console.log("item: %o", this.item);    

                var subItem;
                var x = this._x;
                var y = this._y;
                var wxTotal;
                var wyTotal = 0;
                // рисуем блоки
                for (var rowIndex = 0; rowIndex < this.item.length; rowIndex++) {
                    console.log("item[%i]: %o", rowIndex, this.item[rowIndex]);    
                    
                    // console.log("class PackageContainerItem.draw { row=" + rowIndex);    
                    x = this._x;
                    wxTotal = 0;
                    
                    // вычисляем суммарный размер всех рядов по вертикали
                    wyTotal += this.item[rowIndex][0]._wy; 

                    if (this.item[rowIndex].length > 0) {
                    
                        for (var colIndex = 0; colIndex < this.item[rowIndex].length; colIndex++) {

                            // берем очередной внутренний элемент
                            subItem = this.item[rowIndex][colIndex];
                            
                            if (subItem) {
                                // console.log("col=" + colIndex);    
                                console.log("item[%i][%i]: %o", rowIndex, colIndex, subItem);    
                                
                                subItem._x = x;
                                subItem._y = y;
                                subItem.scale = this._scale;
                                subItem._border = this._wx * 0.002;
                                subItem._borderColor = this.color;
                                
                                // вычисляем суммарный размер всех элементов в ряду по горизонтали
                                wxTotal += subItem._wx;

                                console.log("wxTotal: %i ", wxTotal);    
                                console.log("this._wx: %i ", this._wx);    

                                // проверяем правую границу
                                if (wxTotal  > this._wx) {
                                    console.log("превышен размер по горизонтали в %i ряду, элемент %i", rowIndex, (colIndex + 1));    
                                    subItem._border = this._wx * 0.1;
                                    subItem._color = "#ff0000";
                                    subItem._borderColor = "#ff0000";
                                }    

                                console.log("wyTotal: %i ", wyTotal);    
                                console.log("this._wy: %i ", this._wy);    

                                // проверяем нижнюю границу
                                if (wyTotal  > this._wy) {
                                    console.log("превышен размер по вертикали в %i ряду", rowIndex);    
                                    subItem._border = this._wy * 0.1;
                                    subItem._color = "#ff0000";
                                    subItem._borderColor = "#ff0000";
                                }    

                                // вычисляем горизонтальную координату где начнется следующий слобец
                                x = x + (subItem._wx + this._mx);

                                // делаем внутренний элемент видимым
                                subItem.show();
                            }
                        }        

                        // вычисляем вертикальную координату где начнется следующий ряд
                        y = y + (this.item[rowIndex][0].wy + this._my);
                    }
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