// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  
  let unitPriceValue = product.querySelector('.price span')
  let price = (unitPriceValue.innerText)

  let quantityValue = product.querySelector('.quantity input')
  let quantity =(quantityValue.value)

  let subtotal = quantity * price;
  let subtotalValue = product.querySelector('.subtotal span');

  subtotalValue.innerText = subtotal
  return subtotal
}
// ITERATION 2
function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const productsElements= document.querySelectorAll('.product');
  let subtotal = updateSubtotal(productsElements[0]);
  let totalElement = document.querySelector('#total-value span');
  totalElement.innerText = subtotal;
  
  // end of test

    // ITERATION 3
 // let sumatorio = 0;
  //const allItems = document.querySelectorAll('.product');
    //allItems.forEach((item) => {
      //let subtotal = updateSubtotal(item)
      //let sumatorio += subtotal
  //console.log(subtotal)
//})

  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
