"use strict";





// =======================================================
// Класс | SubBlock
//          Один блок это набор из нескольких строк однотипных элементов
//         имеет количество горизонтальных рядов rowCount       (вводит пользователь - inpNy)
//         и количество вертикальных столбцов colCount          (вводит пользователь - inpNx)
//         а так же тип всех его элементов packId               (вводит пользователь - packList)
//          Если блоку задать тип элементов, то он отобразит 
//         размеры данного типа в полях inpSizeWx, inpSizeWy
//
class SubBlock {


    // Создаем блок для настройки внутренних элементов
    constructor(index, subBlock) {
        // console.group("Class SubBlock.constructor");
        


        // -------------------------------------------------------
        // Свойства | 
        //
        this.dh = null;

        this._pack = null;          // родительский элемент - контейнер внутренних элементов
        this._index = index;        // индекс данного блока в контейнере
        this._rowCount = 0;         // количество элементов в рядах блока
        this._colCount = 0;         // количество рядов в блоке
        this._subPack = null;       // указатель на элемент - тип внутренних элементов

        this._label = subBlock.querySelector('#' + 'subLabel' + index);   // номер блока (для отображения на форме)
        this._packList = this.newPackList(subBlock.querySelector('#packList' + index));
        this._inpNx = subBlock.querySelector('#inpNx' + index);
        this._inpNy = subBlock.querySelector('#inpNy' + index);
        this._checkBox = subBlock.querySelector('#checkBoxInRow' + index);
        this._inpSizeWx = subBlock.querySelector('#inpSizeWx' + index);
        this._inpSizeWy = subBlock.querySelector('#inpSizeWy' + index);
        this._inpTotal = subBlock.querySelector('#inpTotal' + index);
        
        this._label.innerText = (index + 1);

        // подключаем слоты к сигналам внутренних визуальных элементов
        this.connectSignals();


        // -------------------------------------------------------
        // Сигналы | 
        //
        
        // изменились размеры
        this.sizeChanged;

        // изменился тип внутренних элементов
        this.contentChanged;

        // console.log("this: %o", this);
        // console.groupEnd();
    }
    


    // -------------------------------------------------------
    // Метод | Подключение слотов к сигналам внутренних визуальных элементов
    //
    connectSignals() {
        // console.group("class SubBlock.connectSignals");
        // console.log("this: %o", this);

        this.packList.onItem0 = (id) => this.slotSubPackChanged(id);
        this.packList.onChange = (id) => this.slotSubPackChanged(id);
        // this.inpNx.addEventListener('input', event => this.slotSizeChanged(event));
        // this.inpNy.addEventListener('input', event => this.slotSizeChanged(event));
        this._checkBox.addEventListener('change', event => this.slotInRowChanged(event));

        // console.groupEnd();
    }



    // -------------------------------------------------------
    // Метод | Подключение слотов к сигналам внутренних визуальных элементов
    //
    disconnectSignals() {
        // console.group("class SubBlock.disconnectSignals {");
        // console.log("this: %o", this);

        this.packList.onItem0 = null;
        this.packList.onChange = null;
        // this.inpNx.removeEventListener('input', event => this.slotSizeChanged(event));
        // this.inpNy.removeEventListener('input', event => this.slotSizeChanged(event));
        this._checkBox.removeEventListener('change', event => this.slotInRowChanged(event));

        // console.groupEnd();
    }



    // -------------------------------------------------------
    // Метод | Создает выпадающий список для блока внутренних элементов
    //         для выбора типа элемента из базы данных
    //
    newPackList(ul) {
        console.group("class SubBlockContainer.newPackList");
        console.log("block index: %i", this._index);
        
        // выпадающий список
        var packList = new SearchList(ul);

        packList.item0 = 'Тип'

        packList.listFormat = listFormat;
        packList.selectedFormat = ['code'];

        console.groupEnd();
        return packList;
    }



