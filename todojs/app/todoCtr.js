define(['app/todoModel'], function (todos) {

    function viewList(table) {
        var list  = todos.getList();
        for(var todo in list) {
            var row = table.insertRow(table.rows.length);
            console.log(todo, list[todo]);
            insertRow(row, todo, list[todo]);
        }
    }

    function insertRow (row, task, completion)  {
        insertCell(row, 0, task);
        insertCell(row, 1, completion);
        insertDelButton(row);
        row.className = completion ? 'completed' : '';
    }

    function insertCell(row, colNum, text) {
        var newCell = row.insertCell(colNum);

        if (typeof text === "string")
        {
            newCell.appendChild(document.createTextNode(text));
        } else if (typeof text === "boolean") {
            var checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.name = "completion";
            checkbox.checked = text;
            newCell.appendChild(checkbox);

            checkbox.addEventListener("change", function (event) {
                console.log(row.cells[0].innerText, event.target.checked);
                row.className = event.target.checked ? 'completed' : '';
                todos.saveNew(row.cells[0].innerText, event.target.checked);
            });

        }
    }

    function insertDelButton (row) {
        var newCell = row.insertCell(row.cells.length);
        var button = document.createElement('button');
        button.innerText = "del";
        newCell.appendChild(button);
        button.addEventListener("click", function () {
            todos.remove(row.cells[0].innerText);
            row.remove();
        });
    }

    return {
        loadList: todos.loadList,
        viewList: viewList,
        insertRow: insertRow,
        saveNew: todos.saveNew
    };

});
