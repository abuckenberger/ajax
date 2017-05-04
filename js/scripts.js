// @codekit-prepend "jquery.js";
// @codekit-prepend "semantic.js";
// @codekit-prepend "airtable.js";

// `load()` method

//$('#data').load('/data/data.txt');
//$('#data').load('/data/data.html');
//$('#data').load('/data/data.json');

//Configure airtable aka HANDSHAKE:) 

var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyqGtSAOwpL9x1Tx'
});
var base = Airtable.base('appNo3oylZaNcaALG');

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyqGtSAOwpL9x1Tx'}).base('appNo3oylZaNcaALG');


//AJAX call
base('Entertainers').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 9,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Name'));
    });

    //DISPLAY TO PAGE HERE
    
    
    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();
    
    
    

}, function done(err) {
    if (err) { console.error(err); return; }
});