    // -------------------------------------------------------
    // Метод | Задаем новые размеры блоку
    //
    // setSize(rowCount, colCount) {
    //     console.group("class SubBlock.setSize");
    //     console.log("block: %o, rowCount: %o, colCount: %o", this, rowCount, colCount);

    //     if ((rowCount !== this._rowCount) || (colCount !== this._colCount)) {
            
    //         this._rowCount = rowCount;
    //         this._colCount = colCount;

    //         this._inRow = parseInt(this._checkBox.checked);

    //         this._inpTotal.innerText = this._subPack ? (this._rowCount * this._colCount) : 0;

    //         // сообщаем контейнеру об изменениях
    //         this.sizeChanged(this);
    //     }
    //     console.groupEnd();
    // }



    // -------------------------------------------------------
    // Метод | Выводим информацию об элементах блока
    //
    showInfo() {
        console.group("class SubBlock.showInfo");
        console.log("block: %o", this);

        // получаем элемент соответствующий типу внутреннего содержимого данного блока
        var subPack = this._subPack;

        // выводим информацию об элементах блока
        if (subPack) {

            this._packList.selectedId = subPack.id;
            this._inpSizeWx.value = subPack.wx;
            this._inpSizeWy.value = subPack.wy;
            this._inpNy.value = this._rowCount;
            this._inpNx.value = this._colCount;
            this._inpTotal.innerText = this._rowCount * this._colCount;
            this._checkBox.checked = subPack.inRow;

        } else {

            this._packList.selectedId = 0;
            this._inpSizeWx.value = '';
            this._inpSizeWy.value = '';
            this._inpTotal.innerText = 0;
            this._checkBox.checked = 0;
        }

        console.groupEnd();
    }



    // -------------------------------------------------------
    // Метод | Очищаем данные блока
    //
    clearData() {
        console.group("class SubBlock.clearData");
        // console.log("block index: %i", this._index);

        this._rowCount = 0;
        this._colCount = 0;
        this._subPack = null;

        console.groupEnd();
    }



    // -------------------------------------------------------
    // Метод | Очищаем визуальные элементы блока
    //
    clear() {
        console.group("class SubBlock.clear");
        // console.log("block index: %i", this._index);

        this._packList.selectedId = 0;
        this._inpNx.value = '';
        this._inpNy.value = '';
        this._inpSizeWx.value = '';
        this._inpSizeWy.value = '';
        this._inpTotal.innerText = 0;
        this._checkBox.checked = 0;

        console.groupEnd();
    }
            


    // -------------------------------------------------------
    // Слот | Если изменилсля параметор "В ряд"
    //
    slotInRowChanged(event) {
        console.group("class SubBlock.slotInRowChanged");
        console.log("block index: %i", this._index);

        if (this._subPack) {

            this._subPack.inRow = this._checkBox.checked ? 1 : 0;
        }

        // сообщаем контейнеру об изменениях
        this.contentChanged();

        console.groupEnd();
    }



    // -------------------------------------------------------
    // Слот | Если изменились размеры
    //
    // slotSizeChanged(event) {
    //     console.group("class SubBlock.slotSizeChanged");
    //     console.log("block index: %i", this._index);

    //     var rowCount = this._inpNy.value ? parseInt(this._inpNy.value) : 0;
    //     var colCount = this._inpNx.value ? parseInt(this._inpNx.value) : 0;

    //     this.setSize(rowCount, colCount);

    //     console.groupEnd();
    // }



