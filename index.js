const fs = require('fs');
const Papa = require('papaparse');
const file = 'translate.csv';
const content = fs.readFileSync(file, 'utf8');
let rows;
let o = {};
let dataArray = [];
let helper = {};

//=================================================
//CSV TO JSON
//=================================================
Papa.parse(content, {
    header: false,
    delimiter: ";",
    complete: function (results) {
        rows = results.data;
        createObj(rows);
    }
});

function createObj(arr) {
    arr.shift();

    const data = arr.map((item, k, arr) => {
        return {'path': item[0], 'translate': item[1]};
    });
    // console.log(data);
    let a = {};
    let b = [];
    for (let i = 0; i < data.length; i++) {
        dataArray = data[i].path.split('.');

        a[dataArray[0]] = {}; //a['AUTH'];
        for (let j = 1; j < dataArray.length; j++) {
            if (!a[dataArray[j]]) {
                a[dataArray[j]] = {};
            }
            a = a[dataArray[j]];
        }
        
        console.log(a);
    }
}