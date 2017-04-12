// declaring module and TodoList controller
angular.module('todoApp', [])
  .controller('TodoListController', function() {
    var todoList = this;

    // sets up initial items on todo list
    todoList.todos = [
      {text:'learn AngularJS', done:true},
      {text:'build Angular app', done:false},
      {text:'profit', done:false}
    ];

    // function that executes when you add an item
    todoList.addTodo = function() {
      todoList.todos.push({text:todoList.todoText, done:false});
      todoList.todoText = '';
    };

    // setting up the counter
    todoList.remaining = function() {
      var count = 0;
      angular.forEach(todoList.todos, function(todo) {
        count += todo.done ? 0 : 1;
      });
      return count;
    };

    // function that executes to remove items
    todoList.archive = function() {
      var oldTodos = todoList.todos;
      todoList.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) todoList.todos.push(todo);
      });
    };
  });
