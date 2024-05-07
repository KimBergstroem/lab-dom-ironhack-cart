// ITERATION 1

function updateSubtotal(product) {
  const price = parseFloat(product.querySelector('.price span').innerText);
  const quantity = parseInt(product.querySelector('input[type="number"]').value);
  const subtotal = product.querySelector('.subtotal span');
  const totalSum = quantity * price;
  subtotal.innerHTML = totalSum.toFixed(2);
  return totalSum;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // ITERATION 2
  const products = document.getElementsByClassName("product");
  let totalValue = 0;
  for(let product of products){
    totalValue += updateSubtotal(product);
  }

  // ITERATION 3
  document.querySelector("#total-value span").innerText = totalValue;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log(target);

  const row = target.parentNode.parentNode;
  console.log(row);

  const parent = row.parentNode;
  console.log(parent);

  parent.removeChild(row);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  const productPrice = parseFloat(document.querySelector('tfoot input[type="number"]').value);
  const productName = document.querySelector('tfoot input[type="text"]').value;

  const newRow = document.createElement('tr');
  newRow.className = "product";

  newRow.innerHTML = `
    <td class="name">${productName}</td>
    <td class="price">$<span>${productPrice.toFixed(2)}</span></td>
    <td class="quantity"><input type="number" value="0" min="0" placeholder="Quantity" /></td>
    <td class="subtotal">$<span>0.00</span></td>
    <td class="action"><button class="btn btn-remove">Remove</button></td>
  `;
  
  const tableBody = document.querySelector('tbody');
  tableBody.appendChild(newRow);

  // Attach event listener to the remove button
  newRow.querySelector('.btn-remove').addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach(button => button.addEventListener("click", removeProduct));

  const addProductBtn = document.getElementById('create');
  addProductBtn.addEventListener('click', createProduct);
});
