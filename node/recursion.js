function fact(num){
    if(num>1){
        return num * fact(num-1);
    }
    else{
        return 1;
    }
}

function generatePermuation(str){
    this.strArr = str.split('');
    console.log(this.strArr);
    this.used = [];
    this.outArr=[];
    this.cOutArr=[];
}

generatePermuation.prototype.combine=function(start){
    var self=this;
    for(var i=start;i<self.strArr.length;i++){
        self.cOutArr.push(self.strArr[i]);
        console.log(self.cOutArr.join(''));
        if(i<self.strArr.length)
            self.combine(i+1);
        self.cOutArr.pop();
    }
}

generatePermuation.prototype.permute = function(){
    var self=this;
    if(self.outArr.length == self.strArr.length){
        console.log(self.outArr.join(''));
        return;
    }
    for(var i=0;i<self.strArr.length;i++){
        if(self.used[i]==true)
            continue;
        else{
            self.outArr.push(self.strArr[i]);
            self.used[i]=true;
            self.permute();
            self.used[i]=false;
            self.outArr.pop();

        }
    }

}


main();

function main(){
    console.log(fact(5));

    var p = new generatePermuation("ABC");
    console.log('Permutation');
    p.permute();
    console.log('Combination');
    p.combine(0);
}