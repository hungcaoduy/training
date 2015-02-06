define(['app/todoCtr'], function (todoCtr) {

    var form = document.querySelector("#taskForm");
    var table = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    var text = document.querySelector("#newTask");
    var output = document.querySelector("#length");

    todoCtr.loadList();
    todoCtr.viewList(table);

    form.addEventListener("submit", function (event) {
        var task = form.elements.value.value;
        todoCtr.saveNew(task, false);
        console.log(task, " added.");
        var newRow = table.insertRow(table.rows.length);

        todoCtr.insertRow(newRow, task, false);
        event.preventDefault();
    });

    text.addEventListener("input", function (event) {
        output.textContent = 256 - text.value.length;
    });


});
