"use strict";

// Глубина логирования
// 0 - логирование отключено
// logEnt - только входы и выходы в блоки кода
// logInf - только информационные сообщения
// logErr - сообщения об ошибках
// logDat - вывод данных, значений, контейнеров
var logLevel = 1;


function logOut(message, ...optionalParams) {
    if (logLevel === 0) {
        return false;
    } else {

        if (optionalParams.length == 0) {

            console.log(message);
        } else {

            console.log(message, optionalParams);
        }
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


// Класс PackageSimple
// место хранения, простого типа, состоящее из одного элементарного элемента 
class PackageSimple {

    //_id;            // id экземпляра упаковки в базе данных
    //_code;          // обозначение
    //_name;          // наименование экземпляра упаковки 
    // _material;      // название материала из которого сделана упаковка
    // _payload;       // id линии
    // _h;             // высота элемента
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
        logOut("class PackageSimple.constructor { id=" + id);
        
        this._hidden = true;
        
        this._id = id;

        this._color = '#202020';        // цвет элемента (по умолчанию #202020)

        this._selectedColor = shadeColor(this._color, 20);

        this._yScale = 1;     // масштаб по вертикали
        this._xScale = 1;     // масштаб пл горизонтали
        this._scale = 1;     // масштаб отображения на canvas
        this._pd = 1;       // внутренний отступ в px
        this._d = 1.0;       // внешний отступ (1 - без отсьупа, 1.01 - отступ в 1%)

        this._border = 1;
        this._borderColor = "#505050";
        
        // статуса ВЫБРАН / НЕ ВЫБРАН 
        this._selected = false;
        
        // объект canvas на котором элемент будет отображен
        this.canvas = canvas;

        // если true то элемент был изменен
        this._changed = false;

        logOut("class PackageSimple.constructor }");
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
        this.setSize(value, this._wy, this._h, true);}
        
    get wx() {return this._wx;}
        
        
    set wy(value) {
        this._dispH = value;
        this.setSize(this._wx, value, this._h, true);}
    
    get wy() {return this._wy;}
    
    
    set h(value) {this.setSize(this._wx, this._wy, value, true);}

    get h() {return this._h;}


    set x(value) {this._x = value;}

    get x() {return this._x;}


    set y(value) {this._y = value;}

    get y() {return this._y;}


    set dispW(value) {
        this._dispW = value;
        this.setSize(this._wx, this._wy, this._h, true);}

    get dispW() {return this._dispW;}


    set dispH(value) {
        this._dispH = value;
        this.setSize(this._wx, this._wy, this._h, true);}

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
        logOut("class PackageSimple.set color { color=" + color);

        if (!this._hidden) {this.clear();}

        this._color = color;
        this._selectedColor = shadeColor(color, 20);

        if (!this._hidden) {this.draw();}

        logOut("class PackageSimple.set color }");
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
        h = 0,   // высота элемента
        force = false) {

        logOut("class PackageSimple.setSize { wx=%o; wy=%o; wh=%o; force=%o", wx, wy, h, force);
        
        // если размеры элемента изменились
        if ((this._wx != wx) || (this._wy != wy) || (this._h != h) || force) {

            // стираем элемент в текущих размерах и позиции
            if (!this._hidden) {this.clear();}

            // сохраняем новые значения размеров
            this._wx = wx;
            this._wy = wy;
            this._h = h;
                     

            // рисуем элемент в новых размерах и позиции
            if (!this._hidden) {this.draw();}

            logOut("class pack.setSize id=" + this._id + " wx=" + this._wx  + " wy=" + this._wy + " h=" + this._h);
        }
        logOut("class PackageSimple.setSize }");
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

        if (!this._hidden) {

            // logOut("class PackageSimple.draw{ id=" + this._id);

            // this.ctx.fillRect(this.x, this.y, this.width, this.height);
            this.drawCube(
                this._x,
                this._y,
                this._wx, 
                this._wy, 
                this._h, 
                color,
                this._ctx,
                this._scale
            );

            // requestAnimationFrame(this.draw);

            // logOut("class PackageSimple.draw }");
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
        logOut("class PackageSimple.setSelected { id=" + this._id + " selected = " + selected);    

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
        
        logOut("class PackageSimple.setSelected }");    
    }


    // обрабатываем клики мышью
    onClick(clickX, clickY) {

        // приводим координаты мыши в клиентской области <canvas>
        // к текущему масштабированию
        clickX = clickX * this._scale * 2;
        clickY = clickY * this._scale * 2;

        logOut("class PackageSimple.onClick { ", clickX, clickY, this._x, this._y, this._wx, this._wy);    
        // проверяем попадает ли клик мыши по горизонтали в ширину ячейки
        let xClickInside = (clickX > this._x) && (clickX < (this._x + this._wx));

        // проверяем попадает ли по вертикали клик мыши в высоту ячейки
        let yClickInside = (clickY > this._y) && (clickY < (this._y + this._wy));

        // передаем попадание клика в ячейку
        // для изменения и запоминания нового статуса "ВЫБРАН"
        if (xClickInside && yClickInside) {
            logOut("class PackageSimple.onClick - clicked");    

            this.setSelected(!(this._selected), true);
        } else {
            logOut("class PackageSimple.onClick - click outside");    
        }
    }
    
    // onTouchend(e) { // обрабатываем касания пальцем
    //     var ex = (e.touches[0].pageX - this.canvas.offsetLeft) | 0;
    //     var ey = (e.touches[0].pageY - this.canvas.offsetTop) | 0;
    //     // event(x, y);
    // }
    
    
    // рисуем прямоугольник на <canvas.context>
    drawCube(x, y, wx, wy, h, color, ctx, scale) {

        ctx.save();
        ctx.scale(1/scale, 1/scale);

        ctx.fillStyle = color;
        
        ctx.fillRect(x + this._pd, y + this._pd, wx - this._pd * 2, wy - this._pd * 2);
        
        // if (this._border > 0) {
        //     ctx.lineWidth = this._border;
        //     ctx.strokeStyle = this._borderColor;

        //     ctx.strokeRect(x, y, wx, wy);
        // }

        ctx.restore();
    }
}





// Класс PackageContainer
// один блок места хранения, составного типа
// содержит в себе только однотипные элементарные элементы.
// расположенные в пронумерованных рядах, и столбцах
// количество рядов хранится в свойстве rowCount
// количество столбцов в свойстве colCount
class PackageContainerItem extends PackageSimple {

    // _rowCount;
    // _colCount;

    // если true, то разрешено выделение больше одного элемента
    // _multiselect = false;

    // Создаем элемент
    constructor(id, canvas) {

        // вызов конструктора родителя
        super(id, canvas);

        this.item = [[]];

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
    }


    set wx(value) {this.setSize(value, this._wy, this._h, true);}
        
    get wx() {return this._wx;}
        
        
    set wy(value) {this.setSize(this._wx, value, this._h, true);}
    
    get wy() {return this._wy;}
    
    
    set h(value) {this.setSize(this._wx, this._wy, value, true);}

    get h() {return this._h;}


    set dispW(value) {
        this._dispW = value;
        this.setSize(this._wx, this._wy, this._h, true);}

    get dispW() {return this._dispW;}


    set dispH(value) {
        this._dispH = value;
        this.setSize(this._wx, this._wy, this._h, true);}

    get dispH() {return this.dispH;}


    /**
     * @param {number} rowCount
     */
    set rowCount(value) {
        this._rowCount = value;
    }

    get rowCount() {
        return this._rowCount;
    }


    /**
     * @param {number} colCount
     */
    set colCount(value) {
        this._colCount = value;
    }

    get colCount() {
        return this._colCount;
    }


    /**
     * @param {boolean} multiselect
     */
    set multiselect(value) {
        this._multiselect = value;
    } 

    get multiselect() {
        return this._multiselect;
    }


    // изменение размеров элемента
    setSize(
        wx = 0, // размер элемента по горизонтали по оси y
        wy = 0, // размер элемента по горизонтали по оси x
        h = 0,   // высота элемента
        force = false) {

        logOut("class PackageContainerItem.setSize { id=%o; wx=%o; wy=%o; wh=%o; force=%o", this._id, wx, wy, h, force);
        
        // если размеры элемента изменились
        if ((this._wx != wx) || (this._wy != wy) || (this._h != h) || force) {

            // стираем элемент в текущей позиции
            if (!this._hidden) {this.clear();}

            // сохраняем новые значения размеров
            this._wx = wx;
            this._wy = wy;
            this._h = h;
         
            this._xScale = this._d * this._wx / this._dispW;
            this._yScale = this._d * this._wy / this._dispH;
            
            logOut("dispW=" + this._dispW + " dispH=" + this._dispH);
            logOut("xScale=" + this._xScale + " yScale=" + this._yScale);
            
            
            this._scale = Math.max(this._xScale, this._yScale);

            this._x = (this._dispW * this._scale - this._wx) / 2;
            this._y = (this._dispH * this._scale - this._wy) / 2;
                   
            logOut("this.scale=" + this._scale);
            logOut("class PackageContainerItem.setSize x=" + this._x  + " y=" + this._y);
    
            if (!this._hidden) {this.draw();}

            logOut("class PackageContainerItem.setSize wx=" + this._wx  + " wy=" + this._wy + " h=" + this._h);
        }
        logOut("class PackageContainerItem.setSize }");
    }


    // Стираем ячейку на <canvas>
    clear() {
        // logOut("class PackageContainerItem.clear { item=%o", this);

        this._ctx.clearRect(0, 0, this._dispW, this._dispH);

        // logOut("class PackageContainerItem.clear }");
    }

    
    // коннтейнер рисует себя и внутренние прямоугольники
    draw(color = this._color) {

        if (!this._hidden) {

            // рисуем себя как элементарный прямоугольник
            super.draw(color);

            var x = this._x;
            var y = this._y;
            // рисуем блоки
            for (var rowIndex = 0; rowIndex < this._rowCount; rowIndex++) {
                
                // logOut("class PackageContainerItem.draw { row=" + rowIndex);    
                
                x = this._x;
                for (var colIndex = 0; colIndex < this._colCount; colIndex++) {
                    
                    if (typeof this.item[rowIndex][colIndex] !== 'undefined') {
                        // logOut("class PackageContainerItem.draw { col=" + colIndex);    
                        // logOut("class PackageContainerItem.draw { item=", this.item[rowIndex][colIndex]);    
                        
                        this.item[rowIndex][colIndex]._x = x;
                        this.item[rowIndex][colIndex]._y = y;
                        this.item[rowIndex][colIndex].scale = this._scale;
                        this.item[rowIndex][colIndex]._borderColor = this.color;
                        this.item[rowIndex][colIndex].show();
        
                        // вычисляем горизонтальную координату где начнется следующий слобец
                        x = x + (this.item[rowIndex][colIndex].wx + this._mx);
                    }
                }        
                // вычисляем вертикальную координату где начнется следующий ряд
                y = y + (this.item[rowIndex][0].wy + this._my);
            }
        }
    }


    // перерисуем ячейку на <canvas>
    reDraw(color = this._color) {
        if (!this._hidden) {

            this.clear();
            this.draw(color);
        }
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
        if (this._hidden) {
            this._hidden = false;
            
            // рисуем элемент
            this.draw();
        }
    }
    
}





// Класс PackageContainer
// место хранения, составного типа, состоящее из одного элементарного элемента
// и содержащее внутри себя массив блоков элементарных элементов (PackageContainerItem).
class PackageContainer {

    // количество блоков
    // _count;

    // если true, то разрешено выделение больше одного элемента
    // _multiselect = false;

    // Создаем элемент
    // constructor(id = 0, canvas) {

    // }


    /**
     * @param {number} count
     */
    set count(value) {
        this._count = value;
    } 

    get count() {
        return this._count;
    }


    /**
     * @param {boolean} multiselect
     */
    set multiselect(value) {
        this._multiselect = value;
    } 

    get multiselect() {
        return this._multiselect;
    }
}







// ***********************************************************************  
// **                                                                   **  
// **                             M A I N                               **  
// **                                                                   **  
// ***********************************************************************



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
// подгоняем размер тега <input> под его содержимое
// если параметр min = true то размер всегда будет минимально возможным
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

    logOut("index.php loaded");


    // -------------------------------------------------------
    // Функция | Выводит статусное сообщение в элемент lblStatus
    //           и убирает его через время timeout в миллисекундах
    //           если timeout=0 то сообщение будет видимым пока
    //           его не перекроет текст нового сообщения
    //
    function setStatus(statusText, timeout) {
        logOut("main.setStatus { text: %o", statusText);

        // показываем статус
        lblStatus.innerHTML = statusText;
          
        // если timeout больше 0
        if (timeout > 0) {
            
            // стираем выведенное сообщение через время timeout в миллисекундах
            setTimeout(() => {
                lblStatus.innerHTML = "";
            }, timeout);
        }

        logOut("main.setStatus }");
    }


    // -------------------------------------------------------
    // Функция | Делает элементы доступными для редактирования
    //           если enabled = true, иначе блокирует их
    //           элементы выбирает по селектору selector
    //
    function setDomElementsEnabled(selector, enabled) {

        // получаем htmlCollection - коллекцию элементов с классом disabled
        var disabledItems = document.querySelectorAll(selector);

        // и делаем их все недоступными для редактирования
        for (var item of disabledItems) {
            item.disabled = !enabled;
        }
    }


    // -------------------------------------------------------
    // Функция | Возвращает ссылку на элемент DOM по Id
    //
    function domElementById(id) {
        // logOut("main.domElementById { id=%o", id);
        var item = document.getElementById(id);
        // logOut("main.domElementById elment=%o", element);

        // logOut("main.domElementById }");    
        return item;
    }


    // -------------------------------------------------------
    // Функция | Создает елемент в DOM по названию тэга
    //
    function domCreateElement(tagName) {
        logOut("main.domCreateElement { tagName = %o", tagName);
        var item = document.createElement(tagName);
        logOut("main.domCreateElement elment=%o", item);

        logOut("main.domCreateElement }");    
        return item;
    }



    // -------------------------------------------------------
    // ЭЛЕМЕНТЫ DOM | Объявляем константы связи с элементами страницы и/или формы
    //


    // список всех элементов на форме
    const selCode = domElementById("selCode");
    const inpCodeEdit = domElementById("inpCodeEdit");
    const inpName = domElementById("inpName");
    const inpPayload = domElementById("inpPayload");
    const inpSizeWx = domElementById("inpSizeWx");
    const inpSizeWy = domElementById("inpSizeWy");
    const inpSizeH = domElementById("inpSizeH");
    const inpColor = domElementById("inpColor");
    const inpVolume = domElementById("inpVolume");
    const checkBoxHasContent = domElementById("checkBoxHasContent");
    const btnEdit = domElementById("btnEdit");
    const btnCopy = domElementById("btnCopy");
    const btnApply = domElementById("btnApply");
    const lblStatus = domElementById("lblStatus");
    const lblStatusChanged = domElementById("lblStatusChanged");
    const lblStatusInfo = domElementById("lblStatusInfo");

    // элементы формы для внутренних прямоцгольников
    var subInp = [];
    subInp.push(domElementById("selCode1"));
    subInp.push(domElementById("inpNx1"));
    subInp.push(domElementById("inpNy1"));
    subInp.push(domElementById("selCode2"));
    subInp.push(domElementById("inpNx2"));
    subInp.push(domElementById("inpNy2"));
    subInp.push(domElementById("selCode3"));
    subInp.push(domElementById("inpNx3"));
    subInp.push(domElementById("inpNy3"));
    subInp.push(domElementById("selCode4"));
    subInp.push(domElementById("inpNx4"));
    subInp.push(domElementById("inpNy4"));


    const canvas = domElementById("canvas");
    
    // canvas.style.position = "absolute";
    
    // Resizing
    // Поведение canvas при изменении размеров окна
    canvas.width = 1000;
    canvas.height = 1000;
    // canvas.style.width  = '300px';
    // canvas.style.height = '300px';
    // canvas.style.left = '10px';
    // canvas.style.top = '50px';
    


    // -------------------------------------------------------
    // КОНСТАНТЫ | Объявляем константы
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
    }


    // -------------------------------------------------------
    // КОНСТАНТЫ | Объявляем константы
    //


    // массив хранит в себе количество горизонтальных и вертикальных рядов в блоках
    var blockRows = [];
    var blockCols = [];

    // контейнер элементов для выпадающих списков
    var packs = [];

    // ссылка на ранее выбранный элемент
    var prevousPack;

    // ссылка на текущий выбранный элемент
    var selectedPack;

    // копия текущего элемента для отмены изменений
    var beforChangePack = new PackageContainerItem(0, canvas);

    // флагн режима редактирования
    var editMode = false;


    // -------------------------------------------------------
    // ИНИЦИАЛИЗАЦИЯ
    //


    // Делает все инпуты недоступными для редактирования
    setDomElementsEnabled('.disabled, .mainInput, .subInput');



    // -------------------------------------------------------
    // Функция | Поиск элемента в массиве packs
    //           По атрибуту id
    //           Возвращает указатель на элемент массива (объект)
    //           или false массив пуст или в нем нет выделенного элемента
    //
    function getPackById(id) {

        // если контейнер элементов не пуст
        // и id не пустое значение
        if ((typeof packs != "undefined") && (typeof id != "undefined")) {

            // смотрим какой из элементов с заданным id
            var pack = packs.find(obj => obj.id == id);

            // если эелемент существует
            if (typeof pack != "undefined") {

                return pack;

            // если такого элемента нет возвращаем false
            } else {
                logOut('getPackById: id=%o doesn`t exist', id);
                return false;
            }

        // если контейнер пуст то возвращаем false
        } else {
            logOut('getPackById: packs is emptyt' + typeof packs);
            return false;
        }
    }


    // -------------------------------------------------------
    // Функция | Поиск элемента в массиве packs
    //           По атрибуту listItem <option>
    //           Возвращает указатель на элемент массива (объект)
    //           или false массив пуст или в нем нет выделенного элемента
    //
    function getPackByListItem(listItem) {

        // если контейнер элементов не пуст
        // и listItem не пустое значение
        if ((typeof packs != "undefined") && (typeof listItem != "undefined")) {

            // смотрим какой из элементов в массиве packs содержит искомый listItem в свойстве
            var pack = packs.find(obj => obj.listItem.id == listItem.id);

            // если эелемент существует
            if (typeof pack != "undefined") {

                return pack;

            // если такого элемента нет возвращаем false
            } else {
                logOut('getPackByListItem: listItem = %o doesn`t exist', listItem);
                return false;
            }

        // если контейнер пуст то возвращаем false
        } else {
            logOut('getPackByListItem: packs is emptyt' + typeof packs);
            return false;
        }
    }


    // -------------------------------------------------------
    // Функция | Выбор элемента в списке <select>
    //           по <select>.selectedIndex
    //           или ссылке на pack
    //
    function selectPack(value) {

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

        // создаем событие что список изменился
        var event = new Event('change');

        // отправляем событие
        selCode.dispatchEvent(event);
    }
    
    
    // -------------------------------------------------------
    // Функция | Поиск выделенного элемента в массиве
    //           По выбранному в списке <select> элементу <option>
    //           Возвращает указатель на элемент массива packs
    //           или false если массив пуст или в нем нет выделенного элемента
    //
    function getSelectedPack(list) {
        logOut("main.getSelectedPack { list = %o", list);

        // если в выпадающем списке есть выбранный элемент
        //     и контейнер элементов не пуст
        if ((typeof packs != "undefined") && (typeof list.selectedOptions != "undefined")) {
            
            // в выпадающем списке смотрим какой элемент выбран и берем его id
            var optId = list.selectedOptions[0].id;
    
            // смотрим какой из элементов выбран в списке
            var pack = packs.find(obj => obj.listItem.id == optId);

            if (typeof pack != "undefined") {
                logOut('package list has selected: ' + pack.id + " name=" + pack.name);

                logOut("main.getSelectedPack }");
                return pack;
            } else {
                logOut('package list has no selected item');
                return false;
            }
        } else {
            logOut('package list is emptyt' + typeof packs);
            return false;
        }
    }


    // -------------------------------------------------------
    // Функция | Создает тэг <option> для <select>
    // 
    function createOption(optionId, code, name = '', dimentions = '') {
        logOut("main.createOption { optionId = %o", optionId);
        logOut("main.createOption { code = %o", code);
        logOut("main.createOption { name = %o", name);
        logOut("main.createOption { dimentions = %o", dimentions);


        var item = document.createElement('option');

        // var item = domCreateElement('option');
        item.id = optionId;
        item.innerHTML = code;

        if (name > '') {
            item.innerHTML =  item.innerHTML + ' | ' + name;
        }

        if (dimentions > '') {
            item.innerHTML = item.innerHTML + ' | ' + dimentions;
        }
        
        logOut("main.createOption: option = %o }",  item);
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
    //                  h: "",
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
        logOut("main.packsCreate { data = %o", data);
        
        // Создаем новый элемент
        var pack = new PackageContainerItem(
            parseInt(data['id']),       // id элемента, получен из базы
            canvas                      // canvas где будет отображен элемент
        );

        // заполняем все свойства элемента из структуры data
        pack.code = data['code'];
        pack.name = data['name'];
        pack.payload = parseInt(data['payload']);   // грузоподъемность в граммах
        pack.h = parseInt(data['h']);               // размеры элемента из базы
        pack.wx = parseInt(data['wx']);             // размеры элемента из базы
        pack.wy = parseInt(data['wy']);             // размеры элемента из базы
        pack.color = "#" + data['color'];           // цвет элемента из базы

        logOut("main.packsCreate pack = %o }", pack);
        return pack;
    }


    // -------------------------------------------------------
    // Функция | Добавляет элемент  pack в массив packs
    //           и во все выпадающие списки:
    //           selCode, selCode1...selCode[N]
    //
    function packsAdd(pack) {
        logOut("main.packsAdd { pack = %o ", pack);

        // Добавляем новый элемент из базы в массив
        packs.push(pack);

        // генерим уникальный id для <option>
        var timestamp = Date.now();
        var optionId = "opt" + timestamp;

        // создаем новый элемент в выпадающий список список на форме
        pack.listItem = createOption(optionId, pack.code);
        
        // добавляем новый элемент в выпадающий список список на форме
        selCode.appendChild(pack.listItem);

        // добавляем новый элемент в выпадающие списки внутренних прямоугольников на форме
        subInp.forEach(subInpItem => {
            if (subInpItem.nodeName === "SELECT") {

                // генерим уникальный id для <option>
                var timestamp = Date.now();
                var optionId = "optSub" + timestamp;
        
                subInpItem.appendChild(createOption(optionId, pack.code));
                
                // Привязываем событие выбор элемента в списке
                subInpItem.addEventListener('change', eventSubListItemChanged);
            }

            if (subInpItem.nodeName === "INPUT") {
                subInpItem.addEventListener('change', eventSubInputChanged);
            }
        });
        logOut("main.packsAdd }");
    }


    // -------------------------------------------------------
    // Функция | Удаляет элемент  pack из массива packs
    //           из всех выпадающих списков:
    //           selCode, selCode1...selCode[N]
    //
    function packsRemove(pack) {
        logOut("main.packsRemove { pack = %o ", pack);

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

        logOut("main.packsRemove }");
    }


    // -------------------------------------------------------
    // Делаем запросс в базу данных 
    // получаем информацию об элементах
    //
    setStatus('Загрузка данных с сервера', 3000);

    $.ajax({
        type: "POST",
        url: "getPackage.php",
        dataType: "json",
        success: function(jsonResponce, textStatus, jqXHR) {

            logOut('getPackage.php POST data: %o', jsonResponce);
            logOut('getPackage.php POST textStatus: ' + textStatus);
            logOut('getPackage.php POST jqXHR: %o', jqXHR);

            // в ответе сервера массив записей, 
            // запись это вся информация одного элемента 
            jsonResponce.forEach(row => {

                logOut('getPackage.php next data row: %o', row);

                // Создаем новый элемент
                var pack = packsCreate(row);

                // добавляем созданный элемент в массив и выпадающие списки
                packsAdd(pack);


                logOut('getPackage.php new package item: %o', pack);
            });

            // назначаем выбранный элемент
            // 0 - создать новый 
            // 1 - первый элемент в базе
            selectPack(1);

            setStatus('Ok', 3000);

            logOut('pack array: %o', packs);
        },
        error: function(XMLHttpRequest, textStatus, jqXHR) {

            setStatus('Сервер вернул ошибку ' + textStatus, 3000);

            logOut('getPackage.php POST textStatus: ' + textStatus);
            logOut('getPackage.php POST jqXHR: %o', jqXHR);
        }
    });



    // -------------------------------------------------------
    // СИГНАЛЫ | Привязываем события
    //


    // Привязываем событие нажатия кнопки "Редактировать"
    btnEdit.addEventListener('click', eventBtnEditClicked);

    // Привязываем событие нажатия кнопки "Копировать"
    btnCopy.addEventListener('click', eventBtnCopyClicked);   
    
    // Привязываем событие нажатия кнопки "Сохранить"
    btnApply.addEventListener('click', eventBtnSaveClicked);

    // Привязываем событие изменение checkbox "объект имеет содержимое"
    checkBoxHasContent.addEventListener('change', eventCheckBoxHasContentChanged);

    // Привязываем событие клика на список
    selCode.addEventListener('click', eventListClicked);

    // Привязываем событие получения фокуса списком
    selCode.addEventListener('focus', eventListFocus);

    // Привязываем событие потери списком фокуса 
    selCode.addEventListener('blur', eventListBlur);
    
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
    inpSizeH.addEventListener('change', eventItemChanged);

    // Привязываем событие изменения цвета элемента
    inpColor.addEventListener('change', eventItemChanged);          

    // Привязываем события клика на элементе
    canvas.addEventListener("mousedown", eventMouseDown);



    // -------------------------------------------------------
    // Слот | Масштабирование элемента на canvas
    //
    canvas.addEventListener('wheel', function(evt) {
        evt.preventDefault();

        var mousePos = getMousePos(canvas, evt);

        // получаем выделленый элемент
        var pack = selectedPack;

        // если выделенный элемент есть
        if (pack) {
            
            // то меняем выбранному элементу масштам
            if (evt.deltaY < 0) {
                logOut('canvas zoom out: ' + evt.deltaY);
                pack.scale = pack.scale * 1.05;
            }
            if (evt.deltaY > 0) {
                logOut('canvas zoom in: ' + evt.deltaY);
                pack.scale = pack.scale * 0.95;
            }

            // обновим изображение элемента
            pack.reDraw();
        }

        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        lblStatusInfo.innerHTML = message;
    }, false);
    


    // -------------------------------------------------------
    // СЛОТЫ | Обработка событий
    //


    // -------------------------------------------------------
    // Слот | Перемещение мыши
    //        Вывод сообщения о текущей позиции курсора мыши
    //
    canvas.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        lblStatusInfo.innerHTML = message;
    }, false);


    // -------------------------------------------------------
    // Слот | Привязываем события клика на элементе
    //
    function eventMouseDown(e) {

        // получаем выделленый элемент
        var pack = selectedPack;

        // если выделенный элемент есть
        if (pack) {

            // то передаем клик элементу
            // logOut('item mouse down: %o', pack);
            var pos = getMousePos(canvas, e)
            pack.onClick(pos.x, pos.y);
            // pack.onClick(event.clientX, event.clientY);
        }

    }


    // -------------------------------------------------------
    // Функция | Показывает модальный диалог с кнопками
    //
    function messageBox(mess, ...params) {
        var reply;
        if (confirm(mess)) {
            reply = btn.Yes;
        } else {
            reply = btn.No;
        }
        return reply;
    }


    // -------------------------------------------------------
    // Функция | Переключает форму и все необходимые элементы
    //           в режим редактирования и обратно
    //
    function setEditMode(editMode) {
        logOut('setEditMode editMode=%o', editMode);

        logOut('setEditMode selectedPack=%o', selectedPack);

        if (editMode) {
            
            // включаем режим редактирования [ РЕДАКТИРОВАТЬ ]

            // сохраняем копию выбранного элемента для отмены изменений
            // beforChangePack = JSON.parse(JSON.stringify(selectedPack));

            // Меняем кнопке текст с "Редактировать" на "Назад"
            btnEdit.innerHTML = 'Назад'
    
            // показываем поле для воода типа
            inpCodeEdit.classList.remove('hidden');

            // прячем список для выбора типа
            selCode.classList.add('hidden');

            setStatus('Режим редактирования включен', 3000);
        } else {

            // отключаем режим редактирования [ НАЗАД ]

            logOut('setEditMode selectedPack.changed=%o', selectedPack.changed);
            // если элемент был изменен
            if (selectedPack.changed) {
                
                
                // Предлагаем пользователю сохранить изменения
                var reply = messageBox('Тип "' + selectedPack.code + '" был изменен, хотите сохранить?');
                
                // Если пользователь хочет сохранить изменения
                if (reply == btn.Yes) {
                    
                    logOut('setEditMode: выполнить: Сохранение элемента');
                    
                    // сохраняем элемент в БД
                    packSave(selectedPack);
                } else {
                    
                    // восстанавливаем выбранный элемент из копии до изменений
                    // selectedPack = JSON.parse(JSON.stringify(beforChangePack));
                    
                    logOut('setEditMode selectedPack.id=%o', selectedPack.id);
                    // и если выбранный элемнт является новым
                    if (selectedPack.id == 0) {
                        logOut('setEditMode элемент новый возвращаемся к ранее выбранному!!!', prevousPack);

                        // убираем его с <canvas>
                        selectedPack.hide();

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
                    logOut('setEditMode элемент новый, не сохраняем, удаляем его и возвращаемся к ранее выбранному!!!', prevousPack);

                    // убираем его с <canvas>
                    selectedPack.hide();

                    // удаляем новый и не сохраненный элемент
                    packsRemove(selectedPack);

                    // возвращаемся к ранее выбранному элементу
                    selectedPack = prevousPack;
                }
            }

            // делаем его выбранным в списке
            selCode.selectedIndex = selectedPack.listItem.index;

            // Показываем текущий элемент на <canvas>
            selectedPack.show();
            
            // Показываем свойства элемента
            packsShowInfo(selectedPack);
            
            // Показываем свойства вложенных элементов
            packsSubShowInfo(selectedPack);
            
            // Меняем кнопке текст с "Назад" на "Редактировать"
            btnEdit.innerHTML = 'Редактированть'

            // прячем поле для воода типа
            inpCodeEdit.classList.add('hidden');

            // показываем список для выбора типа
            selCode.classList.remove('hidden');     

            setStatus('Режим редактирования отключен', 3000);
        }   

        // делаем инпуты доступными / блокируем делаем инпуты
        setDomElementsEnabled('.mainInput', editMode);
    }


    // -------------------------------------------------------
    // Обработка события нажатия кнопки "Редактировать"
    //
    function eventBtnEditClicked() {

        // меняем текущий режим 'редактирование' на противоположенный
        editMode = !editMode;
        setEditMode(editMode);
    }


    // -------------------------------------------------------
    // Функция | Сохраняет элемент pack в базу данных
    //           если объект новый то выполняет INSERT
    //           Затем добавляет новый элемент в массив packs и в список <select>
    //           иначе оновляет объект в базе
    //
    function packSave(pack) {
        logOut('packSave { pack = %o', pack);

        setStatus('Сохранение данных', 3000);

        // если выделенный элемент существует
        if (pack) {

            // если данный элемент является новым
            if (pack.id == 0) {
                
                // формируем данные для отправки на сервер
                // Выполняем асинхронный запрос POST (INSERT)
                $.ajax({
                    type: "POST",
                    url: "addPackage.php",
                    dataType: "json",
                    data: { 
                        "package_id": pack.id,
                        "package_code": pack.code,
                        "package_name": pack.name,
                        "package_payload": pack.payload,
                        "package_h": pack.h,
                        "package_wx": pack.wx,
                        "package_wy": pack.wy,
                        "package_color": pack.color.replace("#", "")
                    },
                    
                    // Получаем ответ сервера

                    // Если сохранение успешно:
                    success: function(jsonResponce, textStatus, jqXHR){

                        // Вызов: Добавление нового элемента 
                        // Вызов: Показать элемент
                        var result = JSON.parse(jsonResponce);

                        logOut('packSave: ответ сервера: %o', result);

                        // обновляем id элемента
                        pack.id = result.package_id;

                        // помечаем что элемент сохранен
                        pack.changed = false;
                        lblStatusChanged.innerHTML = "";

                        // показываем сообщение в statusbar
                        setStatus('Сохранено', 3000);
                    },
                    
                    // если были ошибки
                    error: function(XMLHttpRequest, textStatus, jqXHR) {
                        
                        // вывод сообщения об ошибке в statusbar
                        setStatus('Сервер вернул ошибку ' + textStatus, 3000);

                        logOut('packSave: setPackage.php POST textStatus: ' + textStatus);
                        logOut('packSave: setPackage.php POST jqXHR: %o', jqXHR);
                    }
                });
    
            // иначе обновляем существующий элемент в БД
            } else {

                // формируем данные для отправки на сервер
                // Выполняем асинхронный запрос POST (UPDATE)
                $.ajax({
                    type: "POST",
                    url: "setPackage.php",
                    dataType: "json",
                    data: { 
                        "package_id": pack.id,
                        "package_code": pack.code,
                        "package_name": pack.name,
                        "package_payload": pack.payload,
                        "package_h": pack.h,
                        "package_wx": pack.wx,
                        "package_wy": pack.wy,
                        "package_color": pack.color.replace("#", "")
                    },
                    
                    // Если сохранение успешно:
                    success: function(jsonResponce, textStatus, jqXHR){

                        // Вызов: Добавление нового элемента 
                        // Вызов: Показать элемент
                        var result = JSON.parse(jsonResponce);
                        
                        logOut('packSave: ответ сервера: %o', result);

                        // помечаем что элемент сохранен
                        pack.changed = false;
                        lblStatusChanged.innerHTML = "";

                        // показываем сообщение в statusbar
                        setStatus('Сохранено', 3000);
                    },
                    
                    // если были ошибки
                    error: function(XMLHttpRequest, textStatus, jqXHR) {
                        
                        // вывод сообщения об ошибке на странице
                        setStatus('Сервер вернул ошибку ' + textStatus, 3000);

                        logOut('packSave: setPackage.php POST textStatus: ' + textStatus);
                        logOut('packSave: setPackage.php POST jqXHR: %o', jqXHR);
                    }
                });
            }

        // вероятно ни один элемент не выделен, сообщаем об этом
        } else {

            setStatus('Сохранение неудачно. Не выбран ни один тип', 3000);
            logOut('packSave: pack пуст или не существует !!!');
        }
        
        logOut('packSave }');
    }


    // -------------------------------------------------------
    // Слот | Обработка события нажатия кнопки SAVE
    //
    function eventBtnSaveClicked() {
        logOut('eventBtnSaveClicked {');
    
        // сохраняем выбранный элемент
        packSave(selectedPack);

        logOut('eventBtnSaveClicked }');
    }


    // -------------------------------------------------------
    // Слот | Обработка событие нажатия кнопки ADD
    //
    function eventBtnCopyClicked() {

        return false;
        // если массив элементов существует
        if (typeof packs != "undefined") {

            // то создаем новый элемент в массив
            logOut('item add clicked');
            
            var pack = new PackageSimple(
                0,          // id нового элемента, пока 0
                canvas      // canvas где будет отображен элемент
            );
            pack.code = selCode.value;
            pack.name = inpName.value;
            pack.payload = parseInt(inpPayload.value);
            pack.h = parseInt(inpSizeH.value);
            pack.wx = parseInt(inpSizeWx.value);
            pack.wy = parseInt(inpSizeWy.value);
            pack.color = inpColor.value;
            
            // добавляем новый элемент в базу данных

            // делаем запросс в базу данных 
            // получаем информацию об элементах
            $.ajax({
                type: "POST",
                url: "addPackage.php",
                dataType: "json",
                data: { 
                    "package_code": pack.code,
                    "package_name": pack.name,
                    "package_payload": pack.payload,
                    "package_h": pack.h,
                    "package_wx": pack.wx,
                    "package_wy": pack.wy,
                    "package_color": pack.color.replace("#", "")
                },
                // если операция выполнена успешно
                success: function(jsonResponce, textStatus, jqXHR){

                    var result = JSON.parse(jsonResponce);
                    logOut('ответ сервера: %o', result);

                    // сервер вернет id нового элемента
                    pack.id = parseInt(result.package_id);
                    
                    // добавляем новый элемент в массив
                    packs.push(pack);

                    // добавляем новый элемент в список на форме
                    pack.listItem = domCreateElement('option');
                    pack.listItem.id = pack.id;
                    pack.listItem.innerHTML = pack.code;
                    selCode.append(pack.listItem);

                    // Привязываем событие выбор объекта в списке
                    pack.listItem.on('click', eventListItemClicked);

                    logOut('new item id=' + pack.id + ' inserted successeful!');
                    logOut('addPackage.php POST textStatus: ' + textStatus);
                    logOut('addPackage.php POST jqXHR: %o', jqXHR);
                    // alert('item id=' + pack.id + ' inserted successeful!');
                },
                // если были ошибки
                error: function(XMLHttpRequest, textStatus, jqXHR) {
                    // вывод сообщения об ошибке на странице
                    // $("#cellInfo").text("Ошибка: " + + textStatus);

                    alert('Сервер вернул ошибку ' + textStatus);
                    logOut('addPackage.php POST textStatus: ' + textStatus);
                    logOut('addPackage.php POST jqXHR: %o', jqXHR);
                }
            });
        }

    }
    

    // -------------------------------------------------------
    // Слот | Обработка события изменения характеристик элемента
    //
    function eventItemChanged(e) {

        // получаем выделенный элемент
        var pack = selectedPack;

        // если выделенный элемент есть
        if (pack) {

            // обновляем все характеристики выбранного элемента 
            switch(e.target.id) {
                case 'inpCodeEdit':
                    if (e.target.value == "") {
                        pack.code = "";
                    } else {
                        pack.code = e.target.value;
                        pack.listItem.innerHTML = pack.code;
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
                    pack.wx = parseInt(e.target.value)
                    break;
                case 'inpSizeWy':
                    pack.wy = parseInt(e.target.value);
                    break;
                case 'inpSizeH':
                    pack.h = parseInt(e.target.value);
                    break;
            }            
            
            // вычисляем объем элемента
            inpVolume.innerHTML = pack.h * pack.wx * pack.wy;

            // обновим изображение элемента
            pack.reDraw();  

            // помечаем что элемент изменен
            pack.changed = true;
            lblStatusChanged.innerHTML = "Не сохранено";
        } 
    }


    // -------------------------------------------------------
    // Слот | Событие изменение checkbox "объект имеет содержимое"
    //
    function eventCheckBoxHasContentChanged(e) {

        if (e.target.value) {

            // делаем инпуты доступными
            setDomElementsEnabled('.subInput', true);
        } else {
            
            // блокируем делаем инпуты
            setDomElementsEnabled('.subInput', false);
        }

        // получаем выделенный элемент
        var pack = selectedPack;

        // если в списке выбран элемент
        if (pack) {
            logOut('eventCheckBoxHasContentChanged item: %o', pack);
        }

        // помечаем что элемент изменен
        pack.changed = true;
        lblStatusChanged.innerHTML = "Не сохранено";
    }


    //  Флаг | признак что выпадающий список раскрыт
    var selCodeOpened = false;


    // -------------------------------------------------------
    // Устанавливаем отображение элементов списка
    // если detiled = true элементы в нем показаны как Обозначение | Наименование [| Ш х В х Г]
    // если detiled = false элементы в нем показаны как Обозначение
    //
    function setSelectItemsDetiled(detiled) {
        logOut('setSelectItemsDetiled { detiled = %o', detiled);

        // меняем элементы в выпадающем списке на форме
        var pack ;
        for (var index = 1; index < selCode.options.length; index++) {

            // берем pack который соответствует текущему <option>
            pack = getPackByListItem(selCode.options[index]);

            // обновляем текст <option>
            selCode.options[index].innerHTML = pack.code;

            if (detiled) {
                selCode.options[index].innerHTML += ' | ' + pack.name;
            }
        }

        logOut('setSelectItemsDetiled }');
    }


    // -------------------------------------------------------
    // Слот | Привязываем событие клика на список
    //
    function eventListClicked(e) {
        logOut('eventListClicked {');

        // selCodeOpened = !selCodeOpened;

        // меняем элементы в выпадающем списке на форме
        // setSelectItemsDetiled(selCodeOpened);

        logOut('eventListClicked }');
    }


    // -------------------------------------------------------
    // Обрабатываем событие раскрытия списка
    // когда список раскрыт элементы в нем показаны как Обозначение | Наименование
    //
    function eventListFocus(e) {
        logOut('eventListFocus {');

        // меняем элементы в выпадающем списке на форме
        selCodeOpened = false;
        setSelectItemsDetiled(true)

        logOut('eventListFocus }');
    }


    // -------------------------------------------------------
    // Обрабатываем событие когда список теряет фокус
    // когда список раскрыт элементы в нем показаны как Обозначение | Наименование
    //
    function eventListBlur(e) {
        logOut('eventListBlur {');

        // меняем элементы в выпадающем списке на форме
        selCodeOpened = false;
        setSelectItemsDetiled(false)

        logOut('eventListBlur }');
    }


    // -------------------------------------------------------
    // Функция | Показываем свойства элемента на форме
    //
    function packsShowInfo(pack) {
        logOut('packsShowInfo {');

        logOut('packsShowInfo: pack.color: %o', pack.color);

        inpCodeEdit.value = pack.code;
        inpName.value = pack.name;
        inpPayload.value = pack.payload;
        inpSizeH.value = pack.h;
        inpSizeWx.value = pack.wx;
        inpSizeWy.value = pack.wy;
        inpColor.value = pack.color;
        inpVolume.innerHTML = pack.h * pack.wx * pack.wy;

        lblStatusChanged.innerHTML = ((pack.changed) ? "Не сохранен" : "");

        logOut('packsShowInfo }');
    }


    // -------------------------------------------------------
    // Функция | Показываем свойства вложенных элементов на форме
    //
    function packsSubShowInfo(pack) {
        logOut('packsSubShowInfo {');
        logOut('packsSubShowInfo: !!! в процессе разработки !!!');
        logOut('packsSubShowInfo }');
    }


    // -------------------------------------------------------
    // Функция | Изменение выбранного элемента
    //           если в списке выбран новый
    //           то создает новый pack 
    //           и переключает в режим редактирования 
    //
    function setSelectedPack(list, packs) {
        logOut('setSelectedPack {');

        // если список элементов не пуст
        // if (typeof packs != "undefined") {

        // <option> выбранный в списке <select>
        logOut('setSelectedPack: list: %o', list);
        logOut('setSelectedPack: list.selectedOptions: %o', list.selectedOptions);
        logOut('setSelectedPack: list.selectedOptions[0]: %o', list.selectedOptions[0]);

        if (typeof list.selectedOptions !== "object") {
            logOut('setSelectedPack: list.selectedOptions is undefined - exit');
            return false;
        }
        var selectedOption = list.selectedOptions[0];

        // получаем id выбранного в списке <option>
        var optionId = selectedOption.id;
        logOut('setSelectedPack: option: %o %o %o', optionId, selectedOption.innerHTML);

        var pack;

        // если выбран <option> НОВЫЙ
        if (optionId == '0') {
            logOut('setSelectedPack: создаем новый элемент');

            // Создаем новый элемент
            pack = packsCreate({
                id: "0",
                code: "",
                name: "",
                color: "000000",
                wx: "0",
                wy: "0",
                h: "0",
                payload: "0",
                material_id: null,
                material_name: null,
                photo_id: null,
                created: null,
                updated: null,
                deleted: null
            });

            // добавляем его в выпадающий список и в массив
            packsAdd(pack);
                        
            // включаем режим редактирования
            editMode = true;
            setEditMode(editMode);

        } else {
            
            // получаем выбранный в списке элемент
            pack = getSelectedPack(list);
        }

        logOut('setSelectedPack: pack = %o', pack);

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
        packsShowInfo(selectedPack);

        // Показываем свойства вложенных элементов
        packsSubShowInfo(selectedPack);


        logOut('setSelectedPack }');
    }


    // -------------------------------------------------------
    // Слот | Выбор объекта в списке
    //
    function eventListItemChanged(e) {
        // e.preventDefault();
        logOut('eventListItemChanged {');
        
        // меняем выбранный элемент
        setSelectedPack(selCode, packs);

        // делаем элементы в выпадающем списке упрощенными (только ТИП)
        selCodeOpened = false;
        setSelectItemsDetiled(false);
        selCode.blur();
        
        logOut('eventListItemChanged }');
    }


    // -------------------------------------------------------
    // оперделяем номер блока которому принадлежит <option> или <input>
    // по числу в конце id. Например id=selCode3 - функция вернет номер блока 3
    //
    function getBlockId(item) {
        // regexp выбирает числа из строки
        var regexp = /(\d+)/;

        // получаем массив чисел
        var matches = item.id.match(regexp);
        // logOut("getBlockId matches: %o", matches);

        // берем последнее число
        var id = parseInt(matches[matches.length - 1]);

        return id;
    }

    
    // -------------------------------------------------------
    // Слот | Обрабатываем событие выбор элемента в списке внутренних прямоугольников
    //
    function eventSubListItemChanged(e) {
        // e.preventDefault();
        logOut('eventSubListItemChanged {');
        
        // если список элементов не пуст
        if (typeof packs != "undefined") {

            // если выделенный элемент есть
            if (typeof selectedPack != "undefined") {

                // стираеем ранее выбранный элемент
                // selectedPack.hide();
            }
            
            // получаем выбранный в списке элемент
            var pack = getPackByListItem(selCode.options[e.target.selectedIndex]);

            // id блока внутренних прямоугольников
            var id = getBlockId(e.target);
            logOut("eventSubListItemChanged sub id: %o", id);

            // получаем инпуты количества элементов в блоке
            var inpNx = domElementById("inpNx" + id);
            var inpNy = domElementById("inpNy" + id);

            // получаем инпуты размеров элементов блока
            var inpSizeWx = domElementById("inpSizeWx" + id);
            var inpSizeWy = domElementById("inpSizeWy" + id);
        
            // inpNx.value = ;
            // inpNy.value = ;

            // если выбранный элемент существует
            if (pack) {

                // запоминаем его
                // selectedPack = pack;

                // выводим его свойства
                
                logOut("pack selected: %o", pack);
                
                inpSizeWx.value = pack.wx;
                inpSizeWy.value = pack.wy;

            } else {
                // ничего не выбрано
                logOut('pack selected none');
                
                // очищаем все поля ввода
                inpSizeWx.value = "";
                inpSizeWy.value = "";
            }
            eventSubInputChanged(e);
        }
        logOut('eventSubListItemChanged }');
    }
    

    // -------------------------------------------------------
    // функция возвращает сумму всех элементов массива чисел
    //
    function sum(array) {
        var value = 0;
        array.forEach(item => {
            value = value + parseInt(item);
        });
        return value;
    }


    // -------------------------------------------------------
    // функция возвращает максимальный элемент массива положительных чисел
    //
    function max(array) {
        var value = 0;
        array.forEach(item => {
            if (parseInt(item) > value) {value = parseInt(item)};
        });
        return value;
    }


    // -------------------------------------------------------
    // Слот | Обрабатываем событие изменения количества элементов в блоке внутренних прямоугольников
    //
    function eventSubInputChanged(e) {
        // e.preventDefault();
        logOut('eventSubInputChanged {');
        
        // если список элементов не пуст
        if (typeof packs != "undefined") {

            // id блока внутренних прямоугольников
            var id = getBlockId(e.target);
            logOut("eventSubInputChanged: sub id: %o", id);

            // количество горизонтальных рядов до начала данного блока
            var rowCountBefor = 0;

            logOut("eventSubInputChanged: blockRows: %o", blockRows);

            // считаем сколько есть горизонтальных рядов до начала данного блока 
            (Object.keys(blockRows)).forEach( blockIndex => {
                // logOut('eventSubInputChanged: blockIndex:', blockIndex);
                // logOut('eventSubInputChanged: blockRows[blockIndex]:', blockRows[blockIndex]);
                var index = parseInt(blockIndex);
                if (index < id) {

                    rowCountBefor = rowCountBefor + blockRows[index];
                }
            });

            logOut('eventSubInputChanged: rowCountBefor:', rowCountBefor);

            
            // тип внутреннего элемента в данном блоке
            var subSelCode = domElementById("selCode" + id);

            // получаем инпуты количества элементов в блоке
            var inpNx = domElementById("inpNx" + id);
            var inpNy = domElementById("inpNy" + id);

            var nX = parseInt(inpNx.value);
            var nY = parseInt(inpNy.value);

            // получаем выбранный в списке элемент
            var pack = selectedPack;

            // получаем выбранный внутренний элемент данного блока
            var subPack = getPackByListItem(selCode.options[subSelCode.selectedIndex]);

            // если заполнены значения по вертикали и горизонтали
            if ((nX > 0) && (nY > 0)) {
                
            } else {
                
                if (!(nX > 0)) {
                    nX = 0;
                    nY = 0;
                    // обнуляем количество столбцов в данном блоке
                    // blockRows[id] = 0;
                    // pack.item[rowIndex] = [];

                    // logOut("eventSubInputChanged: blockRows[id]: %o", blockRows[id]);
                }
                
                if (!(nY > 0)) {
                    nY = 0;
                    // обнуляем количество рядов в данном блоке
                    // blockCols[id] = 0;
                    // logOut("eventSubInputChanged: blockCols[id]: %o", blockCols[id]);      
                }          
            }

            var rowCount = rowCountBefor + blockRows[id];

            // удаляем ряды в данном блоке если они уже есть
            for (var rowIndex = rowCountBefor; rowIndex < rowCount; rowIndex++) {
                if (typeof pack.item[rowIndex] !== 'undefined') {
                    logOut("eventSubInputChanged: deleting row: %o", rowIndex);
                    pack.item.splice(rowIndex, 1);
                }
            }

            // устанавливаем количество рядов в данном блоке
                blockRows[id] = nY;
                logOut("eventSubInputChanged: blockRows[id]: %o", blockRows[id]);
            
                // устанавливаем количество столбцов в данном блоке
                blockCols[id] = nX;
                logOut("eventSubInputChanged: blockCols[id]: %o", blockCols[id]);
 
                // если выбранный элемент существует
                if (pack) {

                    // если тип внутреннего элемента выбран
                    if (subPack) {
                        // меняем количество рядов текущего блока в pack

                        logOut("eventSubInputChanged: pack selected: %o", pack);
                        

                        rowCount = rowCountBefor + blockRows[id];
                        
                        var colIndex = 0;
                        var colCount = blockCols[id];

                        pack.rowCount = sum(blockRows);
                        
                        pack.colCount = max(blockCols);

                        logOut('eventSubInputChanged: rowCount:', rowCount);
                        logOut('eventSubInputChanged: colCount:', colCount);
                        logOut('eventSubInputChanged: pack.colCount:', pack.colCount);

                        // изменяем количество рядов данного блока в pack 
                        for (var rowIndex = (rowCountBefor); rowIndex < rowCount; rowIndex++) {
                            logOut('eventSubInputChanged: rowIndex:', rowIndex);
                                                    
                            if (blockRows[id + 1] === 'undefined') {
                                logOut('eventSubInputChanged: appand in:', rowIndex);
                                pack.item.push([]);
                            } else {
                                logOut('eventSubInputChanged: insert in:', rowIndex);
                                pack.item.splice(rowIndex, 0, []);
                            }

                            // добавляем элементы в ряд
                            for (var colIndex = 0; colIndex < colCount; colIndex++) {
                                
                                var newSubPack = new PackageSimple(pack.id * 100 +  rowIndex * 10 + colIndex, canvas);
                                newSubPack.code = subPack.code;
                                newSubPack.name = subPack.name;
                                newSubPack.color = subPack.color;
                                newSubPack.wx = subPack.wx;
                                newSubPack.wy = subPack.wy;
                                newSubPack.h = subPack.h;

                                pack.item[rowIndex].push(newSubPack);
                            }
                        }
                        logOut('eventSubInputChanged: pack.item:', pack);

                    }

                    // перерисуем элемент
                    pack.reDraw();
                } else {
                    // ничего не выбрано
                    logOut('eventSubInputChanged: pack selected none');

                    // очищаем все поля ввода
                    // inpSizeWx.value = "";
                    // inpSizeWy.value = "";
                }
        }
        logOut('eventSubInputChanged }');
    }

});
  
