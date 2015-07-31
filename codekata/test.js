function pattern(n){
    var str="";
    // Happy Coding ^_^
    var num = parseInt(n);
    var str="";
    for(var j=0;j<num;j++){

        for(var i=num;i>j;i--){
            str=str+""+i;
        }
        if(j<num-1)
            str=str+"\n";
    }
    return str;
}

var s=pattern(5);
console.log(s);