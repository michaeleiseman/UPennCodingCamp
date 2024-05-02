
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
//and put a 'mouseenter' event listener on each chemicalDiv element that publishes the proper
//information in the appropriate element inside the #elementInfo div.

//Hint: for each div, it will be helpful to make its corresponding object a PROPERTY of
//the div so that when a user hovers over the div, it will be easy to gain access to the
//object where all of the information lies to be published.

//Note that the objects above are listed in order of atomic number.  The atomic number for
//hydrogen is 1.  The atomic number for helium is 2. The atomic number for lithium is 3, and
//so on...


    



