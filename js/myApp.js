
var shoppingList = {
    items: [],
    addItemManual: function (itemName, price){
        this.items.push({
            itemName: itemName,
            price: price,
            buy: true,
            category: []
        });
        this.showList();
    },
    loadList: function(list){
        console.log('list ',list);
        var categorys = Object.keys(catalogue);
        //debugger;
        categorys.forEach(function(category){
            catalogue[category].items.forEach(function(item){
                shoppingList.items.push(item);
            });
        });
        this.showList();
    },
    removeItem: function (index){
        this.items.splice(index, 1);
        this.showList();
    },
    changePrice: function (index, newPrice){
        this.items[index].price = newPrice;
        this.showList();
    },
    showList: function (){
        var toShow = [];
        var total = 0;
        this.items.forEach(function (item) {
            if (item.buy){
                toShow.push(item.itemName);
                total += item.price;
                total = Math.round(total * 100) / 100; // make sure rounds properly
            }
        });
        console.log(toShow, 'total: ', total);
        view.displayItems();
    }
};

var handlers = {
    loadList: function(){
        console.log('catalogue ', catalogue);
        //var categorys = Object.keys(catalogue);
        //console.log(categorys);
        shoppingList.loadList(catalogue);

    } 
};

var view = {
    displayItems: function() {
        var itemsUl = document.querySelector('#list');
        itemsUl.innerHTML = '';
        shoppingList.items.forEach(function(item, position){
            var itemLi = document.createElement('li');
            itemLi.id = position;
            itemLi.textContent = item.itemName;
            itemsUl.appendChild(itemLi);
        });
    }
};

