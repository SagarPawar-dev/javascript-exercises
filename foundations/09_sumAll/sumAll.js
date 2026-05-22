const sumAll = function(num1, num2) {
    sum=0;
    let start=Math.min(num1,num2);
    let end=Math.max(num1,num2);
    if(num1<0 || num2<0 )
        return "ERROR";
    if(!Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }

    else{
        for(let i=start;i<=end;i++){
            sum += i;
        }
    }    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
