let isSquare = function(n){
    if (n%Math.sqrt(n) == 0 || Math.sqrt(n) === 0){
        return true
    } else {
        return false
    }


}

console.log(isSquare(-1))