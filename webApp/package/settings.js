// настройки элементов и внутренних элементов
const normalView = {

    // для корневого элемента - контейнера
    canvasWx: 500,
    canvasWy: 850,
    depth: 2,
    disposition: {
        x: 'x',
        y: 'y',
        wx: 'wx',
        wy: 'wy',
        wz: 'wz'
    },
    padding: 0,
    border: 0,
    borderColor: '#000000',
    autoFit: 'contain',
    item: {

        // для внутренних элементов
        disposition: {
            x: 'x',
            y: 'y',
            wx: 'wx',
            wy: 'wy',
            wz: 'wz'
        },
        active: true,
        padding: 0,
        border: 0,
        borderColor: '#000000',
        // showText: true,
        autoFit: 'none',
    },
};

// если элемент повернут, меняем wy <> wz
const turnedView = {

    // для корневого элемента - контейнера
    canvasWx: 500,
    canvasWy: 850,
    depth: 2,
    disposition: {
        x: 'x',
        y: 'y',
        wx: 'wx',
        wy: 'wz',
        wz: 'wy'
    },
    padding: 0,
    border: 0,
    borderColor: '#000000',
    autoFit: 'contain',
    item: {

        // для внутренних элементов
        disposition: {
            x: 'x',
            y: 'y',
            wx: 'wx',
            wy: 'wz',
            wz: 'wy'
        },
        active: true,
        padding: 0,
        border: 0,
        borderColor: '#000000',
        // showText: true,
        autoFit: 'none',
    }
};

