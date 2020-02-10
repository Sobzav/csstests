"use strict";

// Глубина логирования
// 0 - логирование отключено
// logEnt - только входы и выходы в блоки кода
// logInf - только информационные сообщения
// logErr - сообщения об ошибках
// logDat - вывод данных, значений, контейнеров
var logLevel = 1;





// =======================================================
// Класс | SubBlock
//          Один блок это набор из нескольких строк однотипных элементов
//         блок имеет начало firstRowIndex
//         имеет количество горизонтальных рядов rowCount       (вводит пользователь - inpNy)
//         и количество вертикальных столбцов colCount          (вводит пользователь - inpNx)
//         а так же тип всех его элементов packId               (вводит пользователь - selCode)
//          Если блоку задать тип элементов, то он отобразит 
//         размеры данного типа в полях inpSizeWx, inpSizeWy
//
class SubBlock {


    // Создаем блок рядов из элементов
    constructor(
        // -------------------------------------------------------
        // Инициализация | 
        //
        index, 
        selCode,
        inpNx,
        inpNy,
        inpSizeWx,
        inpSizeWy,
        inpTotal) {

        console.group("class SubBlock.constructor { index: %o; selCode: %o; inpNx: %o; inpNy: %o; inpSizeWx: %o; inpSizeWy: %o", 
            index,
            selCode,
            inpNx,
            inpNy,
            inpSizeWx,
            inpSizeWy,
            inpTotal);


        // -------------------------------------------------------
        // Свойства | 
        //
        this._pack;
        this._index = index;                // индекс данного блока в контейнере
        this._firstRowIndex = 0;
        this._rowCount = 0;
        this._colCount = 0;
        this._contentPackId = 0;

        this._selCode = selCode;
        this._inpNx = inpNx;
        this._inpNy = inpNy;
        this._inpSizeWx = inpSizeWx;
        this._inpSizeWy = inpSizeWy;
        this._inpTotal = inpTotal;

        this.selCode.addEventListener('change', event => this.slotContentPackIdChanged(event));
        this.inpNx.addEventListener('change', event => this.slotSizeChanged(event));
        this.inpNy.addEventListener('change', event => this.slotSizeChanged(event));


        // -------------------------------------------------------
        // Сигналы | 
        //
        
        // изменились размеры
        this.sizeChanged;

        // изменился тип внутренних элементов
        this.contentChanged;

        // this.changed;

        console.groupEnd();
    }
    

    // -------------------------------------------------------
    // Метод | Задаем новые размеры блоку
    //
    setSize(rowCount, colCount) {
        console.group("class SubBlock.setSize { block: %o, rowCount: %o, colCount: %o", this, rowCount, colCount);

        if ((rowCount !== this._rowCount) || (colCount !== this._colCount)) {
            
            this._rowCount = rowCount;
            this._colCount = colCount;

            this._inpTotal.innerText = this._rowCount * this._colCount;

            // сообщаем контейнеру об изменениях
            this.sizeChanged(this);
        }

        console.groupEnd();
    }


    // -------------------------------------------------------
    // Метод | Выводим информацию об элементах блока
    //
    showInfo() {
        console.group("class SubBlock.showInfo { block: %o", this);

        // получаем элемент соответствующий типу внутреннего содержимого данного блока
        var contentPack = getPackById(this._contentPackId);

        // выводим информацию об элементах блока
        if (contentPack) {

            this._selCode.selectedIndex = contentPack.listItem.index;
            this._inpSizeWx.value = contentPack.wx;
            this._inpSizeWy.value = contentPack.wy;
            this._inpNy.value = this._rowCount;
            this._inpNx.value = this._colCount;
            this._inpTotal.innerText = this._rowCount * this._colCount;

        } else {

            this._selCode.selectedIndex = 0;
            this._inpSizeWx.value = '';
            this._inpSizeWy.value = '';
        }

        console.groupEnd();
    }


