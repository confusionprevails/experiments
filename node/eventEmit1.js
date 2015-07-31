var EventEmitter = require('events').EventEmitter;

var util = require('util');
var fs = require('fs');

function FindPattern(regex){
    EventEmitter.call(this);
    this.regex = regex;
    this.files=[]
}

util.inherits(FindPattern,EventEmitter);

FindPattern.prototype.addFile=function(filename){
    this.files.push(filename);
    return this;
}

FindPattern.prototype.find  =function(){
    var self= this;

    self.files.forEach(function(filename){
        fs.readFile(filename, 'utf8', function(err,data){
            if(err)
                return self.emit('error',err);

            self.emit('fileread', filename);

            var match = null;
            if(match = data.match(self.regex)){
                match.forEach(function(elem){
                    self.emit('match', filename, elem);
                })

            }
        });
    });

    return this;
}

main();

function main(){
    var findPattern = new FindPattern(/require\('\.\/\w+'\)/);
    findPattern.addFile('a.js')
        .addFile('b.js')
        .addFile('circular.js')
        .addFile('circular2.js')
        .find()
        .on('error', function(err){
            console.log('ERROR:'+err);
        })
        .on('match', function(filename, elem){
            console.log('MATCH in %s and found %s',filename,elem);
        })
        .on('fileread', function(filename){
            console.log('Read the file %s', filename);
        })

}

