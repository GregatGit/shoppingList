
var shoppingList = {
    items: [],
    addItem: function (itemName, price){
        this.items.push({
            itemName: itemName,
            price: price,
            buy: true
        });
        this.showList();
    },
    removeItem: function (index){
        this.items.splice(index, 1);
        this.showList();
    }
    ,
    showList: function (){
        var toShow = [];
        var total = 0;
        this.items.forEach(function (item) {
            if (item.buy){
                toShow.push(item.itemName);
                total += item.price;
            }
        });
        console.log(toShow, 'total: ', total);
    }
};

var handler = {

};

var view = {

};