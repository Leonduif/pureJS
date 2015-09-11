# pureJS
Experimenting with pure javascript.

Using todo.js you can create a list like this: var list = todo.createList(elementId); (for example: todo.createList("myTodoList");)
Then you can add items using list.addItem("Buy groceries");
Remove items using: list.removeItem(itemIndex); (for example: list.removeItem(0)) 

Check if it's checked or not by using list.items[0].enabled, or you can set it by doing list.items[0].enabled = true;
