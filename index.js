const fs = require('fs');
const Papa = require('papaparse');
const file = 'translate.csv';
const content = fs.readFileSync(file, 'utf8');
let rows;
let o;

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

    const data =  arr.map((item, k, arr)=> {
        return {'path': item[0], 'translate': item[1]};
    });
       data.forEach((item,k)=> {
            o = item.path;
        });
    for (let i = 0; i < data.length; i++) {
        // o.split('.');

    }
    console.log(o);
}