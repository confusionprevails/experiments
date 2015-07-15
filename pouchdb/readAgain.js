var PouchDB = require('pouchdb');

var local_db = new PouchDB('test_local_3');

function showDocs() {
    local_db.allDocs({include_docs: true, descending: true}, function(err, doc) {
        if(!err){
            for(var i=0;i<doc.rows.length;i++){
                console.log(JSON.stringify(doc.rows[i]));
                addNewMsg(doc.rows[i]);
                //modifyData(doc.rows[i]);
            }
        }
        else {
            console.log(JSON.stringify(err));
        }

    });
}

function modifyData(data){
    var doc = data.doc;
    if(doc.newData){
        doc.newData="Updated Here";
        local_db.put(doc, function(err, resp){
            if(err){
                console.log(err);
            }
            else{
                console.log(resp);
            }
        })
    }
}

function addNewMsg(data){
    var doc = data.doc;
    if(doc.messages){
        doc.messages.push({message:"From Local"});
        local_db.put(doc, function(err, resp){
            if(err){
                console.log(err);
            }
            else{
                console.log(resp);
            }
        })
    }

}

function main(){
    showDocs();
}

main();