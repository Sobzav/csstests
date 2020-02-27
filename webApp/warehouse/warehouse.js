// контейнер элементов склада для выпадающих списков
var warehouse = [

    // 1 этаж склада
    {
        id: 0,
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
                wx: 12384,           // 12,384 м
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

                    // Стеллаж 1A
                    {
                        id: 4,
                        code: '1A',
                        art: '511.1A',
                        name: 'Стеллаж 1A.403',
                        color: "253D0E",
                        x: 11384,            // 11,384 м координаты правого верхнего угла объекта
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
                        id: 4,
                        code: '1B',
                        art: '511.1B',
                        name: 'Стеллаж 1A.404',
                        color: "253D0E",
                        x: 10352,              // 10,352 м координаты правого верхнего угла объекта
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
                        id: 4,
                        code: '1C',
                        art: '511.1C',
                        name: 'Стеллаж 1A.405',
                        color: "253D0E",
                        x: 9320,              // 9,320 м координаты правого верхнего угла объекта
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
                        id: 4,
                        code: '1D',
                        art: '511.1D',
                        name: 'Стеллаж 1A.406',
                        color: "253D0E",
                        x: 8288,              // 8,288 м координаты правого верхнего угла объекта
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
                        id: 4,
                        code: '1E',
                        art: '511.1E',
                        name: 'Стеллаж 1A.407',
                        color: "253D0E",
                        x: 7256,              // 7,256 м координаты правого верхнего угла объекта
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
                        id: 4,
                        code: '1F',
                        art: '511.1F',
                        name: 'Стеллаж 1A.408',
                        color: "253D0E",
                        x: 6224,              // 6,224 м координаты правого верхнего угла объекта
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
                        id: 4,
                        code: '1G',
                        art: '511.1G',
                        name: 'Стеллаж 1A.409',
                        color: "253D0E",
                        x: 5192,              // 5,192 м координаты правого верхнего угла объекта
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
                        id: 4,
                        code: '1H',
                        art: '511.1H',
                        name: 'Стеллаж 1A.410',
                        color: "253D0E",
                        x: 4160,              // 4,160 м координаты правого верхнего угла объекта
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
                        id: 4,
                        code: '1J',
                        art: '511.1I',
                        name: 'Стеллаж 1A.411',
                        color: "253D0E",
                        x: 3128,              // 3,128 м координаты правого верхнего угла объекта
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
                        id: 4,
                        code: '1K',
                        art: '511.1K',
                        name: 'Стеллаж 1A.412',
                        color: "253D0E",
                        x: 2096,              // 2,096 м координаты правого верхнего угла объекта
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
                        id: 4,
                        code: '1L',
                        art: '511.1L',
                        name: 'Стеллаж 1A.413',
                        color: "253D0E",
                        x: 1064,              // 1,000 м координаты правого верхнего угла объекта
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
                    // Стеллаж 1M
                    {
                        id: 4,
                        code: '1M',
                        art: '511.1M',
                        name: 'Стеллаж 1A.414',
                        color: "253D0E",
                        x: 0032,              // 1,000 м координаты правого верхнего угла объекта
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
                        // полки стеллажа 1A.414
                        // item: [
                        //     // Полка 1A.414.01
                        //     {
                        //         id: 101011401,
                        //         code: '1A.414.01',
                        //         name: 'Полка 1A.414.01',
                        //         color: "006D8F",
                        //         x: 0,            // 12,030 м координаты левого верхнего угла объекта
                        //         y: 0,
                        //         wx: 1000,            // 1,000 м
                        //         wy: 200,            // 2,970 м
                        //         wz: 400,             // 0,500 м
                        //         payload: 100000000, //100 тонн
                        //         material_id: null,
                        //         photo_id: null,
                        //         created: null,
                        //         updated: null,
                        //         deleted: null
                        //     },
                        //     // Полка 1A.414.02
                        //     {
                        //         id: 101011402,
                        //         code: '1A.414.02',
                        //         name: 'Полка 1A.414.02',
                        //         color: "006D8F",
                        //         x: 0,            // 12,030 м координаты левого верхнего угла объекта
                        //         y: 200,
                        //         wx: 1000,            // 1,000 м
                        //         wy: 200,            // 2,970 м
                        //         wz: 400,             // 0,500 м
                        //         payload: 100000000, //100 тонн
                        //         material_id: null,
                        //         photo_id: null,
                        //         created: null,
                        //         updated: null,
                        //         deleted: null
                        //     }
                        // ]
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
                        id: 74,
                        code: '2A',
                        art: '511.2A',
                        name: 'Стеллаж 2A.01',
                        color: "253D0E",
                        x: 11384,            // 12,030 м координаты правого верхнего угла объекта
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
                        id: 74,
                        code: '2B',
                        art: '511.2B',
                        name: 'Стеллаж 2A.02',
                        color: "253D0E",
                        x: 10352,              // 1,000 м координаты правого верхнего угла объекта
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
                        id: 74,
                        code: '2C',
                        art: '511.2C',
                        name: 'Стеллаж 2A.03',
                        color: "253D0E",
                        x: 9320,              // 1,000 м координаты правого верхнего угла объекта
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
                        id: 74,
                        code: '2D',
                        art: '511.2D',
                        name: 'Стеллаж 2A.04',
                        color: "253D0E",
                        x: 8288,              // 1,000 м координаты правого верхнего угла объекта
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
                        id: 74,
                        code: '2E',
                        art: '511.2E',
                        name: 'Стеллаж 2A.05',
                        color: "253D0E",
                        x: 7256,              // 1,000 м координаты правого верхнего угла объекта
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
                        id: 74,
                        code: '2F',
                        art: '511.2F',
                        name: 'Стеллаж 2A.06',
                        color: "253D0E",
                        x: 6224,              // 1,000 м координаты правого верхнего угла объекта
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
                        id: 74,
                        code: '2G',
                        art: '511.2G',
                        name: 'Стеллаж 2A.07',
                        color: "253D0E",
                        x: 5192,              // 1,000 м координаты правого верхнего угла объекта
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
                        id: 74,
                        code: '2H',
                        art: '511.2H',
                        name: 'Стеллаж 2A.08',
                        color: "253D0E",
                        x: 4160,              // 1,000 м координаты правого верхнего угла объекта
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
                        id: 74,
                        code: '2J',
                        art: '511.2J',
                        name: 'Стеллаж 2A.09',
                        color: "253D0E",
                        x: 3128,              // 1,000 м координаты правого верхнего угла объекта
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
                        id: 74,
                        code: '2K',
                        art: '511.2K',
                        name: 'Стеллаж 2A.10',
                        color: "253D0E",
                        x: 2096,              // 1,000 м координаты правого верхнего угла объекта
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
                    // Стеллаж 2L
                    {
                        id: 74,
                        code: '2L',
                        art: '511.2L',
                        name: 'Стеллаж 2A.11',
                        color: "253D0E",
                        x: 1064,              // 1,000 м координаты правого верхнего угла объекта
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
                    // Стеллаж 2M
                    {
                        id: 74,
                        code: '2M',
                        art: '511.2M',
                        name: 'Стеллаж 2A.12',
                        color: "253D0E",
                        x: 0032,              // 1,000 м координаты правого верхнего угла объекта
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
                        id: 4,
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
                        id: 4,
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
                        id: 4,
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
                        id: 4,
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
                        id: 4,
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
                        id: 4,
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
                        id: 4,
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
                        id: 4,
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
                    // Стеллаж 3J
                    {
                        id: 4,
                        code: '3J',
                        art: '511.3J',
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
                    // Стеллаж 3K
                    {
                        id: 4,
                        code: '3K',
                        art: '511.3K',
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
                    // Стеллаж 3L
                    {
                        id: 4,
                        code: '3L',
                        art: '511.3L',
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
                    // Стеллаж 3M
                    {
                        id: 4,
                        code: '3M',
                        art: '511.3M',
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
                        id: 74,
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
                        id: 74,
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
                        id: 74,
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
                        id: 74,
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
                        id: 74,
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
                        id: 74,
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
                        id: 74,
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
                        id: 74,
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
                    // Стеллаж 4J
                    {
                        id: 74,
                        code: '4J',
                        art: '511.4J',
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
                    // Стеллаж 4K
                    {
                        id: 74,
                        code: '4K',
                        art: '511.4K',
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
                    // Стеллаж 4L
                    {
                        id: 74,
                        code: '4L',
                        art: '511.4L',
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
                    // Стеллаж 4M
                    {
                        id: 74,
                        code: '4M',
                        art: '511.4M',
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
                        id: 4,
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
                        id: 4,
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
                        id: 4,
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
                        id: 4,
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
                        id: 4,
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
                        id: 4,
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
                        id: 4,
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
                        id: 4,
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
                    // Стеллаж 5J
                    {
                        id: 4,
                        code: '5J',
                        art: '511.5J',
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
                    // Стеллаж 5K
                    {
                        id: 4,
                        code: '5K',
                        art: '511.5K',
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
                    // Стеллаж 5L
                    {
                        id: 4,
                        code: '5L',
                        art: '511.5L',
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
                    // Стеллаж 5M
                    {
                        id: 4,
                        code: '5M',
                        art: '511.5M',
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
                wx: 12384,           // 12,384 м
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

                    // Стеллаж 6A
                    {
                        id: 74,
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
                        id: 74,
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
                        id: 74,
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
                        id: 74,
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
                        id: 74,
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
                        id: 74,
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
                        id: 74,
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
                        id: 74,
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
                    // Стеллаж 6J
                    {
                        id: 74,
                        code: '6J',
                        art: '511.6J',
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
                    // Стеллаж 6K
                    {
                        id: 74,
                        code: '6K',
                        art: '511.6K',
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
                    // Стеллаж 6L
                    {
                        id: 74,
                        code: '6L',
                        art: '511.6L',
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
                    // Стеллаж 6M
                    {
                        id: 74,
                        code: '6M',
                        art: '511.6M',
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
            },    // \\ Линия 6
            // Линия 7
            {
                id: 10101,
                code: '511.7',
                art: '511.7',
                name: 'Линия 511.7',
                color: "bbbbbb",  // ПОМЕНЯТЬ обратно НА 97A1AA
                x: 0,            // 0,000 м координаты левого верхнего угла объекта (от контейнера)
                y: 12768,
                wx: 2032,           // 2,032 м без учета стоек справа и слева
                wy: 2970,            // 2,970 м
                wz: 400,             // 0,500 м
                payload: 100000000, //100 тонн
                material_id: null,
                photo_id: null,
                created: null,
                updated: null,
                deleted: null,

                        // Стеллажи линии 7
                        item: [
                         // Стеллаж 1A
                    {
                        id: 74,
                        code: '7A',
                        art: '511.7A',
                        name: 'Стеллаж 1A.401',
                        color: "253D0E",
                        x: 1032,            // 1,064 м координаты левого верхнего угла объекта
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
                        // полки стеллажа 1A.401
                    },
                    // Стеллаж 1B
                    {
                        id: 74,
                        code: '7B',
                        art: '511.7B',
                        name: 'Стеллаж 1A.402',
                        color: "253D0E",
                        x: 0,            // 00,000 м координаты левого верхнего угла объекта
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
                    },  // стеллаж
                ]  // стеллажи линии 7
            }, //  Линия 7
            // Линия 8
            {
                id: 10101,
                code: '511.8',
                art: '511.8',
                name: 'Линия 511.8',
                color: "bbbbbb",  // ПОМЕНЯТЬ обратно НА 97A1AA
                x: 5100,            // 0,000 м координаты левого верхнего угла объекта (от контейнера)
                y: 12696,
                wx: 1000,           // 12,384 м
                wy: 2970,            // 2,970 м
                wz: 400,             // 0,400 м
                payload: 100000000, //100 тонн
                material_id: null,
                photo_id: null,
                created: null,
                updated: null,
                deleted: null,
                // Стеллажи линии 8
                item: [
                    // Стеллаж 8A
                    {
                        id: 74,
                        code: '8A',
                        art: '511.8N',
                        name: 'Стеллаж 1A.401',
                        color: "253D0E",
                        x: 0,            // 0 м координаты левого верхнего угла объекта
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
                        // полки стеллажа 1A.401
                    },  // стеллаж
                ]  // стеллажи линии 8
            } //  Линия 8
        ] //  конец всех линий
    },   // \\--1 этаж склада

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
                        x: 0,            // 0,000 м координаты правого верхнего угла объекта (от контейнера)
                        y: 0,
                        wx: 12384,           // 12,384 м
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
                            // Стеллаж 1A
                            {
                                id: 4,
                                code: '1A',
                                art: '512.1A',
                                name: 'Стеллаж 1A.405',
                                color: "253D0E",
                                x: 11384,              // 11,384 м координаты правого верхнего угла объекта
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
                                id: 4,
                                code: '1B',
                                art: '512.1B',
                                name: 'Стеллаж 1A.406',
                                color: "253D0E",
                                x: 10352,              // 10,352 м координаты левого верхнего угла объекта
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
                                id: 4,
                                code: '1C',
                                art: '512.1C',
                                name: 'Стеллаж 1A.407',
                                color: "253D0E",
                                x: 9320,              // 9,320 м координаты левого верхнего угла объекта
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
                                id: 4,
                                code: '1D',
                                art: '512.1D',
                                name: 'Стеллаж 1A.408',
                                color: "253D0E",
                                x: 8288,              // 8,288 м координаты левого верхнего угла объекта
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
                                id: 4,
                                code: '1E',
                                art: '512.1E',
                                name: 'Стеллаж 1A.409',
                                color: "253D0E",
                                x: 7256,              // 7,256 м координаты левого верхнего угла объекта
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
                                id: 4,
                                code: '1F',
                                art: '512.1F',
                                name: 'Стеллаж 1A.410',
                                color: "253D0E",
                                x: 6224,              // 6,224 м координаты левого верхнего угла объекта
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
                                id: 4,
                                code: '1G',
                                art: '512.1G',
                                name: 'Стеллаж 1A.411',
                                color: "253D0E",
                                x: 5192,              // 5,192 м координаты левого верхнего угла объекта
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
                                id: 4,
                                code: '1H',
                                art: '512.1H',
                                name: 'Стеллаж 1A.412',
                                color: "253D0E",
                                x: 4160,              // 4,160 м координаты левого верхнего угла объекта
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
                                id: 4,
                                code: '1J',
                                art: '512.1J',
                                name: 'Стеллаж 1A.413',
                                color: "253D0E",
                                x: 3128,              // 3,128 м координаты левого верхнего угла объекта
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
                                id: 4,
                                code: '1K',
                                art: '512.1K',
                                name: 'Стеллаж 1A.414',
                                color: "253D0E",
                                x: 2096,              // 2,096 м координаты левого верхнего угла объекта
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
                            },
                            // Стеллаж 1L
                            {
                                id: 4,
                                code: '1L',
                                art: '512.1L',
                                name: 'Стеллаж 1A.413',
                                color: "253D0E",
                                x: 1064,              // 1,064 м координаты левого верхнего угла объекта
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
                            // Стеллаж 1M
                            {
                                id: 4,
                                code: '1M',
                                art: '512.1M',
                                name: 'Стеллаж 1A.414',
                                color: "253D0E",
                                x: 0032,              // 0,032 м координаты левого верхнего угла объекта
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
                                // item: [
                                //     // Полка 1A.414.01
                                //     {
                                //         id: 101011401,
                                //         code: '1A.414.01',
                                //         name: 'Полка 1A.414.01',
                                //         color: "006D8F",
                                //         x: 0,            // 12,030 м координаты левого верхнего угла объекта
                                //         y: 0,
                                //         wx: 1000,            // 1,000 м
                                //         wy: 200,            // 2,970 м
                                //         wz: 400,             // 0,500 м
                                //         payload: 100000000, //100 тонн
                                //         material_id: null,
                                //         photo_id: null,
                                //         created: null,
                                //         updated: null,
                                //         deleted: null
                                //     },
                                //     // Полка 1A.414.02
                                //     {
                                //         id: 101011402,
                                //         code: '1A.414.02',
                                //         name: 'Полка 1A.414.02',
                                //         color: "006D8F",
                                //         x: 0,            // 12,030 м координаты левого верхнего угла объекта
                                //         y: 200,
                                //         wx: 1000,            // 1,000 м
                                //         wy: 200,            // 2,970 м
                                //         wz: 400,             // 0,500 м
                                //         payload: 100000000, //100 тонн
                                //         material_id: null,
                                //         photo_id: null,
                                //         created: null,
                                //         updated: null,
                                //         deleted: null
                                //     }
                                // ]
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
                                id: 74,
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
                                id: 74,
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
                            // Стеллаж 2C
                            {
                                id: 74,
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
                            // Стеллаж 2D
                            {
                                id: 74,
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
                            // Стеллаж 2E
                            {
                                id: 74,
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
                            // Стеллаж 2F
                            {
                                id: 74,
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
                            // Стеллаж 2G
                            {
                                id: 74,
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
                            // Стеллаж 2H
                            {
                                id: 74,
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
                            // Стеллаж 2J
                            {
                                id: 74,
                                code: '2J',
                                art: '512.2J',
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
                            // Стеллаж 2K
                            {
                                id: 74,
                                code: '2K',
                                art: '512.2K',
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
                            // Стеллаж 2L
                            {
                                id: 74,
                                code: '2L',
                                art: '512.2L',
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
                            // Стеллаж 2M
                            {
                                id: 74,
                                code: '2M',
                                art: '512.2M',
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
                                id: 4,
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
                                id: 4,
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
                                id: 4,
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
                                id: 4,
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
                                id: 4,
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
                                id: 4,
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
                                id: 4,
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
                                id: 4,
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
                            // Стеллаж 3J
                            {
                                id: 4,
                                code: '3J',
                                art: '512.3J',
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
                            // Стеллаж 3K
                            {
                                id: 4,
                                code: '3K',
                                art: '512.3K',
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
                            // Стеллаж 3L
                            {
                                id: 4,
                                code: '3L',
                                art: '512.3L',
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
                            // Стеллаж 3M
                            {
                                id: 4,
                                code: '3M',
                                art: '512.3M',
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
                                id: 74,
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
                                id: 74,
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
                                id: 74,
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
                                id: 74,
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
                                id: 74,
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
                                id: 74,
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
                                id: 74,
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
                                id: 74,
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
                            // Стеллаж 4J
                            {
                                id: 74,
                                code: '4J',
                                art: '512.4J',
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
                            // Стеллаж 4K
                            {
                                id: 74,
                                code: '4K',
                                art: '512.4K',
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
                            // Стеллаж 4L
                            {
                                id: 74,
                                code: '4L',
                                art: '512.4L',
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
                            // Стеллаж 4M
                            {
                                id: 74,
                                code: '4M',
                                art: '512.4M',
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
                                id: 4,
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
                                id: 4,
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
                                id: 4,
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
                                id: 4,
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
                                id: 4,
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
                                id: 4,
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
                                id: 4,
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
                                id: 4,
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
                            // Стеллаж 5J
                            {
                                id: 4,
                                code: '5J',
                                art: '512.5J',
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
                            // Стеллаж 5K
                            {
                                id: 4,
                                code: '5K',
                                art: '512.5K',
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
                            // Стеллаж 5L
                            {
                                id: 4,
                                code: '5L',
                                art: '512.5L',
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
                            // Стеллаж 5M
                            {
                                id: 4,
                                code: '5M',
                                art: '512.5M',
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
                        wx: 12384,           // 13,731 м
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

                            // Стеллаж 6A
                            {
                                id: 74,
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
                                id: 74,
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
                                id: 74,
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
                                id: 74,
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
                                id: 74,
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
                                id: 74,
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
                                id: 74,
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
                                id: 74,
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
                            // Стеллаж 6J
                            {
                                id: 74,
                                code: '6J',
                                art: '512.6J',
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
                            // Стеллаж 6K
                            {
                                id: 74,
                                code: '6K',
                                art: '512.6K',
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
                            // Стеллаж 6L
                            {
                                id: 74,
                                code: '6L',
                                art: '512.6L',
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
                            // Стеллаж 6M
                            {
                                id: 74,
                                code: '6M',
                                art: '512.6M',
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
                        ]  // все стеллажи последней линии
                    },  // 6 линия
                         // Линия 7
                        {
                            id: 10101,
                            code: '512.7',
                            art: '512.7',
                            name: 'Линия 512.7',
                            color: "bbbbbb",  // ПОМЕНЯТЬ обратно НА 97A1AA
                            x: 0,            // 0,000 м координаты правого верхнего угла объекта (от контейнера)
                            y: 12871,
                            wx: 4596,           // 4,596 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,500 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null,
                            // Стеллажи линии 7
                            item: [
                                // Стеллаж 7A
                                {
                                    id: 74,
                                    code: '7A',
                                    art: '512.7A',
                                    name: 'Стеллаж 1A.401',
                                    color: "253D0E",
                                    x: 3596,           // 3,596 м координаты правого верхнего угла объекта
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
                                },
                                // Стеллаж 7B
                                {
                                    id: 74,
                                    code: '7B',
                                    art: '512.7B',
                                    name: 'Стеллаж 1A.402',
                                    color: "253D0E",
                                    x: 2314,            // 2,314 м координаты левого верхнего угла объекта
                                    y: 0,
                                    wx: 1250,            // 1,000 м
                                    wy: 2970,            // 2,970 м
                                    wz: 400,             // 0,500 м
                                    payload: 100000000, //100 тонн
                                    material_id: null,
                                    photo_id: null,
                                    created: null,
                                    updated: null,
                                    deleted: null
                                },
                                // Стеллаж 7C
                                {
                                    id: 74,
                                    code: '7C',
                                    art: '512.7C',
                                    name: 'Стеллаж 1A.403',
                                    color: "253D0E",
                                    x: 1282,            // 1,282 м координаты правого верхнего угла объекта
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
                                // Стеллаж 7D
                                {
                                    id: 74,
                                    code: '7D',
                                    art: '512.7D',
                                    name: 'Стеллаж 1A.404',
                                    color: "253D0E",
                                    x: 0,              // 00,000 м координаты правого верхнего угла объекта
                                    y: 0,
                                    wx: 1250,            // 1,000 м
                                    wy: 2970,            // 2,970 м
                                    wz: 400,             // 0,500 м
                                    payload: 100000000, //100 тонн
                                    material_id: null,
                                    photo_id: null,
                                    created: null,
                                    updated: null,
                                    deleted: null
                                },
                            ]
                        },
                        // Линия 8
                        {
                            id: 10101,
                            code: '511.8',
                            art: '511.8',
                            name: 'Линия 511.8',
                            color: "bbbbbb",  // ПОМЕНЯТЬ обратно НА 97A1AA
                            x: 5100,            // 0,000 м координаты левого верхнего угла объекта (от контейнера)
                            y: 12696,
                            wx: 1000,           // 12,384 м
                            wy: 2970,            // 2,970 м
                            wz: 400,             // 0,400 м
                            payload: 100000000, //100 тонн
                            material_id: null,
                            photo_id: null,
                            created: null,
                            updated: null,
                            deleted: null,
                            // Стеллажи линии 8
                            item: [
                                // Стеллаж 8A
                                {
                                    id: 74,
                                    code: '8A',
                                    art: '511.8A',
                                    name: 'Стеллаж 1A.401',
                                    color: "253D0E",
                                    x: 0,            // 0 м координаты левого верхнего угла объекта
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
                                    // полки стеллажа 1A.401
                                },  // стеллаж
                            ]  // стеллажи линии 8
                        } //  Линия 8 // последняя линия 2 этажа
                ] // все линии 2 этажа
            },  // 2 этаж

            // 3 этаж склада
            {
                id: 103,
                code: '513',
                name: '3-й уровень (отм. +4.763)',
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
                        code: '513.1',
                        art: '513.1',
                        name: 'Линия 513.1',
                        color: "bbbbbb",  // ПОМЕНЯТЬ обратно НА 97A1AA
                        x: 0,            // 0,000 м координаты правого верхнего угла объекта (от контейнера)
                        y: 0,
                        wx: 12384,           // 17,454 м
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
                            // Стеллаж 1A
                            {
                                id: 1010105,
                                code: '1A',
                                art: '513.1A',
                                name: 'Стеллаж 1A.405',
                                color: "253D0E",
                                x: 11384,              // 11,384 м координаты правого верхнего угла объекта
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
                                id: 1010106,
                                code: '1B',
                                art: '513.1B',
                                name: 'Стеллаж 1A.406',
                                color: "253D0E",
                                x: 10352,              // 10,352 м координаты левого верхнего угла объекта
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
                                id: 1010107,
                                code: '1C',
                                art: '513.1C',
                                name: 'Стеллаж 1A.407',
                                color: "253D0E",
                                x: 9320,              // 9,320 м координаты левого верхнего угла объекта
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
                                id: 1010108,
                                code: '1D',
                                art: '513.1D',
                                name: 'Стеллаж 1A.408',
                                color: "253D0E",
                                x: 8288,              // 8,288 м координаты левого верхнего угла объекта
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
                                id: 1010109,
                                code: '1E',
                                art: '513.1E',
                                name: 'Стеллаж 1A.409',
                                color: "253D0E",
                                x: 7256,              // 7,256 м координаты левого верхнего угла объекта
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
                                id: 1010110,
                                code: '1F',
                                art: '513.1F',
                                name: 'Стеллаж 1A.410',
                                color: "253D0E",
                                x: 6224,              // 6,224 м координаты левого верхнего угла объекта
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
                                id: 1010111,
                                code: '1G',
                                art: '513.1G',
                                name: 'Стеллаж 1A.411',
                                color: "253D0E",
                                x: 5192,              // 5,192 м координаты левого верхнего угла объекта
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
                                id: 1010112,
                                code: '1H',
                                art: '513.1H',
                                name: 'Стеллаж 1A.412',
                                color: "253D0E",
                                x: 4160,              // 4,160 м координаты левого верхнего угла объекта
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
                                id: 1010113,
                                code: '1J',
                                art: '513.1J',
                                name: 'Стеллаж 1A.413',
                                color: "253D0E",
                                x: 3128,              // 3,128 м координаты левого верхнего угла объекта
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
                                id: 1010114,
                                code: '1K',
                                art: '513.1K',
                                name: 'Стеллаж 1A.414',
                                color: "253D0E",
                                x: 2096,              // 2,096 м координаты левого верхнего угла объекта
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
                            },
                            // Стеллаж 1L
                            {
                                id: 1010113,
                                code: '1L',
                                art: '513.1L',
                                name: 'Стеллаж 1A.413',
                                color: "253D0E",
                                x: 1064,              // 1,064 м координаты левого верхнего угла объекта
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
                            // Стеллаж 1M
                            {
                                id: 1010114,
                                code: '1M',
                                art: '513.1M',
                                name: 'Стеллаж 1A.414',
                                color: "253D0E",
                                x: 0032,              // 0,032 м координаты левого верхнего угла объекта
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
                                // item: [
                                //     // Полка 1A.414.01
                                //     {
                                //         id: 101011401,
                                //         code: '1A.414.01',
                                //         name: 'Полка 1A.414.01',
                                //         color: "006D8F",
                                //         x: 0,            // 12,030 м координаты левого верхнего угла объекта
                                //         y: 0,
                                //         wx: 1000,            // 1,000 м
                                //         wy: 200,            // 2,970 м
                                //         wz: 400,             // 0,500 м
                                //         payload: 100000000, //100 тонн
                                //         material_id: null,
                                //         photo_id: null,
                                //         created: null,
                                //         updated: null,
                                //         deleted: null
                                //     },
                                //     // Полка 1A.414.02
                                //     {
                                //         id: 101011402,
                                //         code: '1A.414.02',
                                //         name: 'Полка 1A.414.02',
                                //         color: "006D8F",
                                //         x: 0,            // 12,030 м координаты левого верхнего угла объекта
                                //         y: 200,
                                //         wx: 1000,            // 1,000 м
                                //         wy: 200,            // 2,970 м
                                //         wz: 400,             // 0,500 м
                                //         payload: 100000000, //100 тонн
                                //         material_id: null,
                                //         photo_id: null,
                                //         created: null,
                                //         updated: null,
                                //         deleted: null
                                //     }
                                // ]
                            },
                        ]
                    },

                    // Линия 2
                    {
                        id: 10102,
                        code: '513.2',
                        art: '513.2',
                        name: 'Линия 513.2',
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
                                art: '513.2A',
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
                                art: '513.2B',
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
                            // Стеллаж 2C
                            {
                                id: 1010203,
                                code: '2C',
                                art: '513.2C',
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
                            // Стеллаж 2D
                            {
                                id: 1010204,
                                code: '2D',
                                art: '513.2D',
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
                            // Стеллаж 2E
                            {
                                id: 1010205,
                                code: '2E',
                                art: '513.2E',
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
                            // Стеллаж 2F
                            {
                                id: 1010206,
                                code: '2F',
                                art: '513.2F',
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
                            // Стеллаж 2G
                            {
                                id: 1010207,
                                code: '2G',
                                art: '513.2G',
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
                            // Стеллаж 2H
                            {
                                id: 1010208,
                                code: '2H',
                                art: '513.2H',
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
                            // Стеллаж 2J
                            {
                                id: 1010209,
                                code: '2J',
                                art: '513.2J',
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
                            // Стеллаж 2K
                            {
                                id: 1010210,
                                code: '2K',
                                art: '513.2K',
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
                            // Стеллаж 2L
                            {
                                id: 1010211,
                                code: '2L',
                                art: '513.2L',
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
                            // Стеллаж 2M
                            {
                                id: 1010212,
                                code: '2M',
                                art: '513.2M',
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
                        code: '513.3',
                        art: '513.3',
                        name: 'Линия 513.3',
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
                                art: '513.3A',
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
                                art: '513.3В',
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
                                art: '513.3C',
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
                                art: '513.3D',
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
                                art: '513.3E',
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
                                art: '513.3F',
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
                                art: '513.3G',
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
                                art: '513.3H',
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
                            // Стеллаж 3J
                            {
                                id: 1010309,
                                code: '3J',
                                art: '513.3J',
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
                            // Стеллаж 3K
                            {
                                id: 1010310,
                                code: '3K',
                                art: '513.3K',
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
                            // Стеллаж 3L
                            {
                                id: 1010311,
                                code: '3L',
                                art: '513.3L',
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
                            // Стеллаж 3M
                            {
                                id: 1010312,
                                code: '3M',
                                art: '513.3M',
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
                        code: '513.4',
                        name: 'Линия 513.4',
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
                                art: '513.4A',
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
                                art: '513.4B',
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
                                art: '513.4C',
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
                                art: '513.4D',
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
                                art: '513.4E',
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
                                art: '513.4F',
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
                                art: '513.4G',
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
                                art: '513.4H',
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
                            // Стеллаж 4J
                            {
                                id: 1010409,
                                code: '4J',
                                art: '513.4J',
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
                            // Стеллаж 4K
                            {
                                id: 1010410,
                                code: '4K',
                                art: '513.4K',
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
                            // Стеллаж 4L
                            {
                                id: 1010411,
                                code: '4L',
                                art: '513.4L',
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
                            // Стеллаж 4M
                            {
                                id: 1010412,
                                code: '4M',
                                art: '513.4M',
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
                        code: '513.5',
                        name: 'Линия 513.5',
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
                                art: '513.5A',
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
                                art: '513.5B',
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
                                art: '513.5C',
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
                                art: '513.5D',
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
                                art: '513.5E',
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
                                art: '513.5F',
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
                                art: '513.5G',
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
                                art: '513.5H',
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
                            // Стеллаж 5J
                            {
                                id: 1010509,
                                code: '5J',
                                art: '513.5J',
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
                            // Стеллаж 5K
                            {
                                id: 1010510,
                                code: '5K',
                                art: '513.5K',
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
                            // Стеллаж 5L
                            {
                                id: 1010511,
                                code: '5L',
                                art: '513.5L',
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
                            // Стеллаж 5M
                            {
                                id: 1010512,
                                code: '5M',
                                art: '513.5M',
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
                        code: '513.6',
                        name: 'Линия 513.6',
                        color: "bbbbbb",
                        x: 5100,            // 3,687 м + 0,913(проход) = 5,100 : координаты левого верхнего угла объекта (от контейнера)
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

                        // Стеллажи линии 6
                        item: [

                            // Стеллаж 6A
                            {
                                id: 1010601,
                                code: '6A',
                                art: '513.6A',
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
                                art: '513.6B',
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
                                art: '513.6C',
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
                                art: '513.6D',
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
                                art: '513.6E',
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
                                art: '513.6F',
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
                                art: '513.6G',
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
                                art: '513.6H',
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
                            // Стеллаж 6J
                            {
                                id: 1010609,
                                code: '6J',
                                art: '513.6J',
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
                            // Стеллаж 6K
                            {
                                id: 1010610,
                                code: '6K',
                                art: '513.6K',
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
                            // Стеллаж 6L
                            {
                                id: 1010611,
                                code: '6L',
                                art: '513.6L',
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
                            // Стеллаж 6M
                            {
                                id: 1010612,
                                code: '6M',
                                art: '513.6M',
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
                    },
                    // Линия 7
                    {
                        id: 10101,
                        code: '513.7',
                        art: '513.7',
                        name: 'Линия 513.7',
                        color: "bbbbbb",  // ПОМЕНЯТЬ обратно НА 97A1AA
                        x: 0,            // 0,000 м координаты правого верхнего угла объекта (от контейнера)
                        y: 12858,
                        wx: 4596,           // 17,454 м
                        wy: 2970,            // 2,970 м
                        wz: 400,             // 0,500 м
                        payload: 100000000, //100 тонн
                        material_id: null,
                        photo_id: null,
                        created: null,
                        updated: null,
                        deleted: null,
                        // Стеллажи линии 7
                        item: [
                            // Стеллаж 7A
                            {
                                id: 1010101,
                                code: '7A',
                                art: '513.7A',
                                name: 'Стеллаж 1A.401',
                                color: "253D0E",
                                x: 3596,           // 3,596 м координаты правого верхнего угла объекта
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
                            },
                            // Стеллаж 7B
                            {
                                id: 1010102,
                                code: '7B',
                                art: '513.7B',
                                name: 'Стеллаж 1A.402',
                                color: "253D0E",
                                x: 2314,            // 2,314 м координаты левого верхнего угла объекта
                                y: 0,
                                wx: 1250,            // 1,000 м
                                wy: 2970,            // 2,970 м
                                wz: 400,             // 0,500 м
                                payload: 100000000, //100 тонн
                                material_id: null,
                                photo_id: null,
                                created: null,
                                updated: null,
                                deleted: null
                            },
                            // Стеллаж 7C
                            {
                                id: 1010103,
                                code: '7C',
                                art: '513.7C',
                                name: 'Стеллаж 1A.403',
                                color: "253D0E",
                                x: 1282,            // 1,282 м координаты правого верхнего угла объекта
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
                            // Стеллаж 7D
                            {
                                id: 1010104,
                                code: '7D',
                                art: '513.7D',
                                name: 'Стеллаж 1A.404',
                                color: "253D0E",
                                x: 0,              // 00,000 м координаты правого верхнего угла объекта
                                y: 0,
                                wx: 1250,            // 1,000 м
                                wy: 2970,            // 2,970 м
                                wz: 400,             // 0,500 м
                                payload: 100000000, //100 тонн
                                material_id: null,
                                photo_id: null,
                                created: null,
                                updated: null,
                                deleted: null
                            },
                        ]
                    },
                    
                    // линия 8
                    {
                        id: 10101,
                        code: '513.8',
                        art: '513.8',
                        name: 'Линия 513.8',
                        color: "bbbbbb",  // ПОМЕНЯТЬ обратно НА 97A1AA
                        x: 5100,            // 0,000 м координаты левого верхнего угла объекта (от контейнера)
                        y: 12648,
                        wx: 1000,           // 12,384 м
                        wy: 2970,            // 2,970 м
                        wz: 400,             // 0,400 м
                        payload: 100000000, //100 тонн
                        material_id: null,
                        photo_id: null,
                        created: null,
                        updated: null,
                        deleted: null,
                        // Стеллажи линии 8
                        item: [
                            // Стеллаж 8A
                            {
                                id: 4,
                                code: '8A',
                                art: '513.8A',
                                name: 'Стеллаж 1A.401',
                                color: "253D0E",
                                x: 0,            // 0 м координаты левого верхнего угла объекта
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
                                // полки стеллажа 1A.401
                            },  // стеллаж
                        ]  // стеллажи линии 8
                    } //  Линия 8
                ]
            }
        ];