    // -------------------------------------------------------
    // Слот | Если изменился id внутренних элементов
    //
    slotSubPackChanged(id) {
        console.group("class SubBlock.slotSubPackChanged");
        console.log("block: %o", this);

        // перебираем внутренние элементы
        this._inpSizeWx.value = id ? this._packList.dataSet[ id ]['wx'] : '';
        this._inpSizeWy.value = id ? this._packList.dataSet[ id ]['wy'] : '';
        return false;
        // если в данном блоке выбран элемент имеющий id
        if (parseInt(id) > 0) {

            // id элемента, выбранного в данном блоке
            var subPackId = this._subPack ? this._subPack.id : -1;
            
            if (id !== subPackId) {
                
                // Создаем новый пустой элемент
                var pack = new PackageContainerItem(
                    this._pack,     // родительский контейнер
                    {id: id},       // данные элемента, получен из базы
                    this._pack.settings.item,  // настройки отображения элемента
                    canvas          // canvas где будет отображен элемент
                );
        
                // загружаем свойства элемента и все его содержимое из базы
                pack.load( 

                    // если элемент успешно загрузился
                    function(loadedPack, self) {

                        self._subPack = loadedPack;

                        self._subPack.inRow = self._checkBox.checked ? 1 : 0

                        self.showInfo();

                        // сообщаем контейнеру об изменениях
                        self.contentChanged();
                    },

                    // если элемент не загрузился
                    function(XMLHttpRequest, textStatus) {

                        // setStatus('ошибка загрузки: ' + textStatus, 5000);
                    },
                    this    // передаем себя что бы в calback знать кто вызвал метод
                );
            }
        } else {
            this._subPack = null;
            this.showInfo();

            // сообщаем контейнеру об изменениях
            this.contentChanged();
        }

        console.groupEnd();
    }



    // запоминаем какой элемент сейчас выбран на форме
    set pack(value) {
        this._pack = value;
    } 

    get pack() {
        return this._pack;
    }



    set packList(value) {
        this._packList = value;
    } 

    get packList() {
        return this._packList;
    }



    set inpNx(value) {
        this._inpNx = value;
    } 

    get inpNx() {
        return this._inpNx;
    }



    set inpNy(value) {
        this._inpNy = value;
    } 

    get inpNy() {
        return this._inpNy;
    }



    set rowCount(value) {
        console.group("class SubBlock.set rowCount { value: %i", value);
        
        this._rowCount = parseInt(value);
        
        this.showInfo();

        // сообщаем контейнеру об изменениях
        // this.sizeChanged(this);

        console.groupEnd();
    } 

    get rowCount() {
        return this._rowCount;
    }



    set colCount(value) {
        console.group("class SubBlock.set colCount { value: %i", value);

        this._colCount = parseInt(value);

        this.showInfo();

        console.groupEnd();
    } 

    get colCount() {
        return this._colCount;
    }



    set subPack(value) {
        this._subPack = value;
        this.showInfo();
    } 

    get subPack() {
        return this._subPack;
    }
}





// =======================================================
// Класс | SubBlockContainer
//          Контейнер блоков
//         Одномерный массив элементов типа SubBlock
//
class SubBlockContainer {


    // Создаем контейнер
    constructor(templateId) {
        console.group("Class SubBlockContainer.constructor");

        this._subBlockTamplate = document.getElementById(templateId);    // темплейт блока внутренних элементов

        this._count = 0;
        this.item = [];

        this._inpTotal = document.querySelector('#inpTotal');


        // -------------------------------------------------------
        // Создаем блоки для редактирования внутренних элементов
        //
        for(var index = 0; index < 9; index++) {
                
            // добавляем блок внутренних элементов
            this.add(index, this._subBlockTamplate);
        }
        console.groupEnd();
    }



    // -------------------------------------------------------
    // Метод | Очищаем все данные блоков
    //
    connectSignals() {
        console.group("class SubBlockContainer.connectSignals");

        this.item.forEach ( item => {

            item.connectSignals();
        });
        console.groupEnd();
    }



    // -------------------------------------------------------
    // Метод | Очищаем все данные блоков
    //
    disconnectSignals() {
        console.group("class SubBlockContainer.disconnectSignals");

        this.item.forEach ( item => {

            item.disconnectSignals();
        });
        console.groupEnd();
    }



