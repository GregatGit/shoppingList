
var shoppingList = {
    shops: ['Aldi', 'Coles', 'Fruit_Market', 'other' ],
    items: [],
    listLoaded: false,
    loadList: function(list){
        console.log('list ',list);

        if (!this.listLoaded){
            var categorys = Object.keys(catalogue);
            categorys.forEach(function(category){
                catalogue[category].items.forEach(function(item){
                shoppingList.items.push(item);
                });
            });
            this.listLoaded = true;
        }
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
        var myList = document.querySelector('.myList');
        myList.innerHTML = '';
        shoppingList.shops.forEach(function(shop){
            var shopUl = document.createElement('ul');
            shopUl.id = shop;
            shopUl.textContent = shop.replace(/_/g, ' ');
            myList.appendChild(shopUl);
        });

        shoppingList.items.forEach(function(item, position){
            var itemLi = document.createElement('li');
            itemLi.id = position;
            itemLi.textContent = item.itemName.replace(/_/g, ' ');
            itemLi.appendChild(this.addTickBox());
            var listUl = document.querySelector('#' + item.store);
            listUl.appendChild(itemLi);
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
