//console.log(catalogue);

/* a function that takes and arr loads it into the catelog
 catalogue structure will have to change
*/

var catalogue1 = [
    ['apples', 'produce','Fruit_Market'],
    ['oranges', 'produce', 'Fruit_Market']
];

var catalogue = {
    produce: {
        items: [
            {
                itemName: 'apples',
                price: 3.99,
                buy: true,
                category: 'produce',
                store: 'Fruit_Market'
            },
            {
                itemName: 'oranges',
                price: 2.99,
                buy: true,
                category: 'produce',
                store: 'Fruit_Market'
            },
            {
                itemName: 'tomatoes',
                price: 1.99,
                buy: true,
                category: 'produce',
                store: 'Fruit_Market'
            }
        ],
    },
    fresh: {
        items: [
            {
                itemName: 'milk',
                price: 2.79,
                buy: true,
                category: 'fresh',
                store: 'Coles'
            },
            {
                itemName: 'cheese',
                price: 6.99,
                buy: true,
                category: 'fresh',
                store: 'Aldi'
            },
            {
                itemName: 'chicken_legs',
                price: 2.99,
                buy: true,
                category: 'fresh',
                store: 'Aldi'
            },
            {
                itemName: 'rye_bread',
                price: 3.99,
                buy: true,
                category: 'fresh',
                store: 'Coles'
            }
        ]
    },
    cleaning: {
        items: [
            {
                itemName: 'dish_soap',
                price: 2.12,
                buy: true,
                category: 'cleaning',
                store: 'Aldi'
            },
            {
                itemName: 'face_wash',
                price: 2.99,
                buy: true,
                category: 'cleaning',
                store: 'Aldi'
            },
            {
                itemName: 'tissues',
                price: 1.89,
                buy: true,
                category: 'cleaning',
                store: 'Aldi'
            }
        ]
    },
    beverages: {
        items: [
            {
                itemName: 'coffee',
                price: 12,
                buy: true,
                category: 'beverages',
                store: 'Coles'
            },
            {
                itemName: 'tea',
                price: 1.90,
                buy: true,
                category: 'beverages',
                store: 'Aldi'
            },
            {
                itemName: 'soft_drink',
                price: 1.2,
                buy: true,
                category: 'beverages',
                store: 'Coles'
            }
        ]
    }
};
/*
            {
                itemName: '',
                price: ,
                buy: true,
                category: '',
                store: ''
            }
*/