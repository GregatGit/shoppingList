
var shoppingList = {
    shops: ['Aldi', 'Coles', 'Fruit_Market', 'other' ],
    catalogueItems: [],
    listLoaded: false,
    loadCatalogueItems: function() {
        // make sure catalogueItems is empty
        this.catalogueItems.length = 0;
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
        view.displayItemChoices();
    },
    addNewItem: function(arr){
        catalogue1.push(arr);
        this.loadCatalogueItems();
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
    },
    addNewItem: function() {
        var name = document.getElementById('newItemName');
        var category = document.getElementById("categoryType");
        var store = document.getElementById("storeName");
        shoppingList.addNewItem([name.value, category.value, store.value, true]);
        name.value = '';
        view.displayItemChoices();
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
    // this is to display the shopping list build by user
    displayItems2: function () {
        var myList = document.querySelector('.myList');
        myList.innerHTML = '';
        // first the different shops
        shoppingList.shops.forEach(function(shop){
            var listHeader = document.createElement('h2');
            listHeader.textContent = shop.replace(/_/g, ' ');
            myList.appendChild(listHeader);
            var shopUl = document.createElement('ul');
            shopUl.id = shop;
            myList.appendChild(shopUl);
        });
        this.setUpEventListeners();
        // the individual items to go under the different categories
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
