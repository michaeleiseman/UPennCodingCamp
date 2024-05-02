
let chemArray = [
    {name: "Hydrogen", atomicWeight: 1.008},
    {name: "Helium", atomicWeight: 4.003},
    {name: "Lithium", atomicWeight: 6.941},
    {name: "Beryllium", atomicWeight: 9.012},
    {name: "Boron", atomicWeight: 10.81},
    {name: "Carbon", atomicWeight: 12.01},
    {name: "Nitrogen", atomicWeight: 14.01},
    {name: "Oxygen", atomicWeight: 16},
    {name: "Fluorine", atomicWeight: 19},
    {name: "Neon", atomicWeight: 20.18},
    {name: "Sodium", atomicWeight: 22.99},
    {name: "Magnesium", atomicWeight: 24.31},
    {name: "Aluminum", atomicWeight: 26.98},
    {name: "Silicon", atomicWeight: 28.09},
    {name: "Phosphorus", atomicWeight: 30.97},
    {name: "Sulfur", atomicWeight: 32.06},
    {name: "Chlorine", atomicWeight: 35.45},
    {name: "Argon", atomicWeight: 39.95},
    {name: "Potassium", atomicWeight: 39.1},
    {name: "Calcium", atomicWeight: 40.08},
    {name: "Scandium", atomicWeight: 44.96},
    {name: "Titanium", atomicWeight: 47.87},
    {name: "Vanadium", atomicWeight: 50.94},
    {name: "Chromium", atomicWeight: 52},
    {name: "Manganese", atomicWeight: 54.94},
    {name: "Iron", atomicWeight: 55.85},
    {name: "Cobalt", atomicWeight: 58.93},
    {name: "Nickel", atomicWeight: 58.69},
    {name: "Copper", atomicWeight: 63.55},
    {name: "Zinc", atomicWeight: 65.38},
    {name: "Galium", atomicWeight: 69.72},
    {name: "Germanium", atomicWeight: 72.64},
    {name: "Arsenic", atomicWeight: 74.92},
    {name: "Selenium", atomicWeight: 78.96},
    {name: "Bromine", atomicWeight: 79.9}

    //OOPS!! we forgot Krypton which has an atomic weight of 83.80
    //Please add Krypton below Bromine!! Don't forget to add a comma after
    //the Bromine (previous) object.


];

//chemicalDivs are all of the divs that contain a chemical symbol
let chemicalDivs = document.getElementsByClassName("element");

//initialize this periodic table by filling in atomic numbers and symbols for our objects
//and put an event listener on each element.
//An INDEXED for loop is your best bet here.  For each div that contains a chemical symbol:
for(let i = 0; i < chemicalDivs.length; i++) {
    let chemicalObject = chemArray[i];
    let chemicalDiv = chemicalDivs[i];
    //add the atomic number as a property to its corresponding chemical object.
    //In this loop, the atomic number should have the value i + 1.

    //add the elemental symbol as a property to its corresponding chemical object.
    //In this loop, the elemental symbol should have the value chemicalDiv.textContent.

    //provide an easy way to access the chemical object that corresponds to the div
    //by making the object a PROPERTY of the div.


    //add a 'mouseenter' listener to the div whose callback publishes the properties of the chemical element
    chemicalDiv.addEventListener('mouseenter', showElement, false);
}
//define a callback function here that publishes the data for a chemical object
function showElement() {
    // remember that 'this' is the div that the mouse is floating over and our page
    // initialization process made it so the correct chemical object is now a property of 'this'.
    // Therefore we can easily gain access to the correct chemical object

    //We can use this chemical object as it has all of the properties we need to publish
    //Namely, atomic number, atomic weight, symbol, and name
    
    
}


