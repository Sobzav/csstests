// настройки элементов и внутренних элементов
var settings = {
    
    // уровни навигации
    level: [
        
            // для уровня этажа
        {
            
            // уровень этажа
            name: 'floor',
            id: 0,
            canvasWx: 550,
            canvasWy: 1770,
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

                // уровень линии
                disposition: {
                    x: 'x',
                    y: 'y',
                    wx: 'wz',
                    wy: 'wx',
                    wz: 'wy'
                },
                padding: 20,
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
                }
            }
        },



        // для уровня стеллажа
        {

            name: 'rack',
            id: 0,
            canvasWx: 550,
            canvasWy: 700,
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
                
                // уровень полки
                disposition: {
                    x: 'x',
                    y: 'y',
                    wx: 'wx',
                    wy: 'wy',
                    wz: 'wz'
                },
                padding: 20,
                border: 0,
                borderColor: '#000000',
                showText: true,
                autoFit: 'none',
                active: true,
            }
        },



        // для уровня полки
        {

            name: 'shelf',
            id: 0,
            canvasWx: 550,
            canvasWy: 700,
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
                
                // уровень лотка
                disposition: {
                    x: 'x',
                    y: 'y',
                    wx: 'wx',
                    wy: 'wy',
                    wz: 'wz'
                },
                padding: 20,
                border: 0,
                borderColor: '#000000',
                showText: true,
                autoFit: 'none',
                active: true,
            }
        },



        // для уровня лотка
        {

            name: 'tray',
            id: 0,
            canvasWx: 550,
            canvasWy: 700,
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
                
                // уровень контейнера
                disposition: {
                    x: 'x',
                    y: 'y',
                    wx: 'wx',
                    wy: 'wz',
                    wz: 'wy'
                },
                padding: 20,
                border: 0,
                borderColor: '#000000',
                showText: true,
                autoFit: 'none',
                active: true,
            }
        },



        // для уровня контейнера
        {

            name: 'container',
            id: 0,
            canvasWx: 550,
            canvasWy: 700,
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
                
                // уровень ячейки
                disposition: {
                    x: 'x',
                    y: 'y',
                    wx: 'wx',
                    wy: 'wy',
                    wz: 'wz'
                },
                padding: 20,
                border: 0,
                borderColor: '#000000',
                showText: true,
                autoFit: 'none',
                active: true,
            }
        }
    ]
};
