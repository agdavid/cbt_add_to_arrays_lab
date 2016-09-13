console.log("ready!");

myList = []

function addItem() {
  var numberItemsDiv = document.getElementById('numberItems')
  var listItemsDiv = document.getElementById('listItems')

  var newItem = document.getElementById('itemName').value;

  if (newItem !== '') {
    myList.push(newItem);
  }

  if (myList.length === 0) {
    numberItemsDiv.innerHTML = myList.length.toString() + " items in the list";
    listItemsDiv.innerHTML = "There are no items to show!";
  } else {
    numberItemsDiv.innerHTML = myList.length.toString() + " items in the list";
    listItems();
  }
};

function listItems() {
};