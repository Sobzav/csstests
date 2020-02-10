
// Класс места хранения ЯЧЕЙКА 
class ContainerCell {

    // Создаем элемент хранения
    constructor(id = 0, row = 0, col = 0, width = 0, height = 0, space = 0, canvas) {
        
        this.id = id;       // id элемента из базы данных
        this.warehouse;     // id склада
        // this.warehouse.name;     // наименование склада
        this.zone;          // id зоны
        this.floor;         // id этажа
        this.line;          // id линии
        this.rack;          // id стиллажа
        this.shelf;         // id полки
        this.tray;          // id лотка
        this.container;     // id сонтейнера
        this.wz;
        this.wx;
        this.wy;
        this.count;         // количество элементов (единиц товара или других мест хранения) внутри 

        // статуса ВЫБРАН / НЕ ВЫБРАН 
        this.selected = false;

        // цвет элементы в нормальном состоянии
        this.normalColor = 'rgba(50, 200, 50, 0.6)';

        // цвет элемента когда он ВЫБРАН
        this.selectedColor = 'rgba(50, 200, 50, 1)';

        // текущий цвет элемента (по умолчанию равен normalColor)
        this.color = this.normalColor;

        // объект canvas на котором элемент будет отображен
        this.canvas = canvas;

        // получаем 2d контекст, 
        // это объект для вывода всей графики 
        this.ctx = this.canvas.getContext('2d');
        
        // свободные промежутки между элементами
        this.space = space;
        
        // размеры элемента
        this.setSize(width, height);
                
        // сохраняем ряд и столбец в котором элемент расположен
        // вычисляем новые координаты левого верхнего угла элемента
        this.setPosition(row, col, true);
        
        console.log("class Cell.constructor id=" + this.id);
    }

    // изменение размеров элемента
    setSize(
        width = 0,  // ширина элемента по горизонтали на canvas
        height = 0, // высота элемента по вертикали на canvas
        force = false   // принудительное обновление размеров
        ) {
        
        // если размеры элемента изменились
        if ((this.width != width) || (this.height != height) || force) {

            // стираем элемент в текущей позиции
            this.clear();

            // сохраняем новые значения размеров
            this.width = width;
            this.height = height;

            this.setPosition(this.row, this.col, true);

            console.log("class Cell.setSize id=" + this.id + " width=" + this.width + " height=" + this.height);
            console.log("class Cell.setSize typeOf id=" + typeof(this.id) + " tWidth=" + typeof(this.width) + " tHeight=" + typeof(this.height));
        }
    }

    // изменение номера ряда в котором расположен элемент
    setRow (row) {

        // вычисляем новые координаты левого верхнего угла элемента
        this.setPosition(row, this.col);
        console.log("class Cell.setRow id=" + this.id);
    }

    // изменение номера столбца в котором расположен элемент
    setCol(col) {

        // вычисляем новую позицию левого верхнего угла элемента
        this.setPosition(this.row, col);
        console.log("class Cell.setCol id=" + this.id);
    }

    // вычисляем координаты левого верхнего угла элемента
    // относительно левого верхнего угла canvas исходя
    // из номера ряда и столбца в которых расположен данный элемент
    // а так же с учетом свободных промежутков между элементами
    setPosition(
        row = 0,        // позиция элемента - ряд по горизотнали
        col = 0,        // позиция элемента - столбец по вертикали
        force = false   // принудительное обновление позиции
        ) {
        
        // если ряд или столбец изменился
        if ((this.row != row) || (this.col != col) || force) {

            // стираем элемент в текущей позиции
            this.clear();

            // сохраняем новое значение ряда и столбца
            this.row = row;
            this.col = col;

            this.x = (this.col - 1) * this.width + this.space * this.col;
            this.y = (this.row - 1) * this.height + this.space * this.row;

            // рисуем элемент на новом месте
            this.drow();            
            console.log("class Cell.setPosition id=" + this.id + " row=" + this.row + " col=" + this.col);
        }
    }

    // Стираем ячейку
    clear() {
        this.ctx.clearRect(this.x, this.y, this.width, this.height);
    }

    // Рисуем ячйку
    drow() {
        // Визуальные свойства элемента
        this.ctx.fillStyle = this.color;

        this.ctx.fillRect(this.x, this.y, this.width, this.height);

        console.log("class Cell.drow id=" + this.id);
        // console.log("class Context type=" + this.ctx.strokeStyle);
        // console.log("class Cell id=" + this.id + " drow finished");
    }

    // изменение и запоминание статуса ВЫБРАН / НЕ ВЫБРАН 
    setSelected(selected) {

        // если статус изменился
        if (this.selected != selected) {

            // то запоминаем новое состояние
            this.selected = selected;

            // если новый статус "ВЫБРАН"
            if (this.selected) {
                
                // то меняем цвет ячеки
                this.color = this.selectedColor;

            // если новый статус "ВЫБРАН"
            } else {
    
                // то меняем цвет ячеки
                this.color = this.normalColor;
            }
    
            this.clear();
            this.drow();
            console.log("class Cell id=" + this.id + " selected = " + this.selected);    
        }
    }

    // обрабатываем клики мышью
    onClick(clickX, clickY) {
        // проверяем попадает ли клик мыши по горизонтали в ширину ячейки
        let xClickInside = (clickX > this.x) && (clickX < (this.x + this.width));

        // проверяем попадает ли по вертикали клик мыши в высоту ячейки
        let yClickInside = (clickY > this.y) && (clickY < (this.y + this.height));

        // передаем попадание клика в ячейку
        // для изменения и запоминания нового статуса "ВЫБРАН"
        this.setSelected(xClickInside && yClickInside);
    }
    
    // onTouchend(e) { // обрабатываем касания пальцем
    //     var ex = (e.touches[0].pageX - this.canvas.offsetLeft) | 0;
    //     var ey = (e.touches[0].pageY - this.canvas.offsetTop) | 0;
    //     // event(x, y);
    // }
}