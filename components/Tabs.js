import axios from 'axios';

// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element


const topics = "https://lambda-times-api.herokuapp.com/topics";
axios
  .get(topics)

  .then(function (response) {

    const dataArr = response.data.topics;

    console.log(response.data.topics);
    
    const lambdaTopics = document.querySelector(".topics");

    dataArr.forEach(function (data) {
        
    //create Element ->
    const newTab = document.createElement("div");
    //Add class ->
      newTab.classList.add("tab");
    //Add textContent ->
      newTab.textContent = data;
    //Append the element
      lambdaTopics.appendChild(newTab);
    });
  })

  .catch(function (error) {

    console.log("error");

  });