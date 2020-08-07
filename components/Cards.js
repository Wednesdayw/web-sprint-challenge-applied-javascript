import axios from 'axios';
// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


const articleData = "https://lambda-times-api.herokuapp.com/articles";

axios
  .get(articleData)

  .then((response) => {

    console.log(response);

    const divMainContainer = document.querySelector(".cards-container");
    const entries = Object.values(response.data.articles);

    entries.forEach((element) => {
      element.forEach((article) => {
        divMainContainer.appendChild(articleMaker(article));
        console.log("Card Created"); //15
      });
    });
  })

  .catch(function (error) {
    console.log("error");
  });

  function articleMaker(object) {
     //create Element ->
    const div = document.createElement("div");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const img = document.createElement("img");
    const span = document.createElement("span");
  
    //Add classes ->
    div.classList.add("card");
    div1.classList.add("headline");
    div2.classList.add("author");
    div3.classList.add("img-container");
  
     //Add textContent and img ->
    div1.textContent= object.headline;
    img.src = object.authorPhoto;
    span.textContent = "By " + object.authorName;
  
    //Append the elements ->
    div.appendChild(div1);
    div.appendChild(div2);
    div2.appendChild(div3);
    div3.appendChild(img);
    div2.appendChild(span);
  
    //Add EventLister
    div.addEventListener("click", () => {
      console.log(object.headline);
    });
  
    //return
    return div;
  }