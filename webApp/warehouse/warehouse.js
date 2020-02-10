// контейнер элементов склада для выпадающих списков
var warehouse = [

        // 1 этаж склада
        {
            id: 101,
            code: 'F1',
            name: '1-й уровень (отм. 0.000)',
            color: "ffffff",
            disposition: {
                x: 'y',
                y: 'x',
                wx: 'wx',
                wy: 'wy',
                wz: 'wz',
                disposition: {
                    x: 'x',
                    y: 'y',
                    wx: 'wz',
                    wy: 'wx',
                    wz: 'wy',
                    disposition: {
                        x: 'y',
                        y: 'x',
                        wx: 'wz',
                        wy: 'wx',
                        wz: 'wy'
                    }
                }
            },
            x: 0,               // координаты левого верхнего угла объекта
            y: 0,
            wx: 5500,           // 5,500 м
            wy: 17700,          // 17,700 м
            wz: 2970,            // 2,970 м
            payload: 100000000, //100 тонн
            material_id: null,
            photo_id: null,
            created: null,
            updated: null,
            deleted: null,

            // Линии Этажа
            item: [
                // Линия 1A
                {
                    id: 10101,
                    code: '1A',
                    name: 'Линия 1A',
                    color: "bbbbbb",
                    disposition: {
                        x: 'x',
                        y: 'y',
                        wx: 'wz',
                        wy: 'wx',
                        wz: 'wy',
                    },
                    x: 0,            // 0,000 м координаты левого верхнего угла объекта (от контейнера)
                    y: 0,
                    wx: 12030,           // 12,030 м
                    wy: 2970,            // 2,970 м
                    wz: 500,             // 0,500 м
                    payload: 100000000, //100 тонн
                    material_id: null,
                    photo_id: null,
                    created: null,
                    updated: null,
                    deleted: null,
                    // Стеллажи линии 1A
                    item: [
                        // Стеллаж 1A.01
                        {
                            id: 1010101,
                            canvas: canvas,
                            code: '1A.01',
                            name: 'Стеллаж 1A.01',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 11030,            // 12,030 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 1A.02
                        {
                            id: 1010102,
                            canvas: canvas,
                            code: '1A.02',
                            name: 'Стеллаж 1A.02',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 10030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 1A.03
                        {
                            id: 1010103,
                            canvas: canvas,
                            code: '1A.03',
                            name: 'Стеллаж 1A.03',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 9030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 1A.04
                        {
                            id: 1010104,
                            canvas: canvas,
                            code: '1A.04',
                            name: 'Стеллаж 1A.04',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 8030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 1A.05
                        {
                            id:  1010105,
                            canvas: canvas,
                            code: '1A.05',
                            name: 'Стеллаж 1A.05',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 7030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 1A.06
                        {
                            id: 1010106,
                            canvas: canvas,
                            code: '1A.06',
                            name: 'Стеллаж 1A.06',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 6030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 1A.07
                        {
                            id: 1010107,
                            canvas: canvas,
                            code: '1A.07',
                            name: 'Стеллаж 1A.07',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 5030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 1A.08
                        {
                            id: 1010108,
                            canvas: canvas,
                            code: '1A.08',
                            name: 'Стеллаж 1A.08',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 4030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 1A.09
                        {
                            id: 1010109,
                            canvas: canvas,
                            code: '1A.09',
                            name: 'Стеллаж 1A.09',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 3030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 1A.10
                        {
                            id: 1010110,
                            canvas: canvas,
                            code: '1A.10',
                            name: 'Стеллаж 1A.10',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 2030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 1A.11
                        {
                            id: 1010111,
                            canvas: canvas,
                            code: '1A.11',
                            name: 'Стеллаж 1A.11',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 1030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 1A.12
                        {
                            id: 1010112,
                            canvas: canvas,
                            code: '1A.12',
                            name: 'Стеллаж 1A.12',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 0030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                    ]
                },
    
                // Линия 2A
                {
                    id: 10102,
                    canvas: canvas,
                    code: '2A',
                    name: 'Линия 2A',
                    color: "bbbbbb",
                    disposition: {
                        x: 'x',
                        y: 'y',
                        wx: 'wz',
                        wy: 'wx',
                        wz: 'wy',
                    },
                    x: 1433,            // 1,433 м: 0,500 + 0,933 (проход): координаты левого верхнего угла объекта (от контейнера)
                    y: 0,
                    wx: 12030,           // 12,030 м
                    wy: 2970,            // 2,970 м
                    wz: 400,             // 0,400 м
                    payload: 100000000, //100 тонн
                    material_id: null,
                    photo_id: null,
                    created: null,
                    updated: null,
                    deleted: null,
    
                    // Стеллажи линии 2A
                    item: [
    
                        // Стеллаж 2A.01
                        {
                            id: 1,
                            canvas: canvas,
                            code: '1A.01',
                            name: 'Стеллаж 2A.01',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 11030,            // 12,030 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 2A.02
                        {
                            id: 2,
                            canvas: canvas,
                            code: '2A.02',
                            name: 'Стеллаж 2A.02',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 10030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 2A.03
                        {
                            id: 3,
                            canvas: canvas,
                            code: '2A.03',
                            name: 'Стеллаж 2A.03',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 9030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 2A.04
                        {
                            id: 4,
                            canvas: canvas,
                            code: '2A.04',
                            name: 'Стеллаж 2A.04',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 8030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 2A.05
                        {
                            id: 5,
                            canvas: canvas,
                            code: '2A.05',
                            name: 'Стеллаж 2A.05',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 7030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 2A.06
                        {
                            id: 6,
                            canvas: canvas,
                            code: '2A.06',
                            name: 'Стеллаж 2A.06',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 6030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 2A.07
                        {
                            id: 7,
                            canvas: canvas,
                            code: '2A.07',
                            name: 'Стеллаж 2A.07',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 5030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 2A.08
                        {
                            id: 8,
                            canvas: canvas,
                            code: '2A.08',
                            name: 'Стеллаж 2A.08',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 4030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 2A.09
                        {
                            id: 9,
                            canvas: canvas,
                            code: '2A.09',
                            name: 'Стеллаж 2A.09',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 3030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 2A.10
                        {
                            id: 10,
                            canvas: canvas,
                            code: '2A.10',
                            name: 'Стеллаж 2A.10',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 2030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 2A.11
                        {
                            id: 11,
                            canvas: canvas,
                            code: '2A.11',
                            name: 'Стеллаж 2A.11',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 1030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 2A.12
                        {
                            id: 12,
                            canvas: canvas,
                            code: '2A.12',
                            name: 'Стеллаж 2A.12',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 0030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                    ]
                },
    
                // Линия 3A
                {
                    id: 10103,
                    canvas: canvas,
                    code: '3A',
                    name: 'Линия 3A',
                    color: "bbbbbb",
                    disposition: {
                        x: 'x',
                        y: 'y',
                        wx: 'wz',
                        wy: 'wx',
                        wz: 'wy',
                    },
                    x: 1833,            // 1,433 м + 0,400 = 1,833 : координаты левого верхнего угла объекта (от контейнера)
                    y: 0,
                    wx: 12030,           // 12,030 м
                    wy: 2970,            // 2,970 м
                    wz: 500,             // 0,400 м
                    payload: 100000000, //100 тонн
                    material_id: null,
                    photo_id: null,
                    created: null,
                    updated: null,
                    deleted: null,
    
                    // Стеллажи линии 3A
                    item: [
    
                        // Стеллаж 3A.01
                        {
                            id: 1,
                            canvas: canvas,
                            code: '3A.01',
                            name: 'Стеллаж 3A.01',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 11030,            // 12,030 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 3A.02
                        {
                            id: 2,
                            canvas: canvas,
                            code: '3A.02',
                            name: 'Стеллаж 3A.02',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 10030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 3A.03
                        {
                            id: 3,
                            canvas: canvas,
                            code: '3A.03',
                            name: 'Стеллаж 3A.03',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 9030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 3A.04
                        {
                            id: 4,
                            canvas: canvas,
                            code: '3A.04',
                            name: 'Стеллаж 3A.04',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 8030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 3A.05
                        {
                            id: 5,
                            canvas: canvas,
                            code: '3A.05',
                            name: 'Стеллаж 3A.05',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 7030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 3A.06
                        {
                            id: 6,
                            canvas: canvas,
                            code: '3A.06',
                            name: 'Стеллаж 3A.06',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 6030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 3A.07
                        {
                            id: 7,
                            canvas: canvas,
                            code: '3A.07',
                            name: 'Стеллаж 3A.07',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 5030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 3A.08
                        {
                            id: 8,
                            canvas: canvas,
                            code: '3A.08',
                            name: 'Стеллаж 3A.08',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 4030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 3A.09
                        {
                            id: 9,
                            canvas: canvas,
                            code: '3A.09',
                            name: 'Стеллаж 3A.09',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 3030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 3A.10
                        {
                            id: 10,
                            canvas: canvas,
                            code: '3A.10',
                            name: 'Стеллаж 3A.10',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 2030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 3A.11
                        {
                            id: 11,
                            canvas: canvas,
                            code: '3A.11',
                            name: 'Стеллаж 3A.11',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 1030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 3A.12
                        {
                            id: 12,
                            canvas: canvas,
                            code: '3A.12',
                            name: 'Стеллаж 3A.12',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 0030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                    ]
                },
    
                
                // Линия 4A
                {
                    id: 10104,
                    canvas: canvas,
                    code: '4A',
                    name: 'Линия 4A',
                    color: "bbbbbb",
                    disposition: {
                        x: 'x',
                        y: 'y',
                        wx: 'wz',
                        wy: 'wx',
                        wz: 'wy',
                    },
                    x: 3266,            // 1,833 м + 0,500 + 0,933(проход) = 3,266 : координаты левого верхнего угла объекта (от контейнера)
                    y: 0,
                    wx: 12030,           // 12,030 м
                    wy: 2970,            // 2,970 м
                    wz: 400,             // 0,400 м
                    payload: 100000000, //100 тонн
                    material_id: null,
                    photo_id: null,
                    created: null,
                    updated: null,
                    deleted: null,
    
                    // Стеллажи линии 4A
                    item: [
    
                        // Стеллаж 4A.01
                        {
                            id: 1,
                            canvas: canvas,
                            code: '4A.01',
                            name: 'Стеллаж 4A.01',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 11030,            // 12,030 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 4A.02
                        {
                            id: 2,
                            canvas: canvas,
                            code: '4A.02',
                            name: 'Стеллаж 4A.02',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 10030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 4A.03
                        {
                            id: 3,
                            canvas: canvas,
                            code: '4A.03',
                            name: 'Стеллаж 4A.03',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 9030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 4A.04
                        {
                            id: 4,
                            canvas: canvas,
                            code: '4A.04',
                            name: 'Стеллаж 4A.04',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 8030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 4A.05
                        {
                            id: 5,
                            canvas: canvas,
                            code: '4A.05',
                            name: 'Стеллаж 4A.05',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 7030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 4A.06
                        {
                            id: 6,
                            canvas: canvas,
                            code: '4A.06',
                            name: 'Стеллаж 4A.06',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 6030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 4A.07
                        {
                            id: 7,
                            canvas: canvas,
                            code: '4A.07',
                            name: 'Стеллаж 4A.07',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 5030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 4A.08
                        {
                            id: 8,
                            canvas: canvas,
                            code: '4A.08',
                            name: 'Стеллаж 4A.08',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 4030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 4A.09
                        {
                            id: 9,
                            canvas: canvas,
                            code: '4A.09',
                            name: 'Стеллаж 4A.09',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 3030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 4A.10
                        {
                            id: 10,
                            canvas: canvas,
                            code: '4A.10',
                            name: 'Стеллаж 4A.10',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 2030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 4A.11
                        {
                            id: 11,
                            canvas: canvas,
                            code: '4A.11',
                            name: 'Стеллаж 4A.11',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 1030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 4A.12
                        {
                            id: 12,
                            canvas: canvas,
                            code: '4A.12',
                            name: 'Стеллаж 4A.12',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 0030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                    ]
                },
    
    
                // Линия 5A
                {
                    id: 10105,
                    canvas: canvas,
                    code: '5A',
                    name: 'Линия 5A',
                    color: "bbbbbb",
                    disposition: {
                        x: 'x',
                        y: 'y',
                        wx: 'wz',
                        wy: 'wx',
                        wz: 'wy',
                    },
                    x: 3666,            // 3,266 м + 0,400 = 3,666 : координаты левого верхнего угла объекта (от контейнера)
                    y: 0,
                    wx: 12030,           // 12,030 м
                    wy: 2970,            // 2,970 м
                    wz: 500,             // 0,500 м
                    payload: 100000000, //100 тонн
                    material_id: null,
                    photo_id: null,
                    created: null,
                    updated: null,
                    deleted: null,
    
                    // Стеллажи линии 5A
                    item: [
    
                        // Стеллаж 5A.01
                        {
                            id: 1,
                            canvas: canvas,
                            code: '5A.01',
                            name: 'Стеллаж 5A.01',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 11030,            // 12,030 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 5A.02
                        {
                            id: 2,
                            canvas: canvas,
                            code: '5A.02',
                            name: 'Стеллаж 5A.02',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 10030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 5A.03
                        {
                            id: 3,
                            canvas: canvas,
                            code: '5A.03',
                            name: 'Стеллаж 5A.03',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 9030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 5A.04
                        {
                            id: 4,
                            canvas: canvas,
                            code: '5A.04',
                            name: 'Стеллаж 5A.04',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 8030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 5A.05
                        {
                            id: 5,
                            canvas: canvas,
                            code: '5A.05',
                            name: 'Стеллаж 5A.05',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 7030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 5A.06
                        {
                            id: 6,
                            canvas: canvas,
                            code: '5A.06',
                            name: 'Стеллаж 5A.06',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 6030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 5A.07
                        {
                            id: 7,
                            canvas: canvas,
                            code: '5A.07',
                            name: 'Стеллаж 5A.07',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 5030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 5A.08
                        {
                            id: 8,
                            canvas: canvas,
                            code: '5A.08',
                            name: 'Стеллаж 5A.08',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 4030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 5A.09
                        {
                            id: 9,
                            canvas: canvas,
                            code: '5A.09',
                            name: 'Стеллаж 5A.09',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 3030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 5A.10
                        {
                            id: 10,
                            canvas: canvas,
                            code: '5A.10',
                            name: 'Стеллаж 5A.10',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 2030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 5A.11
                        {
                            id: 11,
                            canvas: canvas,
                            code: '5A.11',
                            name: 'Стеллаж 5A.11',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 1030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 5A.12
                        {
                            id: 12,
                            canvas: canvas,
                            code: '5A.12',
                            name: 'Стеллаж 5A.12',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 0030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                    ]
                },
    
               // Линия 6A
               {
                    id: 10106,
                    canvas: canvas,
                    code: '6A',
                    name: 'Линия 6A',
                    color: "bbbbbb",
                    disposition: {
                        x: 'x',
                        y: 'y',
                        wx: 'wz',
                        wy: 'wx',
                        wz: 'wy',
                    },
                    x: 4599,            // 3,666 м + 0,933(проход) = 4,599 : координаты левого верхнего угла объекта (от контейнера)
                    y: 0,
                    wx: 12030,           // 12,030 м
                    wy: 2970,            // 2,970 м
                    wz: 400,             // 0,400 м
                    payload: 100000000, //100 тонн
                    material_id: null,
                    photo_id: null,
                    created: null,
                    updated: null,
                    deleted: null,
        
                    // Стеллажи линии 6A
                    item: [
        
                        // Стеллаж 6A.01
                        {
                            id: 1,
                            canvas: canvas,
                            code: '6A.01',
                            name: 'Стеллаж 6A.01',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 11030,            // 12,030 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 6A.02
                        {
                            id: 2,
                            canvas: canvas,
                            code: '6A.02',
                            name: 'Стеллаж 6A.02',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 10030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 6A.03
                        {
                            id: 3,
                            canvas: canvas,
                            code: '6A.03',
                            name: 'Стеллаж 6A.03',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 9030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 6A.04
                        {
                            id: 4,
                            canvas: canvas,
                            code: '6A.04',
                            name: 'Стеллаж 6A.04',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 8030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 6A.05
                        {
                            id: 5,
                            canvas: canvas,
                            code: '6A.05',
                            name: 'Стеллаж 6A.05',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 7030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 6A.06
                        {
                            id: 6,
                            canvas: canvas,
                            code: '6A.06',
                            name: 'Стеллаж 6A.06',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 6030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 6A.07
                        {
                            id: 7,
                            canvas: canvas,
                            code: '6A.07',
                            name: 'Стеллаж 6A.07',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 5030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 6A.08
                        {
                            id: 8,
                            canvas: canvas,
                            code: '6A.08',
                            name: 'Стеллаж 6A.08',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 4030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 6A.09
                        {
                            id: 9,
                            canvas: canvas,
                            code: '6A.09',
                            name: 'Стеллаж 6A.09',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 3030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 6A.10
                        {
                            id: 10,
                            canvas: canvas,
                            code: '6A.10',
                            name: 'Стеллаж 6A.10',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 2030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 6A.11
                        {
                            id: 11,
                            canvas: canvas,
                            code: '6A.11',
                            name: 'Стеллаж 6A.11',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 1030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 6A.12
                        {
                            id: 12,
                            canvas: canvas,
                            code: '6A.12',
                            name: 'Стеллаж 6A.12',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 0030,              // 1,000 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                    ]
                },
    
                // Линия 1-1.A - продолжение линии 1.A
                {
                    id: 10107,
                    canvas: canvas,
                    code: '1-1.A',
                    name: 'Линия 1-1.A',
                    color: "bbbbbb",
                    disposition: {
                        x: 'x',
                        y: 'y',
                        wx: 'wz',
                        wy: 'wx',
                        wz: 'wy',
                    },
                    x: 0,
                    y: 12270,            // 12,030 + 0,240 м (проход) координаты левого верхнего угла объекта (от контейнера)
                    wx: 2030,           // 2,030 м
                    wy: 2970,            // 2,970 м
                    wz: 400,             // 0,400 м
                    payload: 100000000, //100 тонн
                    material_id: null,
                    photo_id: null,
                    created: null,
                    updated: null,
                    deleted: null,
                    // Стеллажи линии 1-1.A
                    item: [
                        // Стеллаж 1-1.A.01
                        {
                            id: 1,
                            canvas: canvas,
                            code: '1-1.A.01',
                            name: 'Стеллаж 1-1.A.01',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 1030,            // 12,270 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },
                        // Стеллаж 1-1.A.02
                        {
                            id: 2,
                            canvas: canvas,
                            code: '1-1.A.02',
                            name: 'Стеллаж 1-1.A.02',
                            color: "415b80",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 0030,              // 11,270 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null
                        },

                    ]
                },
    
    
    
            ]         // \\--Линии Этажа
        },     // \\--1 этаж склада

        // 2 этаж склада
        {
            id: 102,
            canvas: canvas,
            code: 'F2',
            name: '2-й уровень (отм. +2.463)',
            color: "12768E",
            disposition: {
                x: 'y',
                y: 'x',
                wx: 'wx',
                wy: 'wy',
                wz: 'wz',
                disposition: {
                    x: 'x',
                    y: 'y',
                    wx: 'wz',
                    wy: 'wx',
                    wz: 'wy',
                    disposition: {
                        x: 'y',
                        y: 'x',
                        wx: 'wz',
                        wy: 'wx',
                        wz: 'wy'
                    }
                }
            },
            x: 0,               // координаты левого верхнего угла объекта
            y: 0,
            wx: 5500,           // 5,500 м
            wy: 17700,          // 17,700 м
            wz: 2970,            // 2,970 м
            payload: 100000000, //100 тонн
            material_id: null,
            photo_id: null,
            created: null,
            updated: null,
            deleted: null,

            // Линии Этажа
            item: []
        },

        // 3 этаж склада
        {
            id: 103,
            canvas: canvas,
            code: 'F3',
            name: '3-й уровень (отм. +4.763)',
            color: "036F88",
            disposition: {
                x: 'y',
                y: 'x',
                wx: 'wx',
                wy: 'wy',
                wz: 'wz',
                disposition: {
                    x: 'x',
                    y: 'y',
                    wx: 'wz',
                    wy: 'wx',
                    wz: 'wy',
                    disposition: {
                        x: 'y',
                        y: 'x',
                        wx: 'wz',
                        wy: 'wx',
                        wz: 'wy'
                    }
                }
            },
            x: 0,               // координаты левого верхнего угла объекта
            y: 0,
            wx: 5500,           // 5,500 м
            wy: 17700,          // 17,700 м
            wz: 2970,            // 2,970 м
            payload: 100000000, //100 тонн
            material_id: null,
            photo_id: null,
            created: null,
            updated: null,
            deleted: null,

            // Линии Этажа
            item: []
        }
    ];
    