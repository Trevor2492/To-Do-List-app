function newItem(){
//1. Adding a new item to the list of items:
  let li = $('<li></li>') //assigns a new list item to the variable "li"
  let inputValue = $('#input').val(); //assigns the user input from the "input" form to the variable inputvalue
  li.append(inputValue); //puts the user input into the new list item

  //makes sure the userInput isn't empty; if it's not, it puts the new list item with the user input into the list
  let list = $('#list');
  if (inputValue === '') {
    alert('You must write something');
  } else {
    list.append(li);
  }

//2. Crossing out an item from the list of items:
  li.on('click', function(){
    li.toggleClass('strike'); //this toggles the "strike" class when you click an item in the list
  });

//3.1 Adding the delete button "X":
  let deleteButton = $('<deleteButton>x</deleteButton>'); //creates the "x" button
  li.append(deleteButton); //adds the "x" button to the list item

//3.2 Adding CLASS DELETE (DISPLAY: NONE) from the css:
  //adds the "delete" class when the "x" is clicked
  deleteButton.on('click', function(){
    li.addClass('delete');
  });

//4. Reordering the items:
  list.sortable();
}
