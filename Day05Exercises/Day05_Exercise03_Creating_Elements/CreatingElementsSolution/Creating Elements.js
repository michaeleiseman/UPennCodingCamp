//Create a new paragraph element. Remember the tag name for a paragraph element is "p".
let newPar = document.createElement("p");
//Make its content "Only this and nothing more.”"
newPar.textContent = "Only this and nothing more.”";
//Make it double-indented using CSS. Hint: We've declared a CSS rule for this.
newPar.className = "doubleIndent";
//Insert your new paragraph as the last line in the stanza.
document.getElementById("theRaven").appendChild(newPar);