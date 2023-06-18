//form a collection of all elements that have a class name of "rating"
let ratings = document.getElementsByClassName("rating");
//iterate over each of the ratings
for(let rating of ratings){
    //record the number of stars that are listed in the rating div
    let numberOfStars = Number(rating.textContent);
    //remove the text content of this div (set its textContent to "")
    rating.textContent = "";
    //use an indexed for loop to append into this div as many stars as dictated by the rating
    for(let i = 0; i < numberOfStars; i++) {
        //create an "img" element
        let star = document.createElement("img");
        //set its "src" attribute to "star.png"
        star.setAttribute("src", "star.png");
        //give this image a class name of "star"
        star.className = "star";
        //append this image into this rating div
        rating.appendChild(star);
    }
}