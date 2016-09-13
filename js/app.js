console.log("ready!");

myList = []

var numberItemsDiv = document.getElementById('numberItems')
var listItemsDiv = document.getElementById('listItems')

function addItem() {

  var newItem = document.getElementById('itemName').value;

  if (newItem !== '') {
    myList.push(newItem);
  }

  listItems();

};

function listItems() {
  if (myList.length === 0) {
    
    numberItemsDiv.innerHTML = myList.length.toString() + " items in the list";
    listItemsDiv.innerHTML = "There are no items to show!";
  
  } else {
  
    numberItemsDiv.innerHTML = myList.length.toString() + " items in the list";
    listItemsDiv.innerHTML = '';
  
    for( var i = 0; i < myList.length; i++) {
      childDiv = document.createElement('div');
      childDiv.innerHTML = "Item " + (i+1).toString() + " of " + myList.length.toString() + " is " + myList[i];
      listItemsDiv.appendChild(childDiv);
    }
  
  }  
};