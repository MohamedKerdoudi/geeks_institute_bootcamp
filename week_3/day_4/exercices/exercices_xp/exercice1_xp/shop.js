import { find } from './products';

function findProduct(productName) {
  const product = find(p => p.name === productName);

  if (product) {
    console.log("Product Found:");
    console.log(product);
  } else {
    console.log("Product not found");
  }
}

findProduct("Laptop");
findProduct("Shoes");
findProduct("Tablet");