    // -------------------------------------------------------
    // Метод | Очищаем данные блока
    //
    clearData() {
        console.group("class SubBlock.clearData { block: %i", this._index);

        this._pack;
        this._firstRowIndex = 0;
        this._rowCount = 0;
        this._colCount = 0;
        this._contentPackId = 0;

        console.groupEnd();
    }


    // -------------------------------------------------------
    // Метод | Очищаем визуальные элементы блока
    //
    clear() {
        console.group("class SubBlock.clear { block: %i", this._index);

        this._selCode.selectedIndex = 0;
        this._inpNx.value = '';
        this._inpNy.value = '';
        this._inpSizeWx.value = '';
        this._inpSizeWy.value = '';
        this._inpTotal.innerText = 0;

        console.groupEnd();
    }
            

    // -------------------------------------------------------
    // Слот | Если изменились размеры
    //
    slotSizeChanged(event) {
        console.group("class SubBlock.slotSizeChanged { block: %i", this._index);

        var rowCount = this._inpNy.value;
        var colCount = this._inpNx.value;

        this.setSize(rowCount, colCount);

        console.groupEnd();
    }


    // -------------------------------------------------------
    // Слот | Если изменился id внутренних элементов
    //
    slotContentPackIdChanged(event) {
        console.group("class SubBlock.slotContentPackIdChanged { block: %i", this._index);

        // берем pack который соответствует текущему <option>
        var selectedOption = event.target.selectedOptions[0];
        var regSufix = selectedOption.id.match(/\w*$/g)[0];
        var regStr = 'opt\\.[a-z]+\\.\\d+\\.' + regSufix + '$';
        var regExp = new RegExp(regStr, 'g');

        var pack = getPackByListItem(selectedOption, regExp);
        
        if (pack.id !== this._contentPackId) {
                
            this._contentPackId = pack.id;
        }

        this.showInfo();

        // сообщаем контейнеру об изменениях
        this.contentChanged(this);

        console.groupEnd();
    }


    /**
     * @param {number} pack
     */
    set pack(value) {
        if (value !== this._pack) {
            // запоминаем какой элемент сейчас выбран на форме
            this._pack = value;
        }
    } 

    get pack() {
        return this._pack;
    }


    /**
     * @param {number} selCode
     */
    set selCode(value) {
        this._selCode = value;
    } 

    get selCode() {
        return this._selCode;
    }


    /**
     * @param {number} inpNx
     */
    set inpNx(value) {
        this._inpNx = value;
    } 

    get inpNx() {
        return this._inpNx;
    }


    /**
     * @param {number} inpNy
     */
    set inpNy(value) {
        this._inpNy = value;
    } 

    get inpNy() {
        return this._inpNy;
    }


    /**
     * @param {number} firstRowIndex
     */
    set firstRowIndex(value) {
        this._firstRowIndex = value;
    } 

    get firstRowIndex() {
        return this._firstRowIndex;
    }


    /**
     * @param {number} rowCount
     */
    set rowCount(value) {
        console.group("class SubBlock.set rowCount { value: %i", value);
        
        this._rowCount = value;
        
        this.showInfo();

        // сообщаем контейнеру об изменениях
        // this.sizeChanged(this);

        console.groupEnd();
    } 

    get rowCount() {
        return this._rowCount;
    }


    /**
     * @param {number} colCount
     */
    set colCount(value) {
        console.group("class SubBlock.set colCount { value: %i", value);

        this._colCount = value;

        this.showInfo();

        // сообщаем контейнеру об изменениях
        // this.sizeChanged(this);

        console.groupEnd();
    } 

    get colCount() {
        return this._colCount;
    }


    /**
     * @param {number} contentPackId
     */
    set contentPackId(value) {
        this._contentPackId = value;
        this.showInfo();
    } 

    get contentPackId() {
        return this._contentPackId;
    }
}





// =======================================================
// Класс | SubBlockContainer
//          Контейнер блоков
//         Одномерный массив элементов типа SubBlock
//
class SubBlockContainer {


    // Создаем контейнер
    constructor() {
        console.group("class SubBlockContainer.constructor { ");

        this._count = 0;
        this._pack;
        this._count;
        this.item = [];

        this._inpTotal = document.querySelector('#inpTotal');

        console.groupEnd();
    }


