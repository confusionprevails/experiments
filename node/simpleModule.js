var simpleModule =
    (function(){
        var pvtFunction=function(){
            console.log("This is pvt function");
        };
        var pvtData = 5;
        var publicObj = {
            publicFunction: function(){
                console.log('I am public but I call pvt function too');
                pvtFunction();
            },
            publicData: pvtData*10
        }
        return publicObj;
    })();


function main(){
    simpleModule.publicFunction();
    console.log(simpleModule.publicData);
}

main();