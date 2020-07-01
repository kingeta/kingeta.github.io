/* Now THIS is javascript */


//var mydata = [{"foo" : "text", "bar" : 30}, {"foo" : "else", "bar" : 21}];

var mydata = [{"Name": "The Master and Margarita", "Author": "Mikhail Bulgakov", "Genre": "russian", "Date": 2019, "Review" : "Took a while, classic."},
                {"Name": "Cryptonomicon", "Author" : "Neal Stephenson", "Genre" : "scifi", "Date" : 2018, "Review" : "Difficult to put down, Yamamoto features."}];
//Cryptonomicon : Neal Stephenson : scifi : 2018 : Difficult to put down, Yamamoto features.
//A Canticle for Leibowitz :  : scifi :  : Lots of Latin, often difficult to parse, quite engrossing. Final section perhaps a little less polished than the first two.


function generateTableHead(table, headers) {
    let thead = table.createTHead();
    let row = thead.insertRow();

    // Populate the header row
    for (let c of headers) {
        let th = document.createElement("th");
        let text = document.createTextNode(c);
        th.appendChild(text);
        row.appendChild(th);
    }

}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

function getPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const page = urlParams.get('page');
}

function load() {
    let table = document.getElementById('mainTable');

    generateTable(table, mydata)
    generateTableHead(table, Object.keys(mydata[0]))
    getPage();
}