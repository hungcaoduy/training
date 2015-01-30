define(['app/todoModel'], function (todos) {

    var form = document.querySelector("#taskForm");
    var table = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    var text = document.querySelector("#newTask");
    var output = document.querySelector("#length");
    var checkbox = document.querySelector(".taskStatus");
    var colors = document.getElementsByName("color");
    console.log(table);
    function loadList() {
        todos.forEach(function (task) {
            insertRow(task);
        });
    }

    function insertRow (task)  {
        var newRow = table.insertRow(table.rows.length);
        var newCell = newRow.insertCell(0);
        var newText = document.createTextNode(task);
        newCell.appendChild(newText);
    }

    form.addEventListener("submit", function (e) {
        todos.addNew(form.elements.value.value);
        console.log(form.elements.value.value);
        console.log(todos);
        loadList();
        e.preventDefault();
    });

    text.addEventListener("input", function (event) {
        output.textContent = 256 - text.value.length;
    });
});