    // -------------------------------------------------------
    // Метод | Передаем блокам какой элемент сейчас выбран
    //         Блоки отобразят содержимое выбранного элемента
    //         И далее с этим элементом будут работать
    //
    showInfo(pack) {
        console.group("class SubBlockContainer.showInfo { pack: %o", pack);

        if (pack !== this._pack) {

            if (pack) {

                // сохраняем указатель на текущий элемент pack
                this._pack = pack;

                // сообщаем каждому блоку указатель на текущий элемент pack
                for (var index = 0; index < this._count; index++) {
                    this.item[index].pack = this._pack;
                }

                // очищаем данные всех блоков
                this.clearData();

                // очищаем визуальные элементы всех блоков
                this.clear();

                var index = -1;
                var subPack;
                var prevSubPack = null;

                // перебираем все ряды внутренних элементов внутри pack
                for (var rowIndex = 0; rowIndex < pack.rowCount; rowIndex++) {
                    
                    // запоминаем тип элементов в текущем блоке
                    subPack = pack.item[rowIndex][0];
                    // console.log("subPack: %o", subPack);

                    // если тип ряда отличается от предыдущего
                    // console.log("subPack !== prevSubPack: %o", (subPack.id !== (prevSubPack ? prevSubPack.id : 0)));
                    if ( subPack.id !== (prevSubPack ? prevSubPack.id : 0) ) {
                            
                        // запоминаем какие элементы в предыдущем блоке
                        prevSubPack = subPack;
                        
                        // берем следующий блок
                        index++;
    
                        // если необходимо
                        if (this._count < (index + 1)) {
                            
                            // добавляем новый блок
                            this.add(
                                index, 
                                document.querySelector('#selCode' + index),
                                document.querySelector('#inpNx' + index),
                                document.querySelector('#inpNy' + index),
                                document.querySelector('#inpSizeWx' + index),
                                document.querySelector('#inpSizeWy' + index),
                                document.querySelector('#inpTotal' + index)
                            )
                        }

                        // сообщаем блоку указатель на текущий элемент pack
                        this.item[index].pack = this._pack;
    
                        // запоминаем первый ряд данного блока
                        this.item[index].firstRowIndex = rowIndex;

                        // определяем тип внутренних элементов
                        this.item[index].contentPackId = subPack.id;

                        // определяем колическтово элементов в рядах блока
                        this.item[index].colCount = pack.getColCount(rowIndex);
                    }

                    // считаем сколько рядов в текущем блоке
                    this.item[index].rowCount++;
                }

                this.updateTotal();

            // если елемент пуст
            } else {

                // очищаем все блоки
                this.clear();
            }
        }
        console.groupEnd();
    }


    // -------------------------------------------------------
    // Метод |  Добавляем новй блок в позицию index
    //
    add(
        index, 
        selCode,
        inpNx,
        inpNy,
        inpSizeWx,
        inpSizeWy,
        inpTotal) {

        console.group("class SubBlockContainer.add { index: %i", index);

        this.item[index] = new SubBlock(
            index, 
            selCode,
            inpNx,
            inpNy,
            inpSizeWx,
            inpSizeWy,
            inpTotal
        );

        // подписываемся на сигналы блока
        this.item[index].sizeChanged = (item) => this.onItemSizeChanged(item);
        this.item[index].contentChanged = (item) => this.onItemContentChanged(item);

        // увеличиваем количество блоков если необходимо
        if (index >= this._count) {
            this._count = index + 1;
        }

        console.groupEnd();
    }


    // -------------------------------------------------------
    // Метод | Вывод всех значений в инпуты всех блоков
    //
    updateInputs() {

    }


