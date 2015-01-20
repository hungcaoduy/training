var exports = {};

var chap2=function exercise1() {
    "use strict";
    var i=0;
    function makeString(s,l) {
        var str="";
        for (var i=1;i<=l;i++) str += s;
            return str;
    }
    return {
        printCharacters: function(s,l){
            for (i=1;i<=l;i=i+1) {
                console.log(makeString(s,i));
            }
        },
        fizzBuzz: function() {
            var result="";
            for (i = 1; i < 101; i++) {
                if (i % 3 === 0 && i % 5 === 0) {
                    result = result + " " + i + "FizzBuzz";
                }
                else if (i % 3 === 0) {
                    result = result + " " + i + "Fizz";
                }
                else if (i % 5 === 0) {
                    result = result + " " + i + "Buzz";
                }
                else result = result + " " + i;
            }
            console.log(result);
        },
        chesBoard: function() {
            for (var i = 0; i < 8; i++) {
                if (i%2) console.log(makeString(" #",4));
                else console.log(makeString("# ",4));
            }
        }
    };

}();


function exercise2() {
    "use strict";
    return {
        min: function(num1,num2) {
            if (num1<num2) return num1;
            else return num2;
        },
        isEven: function isEven(n) {
            if (n<0) n=-n;
            if (n==0) return true;
            else if (n==1) return false;
            else return isEven(n-2);
        },
        countChar: function(str,ch) {
            count = 0;
            for (var i = 0; i < str.length; i++) {
                if(ch==str.charAt(i)) count++;
            }
            return count;
        }
    };
}

(function(exports) {
    "use strict";
    exports.range = function (start, end, step) {
            var st;
            st = step == null ? 1 : step;
            //if (step==null) step = 1;
            var result = [];
            for(var i=start; i<=end; i += st) {
                result.push(i);
            }
            return result;
    };
    exports.sum = function(arr) {
            var result = 0;
            if (arr && arr.constructor === Array) {
                for( var i=0; i<arr.length; i++) {
                    result += arr[i];
                }
                return result;
            } else return;
    };
    exports.reverseArray = function(arr) {
            var result = [];
            if (arr && arr.constructor === Array) {
                for( var i=0; i<arr.length; i++) {
                    result.unshift(arr[i]);
                }
                return result;
            } else return;
    };
    exports.reverseArrayInPlace = function(arr) {
            if (arr && arr.constructor === Array && arr.length > 0) {
                var result = [];
                while (arr.length) {
                    result.push(arr.shift());
                }
                while (result.length) {
                    arr.push(result.pop());
                }
                return arr;
            } else return;
    };
    exports.rev = function(array)
        {
            var temp, right;
            var length = array.length;
            for (var left = 0; left < length / 2; left += 1)
            {
                temp = array[left];
                right = length - 1 - left;
                array[left] = array[right];
                array[right] = temp;
            }
            return array;
    };
    function hasTheSameProperties(obj1, obj2) {
        //regardless of the order, so one array is equal to its reversed version
        var prop;
        for(prop in obj1) {
            if (!(prop in obj2)) {
                return false;
            }
        }
        for(prop in obj2) {
            if(!(prop in obj1)) {
                return false;
            }
        }
        return true;
    }
    exports.deepEqual = function deepEqual(obj1, obj2) {
            if (obj1 == obj2) {
                return true;
            }
            if (obj1  && typeof(obj1) === "object" && obj2 && typeof obj2 === "object" && hasTheSameProperties(obj1, obj2))
            {
                var eq;
                for(var prop in obj1) {
                    eq = deepEqual(obj1[prop], obj2[prop]);
                    if (!eq) return false;
                }
                return true;
            } else return false;
    };
})(this.exports);


(function() {
    "use strict";
    var range = function (start, end, step) {
        var st;
        st = step == null ? 1 : step;
        //if (step==null) step = 1;
        var result = [];
        for(var i=start; i<=end; i += st) {
            result.push(i);
        }
        return result;
    };
    function createArrays(start, end, length) {
        var result = [];
        while (start + length <= end) {
            result.push(range(start, start + length - 1));
            start = start + length;
        }
        return result;
    }
    var arrayOfArrays = createArrays(0, 100, 10);
    console.log("-------This is array of arrays--------")
    arrayOfArrays.forEach(function(arr) { console.log(arr);});

    console.log("-------Now we will flatten it--------")
    function flatten(arrays) {
        var base = [];
        arrays.forEach(function(arr) {
            base = base.concat(arr);
        });
        return base;
    }
    var flattenArray = flatten(arrayOfArrays);
    console.log(flattenArray);
})();

// ( function ( exports ) {
//  var names = [" Sunday " , " Monday " , " Tuesday " , " Wednesday " ,
//  " Thursday " , " Friday " , " Saturday "];
//  exports . name = function ( number ) {
//      return names [ number ];
//  };
//  exports . number = function ( name ) {
//      return names . indexOf ( name ) ;
//  };
// }) ( this . weekDay = {}) ;
// console . log ( weekDay . name ( weekDay . number (" Saturday ") ) ) ;
// ! Saturday

// (function (exports) {

// })(module.exports)
