// The Fibonacci sequence is defined as follows: the first number of the sequence is 0, 
// the second number is 1, and the nth number is the sum of the (n - 1)th and (n - 2)th numbers. 
// Write a function that takes in an integer n and returns the nth Fibonacci number. 

// Important note: the Fibonacci sequence is often definded with its first two numbers as F0 = 0
// and F1 = 1. For the purpose of this question, the first fibonacci number is F0; therefore, 
// getNthFib(1) is equal to F0, getNthFib(2) is equal to F1, etc.


// METODO 1
function getNthFib(n) { 
    let F0 = 0;
    let F1 = 1;
    let fibonacci = 0;
    for(let i = 0; i < n-1; i++){
        fibonacci = F0 + F1; // 0 + 1; 1
        F0 = F1;
        F1 = fibonacci;
    }

  return fibonacci;
}
console.log(getNthFib(7));


// METODO 2
function fibonacci(n){
    if ( n <= 1 ){
        return n;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
console.log(fibonacci(7));


//METODO 3
function fibonacci3(n){
    let num=[0,1,2];
    for(let i=3; i<n; i++){ 
        num[i] = num[i-2] + num[i-1];
    }
    return num[n-1];
}
console.log(fibonacci3(17))


//METODO 4: EL MAS EFICIENTE
function fibonacci4(n){
    const lastTwo = [0,1]; //const se destruyen a diferencia de var y let que permanecen en memoria
    let counter = 2;
    while (counter <= n) { //cada elemento del array ocupa un espacio en memoria por eso es mas eficiente el while
        const nextFib = lastTwo[0] + lastTwo[1];
        lastTwo[0] = lastTwo[1];
        lastTwo[1] = nextFib;
        counter++;
    }
    return n > 1 ? lastTwo[1] : lastTwo[0];
}
console.log(fibonacci4(7))