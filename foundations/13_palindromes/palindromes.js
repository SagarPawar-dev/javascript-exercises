const palindromes = function (str) {

    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    
    cleanedStr = str
        .toLowerCase()
        .split('')
        .filter((character) => alphanumerical.includes(character))
        .join('');

    reversedStr = cleanedStr
        .split('')
        .reverse()
        .join('');
    
    if(cleanedStr === reversedStr){
        return true;
    }
    else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
