//Given the following data, create an array of book objects that use, year, title, and author as properties.
//Then use this array to create a grid showing this data in tabular form

/*

Year    Title                       Author
--------------------------------------------------------
1960    To Kill a Mocking Bird      Harper Lee
1951    The Catcher in the Rye      J. D. Salinger
1851    Moby-Dick                   Herman Melville
1925    The Great Gatsby            F. Scott Fitzgerald
1961    Catch-22                    Joseph Heller
1952    Invisible Man               Ralph Ellison
1953    Farenheit 451               Ray Bradbury

*/

let books = [
    {year: 1960, title: "To Kill a Mockingbird", author: "Harper Lee"},
    {year: 1951, title: "The Catcher in the Rye", author: "J. D. Salinger"},
    {year: 1851, title: "Moby-Dick", author: "Herman Melville"},
    {year: 1925, title: "The Great Gatsby", author: "F. Scott Fitzgerald"},
    {year: 1961, title: "Catch-22", author: "Joseph Heller"}, 
    {year: 1952, title: "Invisible Man", author: "Ralph Ellison"},
    {year: 1953, title: "Fahrenheit 451", author: "Ray Bradbury"}
]
let grid = document.getElementById("grid");
//Here is where you write your code.
//You want to iterate through each book OF books.
//Within each book, you want to iterate through each property IN that book
//For each property in each book, you want to create a div whose text content
//is the value for that property. Give it a class name of "item" and then append
//the grid with the newly-created div
