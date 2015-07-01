
function testIter(){
    var nums=[1,2,3,4,5,6];

    nums.forEach(function(n){
        console.log(n, n*n);
    });

    function isMoreThanZero(n){
        return n>0;
    }

    function isEven(n){
        return n%2==0;
    }

    console.log(nums.every(isMoreThanZero));

    console.log(nums.every(isEven));

    console.log(nums.some(isEven));

    function multiply(runVal, curVal){
        return runVal*curVal;
    }
    console.log(nums.reduce(multiply));

    console.log(nums);

    var newNums = nums.map(function(val){
        return val%2;
    });

    console.log(newNums);

    var evenNums=nums.filter(isEven);
    console.log(evenNums);

}


testIter();