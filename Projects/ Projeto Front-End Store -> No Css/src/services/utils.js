localStorage.setItem('products', JSON.stringify([]));
localStorage.setItem('quantifyProducts', 0)

export const saveProductIntoShoppingCart = (itemCart) => {
  let products = JSON.parse(localStorage.getItem('products'));
  products = [...products, itemCart];
  localStorage.setItem('products', JSON.stringify(products));
};

export const picksUpItemsFromTheCartInLocalStorage = () => {
  const products = JSON.parse(localStorage.getItem('products'));
  return products;
};

export const increaseQuantifyProductsInCart = () => {
  const products = localStorage.getItem('quantifyProducts')
  console.log(products)
  return localStorage.setItem('quantifyProducts', parseInt(products) + 1 )
}
