
// create 2D Matrix

Array.matrix = function(numrows, numcols, initval){
    var arr=[];
    for(var i=0;i<numrows;i++){
        var columns=[];
        for(var j=0;j<numcols;j++){
            columns[j]=initval;
        }
        arr[i]=columns;
    }
    return arr;
};


var a1 = Array.matrix(3,3,1);

console.log(a1[2][1]);