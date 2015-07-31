function findFirstNonRepeating(str){
    var hash={};
    var charArr=str.split('');
    for(var i=0;i<charArr.length;i++){
        var c= charArr[i];
        if(hash[c]){
            hash[c]=hash[c]+1;
        }
        else{
            hash[c]=1;
        }
    }

    console.log(hash);

    for(var j=0;j<charArr.length;j++){
        var c2= charArr[j];
        if(hash[c2]==1)
            return c2;
    }
}

function removeCharacters(str, removeStr){
    var hash ={};
    var removeCharArr = removeStr.split('');
    for(var i=0;i<removeCharArr.length;i++){
        hash[removeCharArr[i]]=true;
    }

    var strArr = str.split('');
    var outputStr="";
    for(var i=0;i<strArr.length;i++){
        var c = strArr[i];
        if(!hash[c]){
            outputStr=outputStr+""+c;
        }
    }

    return outputStr;
}

function reverseWords(str){
    var wrdsArr = str.split(' ');
    return wrdsArr.reverse().join(' ');
}

function runLength(str){
    var count=0;
    var outStr="";
    var strArr = str.split('');
    for(var i=0;i<strArr.length-1;i++){
        var curChar=strArr[i];
        var nextChar = strArr[i+1];
        count++;
        if(curChar!==nextChar){
            outStr=outStr+""+count+""+curChar;
            count=0;
        }
    }
    return outStr;
}

function main(){
    console.log(findFirstNonRepeating("teeter"));
    console.log(findFirstNonRepeating("total"));

    console.log(removeCharacters("Hello World", "aeiou"));

    console.log(reverseWords("Hello Worls id falling down"));

    console.log(runLength("wwwggoppww"));
}

main();