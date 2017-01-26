
var shoppingList = {
    shops: ['Aldi', 'Coles', 'Fruit_Market', 'other' ],
    items: [],
    loadList: function(list){
        console.log('list ',list);
        var categorys = Object.keys(catalogue);
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
        var total = 0;
        this.items.forEach(function (item) {
            if (item.buy){
                total += item.price;
                total = Math.round(total * 100) / 100; // make sure rounds properly
            }
        });
        view.displayItems();
    }
};

var handlers = {
    loadList: function(){
        console.log('catalogue ', catalogue);
        shoppingList.loadList(catalogue);

    } 
};

var view = {
    displayItems: function() {
        var itemsUl = document.querySelector('#list');
        itemsUl.innerHTML = '';

        var myList = document.querySelector('.myList');
        shoppingList.shops.forEach(function(shop){
            var shopUl = document.createElement('ul');
            //debugger;
            shopUl.id = shop;
            shopUl.textContent = shop;
            myList.appendChild(shopUl);
        });

        shoppingList.items.forEach(function(item, position){
            var itemLi = document.createElement('li');
            itemLi.id = position;
            itemLi.textContent = item.itemName;
            itemLi.appendChild(this.addTickBox());
            itemsUl.appendChild(itemLi);
            debugger;
            var selector = '#' + item.store;
            var temp = document.querySelector(selector);
            temp.appendChild(itemLi);
        }, this);
    },
    addTickBox : function () {
        var tickBox = document.createElement("INPUT");
        tickBox.setAttribute('type', 'checkbox');
        return tickBox;
    }
};


/* 
    addItemManual: function (itemName, price){
        this.items.push({
            itemName: itemName,
            price: price,
            buy: true,
            category: []
        });
        this.showList();
    },
*/
