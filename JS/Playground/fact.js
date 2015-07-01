
function fact(n){
    if(n==1)
        return n;
    else
        return fact(n-1)*n;
}

var val = fact(5);

console.log(val);