
// a function that takes and arr loads it into the catelog

function MakeItem (arr){
    this.itemName = arr[0];
    this.category = arr[1];
    this.store = arr[2];
    this.notes = arr[3] || 'none';
    this.code = getInitals(arr);
}

function getInitals(arr){
  var result = [];
  arr.forEach(function(str, position){
    str = str.split('');
    result.push(str[0]);
    if (position === 0){
      result.push(str[1]);
      result.push(str[2]);
    }
  });
  return result.join('');
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