let tree = {
    first:"Osman",
    last:"Reese", 
    spouse: {
        first:"Denise",
        last:"Woodward"
    }, 
    children: [
        {
            first:"Tristan",
            last:"Reese", 
            spouse: 
                {
                    first:"Becky",
                    last:"Rich",
                    children: []
                },
            children: [
                {
                    first:"Amir",
                    last:"Reese",
                    children: []
                },
                {
                    first:"Julia",
                    last:"Reese",
                    children: []
                }
            ]
        },{
            first:"Kathleen",
            last:"Reese", 
            spouse: 
                {
                    first:"Tom",
                    last:"Mcclain"
                },
            children: [
                {
                    first:"Alicia",
                    last:"Mcclain",
                    children: []
                },
                {
                    first:"Robert",
                    last:"Mcclain",
                    children: []
                },
                {
                    first:"Edward",
                    last:"Mcclain",
                    children: []
                }
            ]
        },{
            first:"Emily",
            last:"Reese", 
            spouse: 
                {
                    first:"Hamza",
                    last:"Conner",
                    children: []
                },
            children: []
        }
    ]
}
class Person {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
}
let family = createFamilyObject(tree);
listDecendents(findPerson(family, "Denise", "Woodward"))
function createFamilyObject(tree) {
    let person = new Person(tree.first, tree.last);
    if(tree.spouse) {
        person.spouse = new Person(tree.spouse.first, tree.spouse.last);
        person.spouse.spouse = person;
        person.spouse.children = [];
    }
    person.children = [];
    if(tree.children) {
        for(let child of tree.children) {
            let childObject = createFamilyObject(child);;
            person.children.push(childObject);
            person.spouse.children.push(childObject);
            childObject.parents = [person, person.spouse];
        }
    }
    return person;
}

function findPerson(family, first, last) {
    if(family.first === first && family.last === last) {
        return family;
    }
    if (family.spouse) {
        if(family.spouse.first === first && family.spouse.last === last) {
            return family.spouse;
        }
    }
    for(let child of family.children) {
        return findPerson(child, first, last);
    }
    return false;
}
//a function that not only lists the children of a person, but also lists their children's children, and their children's children's children, and so on.
function listDecendents(person) {
    if(person) {
        if(person.children.length > 0) {
            for(child of person.children) {
                let p = document.createElement("p");
                p.textContent = child.first + " " + child.last;
                document.body.appendChild(p);
                listDecendents(child);
            }
        } else {
            let p = document.createElement("p");
            p.textContent = "This person has no decendents.";
            document.body.appendChild(p);
        }
    } else {
        let p = document.createElement("p");
        p.textContent = "Person not found";
        document.body.appendChild(p);
    }
}
// Johnny Schroeder
// Bradley Jacobson
// Amir Daniel
// Zubair Everett
// Tallulah Ingram
// Faith Osborne
// Owain Foster
// Jesse Browning
// Kathleen Armstrong
// Denise Rojas
// Aysha Rowe
// Tessa Tanner
// Maksymilian Combs
// Thalia Gibbons
// Rupert Lowe
// Gideon Cobb
// Esme Barron
// Charles Harrison
// Orla Daniels
// Kara Mendoza
// Jane Burnett
// Sachin Barrera
// Wade Perez
// Leia Mcknight
// Michael Curtis
// Zoe Hodges
// Will Flynn
// Shauna Cardenas
// Moshe Hunter
// Autumn Rocha
// Grayson Fernandez
// Hafsah Hill
// Ciara Drake
// Inaya Griffith
// Abi Stevens
// Keeley Montoya
// Finnian Perkins
// Jayson Norton
// Rose Le
// Agnes Mckee
// Mohammed Barker
// Angelica Hilton
// Kallum Richard
// Conor Meyer
// Anas Spencer
// Aarav Frazier
// Ismaeel Reeves
// Jacob Carr
// Carter Sanders
// Demi-Leigh Vaughan
// Jakob White
// Cindy Klein
// Bruce Wilkinson
// Naomi Brady
// Vivian Dawson
// Leland Rosales
// Ieuan Navarro
// Natalie Franco
// Asad Nguyen
// Cyrus Melendez
// Bibi Hurst
// Luc Bullock
// Anoushka O'Brien
// Ameer Duke
// Robbie Dennis
// Audrey Bird
// Carla Gamble
// Kamil Juarez
// Stanley Faulkner
// Jac Vasquez
// Raheem Hoover
// Kurt Contreras
// Lia Wallace
// Layla Henry
// Sulaiman Sloan
// Sandra Delgado
// Katie Alvarado
// Libby Heath
// Samson Brennan
// Kira Larsen
// Ehsan Robles
// Emma Snow
// Pippa Peters
// Safiya Livingston
// Emmanuel Gibson
// Ajay Hull
// Asma Chan
// Raymond Mejia
// Noor Oneill
// Kayne Aguirre
// Edie Mullen
// Sylvia Moss
// Heath Beck
// Michaela Obrien
// Edward Boone