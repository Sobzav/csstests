    // -------------------------------------------------------
    // Функция | Оперделяет номер блока которому принадлежит <option> или <input>
    //           по числу в конце id. Например id=selCode3 - функция вернет номер блока 3
    //
    function getBlockId(item) {
        console.group('getBlockId {');
        // regexp выбирает числа из строки
        var regexp = /(\d+)/;

        // получаем массив чисел
        var matches = item.id.match(regexp);
        // console.log("getBlockId matches: %o", matches);

        // берем последнее число
        var id = parseInt(matches[matches.length - 1]);

        console.groupEnd('getBlockId }');
        return id;
    }



    // -------------------------------------------------------
    // функция | Возвращает сумму всех элементов массива чисел
    //
    function sumRowCount(array) {
        var value = 0;
        array.forEach(item => {
            value = value + parseInt(item.rowCount);
        });
        return value;
    }


    // -------------------------------------------------------
    // функция | Возвращает максимальный элемент массива положительных чисел
    //
    function maxColCount(array) {
        var value = 0;
        array.forEach(item => {
            if (parseInt(item.colCount) > value) {value = parseInt(item.colCount)};
        });
        return value;
    }


    
    
    
    // -------------------------------------------------------
    // Слот | Обрабатываем событие изменения количества элементов в блоке внутренних прямоугольников
    //
    function eventSubInputChanged(e) {
        // e.preventDefault();
        console.group('eventSubInputChanged {');
        
        // если список элементов не пуст
        if (typeof packs != undefined) {

            // выбранный <option> в блоке внутренних элементов
            var selectedSubOption = e.target;
            console.log("selectedSubOption: %o", selectedSubOption);

            // id блока внутренних элементов
            var selectedOptionSubId = getBlockId(selectedSubOption);
            var selecredBlockIndex = selectedOptionSubId -1;
            console.log("selectedOptionSubId: %i", selectedOptionSubId);
            console.log("selecredBlockIndex: %i", selecredBlockIndex);

            // количество горизонтальных рядов до начала данного блока
            var rowCountBefor = 0;

            console.log("block: %o", subBlock);

            var rowCount;
            // считаем сколько есть горизонтальных рядов до начала данного блока 
            for (var blockIndex = 0; blockIndex < selectedBlockIndex; blockIndex++) {
                
                var rowCount = subBlock.item[blockIndex].rowCount;

                rowCountBefor = rowCountBefor + rowCount;
            }

            console.log('rowCountBefor:', rowCountBefor);

            // тип внутреннего элемента в данном блоке
            var subSelCode = subInp[selectedBlockIndex]['selCode'];
            console.log('subSelCode:', subSelCode);

            // получаем инпуты количества элементов в блоке
            var inpNx = domElementById("inpNx" + selectedOptionSubId);
            var inpNy = domElementById("inpNy" + selectedOptionSubId);

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
                }
                
                if (!(nY > 0)) {
                    nY = 0;
                }          
            }

            var rowCount = rowCountBefor + subBlock.item[selectedBlockIndex].rowCount;

            // удаляем ряды в данном блоке если они уже есть
            for (var rowIndex = rowCountBefor; rowIndex < rowCount; rowIndex++) {
                if (typeof pack.item[rowIndex] !== undefined) {
                    console.log("deleting row: %o", rowIndex);
                    pack.item.splice(rowIndex, 1);
                }
            }

            // устанавливаем количество рядов в данном блоке
                subBlock.item[selectedOptionSubId -1].rowCount = nY;
                console.log("block.item[id].rowCount: %o", subBlock.item[selectedOptionSubId -1].rowCount);
            
                // устанавливаем количество столбцов в данном блоке
                subBlock.item[selectedOptionSubId -1].colCount = nX;
                console.log("block.item[id].colCount: %o", subBlock.item[selectedOptionSubId -1].colCount);
 
                // если выбранный элемент существует
                if (pack) {

                    // если тип внутреннего элемента выбран
                    if (subPack) {
                        // меняем количество рядов текущего блока в pack

                        console.log("pack selected: %o", pack);
                        

                        rowCount = rowCountBefor + subBlock.item[selectedOptionSubId -1].rowCount;
                        
                        var colIndex = 0;
                        var colCount = subBlock.item[selectedOptionSubId -1].colCount;

                        pack.rowCount = sumRowCount(subBlock.item);
                        
                        pack.colCount = maxColCount(subBlock.item);

                        console.log('rowCount:', rowCount);
                        console.log('colCount:', colCount);
                        console.log('pack.colCount:', pack.colCount);

                        // изменяем количество рядов данного блока в pack 
                        for (var rowIndex = (rowCountBefor); rowIndex < rowCount; rowIndex++) {
                            console.log('rowIndex:', rowIndex);
                                                    
                            if (subBlock.item[selectedOptionSubId -1] === undefined) {
                                console.log('appand in:', rowIndex);
                                pack.item.push([]);
                            } else {
                                console.log('insert in:', rowIndex);
                                pack.item.splice(rowIndex, 0, []);
                            }

                            // добавляем элементы в ряд
                            for (var colIndex = 0; colIndex < colCount; colIndex++) {
                                
                                var newSubPack = new PackageSimple(pack.id * 100 +  rowIndex * 10 + colIndex, canvas);
                                newSubPack.code = subPack.code;
                                newSubPack.name = subPack.name;
                                newSubPack.color = subPack.color;
                                newSubPack.setSize(
                                    subPack.wx,
                                    subPack.wy,
                                    subPack.wz
                                 );

                                pack.item[rowIndex].push(newSubPack);
                            }
                        }
                        console.log('pack.item:', pack);

                    }

                    // перерисуем элемент
                    pack.reDraw();
                } else {
                    // ничего не выбрано
                    console.log('pack selected none');

                    // очищаем все поля ввода
                    // inpSizeWx.value = "";
                    // inpSizeWy.value = "";
                }
        }
        console.groupEnd('eventSubInputChanged }');
    }

