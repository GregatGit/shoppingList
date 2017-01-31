
var shoppingList = {
    shops: ['Aldi', 'Coles', 'Fruit_Market', 'other' ],
    catalogueItems: [],
    items: [],
    listLoaded: false,
    loadCatalogueItems: function() {
        catalogue1.forEach(function(item){
            var newItem = new MakeItem(item);
            shoppingList.catalogueItems.push(newItem);
        });
    },
    toggleCatalogueItemsOnTheListProperty: function (place){
        this.catalogueItems[place].onTheList = !this.catalogueItems[place].onTheList;
    },
    loadList: function(list){
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
    },
    boxIsChecked(obj){
         var id = obj.parentElement.id;
         shoppingList.toggleCatalogueItemsOnTheListProperty(id);
    },
    loadIntoItems: function() {
        console.log('hi');
        view.displayItems2();
    }
};

var view = {
    // display all items in the catalogue
    displayItemChoices: function (){
        shoppingList.loadCatalogueItems();
        var listOfItemToChooseFrom = document.querySelector('#listToChooseFrom');
        listOfItemToChooseFrom.innerHTML = '';
        shoppingList.catalogueItems.forEach(function (item, position){
            let itemLi = document.createElement('li');
            itemLi.textContent = item.itemName;
            itemLi.id = position;
            var checked = item.onTheList;
            itemLi.appendChild(this.addTickBox(checked));
            listOfItemToChooseFrom.appendChild(itemLi);
        }, this);
        var loadButton = document.createElement('button');
        loadButton.innerText = "Click here when done";
        loadButton.setAttribute('onclick', 'handlers.loadIntoItems()');
        listOfItemToChooseFrom.appendChild(loadButton);
    
    },
    displayItems2: function () {
        var myList = document.querySelector('.myList');
        myList.innerHTML = '';
        shoppingList.shops.forEach(function(shop){
            var listHeader = document.createElement('h2');
            listHeader.textContent = shop.replace(/_/g, ' ');
            myList.appendChild(listHeader);
            var shopUl = document.createElement('ul');
            shopUl.id = shop;
            myList.appendChild(shopUl);
        });
        this.setUpEventListeners();
         shoppingList.catalogueItems.forEach(function(item, position){
            if (item.onTheList){
                var itemLi = document.createElement('li');
                itemLi.id = position;
                itemLi.textContent = item.itemName.replace(/_/g, ' ');
                itemLi.appendChild(this.addTickBox());
                var listUl = document.querySelector('#' + item.store);
                listUl.appendChild(itemLi);
            }
        }, this);
    },
    addTickBox : function (checked) {
        var tickBox = document.createElement("INPUT");
        tickBox.setAttribute('type', 'checkbox');
        if (checked){
            tickBox.setAttribute('checked', 'true');
        }
        tickBox.setAttribute('onchange', 'handlers.boxIsChecked(this)');
        return tickBox;
    },
    setUpEventListeners: function() {
        var storeId = document.querySelector('.myList');
        storeId.addEventListener('click', function(event){
            var target = event.target;
            if(target.tagName === 'H2'){
                var myList = document.querySelector('.myList');
                myList.innerHTML = '';
                var listHeader = document.createElement('h3');
                listHeader.textContent = target.innerHTML;
                myList.appendChild(listHeader);
                var shopUl = document.createElement('ul');
                var myTargetName = target.innerHTML.replace(/ /g, '_');
                shopUl.id = myTargetName;
                myList.appendChild(shopUl);
                shoppingList.catalogueItems.forEach(function(item, position){
                    if (item.store === myTargetName && item.onTheList){
                        var itemLi = document.createElement('li');
                        itemLi.id = position;
                        itemLi.textContent = item.itemName.replace(/_/g, ' ');
                        itemLi.appendChild(view.addTickBox());
                        var listUl = document.querySelector('#' + item.store);
                        listUl.appendChild(itemLi);
                    }
                });
            }         
        });
    }
};
view.displayItemChoices();
/* 
    addItemManual: function (itemName, price){
        this.items.push({
            itemName: itemName,
            price: price,
            buy: true,
            category: ''
        });
        this.showList();
    },

show the shopping list built
    displayItems: function() {
        var myList = document.querySelector('.myList');
        myList.innerHTML = '';
        shoppingList.shops.forEach(function(shop){
            var listHeader = document.createElement('h2');
            listHeader.textContent = shop.replace(/_/g, ' ');
            myList.appendChild(listHeader);
            var shopUl = document.createElement('ul');
            shopUl.id = shop;
            myList.appendChild(shopUl);
        });
        this.setUpEventListeners();
        shoppingList.items.forEach(function(item, position){
            var itemLi = document.createElement('li');
            itemLi.id = position;
            itemLi.textContent = item.itemName.replace(/_/g, ' ');
            itemLi.appendChild(this.addTickBox());
            var listUl = document.querySelector('#' + item.store);
            listUl.appendChild(itemLi);
        }, this);
        
    },
*/