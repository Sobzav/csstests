// контейнер элементов склада для выпадающих списков
var warehouse = [

        // 1 этаж склада
        {
            id: 101,
            code: '511',
            art: '511',
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
                // Линия 1
                {
                    id: 10101,
                    code: '511.1',
                    art: '511.1',
                    name: 'Линия 1',
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
                    wx: 14384,           // 14,384 м
                    wy: 2970,            // 2,970 м
                    wz: 500,             // 0,500 м
                    payload: 100000000, //100 тонн
                    material_id: null,
                    photo_id: null,
                    created: null,
                    updated: null,
                    deleted: null,

                    // Стеллажи линии 1
                    item: [
                        // Стеллаж 1M
                        {
                            id: 1010101,
                            code: '511.1M',
                            art: '511.1M',
                            name: 'Стеллаж 1M.401',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 32,            // 00,032 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null,
                            // полки стеллажа 1M.401
                            item: [
                                    // Полка 1A.401.01
                                    {
                                        id: 101010101,
                                        code: '1A.401.01',
                                        name: 'Полка 1A.401.01',
                                        color: "006D8F",
                                        disposition: {
                                            x: 'x',
                                            y: 'y',
                                            wx: 'wx',
                                            wy: 'wy',
                                            wz: 'wz'
                                        },
                                        x: 0,            // 12,030 м координаты левого верхнего угла объекта
                                        y: 0,
                                        wx: 1000,            // 1,000 м
                                        wy: 200,            // 2,970 м
                                        wz: 400,             // 0,500 м
                                        payload: 100000000, //100 тонн
                                        material_id: null,
                                        photo_id: null,
                                        created: null,
                                        updated: null,
                                        deleted: null
                                    },
                                    // Полка 1A.401.02
                                    {
                                        id: 101010102,
                                        code: '1A.401.02',
                                        name: 'Полка 1A.401.02',
                                        color: "006D8F",
                                        disposition: {
                                            x: 'x',
                                            y: 'y',
                                            wx: 'wx',
                                            wy: 'wy',
                                            wz: 'wz'
                                        },
                                        x: 0,            // 12,030 м координаты левого верхнего угла объекта
                                        y: 200,
                                        wx: 1000,            // 1,000 м
                                        wy: 200,            // 2,970 м
                                        wz: 400,             // 0,500 м
                                        payload: 100000000, //100 тонн
                                        material_id: null,
                                        photo_id: null,
                                        created: null,
                                        updated: null,
                                        deleted: null
                                    }
                            ]

                        },
                        // Стеллаж 1N
                        {
                            id: 1010102,
                            code: '511.1N',
                            art: '511.1N',
                            name: 'Стеллаж 1N.402',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 1064,            // 1,064 м координаты левого верхнего угла объекта
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
                        // Стеллаж 1A
                        {
                            id: 1010103,
                            code: '511.1A',
                            art: '511.1A',
                            name: 'Стеллаж 1A.403',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 2448,            // 2,448 м координаты левого верхнего угла объекта
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
                        // Стеллаж 1B
                        {
                            id: 1010104,
                            code: '511.1B',
                            art: '511.1B',
                            name: 'Стеллаж 1B.404',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 3480,              // 3,480 м координаты левого верхнего угла объекта
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
                        // Стеллаж 1C
                        {
                            id: 1010105,
                            code: '511.1C',
                            art: '511.1C',
                            name: 'Стеллаж 1C.405',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 4512,              // 4,512 м координаты левого верхнего угла объекта
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
                        // Стеллаж 1D
                        {
                            id: 1010106,
                            code: '511.1D',
                            art: '511.1D',
                            name: 'Стеллаж 1D.406',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 5544,              // 5,544 м координаты левого верхнего угла объекта
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
                        // Стеллаж 1E
                        {
                            id:  1010107,
                            code: '511.1E',
                            art: '511.1E',
                            name: 'Стеллаж 1E.407',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 6576,              // 6,576 м координаты левого верхнего угла объекта
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
                        // Стеллаж 1F
                        {
                            id: 1010108,
                            code: '511.1F',
                            art: '511.1F',
                            name: 'Стеллаж 1F.408',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 7608,              // 7,608 м координаты левого верхнего угла объекта
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
                        // Стеллаж 1G
                        {
                            id: 1010109,
                            code: '511.1G',
                            art: '511.1G',
                            name: 'Стеллаж 1G.409',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 8640,              // 8,640 м координаты левого верхнего угла объекта
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
                        // Стеллаж 1H
                        {
                            id: 1010110,
                            code: '511.1H',
                            art: '511.1H',
                            name: 'Стеллаж 1H.410',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 9672,              // 9,672 м координаты левого верхнего угла объекта
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
                        // Стеллаж 1I
                        {
                            id: 1010111,
                            code: '511.1I',
                            art: '511.1I',
                            name: 'Стеллаж 1I.411',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 10704,              // 10,704 м координаты левого верхнего угла объекта
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
                        // Стеллаж 1J
                        {
                            id: 1010112,
                            code: '511.1J',
                            art: '511.1J',
                            name: 'Стеллаж 1J.412',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 11736,              // 11,736 м координаты левого верхнего угла объекта
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
                        // Стеллаж 1K
                        {
                            id: 1010113,
                            code: '511.1K',
                            art: '511.1K',
                            name: 'Стеллаж 1K.413',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 12768,              // 12,768 м координаты левого верхнего угла объекта
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
                        // Стеллаж 1L
                        {
                            id: 1010114,
                            code: '511.1L',
                            art: '511.1L',
                            name: 'Стеллаж 1L.414',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 13800,              // 13,800 м координаты левого верхнего угла объекта
                            y: 0,
                            wx: 1000,            // 1,000 м
                            wy: 2970,            // 2,970 м
                            wz: 500,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null,
                            // полки стеллажа 1A.414
                            item: [
                                // Полка 1A.414.01
                                {
                                    id: 101011401,
                                    code: '1A.414.01',
                                    name: 'Полка 1A.414.01',
                                    color: "006D8F",
                                    disposition: {
                                        x: 'x',
                                        y: 'y',
                                        wx: 'wx',
                                        wy: 'wy',
                                        wz: 'wz'
                                    },
                                    x: 0,            // 12,030 м координаты левого верхнего угла объекта
                                    y: 0,
                                    wx: 1000,            // 1,000 м
                                    wy: 200,            // 2,970 м
                                    wz: 400,             // 0,500 м
                                    payload: 100000000, //100 тонн
                                    material_id: null,
                                    photo_id: null,
                                    created: null,
                                    updated: null,
                                    deleted: null
                                },
                                // Полка 1A.414.02
                                {
                                    id: 101011402,
                                    code: '1A.414.02',
                                    name: 'Полка 1A.414.02',
                                    color: "006D8F",
                                    disposition: {
                                        x: 'x',
                                        y: 'y',
                                        wx: 'wx',
                                        wy: 'wy',
                                        wz: 'wz'
                                    },
                                    x: 0,            // 12,030 м координаты левого верхнего угла объекта
                                    y: 200,
                                    wx: 1000,            // 1,000 м
                                    wy: 200,            // 2,970 м
                                    wz: 400,             // 0,500 м
                                    payload: 100000000, //100 тонн
                                    material_id: null,
                                    photo_id: null,
                                    created: null,
                                    updated: null,
                                    deleted: null
                                }
                            ]
                    },
                    ]
                },
    
                // Линия 2
                {
                    id: 10102,
                    code: '511.2',
                    art: '511.2',
                    name: 'Линия 2',
                    color: "bbbbbb",
                    disposition: {
                        x: 'x',
                        y: 'y',
                        wx: 'wz',
                        wy: 'wx',
                        wz: 'wy',
                    },
                    x: 1414,            // 1,414 м: 0,500 + 0,914 (проход с учетом 2х30мм промежутка между смежными линиями) - : координаты левого верхнего угла объекта (от контейнера)
                    y: 0,
                    wx: 12416,           // 12,416 м
                    wy: 2970,            // 2,970 м
                    wz: 400,             // 0,400 м
                    payload: 100000000, //100 тонн
                    material_id: null,
                    photo_id: null,
                    created: null,
                    updated: null,
                    deleted: null,
    
                    // Стеллажи линии 2
                    item: [
    
                        // Стеллаж 2L
                        {
                            id: 1010201,
                            code: '511.2L',
                            art: '511.2L',
                            name: 'Стеллаж 2L.01',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 32,            // 12,030 м координаты левого верхнего угла объекта
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
                        // Стеллаж 2K
                        {
                            id: 1010202,
                            code: '511.2K',
                            art: '511.2K',
                            name: 'Стеллаж 2K.02',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 1064,              // 1,064 м координаты левого верхнего угла объекта
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
                        // Стеллаж 2J
                        {
                            id: 1010203,
                            code: '511.2J',
                            art: '511.2J',
                            name: 'Стеллаж 2J.03',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 2096,              // 2,096 м координаты левого верхнего угла объекта
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
                        // Стеллаж 2I
                        {
                            id: 1010204,
                            code: '511.2I',
                            art: '511.2I',
                            name: 'Стеллаж 2I.04',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 3128,              // 3,128 м координаты левого верхнего угла объекта
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
                        // Стеллаж 2H
                        {
                            id: 1010205,
                            code: '511.2H',
                            art: '511.2H',
                            name: 'Стеллаж 2H.05',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 4160,              // 4,160 м координаты левого верхнего угла объекта
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
                        // Стеллаж 2G
                        {
                            id: 1010206,
                            code: '511.2G',
                            art: '511.2G',
                            name: 'Стеллаж 2G.06',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 5192,              // 5,192 м координаты левого верхнего угла объекта
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
                        // Стеллаж 2F
                        {
                            id: 1010207,
                            code: '511.2F',
                            art: '511.2F',
                            name: 'Стеллаж 2F.07',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 6224,              // 6,224 м координаты левого верхнего угла объекта
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
                        // Стеллаж 2E
                        {
                            id: 1010208,
                            code: '511.2E',
                            art: '511.2E',
                            name: 'Стеллаж 2E.08',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 7256,              // 7,256 м координаты левого верхнего угла объекта
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
                        // Стеллаж 2D
                        {
                            id: 1010209,
                            code: '511.2D',
                            art: '511.2D',
                            name: 'Стеллаж 2D.09',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 8288,              // 8,288 м координаты левого верхнего угла объекта
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
                        // Стеллаж 2C
                        {
                            id: 1010210,
                            code: '511.2C',
                            art: '511.2C',
                            name: 'Стеллаж 2C.10',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 9320,              // 9,320 м координаты левого верхнего угла объекта
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
                        // Стеллаж 2B
                        {
                            id: 1010211,
                            code: '511.2B',
                            art: '511.2B',
                            name: 'Стеллаж 2B.11',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 10352,              // 10,352 м координаты левого верхнего угла объекта
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
                        // Стеллаж 2A
                        {
                            id: 1010212,
                            code: '511.2A',
                            art: '511.2A',
                            name: 'Стеллаж 2A.12',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 11384,              // 11,384 м координаты левого верхнего угла объекта
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
                    x: 1765,            // 1,433 м + 0,400 = 1,833 : координаты левого верхнего угла объекта (от контейнера)
                    y: 0,
                    wx: 12384,           // 12,030 м
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
                            id: 1010301,

                            code: '3A.01',
                            name: 'Стеллаж 3A.01',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 11384,            // 12,030 м координаты левого верхнего угла объекта
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
                            id: 1010302,

                            code: '3A.02',
                            name: 'Стеллаж 3A.02',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 10352,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010303,

                            code: '3A.03',
                            name: 'Стеллаж 3A.03',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 9320,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010304,

                            code: '3A.04',
                            name: 'Стеллаж 3A.04',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 8288,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010305,

                            code: '3A.05',
                            name: 'Стеллаж 3A.05',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 7256,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010306,

                            code: '3A.06',
                            name: 'Стеллаж 3A.06',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 6224,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010307,

                            code: '3A.07',
                            name: 'Стеллаж 3A.07',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 5192,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010308,

                            code: '3A.08',
                            name: 'Стеллаж 3A.08',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 4160,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010309,

                            code: '3A.09',
                            name: 'Стеллаж 3A.09',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 3128,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010310,

                            code: '3A.10',
                            name: 'Стеллаж 3A.10',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 2096,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010311,

                            code: '3A.11',
                            name: 'Стеллаж 3A.11',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 1064,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010312,

                            code: '3A.12',
                            name: 'Стеллаж 3A.12',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 0032,              // 1,000 м координаты левого верхнего угла объекта
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
                    x: 3170,            // 1,833 м + 0,500 + 0,933(проход) = 3,266 : координаты левого верхнего угла объекта (от контейнера)
                    y: 0,
                    wx: 12384,           // 12,030 м
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
                            id: 1010401,

                            code: '4A.01',
                            name: 'Стеллаж 4A.01',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 11384,            // 12,030 м координаты левого верхнего угла объекта
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
                            id: 1010402,

                            code: '4A.02',
                            name: 'Стеллаж 4A.02',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 10352,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010403,

                            code: '4A.03',
                            name: 'Стеллаж 4A.03',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 9320,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010404,

                            code: '4A.04',
                            name: 'Стеллаж 4A.04',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 8288,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010405,

                            code: '4A.05',
                            name: 'Стеллаж 4A.05',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 7256,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010406,

                            code: '4A.06',
                            name: 'Стеллаж 4A.06',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 6224,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010407,

                            code: '4A.07',
                            name: 'Стеллаж 4A.07',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 5192,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010408,

                            code: '4A.08',
                            name: 'Стеллаж 4A.08',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 4160,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010409,

                            code: '4A.09',
                            name: 'Стеллаж 4A.09',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 3128,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010410,

                            code: '4A.10',
                            name: 'Стеллаж 4A.10',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 2096,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010411,

                            code: '4A.11',
                            name: 'Стеллаж 4A.11',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 1064,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010412,

                            code: '4A.12',
                            name: 'Стеллаж 4A.12',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 0032,              // 1,000 м координаты левого верхнего угла объекта
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
                    x: 3600,            // 3,266 м + 0,400 = 3,666 : координаты левого верхнего угла объекта (от контейнера)
                    y: 0,
                    wx: 12384,           // 12,030 м
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
                            id: 1010501,

                            code: '5A.01',
                            name: 'Стеллаж 5A.01',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 11384,            // 12,030 м координаты левого верхнего угла объекта
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
                            id: 1010502,

                            code: '5A.02',
                            name: 'Стеллаж 5A.02',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 10352,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010503,

                            code: '5A.03',
                            name: 'Стеллаж 5A.03',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 9320,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010504,

                            code: '5A.04',
                            name: 'Стеллаж 5A.04',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 8288,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010505,

                            code: '5A.05',
                            name: 'Стеллаж 5A.05',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 7256,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010506,

                            code: '5A.06',
                            name: 'Стеллаж 5A.06',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 6224,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010507,

                            code: '5A.07',
                            name: 'Стеллаж 5A.07',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 5192,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010508,

                            code: '5A.08',
                            name: 'Стеллаж 5A.08',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 4160,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010509,

                            code: '5A.09',
                            name: 'Стеллаж 5A.09',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 3128,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010510,

                            code: '5A.10',
                            name: 'Стеллаж 5A.10',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 2096,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010511,

                            code: '5A.11',
                            name: 'Стеллаж 5A.11',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 1064,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010512,

                            code: '5A.12',
                            name: 'Стеллаж 5A.12',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 0032,              // 1,000 м координаты левого верхнего угла объекта
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
                    x: 5100,            // 3,666 м + 0,933(проход) = 4,599 : координаты левого верхнего угла объекта (от контейнера)
                    y: 0,
                    wx: 13684,           // 12,030 м
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
                            id: 1010601,

                            code: '6A.01',
                            name: 'Стеллаж 6A.01',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 12684,            // 12,030 м координаты левого верхнего угла объекта
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
                        // Стеллаж 6A.01
                        {
                            id: 1010601,

                            code: '6A.01',
                            name: 'Стеллаж 6A.01',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 11384,            // 12,030 м координаты левого верхнего угла объекта
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
                            id: 1010602,

                            code: '6A.02',
                            name: 'Стеллаж 6A.02',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 10352,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010603,

                            code: '6A.03',
                            name: 'Стеллаж 6A.03',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 9320,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010604,

                            code: '6A.04',
                            name: 'Стеллаж 6A.04',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 8288,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010605,

                            code: '6A.05',
                            name: 'Стеллаж 6A.05',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 7256,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010606,

                            code: '6A.06',
                            name: 'Стеллаж 6A.06',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 6224,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010607,

                            code: '6A.07',
                            name: 'Стеллаж 6A.07',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 5192,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010608,

                            code: '6A.08',
                            name: 'Стеллаж 6A.08',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 4160,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010609,

                            code: '6A.09',
                            name: 'Стеллаж 6A.09',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 3128,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010610,

                            code: '6A.10',
                            name: 'Стеллаж 6A.10',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 2096,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010611,

                            code: '6A.11',
                            name: 'Стеллаж 6A.11',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 1064,              // 1,000 м координаты левого верхнего угла объекта
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
                            id: 1010612,

                            code: '6A.12',
                            name: 'Стеллаж 6A.12',
                            color: "45ADA8",
                            disposition: {
                                x: 'y',
                                y: 'x',
                                wx: 'wz',
                                wy: 'wx',
                                wz: 'wy'
                            },
                            x: 0032,              // 1,000 м координаты левого верхнего угла объекта
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
                }    
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
    