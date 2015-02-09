define([], function() {
//contain functions that has no dependencies
return {
    range: function range (start, end, step) {
        var st;
        st = step == null ? 1 : step;
            //if (step==null) step = 1;
            var result = [];
            for(var i=start; i<=end; i += st) {
                result.push(i);
            }
            return result;
    },
    average: function average ( array ) {
        function plus(a, b) { return a + b ; }
        return array.reduce(plus) / array.length ;
    },
    deepEqual: (function() {
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
        return function deepEqual(obj1, obj2) {
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
    })(),
    sleep: function sleep (milliSecons) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliSecons);
    },
    localStoragePrefixedKeys: function (prefix) {
        var arr = [];
        for (var i = 0; i < localStorage.length; i++) {
            if (Boolean(prefix) || localStorage.key(i).substr(0, prefix.length) === prefix) {
                arr.push(localStorage.key[i]);
            }
        }
        return arr;
    }
    };
});