    // -------------------------------------------------------
    // Метод | Передаем блокам какой элемент сейчас выбран
    //         Блоки отобразят содержимое выбранного элемента
    //         И далее с этим элементом будут работать
    //
    showInfo(pack) {
        console.group("class SubBlockContainer.showInfo {");
        console.log("pack: %o", pack);

        if (pack !== this._pack) {

            if (pack) {

                // сохраняем указатель на текущий элемент pack
                this._pack = pack;

                // сообщаем каждому блоку указатель на текущий элемент pack
                this.item.forEach( item => {
                    item.pack = this._pack;
                });

                // очищаем данные всех блоков
                this.clearData();

                // очищаем визуальные элементы всех блоков
                this.clear();

                var index = -1;
                var prevSubPack = null;

                // перебираем все внутренние элементы pack
                pack.item.forEach( subPack => {
                    // console.log("subPack: %o", subPack);

                    let newBlock = false;
                    // если тип элемента отличается от предыдущего
                    // console.log("subPack !== prevSubPack: %o", (subPack.id !== (prevSubPack ? prevSubPack.id : 0)));
                    if ( subPack.id !== (prevSubPack ? prevSubPack.id : -1) ) {
                            
                        // берем следующий блок
                        newBlock = true;
                        index++;
    
                        // если необходимо
                        if (this._count < (index + 1)) {
                            
                            // добавляем новый блок
                            this.add(index, this._subBlockTamplate);
                        }

                        // сообщаем блоку указатель на текущий элемент pack
                        this.item[index].pack = this._pack;
    
                        // определяем тип внутренних элементов
                        this.item[index].subPack = subPack;
                    }

                    // если координата y элемента отличается от предыдущего
                    if ((subPack.inRow && newBlock) || ( subPack.y !== (prevSubPack ? prevSubPack.y : -1)) ) {

                        newBlock = false;
                        
                        // запоминаем какие элементы в предыдущем блоке
                        prevSubPack = subPack;
                        
                        // обнуляем колическтово элементов в начатом блоке
                        this.item[index].colCount = 0;
    
                        // считаем сколько рядов в текущем блоке
                        this.item[index].rowCount = this.item[index].rowCount + 1;
                    }
                    // считаем колическтово элементов в рядах блока
                    this.item[index].colCount = this.item[index].colCount + 1;
                });

                this._inpTotal.innerText = this._pack.item.length;

            // если елемент пуст
            } else {

                // очищаем все блоки
                this.clear();
            }
        }
        console.log("this: %o", this);
        console.groupEnd();
    }



    // -------------------------------------------------------
    // Метод |  Добавляем новй блок в позицию index
    //
    add(index, subBlockTamplate) {
        console.group("class SubBlockContainer.add");
        console.log("subBlockTamplate: %o", subBlockTamplate);
        console.log("index: %i", index);

        if (subBlockTamplate) {
            
            // массив имен всех внутренних элементовбез суфиксов
            var subBlockElementIds = ['subLabel', 'checkBoxInRow', 'inpSizeWx', 'inpSizeWy', 'packList', 'inpNy', 'inpNx', 'inpTotal'];

            // получаем контейнер темплейта
            var subBlockContainer = subBlockTamplate.parentNode;
                        
            // копированием из темплейта создаем очередной блок внутренних элементов
            var newSubBlock = subBlockTamplate.cloneNode(true);

            // даем id новому блоку
            newSubBlock.id = 'subBlock' + (index);
                    
            // перебираем все варианты имеен элементов в новом блоке
            subBlockElementIds.forEach(elementId => {
                
                // получаем очередной элемент блока
                var subBlockElement = newSubBlock.querySelector('#' + elementId + '_');
                
                // даем id и name элементу блока 
                subBlockElement.id = elementId + index;
            });

            // добавляеем созданный блок в конейнер
            subBlockContainer.appendChild(newSubBlock);

            // показываем блок внутренних элементов
            newSubBlock.classList.remove('hidden');

            var item = new SubBlock(index, newSubBlock);
            
            // подписываемся на сигналы блока
            // item.sizeChanged = () => this.onItemSizeChanged();
            // item.contentChanged = () => this.onItemContentChanged();
            
            this.item.push(item);
            
            // увеличиваем количество блоков
            this._count++;
        }
        console.groupEnd();
    }



