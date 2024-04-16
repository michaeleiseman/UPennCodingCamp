document.getElementsByTagName("button")[0].addEventListener('click', primeFactorize, false);
document.addEventListener('keydown', enter, false);
let numberElement = document.getElementsByTagName("input")[0];
let output = document.getElementById("output");
function enter(event) {
    if(event.key === "Enter") {
        primeFactorize();
    }
}
function primeFactorize() {
    let number = Math.abs(Number(numberElement.value));
    //don't do anything if there is no number, or if it is 0.
    if(number === NaN || number === 0) {
        return;
    }
    let primeNumber = 2;
    let primeFactors = [];
    //Keep dividing the number by prime factors
    //until all that is left is 1.
    while(number !== 1) {
        //find the smallest prime factor of number greater than or equal to primeNumber
        primeNumber = smallestPrimeFactor(number, primeNumber);
        //append the divisor to the prime factors array
        primeFactors.push(primeNumber);
        //divide the number by the prime number
        number = number / primeNumber;
    }
    //  ****** YOU NEED TO PUT A LINE OF CODE HERE **********
    //to change the text content of output by calling the getOutputText function
    //and providing the primeFactors array as a parameter.

    

}
//This function returns the smallest prime factor of number that is greater
//or equal to the divisor provided. If the number is composite, the divisor
//provided must be less than or equal to the lowest prime factor of the number
//if the number is a prime number, it returns the number unchanged.
function smallestPrimeFactor(number, divisor) {
    //we must try to divide our number by divisors from divisor up to the 
    //square root of the number.
    while(divisor * divisor <= number) {
        if(number % divisor == 0) {
            return divisor;
        }
        divisor++;
    }
    return number;
}
//create a function here called getOutputText that takes an array
//as a parameter and returns a sentence that describes what 
//the prime factors of the number are.

//******** START YOU FUNCTION HERE   *********

    //if there is only 1 element in the primeFactors array
   
        //return text indicating this number is a prime number
        

    //Start the output.
    let text = "The prime factors of " + numberElement.value + " are " +  primeFactors[0];
    
    //Make a sentence that lists the prime factors of the number.
    /*If there are only 2 prime factors, say 3 and 5, the sentence this 
    function should return is "The prime factors of 15 are 3 and 5."*/

    /*If there are more than 2 prime factors, for example, if the 
    primeFactors array is [2, 3, 7], you'll need to iterate through the array.
    (HINT: Use an INDEXED array). For this example, the sentence
    this function should return should be "The prime factors of 42 are 
    2, 3, and 7."*/
    





    //return the text

