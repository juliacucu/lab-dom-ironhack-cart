// ITERATION 1

function updateSubtotal(product) {
  console.log(product)
  let unitPriceValue = product.querySelector('.price span')
  let price = (unitPriceValue.innerText)

  let quantityValue = product.querySelector('.quantity input')
  let quantity =(quantityValue.value)

  let subtotal = quantity * price;
  let subtotalValue = product.querySelector('.subtotal span');

  subtotalValue.innerText = subtotal
  return subtotal
}

function calculateAll() {
  // ITERATION 2
  const rowProducts = document.querySelectorAll('.product');
  let totalPrices = 0
  
  rowProducts.forEach(product => {
    updateSubtotal(product)
    let subtotalPrices = product.querySelector('.subtotal span')
    totalPrices = totalPrices + Number(subtotalPrices.innerText)
  });

  document.querySelector('#total-value span').innerText = totalPrices

  // ITERATION 3
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