    // -------------------------------------------------------
    // Метод | Пересоздаем и показываем внутренние элементы pack 
    //
    updatePack() {
        console.group("class SubBlockContainer.updatePack");

        var pack = this._pack;
        console.log("updatePack: %o", pack);

        if (pack) {

            // Удаляем все внутри pack
            pack.clearItems();
            pack.hide();

            pack.iBorder = 0;
            pack.iBorderColor = "#ff0000";

            var x = 0;
            var y = 0;
            var dx = [];
            var iBorder = 100;
            var rowCount = 0, colCount, subPack;
            

            // Вычисляем высоты всех рядов
            var i = 0;      // номер ряда
            var n = [0];     // количество элементов в ряду
            var wx = [0];    // суммарные ширины элементов в рядов
            var wy = [0];    // высоты рядов
            var rwy = [];   // высоты элементов в ряду
            this.item.forEach( subBlock => {

                // элемент выбранный в списке блока
                subPack = subBlock.subPack;
                
                // если количество по вертикали и горизонтали и тип элемента заданы
                if ((subBlock.rowCount > 0) && (subBlock.colCount > 0) && (subPack)) {

                    if (subPack.inRow) {
                        // если данный блок в ряд
                        // то добавляем его высоту в массив высот ряда
                        rwy.push(subPack[subPack.disposition.wy]);
                        
                        // сохраняем высоту текущего i-го ряда в массив
                        wy[i] = Math.max.apply(null, rwy);

                        // суммарная ширина элементов блока
                        wx[i] += subPack[subPack.disposition.wx] * subBlock.colCount;

                        // количество элементов в ряду
                        n[i] += subBlock.colCount;
                    } else {
                        // если данный блок не в ряд

                        // если предыдущий блок был в ряд то увеличиваем номер ряда
                        if (rwy.length) {
                            i++;
                            n[i] = 0;
                            wx[i] = 0;
                        }

                        // сохраняем высоты рядов блока в массив
                        for (var rowIndex = 0; rowIndex < subBlock.rowCount; rowIndex++) {
                            // сохраняем высоту текущего i-го ряда в массив
                            wy[i] = subPack[subPack.disposition.wy];

                            // суммарная ширина элементов блока
                            wx[i] = subPack[subPack.disposition.wx] * subBlock.colCount;

                            // количество элементов в ряду
                            n[i] = subBlock.colCount;

                            // увеличиваем номер ряда
                            i++;
                            n[i] = 0;
                            wx[i] = 0;
                        }
                        //  очищаем массив высот текущего ряда
                        rwy = [];
                    }
                }
            });

            wx.forEach( function(wxi, i) {

                if (wxi > 0) {

                    // расстояние между элементами в ряду
                    dx[i] = (pack.wx - wxi) / (n[i] + 1);
                    
                    if (dx[i] <= 0) {
                        pack.iBorder = iBorder;
                    }
                }
            });

            // суммарная высота всех рядов
            var totalWy = wy.reduce(function(total, current){return total + current;});

            // расстояние между рядами
            var dy =  (pack[pack.disposition.wy] - totalWy) / (wy.length + 1);

            // если вертикальный зазор стал нулевым
            if (dy <= 0) {
                pack.iBorder = iBorder;
            }
            console.log("dy: %o", dy);
            console.log("dx: %o", dx);
            console.log("wx: %o", wx);
            console.log("wy: %o", wy);
            
            // Проходим по всем блокам и создаем внутренние элеементы pack
            i = 0; // номер текущего ряда
            x = 0;
            var prevousInRow = false;   // предыдущий блок выл в ряд
            var prevousWy = 0;          // высота предыдущего ряда
            this.item.forEach( subBlock => {
                
                // элемент выбранный в данном блоке
                subPack = subBlock.subPack;
                
                rowCount = subBlock.rowCount;
                colCount = subBlock.colCount;
                
                if ((rowCount > 0) && (colCount > 0) && (subPack)) {
                    console.log("добаляем в блок: %o элементы типа %o", subBlock, subPack);
                    
                    for (var rowIndex = 0; rowIndex < rowCount; rowIndex++) {

                        i += subPack.inRow ? 0 : (prevousInRow ? 1 : 0);

                        // обнуляем координату x
                        if (!(prevousInRow && subPack.inRow)) {x = 0;}

                        // расчитываем координату начала текущего ряда
                        y += prevousInRow ? (subPack.inRow ? 0 : (dy + prevousWy)) : (dy + prevousWy);

                        for (var colIndex = 0; colIndex < colCount; colIndex++) {
                            // расчитываем координату x конца текущего элемента
                            x += dx[i];

                            console.log("pack: %o x: %o, y: %o", subPack, x, y);
                            // Создаем новый внутренний элемент
                            pack.createItems([
                                    {
                                        id: subPack.id,
                                        code: subPack.code,
                                        name: subPack.name,
                                        color: subPack.color, //.replace("#", ""),
                                        x: x,
                                        y: y + (wy[i] - subPack[subPack.disposition.wy]),
                                        wx: subPack.wx,
                                        wy: subPack.wy,
                                        wz: subPack.wz,
                                        inrow: subPack.inRow
                                    }
                                ],
                                this._pack.settings.item
                            );
                            // расчитываем координату x следующего элемента
                            x += subPack.wx;
                        }

                        prevousInRow = subPack.inRow;
                        prevousWy = wy[i];

                        // если текущий блок не в ряд, увеличиваем номер ряда
                        i += subPack.inRow ? 0 : 1;
                        // // если предыдущий блок был в ряд то увеличиваем номер ряда
                        // i += prevousInRow ? 0 : 1;


                    } 
                }
            }); 
            // показываем элемент со всем содержимым         
            pack.show();
        }
        console.groupEnd();
    }



