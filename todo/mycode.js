var list1 = todo.createList("todo");

var buttonEl      = document.getElementById("todo-add");
var descriptionEl = document.getElementById("todo-text");
var messageEl     = document.getElementById("todo-message");

buttonEl.addEventListener("click", function(){
	if (descriptionEl.value === "") {
		messageEl.innerText = "Please add a description";
		return;
	}

	list1.addItem(descriptionEl.value);
	descriptionEl.value = null;
	messageEl.innerText = null;
});

buttonEl.setAttribute("disabled", "disabled");

descriptionEl.addEventListener("keyup", function(){
	if (descriptionEl.value.length > 0) {
		buttonEl.removeAttribute("disabled");
		return;
	}
	buttonEl.setAttribute("disabled", "disabled");
});