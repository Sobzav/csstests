var settings;
const normalView = null;
const turnedView = null;

// настройки элементов и внутренних элементов всех уровней навигации
const levelSettings = [
        
        // для уровня секции
        // {
            
        //     // уровень секции
        //     name: 'section',
        //     id: 0,
        //     canvasWx: 550,
        //     canvasWy: 1770,
        //     depth: 2,
        //     disposition: {
        //         x: 'x',
        //         y: 'y',
        //         wx: 'wx',
        //         wy: 'wy',
        //         wz: 'wz'
        //     },
        //     padding: 0,
        //     border: 0,
        //     borderColor: '#000000',
        //     autoFit: 'contain',
        //     item: {

        //         // уровень линии
        //         active: false,
        //         disposition: {
        //             x: 'x',
        //             y: 'y',
        //             wx: 'wx',
        //             wy: 'wz',
        //             wz: 'wy'
        //         },
        //         padding: 20,
        //         border: 0,
        //         borderColor: '#000000',
        //         autoFit: 'none',
        //         item: {

        //             // уровень стеллажа
        //             disposition: {
        //                 x: 'y',
        //                 y: 'x',
        //                 wx: 'wz',
        //                 wy: 'wx',
        //                 wz: 'wy'
        //             },
        //             padding: 10,
        //             border: 0,
        //             borderColor: '#000000',
        //             showText: true,
        //             autoFit: 'none',
        //             active: true,
        //             item: {

        //                 // уровень лотков
        //                 disposition: {
        //                     x: 'y',
        //                     y: 'x',
        //                     wx: 'wz',
        //                     wy: 'wx',
        //                     wz: 'wy'
        //                 },
        //                 padding: 10,
        //                 border: 0,
        //                 borderColor: '#000000',
        //                 showText: true,
        //                 autoFit: 'none',
        //             }
        //         }
        //     }
        // },



        // для уровня этажа
        {
            
            // уровень этажа
            name: 'Уровень',
            id: 0,
            canvasWx: 600,
            canvasWy: 1770,
            depth: 3,
            turned: 0,
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
            borderColor: '#ff0000',
            autoFit: 'contain',
            item: {

                // уровень линии
                depth: 2,
                disposition: {
                    x: 'x',
                    y: 'y',
                    wx: 'wz',
                    wy: 'wx',
                    wz: 'wy'
                },
                active: true,
                padding: 20,
                border: 0,
                borderColor: '#ff0000',
                autoFit: 'none',
                item: {

                    // уровень стеллажа
                    depth: 1,
                    disposition: {
                        x: 'y',
                        y: 'x',
                        wx: 'wz',
                        wy: 'wx',
                        wz: 'wy'
                    },
                    active: true,
                    padding: 10,
                    border: 0,
                    borderColor: '#ff0000',
                    showText: true,
                    autoFit: 'none',
                    item: {

                        // уровень лотков
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
                        active: false,
                    }
                    }
            }
        },



        // для уровня стеллажа
        {

            name: 'Стеллаж',
            navItemDot: true,
            id: 0,
            canvasWx: 600,
            canvasWy: 800,
            depth: 3,
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
                padding: 0,
                border: 0,
                borderColor: '#000000',
                showText: false,
                autoFit: 'none',
                active: true,
                item: {
                
                    // уровень полки
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
                    showText: true,
                    autoFit: 'none',
                    active: false,
                }
                }
        },



        // для уровня полки
        {

            name: 'Полка',
            id: 0,
            canvasWx: 600,
            canvasWy: 800,
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

            name: 'Лоток',
            navItemDot: true,
            id: 0,
            canvasWx: 600,
            canvasWy: 800,
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

            name: 'Контейнер',
            id: 0,
            canvasWx: 600,
            canvasWy: 800,
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
    ];