    // -------------------------------------------------------
    // Метод | Подсчет и вывод общего количества элементов внутри всех блоков
    //
    updateTotal() {
        console.group("class SubBlockContainer.updateTotal { ");

        // подсчет обхего количества элементов внутри всех блоков
        var subTotal;
        var total = 0;
        for (var index = 0; index < this._count; index++) {

            // если тип элементов очередного блока определен
            if (this.item[index].contentPackId > 0) {

                // подсчитываем общее количество элементов очередного блока
                subTotal = this.item[index].rowCount * this.item[index].colCount;
                
                // добавляем в общую сумму очередной блок
                total += subTotal;
            }
        }

        this._inpTotal.innerText = total;

        console.groupEnd();
    }


    // -------------------------------------------------------
    // Метод | Пересоздаем и показываем внутренние элементы pack 
    //
    updatePack() {
        console.group("class SubBlockContainer.updatePack { ");

        var pack = this._pack;
        console.log("updatePack: %o", pack);

        if (pack) {

            // Удаляем все внутри pack
            pack.clearItems();
            // for (var rowIndex = 0; rowIndex < pack.rowCount; rowIndex++) {

            // }

            // Проходим по всем блокам и создаем все внутри pack
            var subBlock, rowCount, colCount, items, contentPack;
            for (var index = 0; index < this._count; index++) {
                subBlock = this.item[index];
                rowCount = subBlock.rowCount;
                colCount = subBlock.colCount;
                contentPack = getPackById(subBlock.contentPackId);

                if ((rowCount > 0) && (colCount > 0) && (contentPack)) {
                    console.log("добаляем в блок: %o элементы типа %o", subBlock, contentPack);
                    for (var rowIndex = 0; rowIndex < rowCount; rowIndex++) {

                        items = pack.addRow(colCount);

                        items.forEach(item => {
                            item.id = contentPack.id;
                            item.code = contentPack.code;
                            item.name = contentPack.name;
                            item.color = contentPack.color;
                            item.setSize(
                                contentPack.wx,
                                contentPack.wy,
                                contentPack.wz
                                );
                        });
                    } 
                }
            }            
        }

        // обнеовляем изображение текущего элемента pack
        // pack.reDraw();
        
        console.groupEnd();
    }


    // -------------------------------------------------------
    // Метод | При изменении какого либо блока
    //
    onItemSizeChanged(item) {
        console.group("class SubBlockContainer.onItemSizeChanged { item: %i", item);

        // обновим общее количество элементов внутри всех блоков
        this.updateTotal();

        // обновляем содержимое элемента pack
        this.updatePack();

        // обновляем изображение элемента pack
        this._pack.reDraw();

        console.groupEnd();
    }

    
    // -------------------------------------------------------
    // Метод | При изменении какого либо блока
    //
    onItemContentChanged(item) {
        console.group("class SubBlockContainer.onItemContentChanged { item: %i", item);

        // обновим общее количество элементов внутри всех блоков
        this.updateTotal();

        // обновляем содержимое элемента pack
        this.updatePack();

        // обновляем изображение элемента pack
        this._pack.reDraw();

        console.groupEnd();
    }

        
    // -------------------------------------------------------
    // Метод | Удаляем блок с указанным индексом
    //         Так же удаляем все его ряды
    //
    // remove(index) {
    //     console.group("class SubBlockContainer.remove { index: %i", index);

    //     this.item[index].setSize(0, 0);

    //     console.groupEnd();
    // }


    // -------------------------------------------------------
    // Метод | Очищаем все данные блоков
    //
    clearData() {
        console.group("class SubBlockContainer.clear { ");

        for (var index = 0; index < this._count; index++) {

            this.item[index].clearData();
        }
        
        console.groupEnd();
    }


    // -------------------------------------------------------
    // Метод | Очищаем все визуальные элементы блоков
    //
    clear() {
        console.group("class SubBlockContainer.clear { ");

        for (var index = 0; index < this._count; index++) {

            this.item[index].clear();
        }
        
        // обновим общее количество элементов внутри всех блоков
        this.updateTotal();

        console.groupEnd();
    }


    /**
     * @param {number} pack
     */
    set pack(value) {
        this.showInfo(value);
    } 

    get pack() {
        return this._pack;
    }


    /**
     * @param {number} count
     */

    get count() {
        return this._count;
    }
}