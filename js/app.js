'use strict';

// global variables

const allProductsArray = [];

// global counter - CHANGE TO 25 BEFORE SUBMISSION!!!
// array of products - all product array
let ATTEMPTS = 5;
let clicks = 0;
// window into DOM - declare variables
let myContainer = document.getElementById('container');
let imageOne = document.getElementById('image-one');
let imageTwo = document.getElementById('image-two');
let imageThree = document.getElementById('image-three');
let surveyResults = document.getElementById('survey-results');
let showResults = document.getElementById('show-results');
let button = document.getElementById('results');
// contructor - for products represented as images to be inserted into page
function Product(name, fileExtension = 'jpg') {
  //name
  this.name = name;
  // image source - of product
  this.src = `../assets/${name}.${fileExtension}`;
  // number of clicks
  this.views = 0;
  // percentage of clicks
  this.clicks = 0;
  //this.percentage = 0;
  // push into array
  allProductsArray.push(this);
}


// executables establishing new instances of objects
new Product('bag', 'jpg');
new Product('banana', 'jpg');
new Product('bathroom', 'jpg');
new Product('boots', 'jpg');
new Product('breakfast', 'jpg');
new Product('bubblegum', 'jpg');
new Product('chair', 'jpg');
new Product('cthulhu', 'jpg');
new Product('dog-duck', 'jpg');
new Product('dragon', 'jpg');
new Product('pen', 'jpg');
new Product('pet-sweep', 'jpg');
new Product('scissors', 'jpg');
new Product('shark', 'jpg');
new Product('tauntaun', 'jpg');
new Product('unicorn', 'jpg');
new Product('water-can', 'jpg');
new Product('wine-glass', 'jpg');
new Product('sweep', 'png');
// functions: randon number generator - three different products
function getRandomIndex() {
  return Math.floor(Math.random() * allProductsArray.length);
}

// console.log(productOneIndex, productTwoIndex, productThreeIndex);
// validation - create unique ID for each product - use loop - parse array to see if included. use array method ''
// define attributes for image - src, alt
//
// console.log('rand nums', indexProd);
// while (productOneIndex === productTwoIndex) {
//   productOneIndex = getRandomIndex();
// }

// while (productThreeIndex === productTwoIndex) {
//   productTwoIndex = getRandomIndex();
// }

// while (productThreeIndex === productOneIndex) {
//   productThreeIndex = getRandomIndex();
// }

function renderImage() {
  let indexProd = [];

  while (indexProd.length < 3) {
    let randNum = getRandomIndex();
    while (!indexProd.includes(randNum)) {
      indexProd.push(randNum);
    }
  }

  let productOneIndex = indexProd.pop();
  let productTwoIndex = indexProd.pop();
  let productThreeIndex = indexProd.pop();

  imageOne.src = allProductsArray[productOneIndex].src;
  imageOne.alt = allProductsArray[productOneIndex].name;
  allProductsArray[productOneIndex].views++;

  imageTwo.src = allProductsArray[productTwoIndex].src;
  imageTwo.alt = allProductsArray[productTwoIndex].name;
  allProductsArray[productTwoIndex].views++;

  imageThree.src = allProductsArray[productThreeIndex].src;
  imageThree.alt = allProductsArray[productThreeIndex].name;
  allProductsArray[productThreeIndex].views++;
  //console.log(allProductsArray[productThreeIndex]);

}

// event handler
function handleImageClicks(e) {
  clicks++;
  let imageClicks = e.target.alt;
  console.log(imageClicks);

  for (let i = 0; i < allProductsArray.length; i++) {
    if (imageClicks === allProductsArray[i].name) {
      allProductsArray[i].clicks++;
    }
  }
  renderImage();
  if (clicks === ATTEMPTS) {
    myContainer.removeEventListener('click', handleImageClicks);
  }

}

function handleShowResults(e) { //eslint-disable-line 
  if (clicks === ATTEMPTS) {
    for (let i = 0; i < allProductsArray.length; i++) {
      let li = document.createElement('li');
      li.textContent = `${allProductsArray[i].name} was viewes ${allProductsArray[i].views} times clicked ${allProductsArray[i].clicks} times`;
      surveyResults.appendChild(li);
      //console.log(surveyResults);
    }
  }
  if (clicks === ATTEMPTS) {
    myContainer.removeEventListener('click', handleShowResults);
  }
}

renderImage();
myContainer.addEventListener('click', handleShowResults);
myContainer.addEventListener('click', handleImageClicks);

// triggered at click the image event
// event listener


//button.addEventListener('click', handleShowResults);



// array for labels - image name [] votes [] views []

// variable for chart data
// const function below
//
