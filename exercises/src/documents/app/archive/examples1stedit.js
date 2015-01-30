function startWidth(string, pattern) {
    return string.slice(0, pattern.length) == pattern;
}

function addToSet(set, values) {
    for (var i = 0; i < values.length; i++)
        set[values[i]] = true;
}

function removeFromSet(set, values) {
    for (var i = 0; i < values.length; i++)
        delete set[values[i]];
}

function sum(numbers) {
    var total = 0;
    forEach(numbers, function(number) {
        total += number;
    });
    return total;
}

function forEach(array, action) {
    for (var i = 0; i < array.length; i++) {
        action.call(window,array[i]);
    }
}

/*modifying functions*/
function negate(func) {
    return function() {
        return !func.apply(null,arguments);
    };
}

function reduce(combineAction, base, array) {
    forEach(array, function (element) {
        base = combineAction(base, element);
    });
    return base;
}

function sum2(numbers) {
    function add(a, b) {
        return a + b;
    }
    return reduce(add, 0, numbers);
}

function countZeroes(numbers) {
    function counter(total, element) {
        return total + (element === 0 ? 1 : 0);
    }
    return reduce(counter,0,numbers);
}

function count(value,numbers) {
    function counter(total, element) {
        return total + (element === value ? 1 : 0);
    }
    return reduce(counter,0,numbers);
}

function map(func, array) {
    var results = [];
    forEach(array, function(element) {
        results.push(func(element));
    });
    return results;
}
// ---------------------------------------------------
/*Other Functional Tricks*/

//Operator functions
var op = {
    "+": function(a,b) { return a + b; },
    "-": function(a,b) { return a - b; },
    "!": function(a,b) { return !a; },
    "==": function(a,b) { return a == b;},
    /*and so on, So, we can write reduce(op["+"], 0, [1, 2, 3, 4, 5]) to sum an array*/
};

function partial(func) {
    var knownArgs = arguments;
    return function () {
        var realArgs = [];
        for (var i = 1; i < knownArgs.length; i++) {
            realArgs.push(knownArgs[i]);
        }
        for (var j = 0; j < arguments.length; j++) {
            realArgs.push(arguments[j]);
        }
        return func.apply(null, realArgs);
    };
    /*partial(op["+"], 5);*/
}

function compose(f1, f2) {
    return function() {
        return f1(f2.apply(null, arguments));
    };
}

/*process paragraph*/
function processParagraph(paragraph) {
    var header = 0;
    while (paragraph.charAt(header) === "%") header++;
    if (header > 0)
        return {type: "h" + header, content: paragraph.slice(header + 1)};
    else
        return {type: "p", content: paragraph};
}

function splitParagraph(text) {
    function split1(pos) {
        if (pos === text.length) {
            return [];
        }
        else if (text.charAt(pos) === "*") {
            var end = findClosing("*", pos + 1),
            frag = {type: "emphasized", content: text.slice(pos + 1, end)};
            return [frag].concat(split1(end + 1));
        }
        else if (text.charAt(pos) === "{") {
            var end = findClosing("}", pos + 1),
            frag = {type: "footnote", content: text.slice(pos + 1, end)}
            return [frag].concat(split1(end + 1));
        }
        else {
            var end = findOpeningOrEnd(pos),
            frag = {type: "normal", content: text.slice(pos, end)};
            return [frag].concat(split1(end));
        }
    }

    function findClosing(character, from) {
        var end = text.indexOf(character, from);
        if (end == -1) throw new Error("Missing closing '" + character + "'");
        else return end;
    }

    function findOpeningOrEnd(from) {
        function indexOrEnd(character) {
            var index = text.indexOf(character, from);
            return index == -1 ? text.length : index;
        }
        return Math.min(indexOrEnd("*"), indexOrEnd("{"));
    }

    return split1(0);
}

/*Dictionary*/
function forEachIn(object, action) {
    for (var property in object) {
        if (Object.prototype.hasOwnProperty.call(object, property))
            action(property, object[property]);
    }
}
function Dictionary(startValues) {
    this.values = startValues || {};
}
Dictionary.prototype.store = function(name, value) {
    this.values[name] = value;
};
Dictionary.prototype.lookup = function(name) {
    return this.values[name];
};
Dictionary.prototype.contains = function(name) {
    return Object.prototype.propertyIsEnumerable.call(this.values, name);
};
Dictionary.prototype.each = function(action) {
    forEachIn(this.values, action);
};

/*Prototypal Inheritance*/
//Object.prototype.ainherit = function(baseConstructor) {
  //this.prototype = clone(baseConstructor.prototype);
  //this.prototype.aconstructor = this;
//};
/*Object.prototype.amethod = function(name, func) {
  this.prototype[name] = func;
};*/


//collection from web
Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

// Get the size of an object
var size = Object.size(myArray);
