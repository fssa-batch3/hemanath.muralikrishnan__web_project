// setting the created products on the localstorage if it is not set

const get_products = JSON.parse(localStorage.getItem("product_list"));

function append_products() {
  if (get_products) {
    return false;
  }

  else {

    fetch("product_json.json")
    .then(res => res.json())
    .then(data => {
    // Store the products in a new variable
    const products = data;

    // Use the 'products' variable as needed
    localStorage.setItem("product_list", JSON.stringify(products));
    // You can perform further operations with the 'products' variable here
  });

  }

  return true;
}

append_products();
