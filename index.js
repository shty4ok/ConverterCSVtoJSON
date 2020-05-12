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
    let pushElem = 0;
    let n = 1;
    let pushObj = {};
    let finalObj = {};
    for (let i = 1; i < chain.length; i++) {
        elemArray = chain[i][0];
        if (elemArray) {
            pushElem = elemArray.split('.');

            function recur() {
                if (n >= pushElem.length) {
                    return pushObj;
                } else {
                    n++;
                    pushObj.assign(pushElem[n]);
                    return recur().assign(pushObj);
                }
            }

            if (pushElem) {

                console.log(pushElem);
            }
        }
    }

// console.dir(countObj);


// fs.writeFileSync('translate.json', JSON.stringify(countObj), (err) => {
//     if (err) throw err;
//     console.log('Data has been added');
// })
    function recursData() {

    }
}