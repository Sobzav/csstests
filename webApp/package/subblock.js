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
        this._pack = null;
        this._index = index;                // индекс данного блока в контейнере
        // this._firstRowIndex = 0;
        this._rowCount = 0;
        this._colCount = 0;
        this._subPack = null;

        this._selCode = selCode;
        this._inpNx = inpNx;
        this._inpNy = inpNy;
        this._inpSizeWx = inpSizeWx;
        this._inpSizeWy = inpSizeWy;
        this._inpTotal = inpTotal;

        this.selCode.addEventListener('change', event => this.slotSubPackChanged(event));
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
        var subPack = this._subPack.id;

        // выводим информацию об элементах блока
        if (subPack) {

            this._selCode.selectedIndex = this._selCode.querySelector("[value=\'" + this._subPack.id + "\']").index;
            this._inpSizeWx.value = this._subPack.wx;
            this._inpSizeWy.value = this._subPack.wy;
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

        this._pack = null;
        // this._firstRowIndex = 0;
        this._rowCount = 0;
        this._colCount = 0;
        this._subPack = null;

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

        var rowCount = parseInt(this._inpNy.value);
        var colCount = parseInt(this._inpNx.value);

        this.setSize(rowCount, colCount);

        console.groupEnd();
    }


    // -------------------------------------------------------
    // Слот | Если изменился id внутренних элементов
    //
    slotSubPackChanged(event) {
        console.group("class SubBlock.slotSubPackChanged { block: %i", this._index);

        // берем id элементы который соответствует выбранному <option>
        var id = event.target.selectedOptions[0].value;
        
        if (id !== this._subPack.id) {
            
            // Создаем новый пустой элемент
            var pack = new PackageContainerItem(
                {id: id},               // данные элемента, получен из базы
                settings,               // настройки элементов и внутренних элементов
                this._pack.canvas       // canvas где будет отображен элемент
            );
    
            // загружаем свойства элемента и все его содержимое из базы
            pack.load(this, pack.id, settings, 

                // если элемент успешно загрузился
                function(self, loadedPack) {

                    self._subPack = loadedPack;

                    self.showInfo();

                    // сообщаем контейнеру об изменениях
                    self.contentChanged(self);
            
                    // setStatus('ok', 5000);
                },

                // если элемент не загрузился
                function(XMLHttpRequest, textStatus) {

                    // setStatus('ошибка загрузки: ' + textStatus, 5000);
                }
            );
        }
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


    // /**
    //  * @param {number} firstRowIndex
    //  */
    // set firstRowIndex(value) {
    //     this._firstRowIndex = value;
    // } 

    // get firstRowIndex() {
    //     return this._firstRowIndex;
    // }


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
    constructor() {
        console.group("class SubBlockContainer.constructor { ");

        this._count = 0;
        this._pack = null;
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

                    // если тип элемента отличается от предыдущего
                    // console.log("subPack !== prevSubPack: %o", (subPack.id !== (prevSubPack ? prevSubPack.id : 0)));
                    if ( subPack.id !== (prevSubPack ? prevSubPack.id : -1) ) {
                            
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
                        this.item[index].firstRowIndex = this.item[index].rowCount - 1;

                        // определяем тип внутренних элементов
                        this.item[index].subPack = subPack;

                        // считаем сколько рядов в текущем блоке
                        // this.item[index].rowCount = this.item[index].rowCount + 1;
                    }

                    // если координата y элемента отличается от предыдущего
                    if ( subPack.y !== (prevSubPack ? prevSubPack.y : -1) ) {

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

        if (
            selCode &&
            inpNx &&
            inpNy &&
            inpSizeWx &&
            inpSizeWy &&
            inpTotal) {
            
            var item = new SubBlock(
                index, 
                selCode,
                inpNx,
                inpNy,
                inpSizeWx,
                inpSizeWy,
                inpTotal
            );

            // подписываемся на сигналы блока
            item.sizeChanged = (item) => this.onItemSizeChanged(item);
            item.contentChanged = (item) => this.onItemContentChanged(item);

            this.item.push(item);

            // увеличиваем количество блоков
            this._count++;
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
            if (this.item[index].subPack) {

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
            pack.hide();

            // Проходим по всем блокам и создаем внутренние элеементы pack
            var x = 0;
            var y = 0;
            var dy = 0;
            var dx = 0;
            var subBlock, rowCount = 0, colCount, subPack, subPackTotalWy = 0;
            for (var index = 0; index < this._count; index++) {
                
                // текущий блок внутренних элементов
                subBlock = this.item[index];

                // элемент выбранный в списке блока
                subPack = subBlock.subPack;

                // общее количество рядов всех блоков
                rowCount += subBlock.rowCount;

                // суммарная высота всех рядов
                subPackTotalWy += subPack ? subPack.wy * subBlock.rowCount : 0;
            }
            // расстояние между рядами
            dy = (pack.wy - subPackTotalWy) / (rowCount + 1);
            
            for (var index = 0; index < this._count; index++) {
                
                // текущий блок внутренних элементов
                subBlock = this.item[index];

                // элемент выбранный в списке блока
                subPack = subBlock.subPack;
                
                rowCount = subBlock.rowCount;
                colCount = subBlock.colCount;
                
                if ((rowCount > 0) && (colCount > 0) && (subPack)) {
                    console.log("добаляем в блок: %o элементы типа %o", subBlock, subPack);
                    
                    dx = (pack.wx - colCount * subPack.wx) / (colCount + 1);

                    for (var rowIndex = 0; rowIndex < rowCount; rowIndex++) {

                        // расчитываем координату y конца текущего элемента
                        y += dy;

                        for (var colIndex = 0; colIndex < colCount; colIndex++) {
                            // расчитываем координату x конца текущего элемента
                            x += dx;

                            // Создаем новый внутренний элемент
                            pack.createItems([
                                    {
                                        id: subPack.id,
                                        code: subPack.code,
                                        name: subPack.name,
                                        color: subPack.color,
                                        x: x,
                                        y: y,
                                        wx: subPack.wx,
                                        wy: subPack.wy,
                                        wz: subPack.wz
                                    }
                                ],
                                settings.item
                            );
                            // расчитываем координату x следующего элемента
                            x += subPack.wx;
                        }
                        // обнуляем координату x
                        x = 0;
                        // расчитываем координату y следующего элемента
                        y += subPack.wy;
                    } 
                }
            }            
            pack.show();
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
        this._pack.draw();

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