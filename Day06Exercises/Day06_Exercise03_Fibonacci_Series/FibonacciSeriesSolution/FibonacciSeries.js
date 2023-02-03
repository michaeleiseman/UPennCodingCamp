document.getElementById("calculate").addEventListener('click', calculate, false);
//calculate the numbers in the Fibonacci sequence.
//The first two numbers in the Fibonacci sequence are 1 and 1.
//The remaining numbers are generated by adding the previous two numbers.
//So the sequence starts as 1, 1, 2, 3, 5, 8, 13...
function calculate() {
    let output = document.getElementById("output");
    output.textContent = "1, 1";
    //The third to the last number in the series
    let first;
    //The second to the last number in the series
    let second = 1;
    //The last number in the series
    let third = 1;
    //keep finding Fibonacci numbers as long as the sum of the
    //two highest numbers (second + third) are less than 1000000
    while(second + third < 1000000) {
        //Make the first number equal to the second number
        first = second;
        //Make the second number equal to the third number
        second = third;
        //Make the third number equal to the sum of the first number + the second number
        third = first + second;
        //update the output
        output.textContent = output.textContent + ", " + third;        
    }
}