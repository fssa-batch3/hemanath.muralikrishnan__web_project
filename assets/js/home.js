import { list_products } from "./product_curd/appen_card.js";

const product_details = JSON.parse(localStorage.getItem("product_list"));

const some_products = [];

// some products should present in the index page

for (let i = 0; i < 20; i++) {
  if (product_details[i + 7].status) {
    some_products.push(product_details[i + 7]);
  }
}

list_products(some_products);


