var toDoList = $('.toDoList');

toDoList.on("click", "a", function() {
  $(this).parent().remove();
});

var addItem = function() {
  $('input:text:visible:first').focus();
  var userInput = $('#userInput');
  var userText = userInput.val();
  var newItem = $('<li>');
  newItem.html('<span class="arrow">&#8597;</span>' + userText + '<a>&times;<span class="delete">delete item</span></a>');
  toDoList.append(newItem);
  userInput.val('');
};


//found on JQuery website along with the #sortable CSS
$(function() {
  $("#sortable").sortable();
  $("#sortable").disableSelection();
});

$(document).ready(function() {
  var button = $('#button');
  $('#button').on('click', addItem)
  $('input:text:visible:first').focus();
});
