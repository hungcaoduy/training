define([], function () {
    var todos = {};
    return {
        getList: function () {
            return todos;
        },
        loadList: function () {
            todos = JSON.parse(localStorage.getItem("todos"));
            return todos;
        },
        saveList: function () {
            localStorage.setItem("todos", JSON.stringify(todos));
        },
        addNew: function (task) {
            todos[task] = false;
        },
        saveNew: function (task, complete) {
            todos[task] = complete;
            localStorage.setItem("todos", JSON.stringify(todos));
        },
        printList: function () {
            for (var todo in todos) {
                console.log(todo," is complete? ", todos[todo]);
            }
        },
        remove: function (task) {
            delete todos[task];
            console.log(task, 'deleted');
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    };
});
