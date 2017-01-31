
// a function that takes and arr loads it into the catelog

function MakeItem (arr){
    this.itemName = arr[0];
    this.category = arr[1];
    this.store = arr[2];
    this.onTheList = arr[3] || false;
    this.notes = arr[4] || 'none';
    this.bought = false;
}

/*
var catalogue1 = [
    ['apples', 'produce','Fruit_Market'],
    ['oranges', 'produce', 'Fruit_Market'],
    ['tomatoes', 'produce', 'Fruit_Market'],
    ['milk', 'fresh', 'Coles'],
    ['cheese', 'fresh', 'Aldi'],
    ['chicken_legs', 'fresh', 'Aldi'],
    ['rye_bread', 'fresh', 'Coles'],
    ['dish_soap', 'fresh', 'Aldi'],
    ['tissues', 'fresh', 'Aldi'],
    ['face_wash', 'fresh', 'Aldi'],
    ['coffee', 'fresh', 'Coles'],
    ['tea', 'fresh', 'Aldi'],
    ['soft_drink', 'fresh', 'Coles']
];
*/