export function updateDataSource(updatedData) {
  localStorage.setItem('cartItems', JSON.stringify(updatedData))
}

export function formatCurrency(price) {
  
  let currencyFormatter = new Intl.NumberFormat(undefined, {
    currency: "USD",
    style: "currency",
  })  
  return currencyFormatter.format(price)
}