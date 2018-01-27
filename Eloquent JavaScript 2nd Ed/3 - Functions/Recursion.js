console.log('Recursion')

function impar(n){
    if(n==0)
        return true;
    else if(n == 1)
        return false;
    else
        return impar(n-2);
}

console.log('50 e impar: '+impar(50))
console.log('75 e impar: '+impar(75))
