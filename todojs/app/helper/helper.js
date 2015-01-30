define(['app/testdata', 'helper/average', 'helper/utils'], function (data, average, utils) {
    var byName = [];
    var ancestry = JSON.parse(data.ANCESTRY_FILE);
    ancestry.forEach(function(person) {byName[person.name] = person;});
    return {
        ancestry: ancestry,
        average: utils.average,
        equal: utils.deepEqual,
        range: utils.range,
        ancestryByName: byName
    };
});
