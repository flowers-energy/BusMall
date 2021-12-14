'use strict';

// global variables

const allProductsArray = [];

// global counter - CHANGE TO 25 BEFORE SUBMISSION!!!
// array of products - all product array
let totalSelection = 5;
// window into DOM - declare variables
let container = document.getElementById('container');
let imageOne = document.getElementById('image-one');
let imageTwo = document.getElementById('image-two');
let imageThree = document.getElementById('image-three');
let surveyResults = document.getElementById('survey-results');
let showResults = document.getElementById('show-results');
// contructor - for products
function Product(name, fileExtension= 'jpg') {
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


// executables
new Product('bag', 'jpg');
new Product('banana', 'jpg');
new Product('bathroom', 'jpg');
new Product('boots', 'jpg');
new Product('breakfast', 'jpg');
new Product('bubblegum', 'jpg');
new Product('chair', 'jpg');
new Product('cthulu', 'jpg');
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

let productOneIndex = getRandomIndex();
let productTwoIndex = getRandomIndex();
let productThreeIndex = getRandomIndex();
console.log(productOneIndex, productTwoIndex, productThreeIndex);
// validation - create unique ID for each product - use loop - parse array to see if included. use array method ''
// define attributes for image - src, alt
//
while (productOneIndex === productTwoIndex) {
  productTwoIndex = getRandomIndex();
}

function renderImages() {
  imageOne.src = allProductsArray[productOneIndex].src;
  imageOne.alt = allProductsArray[productOneIndex].src;
  allProductsArray[productOneIndex].views++;

  imageTwo.src = allProductsArray[productTwoIndex].src;
  imageTwo.alt = allProductsArray[productTwoIndex].src;
  allProductsArray[productTwoIndex].views++;

  imageThree.src = allProductsArray[productThreeIndex].src;
  imageThree.alt = allProductsArray[productThreeIndex].src;
  allProductsArray[productThreeIndex].views++;

}
renderImages();
// event handler
// triggered at click the image event 
// event listener




