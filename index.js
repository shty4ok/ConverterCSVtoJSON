const fs = require('fs');
const Papa = require('papaparse');
const file = 'translate.csv';
const fileExport = 'translate.json';
const content = fs.readFileSync(file, 'utf8');
let rows;
let o = {};
let dataArray = [];
let helper = {};
let g = {};

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
    data.forEach((item) => {
        let helper = g;
        // item = { path, translate }
        const path = item.path.split('.');

        for (let i = 0; i < path.length - 1; i++) {
            if (!helper[path[i]]) {
                helper[path[i]] = {};
            }

            helper = helper[path[i]];
        }

        helper[path[path.length - 1]] = item.translate;
    });
    console.dir(g);
    fs.writeFileSync('translate.json', JSON.stringify(g),(err)=> {
        if (err) throw err;
        console.log('CSV CREATE');
    })
}
