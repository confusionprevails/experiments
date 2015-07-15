var PouchDB = require('pouchdb');

var local_db = new PouchDB('test_local_3');
var key="", secret="";
var account="rajatkumar";
var remoteDB="test_sync";
var remoteURL='https://'+key+":"+secret+"@"+account+".cloudant.com/"+remoteDB;
var remote_db = new PouchDB(remoteURL);

var options = {
    live:false, retry:true
};

remote_db.info(function(err, info) {
    if (err) {  console.log(err); }
    else{
        console.log("Connected");
        console.log(info);
    }
});

var sync=PouchDB.sync(local_db, remote_db, options)
    .on('change', handleChange)
    .on('paused', handlePause)
    .on('active', handleActive)
    .on('denied', handleDenied)
    .on('complete', handleComplete)
    .on('error', handleError);


function handleChange(info){
    console.log('Change');
    console.log(info);
}
function handlePause(info){
    console.log('Paused');
    console.log(info);

}

function handleActive(info){
    console.log('Active');
    console.log(info);
}

function handleDenied(info){
    console.log('Denied');
    console.log(info);
}

function handleComplete(info){
    console.log('Complete');
    console.log(info);

}

function handleError(err){
    console.log('Error');
    console.log(err);
}



function showDocs() {
    local_db.allDocs({include_docs: true, descending: true}, function(err, doc) {
        console.log(doc.rows);

    });
}

function main(){

    setTimeout(function(){
        showDocs()}
        , 5000
    );



}

main();