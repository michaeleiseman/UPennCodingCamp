document.getElementsByTagName("button")[0].addEventListener('click', primeFactorize, false);
let numberElement = document.getElementsByTagName("input")[0];
let output = document.getElementById("output");
function primeFactorize() {
    let number = Number(numberElement.value);
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
    //change the text content of output by calling the getOutputText function
    //and provide the primeFactors array as a parameter.
    output.textContent = getOutputText(primeFactors);
}
//This function returns the smallest prime factor of number that is greater
//or equal to the divisor provided. If the number is composite, the divisor
//provided must be less than or equal to the lowest prime factor of the number
//if the number is a prime number, it returns the number unchanged.
function smallestPrimeFactor(number, divisor) {
    //we must try to divide our number by divisors from divisor up to the 
    //square root of the number.
    //Note that we only want to take the square root ONCE, because
    //taking square roots can be computationally intensive. We don't
    //want to have a square root computation in our while condition
    //that will need to be run repeatedly
    let max = Math.sqrt(number);
    while(divisor <= max) {
        if(number % divisor == 0) {
            return divisor;
        }
        divisor++;
    }
    return number;
}
//create a function here called getOutputText that takes an array
//as a parameter and constructs a sentence that describes what 
//the prime factors of the number are.
function getOutputText(primeFactors) {
    //if there is only 1 element in the primeFactors array
    if(primeFactors.length == 1) {
        //return text indicating this number is a prime number
        return numberElement.value + " is a prime number.";
    }
    //Start the output.
    let text = "The prime factors of " + numberElement.value + " are ";
    //Iterate through each prime factor (hint: use an INDEXED loop).
    //Make a sentence that lists the prime factors of the number.
    //For example, if the primeFactors array is [2, 3, 7], the output
    //should be "The prime factors of 42 are 2, 3, and 7."
    for(let i = 0; i < primeFactors.length; i++) {
        //if this is the last factor,
        if(i == primeFactors.length - 1) {
            //preceed it with the word "and"
            text = text + "and ";
        }
        //append the factor to the sentence
        text = text + primeFactors[i];
        //in most cases, we will add a comma after the factor
        let punctuation = ", ";
        //but if this is the last factor, 
        if(i == primeFactors.length - 1) {
            //we should add a period after the factor
            punctuation = ".";
        }
        //or if it is the penultimate factor and there are only two factors
        if(i == primeFactors.length - 2 && primeFactors.length == 2) {
            //simply add a space after the factor
            punctuation = " ";
        }
        //append the punctuation to the sentence
        text = text + punctuation;
    }
    return text;
}