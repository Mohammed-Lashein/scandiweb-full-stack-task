export function updateDataSource(updatedData) {
  sessionStorage.setItem('cartItems', JSON.stringify(updatedData))
}

export function formatCurrency(price) {
  console.log(price);
  
  let currencyFormatter = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency",
  })
  console.log('formatted price from the fn');
  console.log(currencyFormatter.format(price));
  
  return currencyFormatter.format(price)
}