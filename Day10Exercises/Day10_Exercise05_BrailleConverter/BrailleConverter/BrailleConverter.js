brailleMap = {
    'a': '⠁',
    'b': '⠃',
    'c': '⠉',
    'd': '⠙',
    'e': '⠑',
    'f': '⠋',
    'g': '⠛',
    'h': '⠓',
    'i': '⠊',
    'j': '⠚',
    'k': '⠅',
    'l': '⠇',
    'm': '⠍',
    'n': '⠝',
    'o': '⠕',
    'p': '⠏',
    'q': '⠟',
    'r': '⠗',
    's': '⠎',
    't': '⠞',
    'u': '⠥',
    'v': '⠧',
    'w': '⠺',
    'x': '⠭',
    'y': '⠽',
    'z': '⠵',
    ' ': '⠀'
  };
let input = document.getElementsByTagName("input")[0];
input.addEventListener('input', convertToBraille, false);
function convertToBraille() {
    /****** WRITE YOUR CODE HERE */
    //This code should:
      //1. Access the current text in the input element
      //2. Split that text up into an array of characters
      //3. Map each character to its corresponding Braille symbol which can be found using BrailleMap[character]
      //4. Join the mapped characters together in a single string
      //5. Make the textContent of the output div equal to this single string.

    /*** IF YOU WANT A CHALLENGE, CAN YOU MAKE convertToBraille()
    DO ALL 5 OF THESE THINGS IN ONE LINE OF CODE?*/
}
