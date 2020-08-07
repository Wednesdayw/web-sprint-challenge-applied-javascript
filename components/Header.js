// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    //create Element ->
    const header = document.createElement('div');
    const lambdaDate = document.createElement('span');
    const lambdaTitle = document.createElement('h1');
    const lambdaTemp = document.createElement('span');

    //Add classes ->
    header.classList.add('header');
    lambdaDate.classList.add('date');
    lambdaTemp.classList.add('temp');

    //Add textContent ->
    lambdaDate.textContent = 'MARCH 28, 2020';
    lambdaTitle.textContent = 'Lambda Times';
    lambdaTemp.textContent = '98°';

    //Select the header container class ->
    const headerContainer = document.querySelector('.header-container');

    //Append the elements ->
    header.append(lambdaDate);
    header.append(lambdaTitle);
    header.append(lambdaTemp);
    headerContainer.append(header);

    //return it ->
return header;

}
//Summon ->
Header();