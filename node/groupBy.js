Array.prototype.groupBy = function(evalfunc){
    var _identity = function(x){
        return x;
    }
    if(typeof(evalfunc)!=="function" || evalfunc == "undefined"){
        evalfunc = _identity;
    }
    var obj = {};

    var selfArr = this;
    console.log(selfArr);
    for(var i=0;i<selfArr.length;i++){
        var key = evalfunc(selfArr[i]);
        if(obj[key])
            obj[key].push(selfArr[i]);
        else
            obj[key]=[selfArr[i]];
    }

    return obj;

}

main();

function main(){
    console.log([1,2,3,2,4,1,5,1,6].groupBy());

    console.log([1,2,3,2,4,1,5,1,6].groupBy(function(val) { return val % 3;} ));

    console.log([1,2,3,2,4,1,5,1,6].groupBy(2));
}