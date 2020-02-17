// настройки элементов и внутренних элементов
const settings = {

    // уровень этажа
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

        // уровень линии
        disposition: {
            x: 'x',
            y: 'y',
            wx: 'wz',
            wy: 'wx',
            wz: 'wy'
        },
        padding: 10,
        border: 0,
        borderColor: '#000000',
        autoFit: 'none',
        item: {

            // уровень стеллажа
            disposition: {
                x: 'y',
                y: 'x',
                wx: 'wz',
                wy: 'wx',
                wz: 'wy'
            },
            padding: 10,
            border: 0,
            borderColor: '#000000',
            showText: true,
            autoFit: 'none',
            active: true,
            item: {

                // уровень полки
                padding: 10,
                border: 0,
                borderColor: '#000000',
                autoFit: 'none',
                }
        }
    }
};

