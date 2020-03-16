var settings;

// настройки элементов и внутренних элементов
const normalView = {

    // для корневого элемента - контейнера
    canvasWx: 500,
    canvasWy: 865,
    depth: 3,
    disposition: {
        x: 'x',
        y: 'y',
        wx: 'wx',
        wy: 'wy',
        wz: 'wz'
    },
    active: false,
    padding: 0,
    border: 0,
    borderColor: '#000000',
    autoFit: 'contain',
    item: {

        // для внутренних элементов
        depth: 2,
        disposition: {
            x: 'x',
            y: 'y',
            wx: 'wx',
            wy: 'wy',
            wz: 'wz'
        },
        active: false,
        padding: 0,
        border: 0,
        borderColor: '#000000',
        // showText: true,
        autoFit: 'none',
        item: {

            // для внутренних элементов
            depth: 1,
            disposition: {
                x: 'x',
                y: 'y',
                wx: 'wx',
                wy: 'wy',
                wz: 'wz'
            },
            active: false,
            padding: 0,
            border: 0,
            borderColor: '#000000',
            showText: false,
            autoFit: 'none',
        },
    },
};



// если элемент повернут, меняем wy <> wz
const turnedView = {

    // для корневого элемента - контейнера
    canvasWx: 500,
    canvasWy: 800,
    depth: 3,
    disposition: {
        x: 'x',
        y: 'y',
        wx: 'wx',
        wy: 'wz',
        wz: 'wy'
    },
    active: false,
    padding: 0,
    border: 0,
    borderColor: '#000000',
    autoFit: 'contain',
    item: {

        // для внутренних элементов
        depth: 2,
        disposition: {
            x: 'x',
            y: 'y',
            wx: 'wx',
            wy: 'wz',
            wz: 'wy'
        },
        active: false,
        padding: 0,
        border: 0,
        borderColor: '#000000',
        // showText: true,
        autoFit: 'none',
        item: {

            // для внутренних элементов
            depth: 1,
            disposition: {
                x: 'x',
                y: 'y',
                wx: 'wx',
                wy: 'wy',
                wz: 'wz'
            },
            active: false,
            padding: 0,
            border: 0,
            borderColor: '#000000',
            showText: false,
            autoFit: 'none',
        },
    }
};

