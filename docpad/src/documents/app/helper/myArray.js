define(['helper/utils'], function (utils) {
    var range = utils.range;
    return {
        createArrays: function (start, end, length) {
            var result = [];
            while (start + length <= end) {
                result.push(range(start, start + length - 1));
                start = start + length;
            }
            return result;
        },
        flattenArray: function (arrays) {
            var base = [];
            arrays.forEach(function(arr) {
                base = base.concat(arr);
            });
            return base;
        },
        flattenArray2: function (arrays) {
            var concat = function(prev, cur) {
                return prev.concat(cur);
            };
            return arrays.reduce(concat);
        },
        flattenArrayRight: function (arrays) { //using reduceRight
            return arrays.reduceRight(function (prev, cur, index, array) {
                return prev.concat(cur);
            });
        }
    };
});
