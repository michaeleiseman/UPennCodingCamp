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
                    last:"Rich"
                },
            children: [
                {
                    first:"Amir",
                    last:"Reese",
                    spouse: 
                        {
                            first: "Barbara",
                            last: "Schroeder"
                        },
                    children: [
                        {
                            first: "Joy",
                            last: "Reese"
                        },
                        {
                            first: "Rachel",
                            last: "Reese"
                        },
                        {
                            first: "Moshe",
                            last: "Reese"
                        },
                        {
                            first: "Keeley",
                            last: "Reese"
                        }
                    ]
                },
                {
                    first:"Julia",
                    last:"Reese",
                    spouse: 
                        {
                            first: "William",
                            last: "Jacobson"
                        },
                    children: [
                        {
                            first: "Aaron",
                            last: "Jacobson"
                        },
                        {
                            first: "Brian",
                            last: "Jacobson"
                        },
                        {
                            first: "Cynthia",
                            last: "Jacobson"
                        },
                        {
                            first: "Debra",
                            last: "Jacobson"
                        },
                        {
                            first: "Enid",
                            last: "Jacobson"
                        }
                    ]
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
                    spouse: 
                        {
                            first: "Zoe",
                            last: "Daniel"
                        },
                    children: [
                        {
                            first: "Shauna",
                            last: "Daniel"
                        }
                    ]
                },
                {
                    first:"Robert",
                    last:"Mcclain",
                    spouse: 
                        {
                            first: "Yasmine",
                            last: "Everett"
                        },
                    children: [
                        {
                            first: "Ian",
                            last: "Mcclain"
                        },
                        {
                            first: "Alana",
                            last: "Mcclain"
                        },
                        {
                            first: "Joseph",
                            last: "Mcclain"
                        }
                    ]
                },
                {
                    first:"Edward",
                    last:"Mcclain",
                    spouse: {
                        first:"Jennifer",
                        last:"Ingram"
                    },
                    children: [
                        {
                            first: "Leia",
                            last: "Mcclain"
                        },
                        {
                            first: "Autumn",
                            last: "Mcclain"
                        },
                        {
                            first: "Michael",
                            last: "Mcclain"
                        },
                        {
                            first: "Rose",
                            last: "Mcclain"
                        },
                        {
                            first: "Bruce",
                            last: "Mcclain"
                        }
                    ]
                }
            ]
        },{
            first:"Emily",
            last:"Reese", 
            spouse: 
                {
                    first:"Hamza",
                    last:"Conner"
                },
            children: []
        }
    ]
}
class Person {
    constructor(first, last) {
        this.first = first;
        this.last = last
        this.children = [];
    }
    createButton() {
        this.button = document.createElement("button");
        document.getElementById("people").appendChild(this.button);
        this.button.textContent = this.first + " " + this.last;
        this.button.className = "btn btn-primary"
        let first = this.first;
        let last = this.last;
        this.button.addEventListener('click', function() {
            document.body.removeChild(document.getElementById("list"));
            let list = document.createElement("div");
            list.setAttribute("id", "list");
            document.body.appendChild(list);
            let heading = document.createElement("h2");
            heading.textContent = "Decendents";
            list.appendChild(heading);
            listDecendents(this.personObject);
            if(document.getElementsByTagName("p").length === 0) {
                let p = document.createElement("p");
                p.textContent = "This person has no decendents.";
                document.getElementById("list").appendChild(p);
            }
        }, false);
    }
}
let family = createFamilyObject(tree);
function createFamilyObject(tree) {
    let person = new Person(tree.first, tree.last);
    person.createButton();
    person.button.personObject = person;
    if(tree.spouse) {
        person.spouse = new Person(tree.spouse.first, tree.spouse.last);
        person.spouse.createButton();
        person.spouse.button.personObject = person.spouse;
        person.spouse.spouse = person;
    }
    if(tree.children) {
        for(let child of tree.children) {
            //Note that we use RECURSION to traverse the family tree
            let childObject = createFamilyObject(child);;
            person.children.push(childObject);
            person.spouse.children.push(childObject);
            childObject.parents = [person, person.spouse];
        }
        
    }
    return person;
}
//a function that not only lists the children of a person, but also lists their children's children, 
//and their children's children's children, and so on.
function listDecendents(person) {
    //get each child of this person in a for loop. Note that you can access this person's children in person.children
    //which is an array of this person's children

        //for each child create a paragrah element
        
        //make the text content of the paragraph element be the first and last name of this child

        //append this paragraph to the element in the document with the id of "list"

        //execute the command that will list the decendents of this child


}
