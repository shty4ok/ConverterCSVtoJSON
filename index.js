const fs = require('fs');
const Papa = require('papaparse');
const file = 'translate.csv';
const content = fs.readFileSync(file, 'utf8');
let rows;

//=================================================
//CSV TO JSON
//=================================================
Papa.parse(content, {
    header: false,
    delimiter: ";",
    complete: function (results) {
        // console.log("Finished:", results.data);
        rows = results.data;
        // console.log(rows);
        createObj(rows);
    }
});

function createObj(chain) {
    let elemArray = 0;
    let pushElem = [];
    let n = 0;
    let pushObj = {};
    let finalObj = {};
    let sashPasha = {};
    for (let i = 1; i < chain.length; i++) {
        elemArray = chain[i][0];
        if (elemArray) {
            pushElem = elemArray.split('.');
        }

        let max = pushElem.length-1;
        finalObj[pushElem[max]] = chain[i][1]; //login: 'Логин'
        // for (let j = max; j >= 0; j--) {
            pushObj[pushElem[max-1]] = finalObj;
        // }
        sashPasha = pushObj;
        finalObj = {};
        pushObj = {};
        // console.log(sashPasha);
    console.log(sashPasha);
    }
}