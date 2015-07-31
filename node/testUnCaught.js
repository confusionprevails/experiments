

process.on('uncaughtException', function(err){
    // log an appropriate message, may be use err.message

    // raise statsd for the process ->
    // write a sensu check to ensure anytime this statsd is logged
    // its a critical issue

    // must also exit cause its unhandled exception
    console.log('Here');
    console.log(err.stack);
    setTimeout(function() {
        console.log('This will still run.');
        process.exit(1);
    }, 500);

});


sampleFunc();

console.log('This should never happend');

function sampleFunc(){
    console.hog('D');
}

