define(['helper/helper','helper/myArray'], function (helper,myArray) {
    "use strict";
return function(){
    var range = helper.range;
    var equal = helper.equal;
    var ancestry = helper.ancestry;
    var average = helper.average;
    var maleAverageAge = average(ancestry.filter(male).map(age));
    var femaleAverageAge = average(ancestry.filter(female).map(age));
    var arrayOfArrays = myArray.createArrays(0, 100, 10);
    var flattenArray = myArray.flattenArray2(arrayOfArrays);
    //var flattenArray = myArray.reduceArray(arrayOfArrays);
    var ancestryByName = helper.ancestryByName;
    var liveIn18thCen = isLiveInCentury(18);
    var liveIn19thCen = isLiveInCentury(19);
    var peoplePerCenturies = [];

    function age (p) { return p.died - p.born ; }
    function male (p) { return p.sex == "m"; }
    function female (p) { return p.sex == "f"; }

    function hasKnownMother(person) { //not purity because of ancestryByName
        return ancestryByName[person.mother] != null;
    }
    function motherAgeAtBirth(person) { //not purity because of ancestryByName
        return person.born - ancestryByName[person.mother].born;
    }

    function isLiveInCentury(n) {
        return function(person) {
            return Boolean(person) && Math.ceil(person.died/100) == n;
        };
    }

    console.log("-------This is array of arrays--------");
    arrayOfArrays.forEach(function(arr) { console.log(arr);});

    console.log("-------Now we will flatten it--------");
    console.log(flattenArray);

    console.log("----------------Mother-Child age difference------------------");
    console.log("Average age of mothers at birth of his child is " + average(ancestry.filter(hasKnownMother).map(motherAgeAtBirth)));

    for(var i=16; i<=21; i++) {
        peoplePerCenturies.push(ancestry.filter(isLiveInCentury(i)).length);
    }
    console.log(peoplePerCenturies);
    console.log("Average people per century: " + average(peoplePerCenturies));
    //console.log("Average age in 19th century: " + average(ancestry.filter(liveIn19thCen).map(age)));
};

});
