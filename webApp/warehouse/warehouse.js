// контейнер элементов склада для выпадающих списков
var warehouse = [

    // 1 этаж склада
    {
        id: 101,
        code: '511',
        name: '1-й уровень (отм. 0.000)',
        color: "97A1AA",
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
                name: 'Линия 511.1',
                color: "bbbbbb",  // ПОМЕНЯТЬ обратно НА 97A1AA
                x: 0,            // 0,000 м координаты левого верхнего угла объекта (от контейнера)
                y: 0,
                wx: 14800,           // 12,030 м
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
                    // Стеллаж 1М
                    {
                        id: 1010101,
                        code: '1M',
                        art: '511.1M',
                        name: 'Стеллаж 1A.401',
                        color: "253D0E",
                        x: 13800,            // 12,030 м координаты левого верхнего угла объекта
                        y: 0,
                        wx: 1000,            // 1,000 м
                        wy: 2970,            // 2,970 м
                        wz: 400,             // 0,500 м
                        payload: 100000000, //100 тонн
                        material_id: null,
                        photo_id: null,
                        created: null,
                        updated: null,
                        deleted: null,
                        // полки стеллажа 1A.401
                        item: [
                                // Полка 1A.401.01
                                {
                                    id: 101010101,
                                    code: '1A.401.01',
                                    name: 'Полка 1A.401.01',
                                    color: "006D8F",
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
                        code: '1N',
                        art: '511.1N',
                        name: 'Стеллаж 1A.402',
                        color: "253D0E",
                        x: 12768,            // 12,030 м координаты левого верхнего угла объекта
                        y: 0,
                        wx: 1000,            // 1,000 м
                        wy: 2970,            // 2,970 м
                        wz: 400,             // 0,500 м
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
                        code: '1A',
                        art: '511.1A',
                        name: 'Стеллаж 1A.403',
                        color: "253D0E",
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
                    // Стеллаж 1A.402
                    {
                        id: 1010104,
                        code: '1B',
                        art: '511.1B',
                        name: 'Стеллаж 1A.404',
                        color: "253D0E",
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
                    // Стеллаж 1A.403
                    {
                        id: 1010105,
                        code: '1C',
                        art: '511.1C',
                        name: 'Стеллаж 1A.405',
                        color: "253D0E",
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
                    // Стеллаж 1A.404
                    {
                        id: 1010106,
                        code: '1D',
                        art: '511.1D',
                        name: 'Стеллаж 1A.406',
                        color: "253D0E",
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
                    // Стеллаж 1A.405
                    {
                        id:  1010107,
                        code: '1E',
                        art: '511.1E',
                        name: 'Стеллаж 1A.407',
                        color: "253D0E",
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
                    // Стеллаж 1A.406
                    {
                        id: 1010108,
                        code: '1F',
                        art: '511.1F',
                        name: 'Стеллаж 1A.408',
                        color: "253D0E",
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
                    // Стеллаж 1A.407
                    {
                        id: 1010109,
                        code: '1G',
                        art: '511.1G',
                        name: 'Стеллаж 1A.409',
                        color: "253D0E",
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
                    // Стеллаж 1A.408
                    {
                        id: 1010110,
                        code: '1H',
                        art: '511.1H',
                        name: 'Стеллаж 1A.410',
                        color: "253D0E",
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
                    // Стеллаж 1A.409
                    {
                        id: 1010111,
                        code: '1I',
                        art: '511.1I',
                        name: 'Стеллаж 1A.411',
                        color: "253D0E",
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
                    // Стеллаж 1A.412
                    {
                        id: 1010112,
                        code: '1J',
                        art: '511.1J',
                        name: 'Стеллаж 1A.412',
                        color: "253D0E",
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
                    // Стеллаж 1A.413
                    {
                        id: 1010113,
                        code: '1K',
                        art: '511.1K',
                        name: 'Стеллаж 1A.413',
                        color: "253D0E",
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
                    // Стеллаж 1A.414
                    {
                        id: 1010114,
                        code: '1L',
                        art: '511.1L',
                        name: 'Стеллаж 1A.414',
                        color: "253D0E",
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
                        deleted: null,
                        // полки стеллажа 1A.414
                        item: [
                            // Полка 1A.414.01
                            {
                                id: 101011401,
                                code: '1A.414.01',
                                name: 'Полка 1A.414.01',
                                color: "006D8F",
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
                name: 'Линия 511.2',
                color: "bbbbbb",
                x: 1414,            // 1,414 м: 0,500 + 0,914 (проход): координаты левого верхнего угла объекта (от контейнера)
                y: 0,
                wx: 12384,           // 12,384 м
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

                    // Стеллаж 2A
                    {
                        id: 1010201,
                        code: '2A',
                        art: '511.2A',
                        name: 'Стеллаж 2A.01',
                        color: "253D0E",
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
                    // Стеллаж 2B
                    {
                        id: 1010202,
                        code: '2B',
                        art: '511.2B',
                        name: 'Стеллаж 2A.02',
                        color: "253D0E",
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
                    // Стеллаж 2A.03
                    {
                        id: 1010203,
                        code: '2C',
                        art: '511.2C',
                        name: 'Стеллаж 2A.03',
                        color: "253D0E",
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
                    // Стеллаж 2A.04
                    {
                        id: 1010204,
                        code: '2D',
                        art: '511.2D',
                        name: 'Стеллаж 2A.04',
                        color: "253D0E",
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
                    // Стеллаж 2A.05
                    {
                        id: 1010205,
                        code: '2E',
                        art: '511.2E',
                        name: 'Стеллаж 2A.05',
                        color: "253D0E",
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
                    // Стеллаж 2A.06
                    {
                        id: 1010206,
                        code: '2F',
                        art: '511.2F',
                        name: 'Стеллаж 2A.06',
                        color: "253D0E",
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
                    // Стеллаж 2A.07
                    {
                        id: 1010207,
                        code: '2G',
                        art: '511.2G',
                        name: 'Стеллаж 2A.07',
                        color: "253D0E",
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
                    // Стеллаж 2A.08
                    {
                        id: 1010208,
                        code: '2H',
                        art: '511.2H',
                        name: 'Стеллаж 2A.08',
                        color: "253D0E",
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
                    // Стеллаж 2A.09
                    {
                        id: 1010209,
                        code: '2I',
                        art: '511.2I',
                        name: 'Стеллаж 2A.09',
                        color: "253D0E",
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
                    // Стеллаж 2A.10
                    {
                        id: 1010210,
                        code: '2J',
                        art: '511.2J',
                        name: 'Стеллаж 2A.10',
                        color: "253D0E",
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
                    // Стеллаж 2A.11
                    {
                        id: 1010211,
                        code: '2K',
                        art: '511.2K',
                        name: 'Стеллаж 2A.11',
                        color: "253D0E",
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
                    // Стеллаж 2A.12
                    {
                        id: 1010212,
                        code: '2L',
                        art: '511.2L',
                        name: 'Стеллаж 2A.12',
                        color: "253D0E",
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

            // Линия 3
            {
                id: 10103,
                code: '511.3',
                art: '511.3',
                name: 'Линия 511.3',
                color: "bbbbbb",
                x: 1844,            // 1,433 м + 0,400 = 1,833 : координаты левого верхнего угла объекта (от контейнера)
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

                // Стеллажи линии 3
                item: [

                    // Стеллаж 3A
                    {
                        id: 1010301,
                        code: '3A',
                        art: '511.3A',
                        name: 'Стеллаж 3A.01',
                        color: "253D0E",
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
                    // Стеллаж 3B
                    {
                        id: 1010302,
                        code: '3B',
                        art: '511.3В',
                        name: 'Стеллаж 3A.02',
                        color: "253D0E",
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
                    // Стеллаж 3C
                    {
                        id: 1010303,
                        code: '3C',
                        art: '511.3C',
                        name: 'Стеллаж 3A.03',
                        color: "253D0E",
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
                    // Стеллаж 3D
                    {
                        id: 1010304,
                        code: '3D',
                        art: '511.3D',
                        name: 'Стеллаж 3A.04',
                        color: "253D0E",
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
                    // Стеллаж 3E
                    {
                        id: 1010305,
                        code: '3E',
                        art: '511.3E',
                        name: 'Стеллаж 3A.05',
                        color: "253D0E",
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
                    // Стеллаж 3F
                    {
                        id: 1010306,
                        code: '3F',
                        art: '511.3F',
                        name: 'Стеллаж 3A.06',
                        color: "253D0E",
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
                    // Стеллаж 3G
                    {
                        id: 1010307,
                        code: '3G',
                        art: '511.3G',
                        name: 'Стеллаж 3A.07',
                        color: "253D0E",
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
                    // Стеллаж 3H
                    {
                        id: 1010308,
                        code: '3H',
                        art: '511.3H',
                        name: 'Стеллаж 3A.08',
                        color: "253D0E",
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
                    // Стеллаж 3I
                    {
                        id: 1010309,
                        code: '3I',
                        art: '511.3I',
                        name: 'Стеллаж 3A.09',
                        color: "253D0E",
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
                    // Стеллаж 3J
                    {
                        id: 1010310,
                        code: '3J',
                        art: '511.3J',
                        name: 'Стеллаж 3A.10',
                        color: "253D0E",
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
                    // Стеллаж 3K
                    {
                        id: 1010311,
                        code: '3K',
                        art: '511.3K',
                        name: 'Стеллаж 3A.11',
                        color: "253D0E",
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
                    // Стеллаж 3L
                    {
                        id: 1010312,
                        code: '3L',
                        art: '511.3L',
                        name: 'Стеллаж 3A.12',
                        color: "253D0E",
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

            
            // Линия 4
            {
                id: 10104,
                code: '511.4',
                name: 'Линия 511.4',
                color: "bbbbbb",
                x: 3257,            // 1,844 м + 0,500 + 0,913(проход) = 3,257 : координаты левого верхнего угла объекта (от контейнера)
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

                // Стеллажи линии 4
                item: [

                    // Стеллаж 4A
                    {
                        id: 1010401,
                        code: '4A',
                        art: '511.4A',
                        name: 'Стеллаж 4A.01',
                        color: "253D0E",
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
                    // Стеллаж 4B
                    {
                        id: 1010402,
                        code: '4B',
                        art: '511.4B',
                        name: 'Стеллаж 4A.02',
                        color: "253D0E",
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
                    // Стеллаж 4C
                    {
                        id: 1010403,
                        code: '4C',
                        art: '511.4C',
                        name: 'Стеллаж 4A.03',
                        color: "253D0E",
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
                    // Стеллаж 4D
                    {
                        id: 1010404,
                        code: '4D',
                        art: '511.4D',
                        name: 'Стеллаж 4A.04',
                        color: "253D0E",
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
                    // Стеллаж 4E
                    {
                        id: 1010405,
                        code: '4E',
                        art: '511.4E',
                        name: 'Стеллаж 4A.05',
                        color: "253D0E",
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
                    // Стеллаж 4F
                    {
                        id: 1010406,
                        code: '4F',
                        art: '511.4F',
                        name: 'Стеллаж 4A.06',
                        color: "253D0E",
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
                    // Стеллаж 4G
                    {
                        id: 1010407,
                        code: '4G',
                        art: '511.4G',
                        name: 'Стеллаж 4A.07',
                        color: "253D0E",
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
                    // Стеллаж 4H
                    {
                        id: 1010408,
                        code: '4H',
                        art: '511.4H',
                        name: 'Стеллаж 4A.08',
                        color: "253D0E",
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
                    // Стеллаж 4I
                    {
                        id: 1010409,
                        code: '4I',
                        art: '511.4I',
                        name: 'Стеллаж 4A.09',
                        color: "253D0E",
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
                    // Стеллаж 4J
                    {
                        id: 1010410,
                        code: '4J',
                        art: '511.4J',
                        name: 'Стеллаж 4A.10',
                        color: "253D0E",
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
                    // Стеллаж 4K
                    {
                        id: 1010411,
                        code: '4K',
                        art: '511.4K',
                        name: 'Стеллаж 4A.11',
                        color: "253D0E",
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
                    // Стеллаж 4L
                    {
                        id: 1010412,
                        code: '4L',
                        art: '511.4L',
                        name: 'Стеллаж 4A.12',
                        color: "253D0E",
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


            // Линия 5
            {
                id: 10105,
                code: '511.5',
                name: 'Линия 511.5',
                color: "bbbbbb",
                x: 3687,            // 3,257 м + 0,400 + 0,3 = 3,687 : координаты левого верхнего угла объекта (от контейнера)
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

                // Стеллажи линии 5
                item: [

                    // Стеллаж 5A
                    {
                        id: 1010501,
                        code: '5A',
                        art: '511.5A',
                        name: 'Стеллаж 5A.01',
                        color: "253D0E",
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
                    // Стеллаж 5B
                    {
                        id: 1010502,
                        code: '5B',
                        art: '511.5B',
                        name: 'Стеллаж 5A.02',
                        color: "253D0E",
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
                    // Стеллаж 5C
                    {
                        id: 1010503,
                        code: '5C',
                        art: '511.5C',
                        name: 'Стеллаж 5A.03',
                        color: "253D0E",
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
                    // Стеллаж 5D
                    {
                        id: 1010504,
                        code: '5D',
                        art: '511.5D',
                        name: 'Стеллаж 5A.04',
                        color: "253D0E",
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
                    // Стеллаж 5E
                    {
                        id: 1010505,
                        code: '5E',
                        art: '511.5E',
                        name: 'Стеллаж 5A.05',
                        color: "253D0E",
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
                    // Стеллаж 5F
                    {
                        id: 1010506,
                        code: '5F',
                        art: '511.5F',
                        name: 'Стеллаж 5A.06',
                        color: "253D0E",
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
                    // Стеллаж 5G
                    {
                        id: 1010507,
                        code: '5G',
                        art: '511.5G',
                        name: 'Стеллаж 5A.07',
                        color: "253D0E",
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
                    // Стеллаж 5H
                    {
                        id: 1010508,
                        code: '5H',
                        art: '511.5H',
                        name: 'Стеллаж 5A.08',
                        color: "253D0E",
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
                    // Стеллаж 5I
                    {
                        id: 1010509,
                        code: '5I',
                        art: '511.5I',
                        name: 'Стеллаж 5A.09',
                        color: "253D0E",
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
                    // Стеллаж 5J
                    {
                        id: 1010510,
                        code: '5J',
                        art: '511.5J',
                        name: 'Стеллаж 5A.10',
                        color: "253D0E",
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
                    // Стеллаж 5K
                    {
                        id: 1010511,
                        code: '5K',
                        art: '511.5K',
                        name: 'Стеллаж 5A.11',
                        color: "253D0E",
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
                    // Стеллаж 5L
                    {
                        id: 1010512,
                        code: '5L',
                        art: '511.5L',
                        name: 'Стеллаж 5A.12',
                        color: "253D0E",
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

           // Линия 6
           {
                id: 10106,
                code: '511.6',
                name: 'Линия 511.6',
                color: "bbbbbb",
                x: 5100,            // 3,687 м + 0,913(проход) = 5,100 : координаты левого верхнего угла объекта (от контейнера)
                y: 0,
                wx: 13728,           // 13,728 м
                wy: 2970,            // 2,970 м
                wz: 400,             // 0,400 м
                payload: 100000000, //100 тонн
                material_id: null,
                photo_id: null,
                created: null,
                updated: null,
                deleted: null,
    
                // Стеллажи линии 6
                item: [
    
                    // Стеллаж 6M
                    {
                        id: 1010601,
                        code: '6M',
                        art: '511.6M',
                        name: 'Стеллаж 6A.01',
                        color: "253D0E",
                        x: 12728,            // 12,728 м координаты левого верхнего угла объекта
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
                    // Стеллаж 6A
                    {
                        id: 1010601,
                        code: '6A',
                        art: '511.6A',
                        name: 'Стеллаж 6A.01',
                        color: "253D0E",
                        x: 11384,            // 11,384 м координаты левого верхнего угла объекта
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
                    // Стеллаж 6B
                    {
                        id: 1010602,
                        code: '6B',
                        art: '511.6B',
                        name: 'Стеллаж 6A.02',
                        color: "253D0E",
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
                    // Стеллаж 6C
                    {
                        id: 1010603,
                        code: '6C',
                        art: '511.6C',
                        name: 'Стеллаж 6A.03',
                        color: "253D0E",
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
                    // Стеллаж 6D
                    {
                        id: 1010604,
                        code: '6D',
                        art: '511.6D',
                        name: 'Стеллаж 6A.04',
                        color: "253D0E",
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
                    // Стеллаж 6E
                    {
                        id: 1010605,
                        code: '6E',
                        art: '511.6E',
                        name: 'Стеллаж 6A.05',
                        color: "253D0E",
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
                    // Стеллаж 6F
                    {
                        id: 1010606,
                        code: '6F',
                        art: '511.6F',
                        name: 'Стеллаж 6A.06',
                        color: "253D0E",
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
                    // Стеллаж 6G
                    {
                        id: 1010607,
                        code: '6G',
                        art: '511.6G',
                        name: 'Стеллаж 6A.07',
                        color: "253D0E",
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
                    // Стеллаж 6H
                    {
                        id: 1010608,
                        code: '6H',
                        art: '511.6H',
                        name: 'Стеллаж 6A.08',
                        color: "253D0E",
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
                    // Стеллаж 6I
                    {
                        id: 1010609,
                        code: '6I',
                        art: '511.6I',
                        name: 'Стеллаж 6A.09',
                        color: "253D0E",
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
                    // Стеллаж 6J
                    {
                        id: 1010610,
                        code: '6J',
                        art: '511.6J',
                        name: 'Стеллаж 6A.10',
                        color: "253D0E",
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
                    // Стеллаж 6K
                    {
                        id: 1010611,
                        code: '6K',
                        art: '511.6K',
                        name: 'Стеллаж 6A.11',
                        color: "253D0E",
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
                    // Стеллаж 6L
                    {
                        id: 1010612,
                        code: '6L',
                        art: '511.6L',
                        name: 'Стеллаж 6A.12',
                        color: "253D0E",
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
        code: '512',
        name: '2-й уровень (отм. +2.463)',
        color: "97A1AA",
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
                code: '512.1',
                art: '512.1',
                name: 'Линия 512.1',
                color: "bbbbbb",  // ПОМЕНЯТЬ обратно НА 97A1AA
                x: 0,            // 0,000 м координаты левого верхнего угла объекта (от контейнера)
                y: 0,
                wx: 14800,           // 12,030 м
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
                    // Стеллаж 1М
                    {
                        id: 1010101,
                        code: '1M',
                        art: '512.1M',
                        name: 'Стеллаж 1A.401',
                        color: "253D0E",
                        x: 13800,            // 12,030 м координаты левого верхнего угла объекта
                        y: 0,
                        wx: 1000,            // 1,000 м
                        wy: 2970,            // 2,970 м
                        wz: 400,             // 0,500 м
                        payload: 100000000, //100 тонн
                        material_id: null,
                        photo_id: null,
                        created: null,
                        updated: null,
                        deleted: null,
                        // полки стеллажа 1A.401
                        item: [
                                // Полка 1A.401.01
                                {
                                    id: 101010101,
                                    code: '1A.401.01',
                                    name: 'Полка 1A.401.01',
                                    color: "006D8F",
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
                        code: '1N',
                        art: '512.1N',
                        name: 'Стеллаж 1A.402',
                        color: "253D0E",
                        x: 12768,            // 12,030 м координаты левого верхнего угла объекта
                        y: 0,
                        wx: 1000,            // 1,000 м
                        wy: 2970,            // 2,970 м
                        wz: 400,             // 0,500 м
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
                        code: '1A',
                        art: '512.1A',
                        name: 'Стеллаж 1A.403',
                        color: "253D0E",
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
                    // Стеллаж 1A.402
                    {
                        id: 1010104,
                        code: '1B',
                        art: '512.1B',
                        name: 'Стеллаж 1A.404',
                        color: "253D0E",
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
                    // Стеллаж 1A.403
                    {
                        id: 1010105,
                        code: '1C',
                        art: '512.1C',
                        name: 'Стеллаж 1A.405',
                        color: "253D0E",
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
                    // Стеллаж 1A.404
                    {
                        id: 1010106,
                        code: '1D',
                        art: '512.1D',
                        name: 'Стеллаж 1A.406',
                        color: "253D0E",
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
                    // Стеллаж 1A.405
                    {
                        id:  1010107,
                        code: '1E',
                        art: '512.1E',
                        name: 'Стеллаж 1A.407',
                        color: "253D0E",
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
                    // Стеллаж 1A.406
                    {
                        id: 1010108,
                        code: '1F',
                        art: '512.1F',
                        name: 'Стеллаж 1A.408',
                        color: "253D0E",
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
                    // Стеллаж 1A.407
                    {
                        id: 1010109,
                        code: '1G',
                        art: '512.1G',
                        name: 'Стеллаж 1A.409',
                        color: "253D0E",
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
                    // Стеллаж 1A.408
                    {
                        id: 1010110,
                        code: '1H',
                        art: '512.1H',
                        name: 'Стеллаж 1A.410',
                        color: "253D0E",
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
                    // Стеллаж 1A.409
                    {
                        id: 1010111,
                        code: '1I',
                        art: '512.1I',
                        name: 'Стеллаж 1A.411',
                        color: "253D0E",
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
                    // Стеллаж 1A.412
                    {
                        id: 1010112,
                        code: '1J',
                        art: '512.1J',
                        name: 'Стеллаж 1A.412',
                        color: "253D0E",
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
                    // Стеллаж 1A.413
                    {
                        id: 1010113,
                        code: '1K',
                        art: '512.1K',
                        name: 'Стеллаж 1A.413',
                        color: "253D0E",
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
                    // Стеллаж 1A.414
                    {
                        id: 1010114,
                        code: '1L',
                        art: '512.1L',
                        name: 'Стеллаж 1A.414',
                        color: "253D0E",
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
                        deleted: null,
                        // полки стеллажа 1A.414
                        item: [
                            // Полка 1A.414.01
                            {
                                id: 101011401,
                                code: '1A.414.01',
                                name: 'Полка 1A.414.01',
                                color: "006D8F",
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
                code: '512.2',
                art: '512.2',
                name: 'Линия 512.2',
                color: "bbbbbb",
                x: 1414,            // 1,414 м: 0,500 + 0,914 (проход): координаты левого верхнего угла объекта (от контейнера)
                y: 0,
                wx: 12384,           // 12,384 м
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

                    // Стеллаж 2A
                    {
                        id: 1010201,
                        code: '2A',
                        art: '512.2A',
                        name: 'Стеллаж 2A.01',
                        color: "253D0E",
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
                    // Стеллаж 2B
                    {
                        id: 1010202,
                        code: '2B',
                        art: '512.2B',
                        name: 'Стеллаж 2A.02',
                        color: "253D0E",
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
                    // Стеллаж 2A.03
                    {
                        id: 1010203,
                        code: '2C',
                        art: '512.2C',
                        name: 'Стеллаж 2A.03',
                        color: "253D0E",
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
                    // Стеллаж 2A.04
                    {
                        id: 1010204,
                        code: '2D',
                        art: '512.2D',
                        name: 'Стеллаж 2A.04',
                        color: "253D0E",
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
                    // Стеллаж 2A.05
                    {
                        id: 1010205,
                        code: '2E',
                        art: '512.2E',
                        name: 'Стеллаж 2A.05',
                        color: "253D0E",
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
                    // Стеллаж 2A.06
                    {
                        id: 1010206,
                        code: '2F',
                        art: '512.2F',
                        name: 'Стеллаж 2A.06',
                        color: "253D0E",
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
                    // Стеллаж 2A.07
                    {
                        id: 1010207,
                        code: '2G',
                        art: '512.2G',
                        name: 'Стеллаж 2A.07',
                        color: "253D0E",
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
                    // Стеллаж 2A.08
                    {
                        id: 1010208,
                        code: '2H',
                        art: '512.2H',
                        name: 'Стеллаж 2A.08',
                        color: "253D0E",
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
                    // Стеллаж 2A.09
                    {
                        id: 1010209,
                        code: '2I',
                        art: '512.2I',
                        name: 'Стеллаж 2A.09',
                        color: "253D0E",
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
                    // Стеллаж 2A.10
                    {
                        id: 1010210,
                        code: '2J',
                        art: '512.2J',
                        name: 'Стеллаж 2A.10',
                        color: "253D0E",
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
                    // Стеллаж 2A.11
                    {
                        id: 1010211,
                        code: '2K',
                        art: '512.2K',
                        name: 'Стеллаж 2A.11',
                        color: "253D0E",
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
                    // Стеллаж 2A.12
                    {
                        id: 1010212,
                        code: '2L',
                        art: '512.2L',
                        name: 'Стеллаж 2A.12',
                        color: "253D0E",
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

            // Линия 3
            {
                id: 10103,
                code: '512.3',
                art: '512.3',
                name: 'Линия 512.3',
                color: "bbbbbb",
                x: 1844,            // 1,433 м + 0,400 = 1,833 : координаты левого верхнего угла объекта (от контейнера)
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

                // Стеллажи линии 3
                item: [

                    // Стеллаж 3A
                    {
                        id: 1010301,
                        code: '3A',
                        art: '512.3A',
                        name: 'Стеллаж 3A.01',
                        color: "253D0E",
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
                    // Стеллаж 3B
                    {
                        id: 1010302,
                        code: '3B',
                        art: '512.3В',
                        name: 'Стеллаж 3A.02',
                        color: "253D0E",
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
                    // Стеллаж 3C
                    {
                        id: 1010303,
                        code: '3C',
                        art: '512.3C',
                        name: 'Стеллаж 3A.03',
                        color: "253D0E",
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
                    // Стеллаж 3D
                    {
                        id: 1010304,
                        code: '3D',
                        art: '512.3D',
                        name: 'Стеллаж 3A.04',
                        color: "253D0E",
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
                    // Стеллаж 3E
                    {
                        id: 1010305,
                        code: '3E',
                        art: '512.3E',
                        name: 'Стеллаж 3A.05',
                        color: "253D0E",
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
                    // Стеллаж 3F
                    {
                        id: 1010306,
                        code: '3F',
                        art: '512.3F',
                        name: 'Стеллаж 3A.06',
                        color: "253D0E",
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
                    // Стеллаж 3G
                    {
                        id: 1010307,
                        code: '3G',
                        art: '512.3G',
                        name: 'Стеллаж 3A.07',
                        color: "253D0E",
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
                    // Стеллаж 3H
                    {
                        id: 1010308,
                        code: '3H',
                        art: '512.3H',
                        name: 'Стеллаж 3A.08',
                        color: "253D0E",
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
                    // Стеллаж 3I
                    {
                        id: 1010309,
                        code: '3I',
                        art: '512.3I',
                        name: 'Стеллаж 3A.09',
                        color: "253D0E",
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
                    // Стеллаж 3J
                    {
                        id: 1010310,
                        code: '3J',
                        art: '512.3J',
                        name: 'Стеллаж 3A.10',
                        color: "253D0E",
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
                    // Стеллаж 3K
                    {
                        id: 1010311,
                        code: '3K',
                        art: '512.3K',
                        name: 'Стеллаж 3A.11',
                        color: "253D0E",
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
                    // Стеллаж 3L
                    {
                        id: 1010312,
                        code: '3L',
                        art: '512.3L',
                        name: 'Стеллаж 3A.12',
                        color: "253D0E",
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

            
            // Линия 4
            {
                id: 10104,
                code: '512.4',
                name: 'Линия 512.4',
                color: "bbbbbb",
                x: 3257,            // 1,844 м + 0,500 + 0,913(проход) = 3,257 : координаты левого верхнего угла объекта (от контейнера)
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

                // Стеллажи линии 4
                item: [

                    // Стеллаж 4A
                    {
                        id: 1010401,
                        code: '4A',
                        art: '512.4A',
                        name: 'Стеллаж 4A.01',
                        color: "253D0E",
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
                    // Стеллаж 4B
                    {
                        id: 1010402,
                        code: '4B',
                        art: '512.4B',
                        name: 'Стеллаж 4A.02',
                        color: "253D0E",
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
                    // Стеллаж 4C
                    {
                        id: 1010403,
                        code: '4C',
                        art: '512.4C',
                        name: 'Стеллаж 4A.03',
                        color: "253D0E",
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
                    // Стеллаж 4D
                    {
                        id: 1010404,
                        code: '4D',
                        art: '512.4D',
                        name: 'Стеллаж 4A.04',
                        color: "253D0E",
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
                    // Стеллаж 4E
                    {
                        id: 1010405,
                        code: '4E',
                        art: '512.4E',
                        name: 'Стеллаж 4A.05',
                        color: "253D0E",
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
                    // Стеллаж 4F
                    {
                        id: 1010406,
                        code: '4F',
                        art: '512.4F',
                        name: 'Стеллаж 4A.06',
                        color: "253D0E",
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
                    // Стеллаж 4G
                    {
                        id: 1010407,
                        code: '4G',
                        art: '512.4G',
                        name: 'Стеллаж 4A.07',
                        color: "253D0E",
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
                    // Стеллаж 4H
                    {
                        id: 1010408,
                        code: '4H',
                        art: '512.4H',
                        name: 'Стеллаж 4A.08',
                        color: "253D0E",
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
                    // Стеллаж 4I
                    {
                        id: 1010409,
                        code: '4I',
                        art: '512.4I',
                        name: 'Стеллаж 4A.09',
                        color: "253D0E",
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
                    // Стеллаж 4J
                    {
                        id: 1010410,
                        code: '4J',
                        art: '512.4J',
                        name: 'Стеллаж 4A.10',
                        color: "253D0E",
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
                    // Стеллаж 4K
                    {
                        id: 1010411,
                        code: '4K',
                        art: '512.4K',
                        name: 'Стеллаж 4A.11',
                        color: "253D0E",
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
                    // Стеллаж 4L
                    {
                        id: 1010412,
                        code: '4L',
                        art: '512.4L',
                        name: 'Стеллаж 4A.12',
                        color: "253D0E",
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


            // Линия 5
            {
                id: 10105,
                code: '512.5',
                name: 'Линия 512.5',
                color: "bbbbbb",
                x: 3687,            // 3,257 м + 0,400 + 0,3 = 3,687 : координаты левого верхнего угла объекта (от контейнера)
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

                // Стеллажи линии 5
                item: [

                    // Стеллаж 5A
                    {
                        id: 1010501,
                        code: '5A',
                        art: '512.5A',
                        name: 'Стеллаж 5A.01',
                        color: "253D0E",
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
                    // Стеллаж 5B
                    {
                        id: 1010502,
                        code: '5B',
                        art: '512.5B',
                        name: 'Стеллаж 5A.02',
                        color: "253D0E",
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
                    // Стеллаж 5C
                    {
                        id: 1010503,
                        code: '5C',
                        art: '512.5C',
                        name: 'Стеллаж 5A.03',
                        color: "253D0E",
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
                    // Стеллаж 5D
                    {
                        id: 1010504,
                        code: '5D',
                        art: '512.5D',
                        name: 'Стеллаж 5A.04',
                        color: "253D0E",
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
                    // Стеллаж 5E
                    {
                        id: 1010505,
                        code: '5E',
                        art: '512.5E',
                        name: 'Стеллаж 5A.05',
                        color: "253D0E",
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
                    // Стеллаж 5F
                    {
                        id: 1010506,
                        code: '5F',
                        art: '512.5F',
                        name: 'Стеллаж 5A.06',
                        color: "253D0E",
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
                    // Стеллаж 5G
                    {
                        id: 1010507,
                        code: '5G',
                        art: '512.5G',
                        name: 'Стеллаж 5A.07',
                        color: "253D0E",
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
                    // Стеллаж 5H
                    {
                        id: 1010508,
                        code: '5H',
                        art: '512.5H',
                        name: 'Стеллаж 5A.08',
                        color: "253D0E",
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
                    // Стеллаж 5I
                    {
                        id: 1010509,
                        code: '5I',
                        art: '512.5I',
                        name: 'Стеллаж 5A.09',
                        color: "253D0E",
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
                    // Стеллаж 5J
                    {
                        id: 1010510,
                        code: '5J',
                        art: '512.5J',
                        name: 'Стеллаж 5A.10',
                        color: "253D0E",
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
                    // Стеллаж 5K
                    {
                        id: 1010511,
                        code: '5K',
                        art: '512.5K',
                        name: 'Стеллаж 5A.11',
                        color: "253D0E",
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
                    // Стеллаж 5L
                    {
                        id: 1010512,
                        code: '5L',
                        art: '512.5L',
                        name: 'Стеллаж 5A.12',
                        color: "253D0E",
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

           // Линия 6
           {
                id: 10106,
                code: '512.6',
                name: 'Линия 512.6',
                color: "bbbbbb",
                x: 5100,            // 3,687 м + 0,913(проход) = 5,100 : координаты левого верхнего угла объекта (от контейнера)
                y: 0,
                wx: 13728,           // 13,728 м
                wy: 2970,            // 2,970 м
                wz: 400,             // 0,400 м
                payload: 100000000, //100 тонн
                material_id: null,
                photo_id: null,
                created: null,
                updated: null,
                deleted: null,
    
                // Стеллажи линии 6
                item: [
    
                    // Стеллаж 6M
                    {
                        id: 1010601,
                        code: '6M',
                        art: '512.6M',
                        name: 'Стеллаж 6A.01',
                        color: "253D0E",
                        x: 12728,            // 12,728 м координаты левого верхнего угла объекта
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
                    // Стеллаж 6A
                    {
                        id: 1010601,
                        code: '6A',
                        art: '512.6A',
                        name: 'Стеллаж 6A.01',
                        color: "253D0E",
                        x: 11384,            // 11,384 м координаты левого верхнего угла объекта
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
                    // Стеллаж 6B
                    {
                        id: 1010602,
                        code: '6B',
                        art: '512.6B',
                        name: 'Стеллаж 6A.02',
                        color: "253D0E",
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
                    // Стеллаж 6C
                    {
                        id: 1010603,
                        code: '6C',
                        art: '512.6C',
                        name: 'Стеллаж 6A.03',
                        color: "253D0E",
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
                    // Стеллаж 6D
                    {
                        id: 1010604,
                        code: '6D',
                        art: '512.6D',
                        name: 'Стеллаж 6A.04',
                        color: "253D0E",
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
                    // Стеллаж 6E
                    {
                        id: 1010605,
                        code: '6E',
                        art: '512.6E',
                        name: 'Стеллаж 6A.05',
                        color: "253D0E",
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
                    // Стеллаж 6F
                    {
                        id: 1010606,
                        code: '6F',
                        art: '512.6F',
                        name: 'Стеллаж 6A.06',
                        color: "253D0E",
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
                    // Стеллаж 6G
                    {
                        id: 1010607,
                        code: '6G',
                        art: '512.6G',
                        name: 'Стеллаж 6A.07',
                        color: "253D0E",
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
                    // Стеллаж 6H
                    {
                        id: 1010608,
                        code: '6H',
                        art: '512.6H',
                        name: 'Стеллаж 6A.08',
                        color: "253D0E",
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
                    // Стеллаж 6I
                    {
                        id: 1010609,
                        code: '6I',
                        art: '512.6I',
                        name: 'Стеллаж 6A.09',
                        color: "253D0E",
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
                    // Стеллаж 6J
                    {
                        id: 1010610,
                        code: '6J',
                        art: '512.6J',
                        name: 'Стеллаж 6A.10',
                        color: "253D0E",
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
                    // Стеллаж 6K
                    {
                        id: 1010611,
                        code: '6K',
                        art: '512.6K',
                        name: 'Стеллаж 6A.11',
                        color: "253D0E",
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
                    // Стеллаж 6L
                    {
                        id: 1010612,
                        code: '6L',
                        art: '512.6L',
                        name: 'Стеллаж 6A.12',
                        color: "253D0E",
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
    },   

    // 3 этаж склада
    {
        id: 103,
        canvas: canvas,
        code: 'F3',
        name: '3-й уровень (отм. +4.763)',
        color: "036F88",
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
