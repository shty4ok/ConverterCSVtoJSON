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
    for (let i = 1; i < chain.length; i++) {
        elemArray = chain[i][0];
        if (elemArray) {
            pushElem = elemArray.split('.');
        }
        pushObj = pushElem[0];
        function recurs(n) {
            if (n === pushElem.length) {
                return pushObj;
            } else {

                pushObj[] = new Object(pushElem);
                // Object.assign(pushObj, pushElem);
                n++;
                return recurs(n);
            }
        }
        fs.writeFileSync('translate.json', recurs(n), (err) => {
            if (err) throw err;
            console.log('Data has been added');
        })

        // console.log(recurs(0));
    }

    // console.log(pushElem[1]);
    // console.log(Object.assign({'2': 'lol'}, {'3': 'koko'}));
    function recursData() {

    }
}