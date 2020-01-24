"use strict";



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
        console.log("class PackageSimple.constructor { id=" + id);
        
        this._hidden = true;
        
        this._id = id;

        this._color = '#202020';        // цвет элемента (по умолчанию #202020)

        this._selectedColor = shadeColor(this._color, 20);

        this._yScale = 1;     // масштаб по вертикали
        this._xScale = 1;     // масштаб пл горизонтали
        this._scale = 1;     // масштаб отображения на canvas
        this._d = 1.01;       // отступ от края canvas в частях от размера canvas

        this._border = 1;
        this._borderColor = "#505050";
        
        // статуса ВЫБРАН / НЕ ВЫБРАН 
        this._selected = false;
        
        // объект canvas на котором элемент будет отображен
        this.canvas = canvas;

        console.log("class PackageSimple.constructor }");
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
        console.log("class PackageSimple.set color { color=" + color);

        if (!this._hidden) {this.clear();}

        this._color = color;
        this._selectedColor = shadeColor(color, 20);

        if (!this._hidden) {this.draw();}

        console.log("class PackageSimple.set color }");
    }

    get color() {
        return this._color;
    }


    // изменение размеров элемента
    setSize(
        wx = 0, // размер элемента по горизонтали по оси y
        wy = 0, // размер элемента по горизонтали по оси x
        h = 0,   // высота элемента
        force = false) {

        console.log("class PackageSimple.setSize { wx=%o; wy=%o; wh=%o; force=%o", wx, wy, h, force);
        
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

            console.log("class pack.setSize id=" + this._id + " wx=" + this._wx  + " wy=" + this._wy + " h=" + this._h);
        }
        console.log("class PackageSimple.setSize }");
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

            console.log("class PackageSimple.draw{ id=" + this._id);

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

            console.log("class PackageSimple.draw }");
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
        console.log("class PackageSimple.setSelected { id=" + this._id + " selected = " + selected);    

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
        
        console.log("class PackageSimple.setSelected }");    
    }


    // обрабатываем клики мышью
    onClick(clickX, clickY) {

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
            console.log("class PackageSimple.onClick - clicked");    

            this.setSelected(!(this._selected), true);
        } else {
            console.log("class PackageSimple.onClick - click outside");    
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
        
        ctx.fillRect(x, y, wx, wy);
        
        if (this._border > 0) {
            ctx.lineWidth = this._border;
            ctx.strokeStyle = this._borderColor;

            ctx.strokeRect(x, y, wx, wy);
        }

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

        console.log("class PackageContainerItem.setSize { id=%o; wx=%o; wy=%o; wh=%o; force=%o", this._id, wx, wy, h, force);
        
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
            
            console.log("dispW=" + this._dispW + " dispH=" + this._dispH);
            console.log("xScale=" + this._xScale + " yScale=" + this._yScale);
            
            
            this._scale = Math.max(this._xScale, this._yScale);

            this._x = (this._dispW * this._scale - this._wx) / 2;
            this._y = (this._dispH * this._scale - this._wy) / 2;
                   
            console.log("this.scale=" + this._scale);
            console.log("class PackageContainerItem.setSize x=" + this._x  + " y=" + this._y);
    
            if (!this._hidden) {this.draw();}

            console.log("class PackageContainerItem.setSize wx=" + this._wx  + " wy=" + this._wy + " h=" + this._h);
        }
        console.log("class PackageContainerItem.setSize }");
    }


    // Стираем ячейку на <canvas>
    clear() {
        console.log("class PackageContainerItem.clear { item=%o", this);
        // this._ctx.save();
        // this._ctx.scale(1/this._scale, 1/this._scale);

        this._ctx.clearRect(0, 0, this._dispW, this._dispH);

        // this._ctx.restore();
        console.log("class PackageContainerItem.clear }");
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
                
                console.log("class PackageContainerItem.draw { row=" + rowIndex);    

                for (var colIndex = 0; colIndex < this._colCount; colIndex++) {
                    
                    console.log("class PackageContainerItem.draw { col=" + colIndex);    
                    console.log("class PackageContainerItem.draw { item=", this.item[rowIndex][colIndex]);    
                    
                    this.item[rowIndex][colIndex]._x = x;
                    this.item[rowIndex][colIndex]._y = y;
                    this.item[rowIndex][colIndex].scale = this._scale;
                    this.item[rowIndex][colIndex].show();
    
                    // вычисляем горизонтальную координату где начнется следующий слобец
                    x = x + (this.item[rowIndex][colIndex].wx + this._mx);
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





  
function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    }
}

