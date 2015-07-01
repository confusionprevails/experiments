
function stringsample(){
    var str = "A quick brown fox jumped over the lazy dog"

    //SPLIT
    var strArr = str.split(" ");
    for(var i=0;i<strArr.length;i++){
        console.log(strArr[i]);
    }


    //indexOf
    var idx = strArr.indexOf("over");
    if(idx==-1){
        console.log('Not found');
    }
    else{
        console.log(idx,strArr[idx]);
    }

    //JOIN
    var jStr = strArr.join("-");
    console.log(jStr);

    //CONCAT
    var nextArr=["yes","indeed"];
    var nextArr2=nextArr.concat(strArr)
    console.log(nextArr2);

    //SPLICE
    var spliceArr = strArr.splice(2,3);
    console.log(spliceArr);
    console.log(strArr);

    //UNSHIFT, PUSH, POP
    nextArr2.push("Hole");
    console.log(nextArr2);
    nextArr2.pop();
    console.log(nextArr2);
    nextArr2.unshift("Poppy");
    console.log(nextArr2);

    //reverse
    console.log(nextArr.reverse());

    //sort
    console.log(nextArr2.sort());

    //sort numbers
    var num=[1,11,2,45,4,8];
    console.log(num.sort());
    console.log(num.sort(function(n1,n2){
        return n1-n2;
    }));
}

stringsample();