    // -------------------------------------------------------
    // Метод | При изменении какого либо блока
    //
    onItemSizeChanged() {
        console.group("class SubBlockContainer.onItemSizeChanged { item: %i", this);

        // обновляем содержимое элемента pack
        this.updatePack();
        
        // обновим общее количество элементов внутри всех блоков
        this._inpTotal.innerText = this._pack.item.length;

        console.groupEnd();
    }


    
    // -------------------------------------------------------
    // Метод | При изменении какого либо блока
    //
    onItemContentChanged() {
        console.group("class SubBlockContainer.onItemContentChanged { item: %i", this);

        // обновляем содержимое элемента pack
        this.updatePack();
        
        // обновим общее количество элементов внутри всех блоков
        this._inpTotal.innerText = this._pack.item.length;

        console.groupEnd();
    }


        
    // -------------------------------------------------------
    // Метод | Очищаем все данные блоков
    //
    clearData() {
        console.group("class SubBlockContainer.clearData");

        for (var index = 0; index < this._count; index++) {

            this.item[index].clearData();
        }
        console.groupEnd();
    }



    // -------------------------------------------------------
    // Метод | Очищаем все визуальные элементы блоков
    //
    clear() {
        console.group("class SubBlockContainer.clear");

        for (var index = 0; index < this._count; index++) {

            this.item[index].clear();
        }
        
        // обновим общее количество элементов внутри всех блоков
        this._inpTotal.innerText = this._pack.item.length;

        console.groupEnd();
    }



    set pack(value) {
        this.showInfo(value);
    } 

    get pack() {
        return this._pack;
    }



    get count() {
        return this._count;
    }
}