
// a function that takes and arr loads it into the catelog

var myArr = ['milk', 'fresh', 'Coles' ];

function MakeItem (arr){
    this.itemName = arr[0];
    this.category = arr[1];
    this.store = arr[2];
    this.notes = arr[3] || 'none';
}