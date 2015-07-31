var fs = require('fs');

fs.watch("target.txt", function(event, fname){
    console.log(event);
    console.log(fname);
   console.log('File changed!');
});

console.log('Starting to Watch the file!');