// подгоняем размер тега <input> под его содержимое
// если параметр min = true то размер всегда будет минимально возможным
function tuneInputSize(target, min = false) {
    if (min) {
        target.size = target.value.length;
    } else if (target.size < target.value.length) {
        target.size = target.value.length;
    }
}


window.addEventListener("load", () => {

    console.log("package.php loaded");

    // окошко с информацией об упаковке
    const packageInfoDiv = domElementById("packageInfoDiv");

    if (packageInfoDiv) {
        console.log(packageInfoDiv);

        // добавляем к окну с информацией о товаре
        // обработчик события клика левой кнопкой мыши
        packageInfoDiv.addEventListener("click", function(){
        });

    }


    function domElementById(id) {
        console.log("main.domElementById { id=%o", id);
        var element = document.getElementById(id);
        console.log("main.domElementById elment=%o", element);

        console.log("main.domElementById }");    
        return element;
    }


    function domCreateElement(tagName) {
        console.log("main.domCreateElement { id=%o", tagName);
        var element = document.createElement(tagName);
        console.log("main.domCreateElement elment=%o", element);

        console.log("main.domCreateElement }");    
        return element;
    }


    // список всех элементов на форме
    const inpCode = domElementById("inpCode");
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

    // элементы формы для внутренних прямоцгольников
    var subInp = [];
    subInp.push(domElementById("inpCode1"));
    subInp.push(domElementById("inpNx1"));
    subInp.push(domElementById("inpNy1"));
    subInp.push(domElementById("inpCode2"));
    subInp.push(domElementById("inpNx2"));
    subInp.push(domElementById("inpNy2"));
    subInp.push(domElementById("inpCode3"));
    subInp.push(domElementById("inpNx3"));
    subInp.push(domElementById("inpNy3"));
    subInp.push(domElementById("inpCode4"));
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
    
    // контейнер элементов
    var packs = [];

    // ссылка на выбранный элемент
    var selectedPack;


    // Функция | Поиск выделенного элемента в массиве
    //           По атрибуту selected = true
    //           Возвращает указатель на элемент массива (объект)
    //           или false массив пуст или в нем нет выделенного элемента
    function getSelectedPack(list) {

        // в выпадающем списке смотрим какой элемент выбран и берем его id
        var id = list.options[list.selectedIndex].id;

        // если в выпадающем списке есть выбранный элемент
        //     и контейнер элементов не пуст
        if ((typeof packs != "undefined") && (typeof id != "undefined")) {

            // смотрим какой из элементов выбран в списке
            var pack = packs.find(obj => obj.id == id);

            if (typeof pack != "undefined") {
                console.log('package list has selected: ' + pack.id + " name=" + pack.name);

                return pack;
            } else {
                console.log('package list has no selected item');
                return false;
            }
        } else {
            console.log('package list is emptyt' + typeof packs);
            return false;
        }
    }


    // $("#cellInfo").text("Загрузка склада...");


    // создает тэг <option> для <select>
    function createOption(id, code) {
        var item = domCreateElement('option');
        item.id = id;
        item.innerHTML = code;

        return item;
    }

    
    // делаем запросс в базу данных 
    // получаем информацию об элементах
    $.ajax({
        type: "POST",
        url: "getPackage.php",
        dataType: "json",
        success: function(jsonResponce, textStatus, jqXHR) {

            console.log('getPackage.php POST data: %o', jsonResponce);
            console.log('getPackage.php POST textStatus: ' + textStatus);
            console.log('getPackage.php POST jqXHR: %o', jqXHR);

            var rows = jsonResponce;
            // var rows = JSON.parse(jsonResponce);
            
            rows.forEach(row => {

                console.log('getPackage.php next data row: %o', row);

                // Добавляем новый элемент из базы в массив
                var pack = new PackageContainerItem(
                    parseInt(row['id']),    // id элемента, получен из базы
                    canvas                  // canvas где будет отображен элемент
                );
                packs.push(pack);
                pack.code = row['code'];
                pack.name = row['name'];
                pack.payload = parseInt(row['payload']);
                pack.h = parseInt(row['h']);            // размеры элемента из базы
                pack.wx = parseInt(row['wx']);           // размеры элемента из базы
                pack.wy = parseInt(row['wy']);           // размеры элемента из базы
                pack.color = "#" + row['color'];     // цвет элемента из базы

                // добавляем новый элемент в выпадающий список список на форме
                pack.listItem = createOption(pack.id, pack.code);
                inpCode.appendChild(pack.listItem);

                // добавляем новый элемент в выпадающие списки внутренних прямоугольников на форме
                subInp.forEach(subInpItem => {
                    if (subInpItem.nodeName === "SELECT") {

                        subInpItem.appendChild(createOption(pack.id, pack.code));
                        
                        // Привязываем событие выбор элемента в списке
                        subInpItem.addEventListener('change', eventSubListItemChanged);
                    }

                    if (subInpItem.nodeName === "INPUT") {
                        subInpItem.addEventListener('change', eventSubInputChanged);
                    }
                });

                var w = 50;
                pack.rowCount = 1;
                pack.colCount = 5;
                var subPack = new PackageSimple(100, canvas);
                subPack.color = "#0056D6";
                subPack.wx = w;
                subPack.wy = w;
                pack.item[0][0] = subPack;
                var subPack = new PackageSimple(101, canvas);
                subPack.color = "#7756D6";
                subPack.wx = w;
                subPack.wy = w;
                pack.item[0][1] = subPack;
                var subPack = new PackageSimple(102, canvas);
                subPack.color = "#7756D6";
                subPack.wx = w;
                subPack.wy = w;
                pack.item[0][2] = subPack;
                var subPack = new PackageSimple(103, canvas);
                subPack.color = "#7756D6";
                subPack.wx = w;
                subPack.wy = w;
                pack.item[0][3] = subPack;
                var subPack = new PackageSimple(104, canvas);
                subPack.color = "#7756D6";
                subPack.wx = w;
                subPack.wy = w;
                pack.item[0][4] = subPack;

                console.log('getPackage.php new package item: %o', pack);
            });

            // назначаем выбранный элемент
            // inpCode.selectedIndex = 1;
            
            // создаем событие что список изменился
            var event = new Event('change');

            // отправляем событие
            inpCode.dispatchEvent(event);

            console.log('pack array: %o', packs);
        },
        error: function(XMLHttpRequest, textStatus, jqXHR) {
            // $("#cellInfo").text("Ошибка: " + + textStatus);

            alert('Сервер вернул ошибку ' + textStatus);
            console.log('getPackage.php POST textStatus: ' + textStatus);
            console.log('getPackage.php POST jqXHR: %o', jqXHR);
        }
    });

    // Привязываем событие нажатия кнопки "Редактировать"
    btnEdit.addEventListener('click', eventBtnEditClicked);

    // Привязываем событие нажатия кнопки "Копировать"
    btnCopy.addEventListener('click', eventBtnCopyClicked);   
    
    // Привязываем событие нажатия кнопки "Сохранить"
    btnApply.addEventListener('click', eventBtnApplyClicked);

    // Привязываем событие изменение checkbox "объект имеет содержимое"
    checkBoxHasContent.addEventListener('change', eventCheckBoxHasContentChanged);

    // Привязываем событие выбор объекта в списке
    inpCode.addEventListener('change', eventListItemChanged);

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


    // масштабирование элемента на canvas
    canvas.addEventListener('wheel', function(evt) {
        evt.preventDefault();

        var mousePos = getMousePos(canvas, evt);

        // получаем выделленый элемент
        var pack = getSelectedPack();

        // если выделенный элемент есть
        if (pack) {
            
            // то меняем выбранному элементу масштам
            if (evt.deltaY < 0) {
                console.log('canvas zoom out: ' + evt.deltaY);
                pack.scale = pack.scale * 1.05;
            }
            if (evt.deltaY > 0) {
                console.log('canvas zoom in: ' + evt.deltaY);
                pack.scale = pack.scale * 0.95;
            }

            // обновим изображение элемента
            pack.reDraw();
        }

        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        $("#message").text(message);
    }, false);
    

    // вывод сообщения о текущей позиции курсора мыши
    canvas.addEventListener('mousemove', function(evt) {
        var mousePos = getMousePos(canvas, evt);
        var message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
        // $("#message").text(message);
    }, false);


    // Привязываем события клика на элементе
    canvas.addEventListener("mousedown", eventMouseDown);


    // ОБРАБОТКА СОБЫТИЙ


    // Привязываем события клика на элементе
    function eventMouseDown(e) {

        // получаем выделленый элемент
        var pack = selectedPack;

        // если выделенный элемент есть
        if (pack) {

            // то передаем клик элементу
            // console.log('item mouse down: %o', pack);
            var pos = getMousePos(canvas, e)
            pack.onClick(pos.x, pos.y);
            // pack.onClick(event.clientX, event.clientY);
        }

    }


    // Обработка события нажатия кнопки "Редактировать"
    function eventBtnEditClicked() {
        // получаем выделленый элемент
        var pack = getSelectedPack();

        console.log('btn edit clicked id=%o', pack);

        inpCodeEdit.hidden = false;
        inpCode.hidden = true;

        inpCodeEdit.value = pack.code;
    }


    // Обработка события нажатия кнопки APPLY
    function eventBtnApplyClicked() {

        // получаем выделленый элемент
        var pack = getSelectedPack();

        // если выделенный элемент есть
        if (pack) {

            // то сохраняем выделенный элемент в базу данных
            console.log('item apply clicked id=' + pack.id);

                // делаем запросс в базу данных 
                // получаем информацию о ячейках
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
                    // если операция выполнена успешно
                    success: function(jsonResponce, textStatus, jqXHR){

                        var result = JSON.parse(jsonResponce);
                        console.log('ответ сервера: %o', result);
                    },
                    // если были ошибки
                    error: function(XMLHttpRequest, textStatus, jqXHR) {
                        // вывод сообщения об ошибке на странице
                        // $("#cellInfo").text("Ошибка: " + + textStatus);

                        alert('Сервер вернул ошибку ' + textStatus);
                        console.log('setPackage.php POST textStatus: ' + textStatus);
                        console.log('setPackage.php POST jqXHR: %o', jqXHR);
                        }
                });
        }

        inpCodeEdit.hidden = true;
        inpCode.hidden = false;
    }


    // Обработка событие нажатия кнопки ADD
    function eventBtnCopyClicked() {

        // если массив элементов существует
        if (typeof packs != "undefined") {

            // то создаем новый элемент в массив
            console.log('item add clicked');
            
            var pack = new PackageSimple(
                0,          // id нового элемента, пока 0
                canvas      // canvas где будет отображен элемент
            );
            pack.code = inpCode.value;
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
                    console.log('ответ сервера: %o', result);

                    // сервер вернет id нового элемента
                    pack.id = parseInt(result.package_id);
                    
                    // добавляем новый элемент в массив
                    packs.push(pack);

                    // добавляем новый элемент в список на форме
                    pack.listItem = domCreateElement('option');
                    pack.listItem.id = pack.id;
                    pack.listItem.innerHTML = pack.code;
                    inpCode.append(pack.listItem);

                    // Привязываем событие выбор объекта в списке
                    pack.listItem.on('click', eventListItemClicked);

                    console.log('new item id=' + pack.id + ' inserted successeful!');
                    console.log('addPackage.php POST textStatus: ' + textStatus);
                    console.log('addPackage.php POST jqXHR: %o', jqXHR);
                    // alert('item id=' + pack.id + ' inserted successeful!');
                },
                // если были ошибки
                error: function(XMLHttpRequest, textStatus, jqXHR) {
                    // вывод сообщения об ошибке на странице
                    // $("#cellInfo").text("Ошибка: " + + textStatus);

                    alert('Сервер вернул ошибку ' + textStatus);
                    console.log('addPackage.php POST textStatus: ' + textStatus);
                    console.log('addPackage.php POST jqXHR: %o', jqXHR);
                }
            });
        }

    }
    

    // Обработка события изменения характеристик элемента
    function eventItemChanged(e) {

        // получаем выделенный элемент
        var pack = getSelectedPack();

        // если выделенный элемент есть
        if (pack) {

            // обновляем все характеристики выбранного элемента 
            switch(e.target.id) {
                case 'inpCodeEdit':
                    pack.code = e.target.value;
                    // pack.listItem = $("<option class=\"\" selected id=" +  pack.id + ">"+ pack.code + "</option>");
                    // inpCode.children(":selected") = pack.code;
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
        } 
    }


    // Событие изменение checkbox "объект имеет содержимое"
    function eventCheckBoxHasContentChanged(e) {
        // получаем выделенный элемент
        var pack = getSelectedPack();

        // если выделенный элемент есть
        if (pack) {
            console.log('eventCheckBoxHasContentChanged item: %o', pack);
        }
    }


    // Обрабатываем событие выбор объекта в списке
    function eventListItemChanged(e) {
        // e.preventDefault();
        console.log('eventListItemChanged {');
        
        // если список элементов не пуст
        if (typeof packs != "undefined") {

            // если выделенный элемент есть
            if (typeof selectedPack != "undefined") {

                // стираеем ранее выбранный элемент
                selectedPack.hide();
            }
            
            // получаем выбранный в списке элемент
            var pack = getSelectedPack(e.target);

            // если выбранный элемент существует
            if (pack) {

                // запоминаем его
                selectedPack = pack;

                // выводим его свойства
                
                console.log("pack selected: %o", pack);
                
                inpName.value = pack.name;
                inpPayload.value = pack.payload;
                inpSizeH.value = pack.h;
                inpSizeWx.value = pack.wx;
                inpSizeWy.value = pack.wy;
                inpColor.value = pack.color;
                inpVolume.innerHTML = pack.h * pack.wx * pack.wy;

                pack.show();

            } else {
                // ничего не выбрано
                console.log('pack selected none');

                // очищаем все поля ввода
                inpName.value = "";
                inpPayload.value = "";
                inpSizeH.value = "";
                inpSizeWx.value = "";
                inpSizeWy.value = "";
                inpColor.value = "#000000";
                inpVolume.innerHTML = "0";
            }
        }
        console.log('eventListItemChanged }');
    }


    // оперделяем номер блока которому принадлежит тэг
    function getBlockId(item) {
        // regexp выбирает числа из строки
        var regexp = /(\d+)/;

        // получаем массив чисел
        var matches = item.id.match(regexp);
        // console.log("getBlockId matches: %o", matches);

        // берем последнее число
        var id = matches[matches.length - 1];

        return id;
    }

    
    // Обрабатываем событие выбор элемента в списке внутренних прямоугольников
    function eventSubListItemChanged(e) {
        // e.preventDefault();
        console.log('eventSubListItemChanged {');
        
        // если список элементов не пуст
        if (typeof packs != "undefined") {

            // если выделенный элемент есть
            if (typeof selectedPack != "undefined") {

                // стираеем ранее выбранный элемент
                // selectedPack.hide();
            }
            
            // получаем выбранный в списке элемент
            var pack = getSelectedPack(e.target);

            // id блока внутренних прямоугольников
            var id = getBlockId(e.target);
            console.log("eventSubListItemChanged sub id: %o", id);

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
                
                console.log("pack selected: %o", pack);
                
                inpSizeWx.value = pack.wx;
                inpSizeWy.value = pack.wy;

                // pack.show();
            } else {
                // ничего не выбрано
                console.log('pack selected none');

                // очищаем все поля ввода
                inpSizeWx.value = "";
                inpSizeWy.value = "";
            }
        }
        console.log('eventSubListItemChanged }');
    }
    
    
    // Обрабатываем событие изменения количества элементов в блоке внутренних прямоугольников
    function eventSubInputChanged(e) {
        // e.preventDefault();
        console.log('eventSubInputChanged {');
        
        // если список элементов не пуст
        if (typeof packs != "undefined") {

            // если выделенный элемент есть
            if (typeof selectedPack != "undefined") {

                // стираеем ранее выбранный элемент
                // selectedPack.hide();
            }
            
            // получаем выбранный в списке элемент
            var pack = getSelectedPack(e.target);

            // id блока внутренних прямоугольников
            var id = getBlockId(e.target);
            console.log("eventSubListItemChanged sub id: %o", id);

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
                
                console.log("pack selected: %o", pack);
                
                // inpSizeWx.value = pack.wx;
                // inpSizeWy.value = pack.wy;

                // pack.show();
            } else {
                // ничего не выбрано
                console.log('pack selected none');

                // очищаем все поля ввода
                // inpSizeWx.value = "";
                // inpSizeWy.value = "";
            }
        }
        console.log('eventSubInputChanged }');
    }

});
  
