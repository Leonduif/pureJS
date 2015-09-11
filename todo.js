var todo = (function(todo){

	// Helper function that adds all items to the list
	function addItems(itemDescription) {
		var items = [];

		for (var i = 0; i < itemDescription.length; i++) {
			var item = new TodoItem(itemDescription[i]);
			items.push(item);
		}

		return items;
	}

	// Create todo item
	function TodoItem(item) {
		this.itemEl      = item;
		this.checkboxEl  = this.itemEl.getElementsByClassName("todo__checkbox")[0];
		this.description = item.innerText;
	}

	// Methods for the item
	Object.defineProperties(TodoItem.prototype, {
		done: {
			get: function() {
				return this.checkboxEl.checked;
			},
			set: function(value) {
				this.checkboxEl.checked = value;
			}
		}
	});

	// Add a new list
	function AddList(containerElement, items) {
		this.element = containerElement;
		this.items   = addItems(items);
	}

	// List methods
	Object.defineProperties(AddList.prototype, {
		addItem: {
			value: function(itemDescription) {
				if (itemDescription) {
					var item = createElement(itemDescription);

					this.element.appendChild(item);

					var newItem = new TodoItem(item);
					this.items.push(newItem);
				}
				else {
					throw new Error("No description given to new item, please provide one");
				}
			}
		},
		removeItem: {
			value: function(itemIndex) {
				var itemCount = this.items.length - 1;

				if (itemIndex > itemCount || itemIndex < 0) {
					throw new Error("Incorrect index given");
				}

				var item = this.items[itemIndex].itemEl;
				this.element.removeChild(item);
				this.items.splice(itemIndex, 1);
			}
		}
	});

	// Create DOM element
	function createElement(itemDescription) {
		var item = document.createElement("LI");
		item.classList.add("todo__item");

		var label = document.createElement("LABEL");
		item.appendChild(label);

		var input = document.createElement("INPUT");
		input.classList.add("todo__checkbox");
		input.setAttribute("type", "checkbox");
		label.appendChild(input);

		var span = document.createElement("SPAN");
		span.innerHTML += itemDescription;
		span.classList.add("todo__description");
		label.appendChild(span);

		return item;
	}

	// Initialize create list
	todo.createList = function(containerElement) {
		var element = document.getElementById(containerElement);
		var items   = element.querySelectorAll(".todo__item");

		return new AddList(element, items);
	};

	return todo;
}(todo || {}));

var list1 = todo.createList("todo");