define([], function () {
    var todos;
    return {
        getList: function () {
            todos = JSON.parse(localStorage.getItem("todos"));
            return todos;
        },
        saveList: function () {
            localStorage.setItem("todos", JSON.stringify(todos));
        },
        addNew: function (task) {
            todos.push(task);
        }
    };
});
