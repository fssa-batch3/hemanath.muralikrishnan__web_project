import { list_products } from "./appen_card.js";

const mobile_filter = document.getElementById("mobile_filter");
const show_mobile_filter = document.querySelector(".items");

const mobile_sort_by = document.getElementById("mobile_sort_by");
const show_sort_by = document.querySelector(".sort-items");

show_mobile_filter.style.display = "none";

show_sort_by.style.display = "none";

mobile_filter.addEventListener("click", () => {
  if (show_mobile_filter.style.display === "none") {
    show_mobile_filter.style.display = "block";
  } else {
    show_mobile_filter.style.display = "none";
  }
});

mobile_sort_by.addEventListener("click", () => {
  if (show_sort_by.style.display === "none") {
    show_sort_by.style.display = "block";
  } else {
    show_sort_by.style.display = "none";
  }
});

const product_details = JSON.parse(localStorage.getItem("product_list"));

const url = window.location.search; // ?name=Arun
const urlParams = new URLSearchParams(url); // converting string into key value pair
const product_cat = urlParams.get("cat");

if (product_cat === "00") {
  list_products(product_details);
} else {
  const url_products = product_details.filter((item) => {
    if (item.category.id === product_cat && item.status) {
      return true;
    }
    return false;
  });

  list_products(url_products);
}

const checkboxes = document.querySelectorAll(
  "input[type=checkbox][name=filter_cat]"
);

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      const convert_array = Array.from(checkboxes);

      const checked_input = convert_array.filter((i) => i.checked);

      const map_input = checked_input.map((i) => i.value);

      map_input.forEach((item) => {
        const filter_array = product_details.filter((obj) => {
          const cat_id = obj.category.id;

          return item === cat_id;
        });

        list_products(filter_array);
      });
    } else {
      list_products(product_details);
    }
  });
});

// sortby for desktop and mobile

const sort_opt = document.querySelectorAll('input[name="sort_by_in_cat"]');

sort_opt.forEach((item) => {
  item.addEventListener("click", (e) => {
    if (item.value === "name_a_to_z") {
      name_a_to_z();
    } else if (item.value === "name_z_to_a") {
      name_z_to_a();
    } else if (item.value === "cost_high_to_low") {
      cost_high_to_low();
    } else {
      cost_low_to_hi();
    }
  });
});

function name_a_to_z() {
  let i;

  let switching;

  let shouldSwitch;

  let product_container;

  switching = true;

  while (switching) {
    switching = false;

    product_container = document.querySelectorAll(".product-container");

    for (i = 0; i < product_container.length - 1; i++) {
      shouldSwitch = false;

      if (
        product_container[i]
          .querySelector(".product_english_name")
          .innerHTML.toLowerCase() >
        product_container[i + 1]
          .querySelector(".product_english_name")
          .innerHTML.toLowerCase()
      ) {
        shouldSwitch = true;

        break;
      }
    }
    if (shouldSwitch) {
      product_container[i].parentNode.insertBefore(
        product_container[i + 1],
        product_container[i]
      );

      switching = true;
    }
  }
}

function name_z_to_a() {
  let i;

  let switching;

  let shouldSwitch;

  let product_container;

  switching = true;

  while (switching) {
    switching = false;

    product_container = document.querySelectorAll(".product-container");

    for (i = 0; i < product_container.length - 1; i++) {
      shouldSwitch = false;

      if (
        product_container[i]
          .querySelector(".product_english_name")
          .innerHTML.toLowerCase() <
        product_container[i + 1]
          .querySelector(".product_english_name")
          .innerHTML.toLowerCase()
      ) {
        shouldSwitch = true;

        break;
      }
    }
    if (shouldSwitch) {
      product_container[i].parentNode.insertBefore(
        product_container[i + 1],
        product_container[i]
      );

      switching = true;
    }
  }
}

function cost_high_to_low() {
  let i;

  let switching;

  let shouldSwitch;

  let product_container;

  switching = true;

  while (switching) {
    switching = false;

    product_container = document.querySelectorAll(".product-container");

    for (i = 0; i < product_container.length - 1; i++) {
      shouldSwitch = false;

      const one_value = product_container[i]
        .querySelector(".amount")
        .innerHTML.split(" ");
      const two_value = product_container[i + 1]
        .querySelector(".amount")
        .innerHTML.split(" ");

      if (Number(one_value[1]) > Number(two_value[1])) {
        shouldSwitch = true;

        break;
      }
    }
    if (shouldSwitch) {
      product_container[i].parentNode.insertBefore(
        product_container[i + 1],
        product_container[i]
      );

      switching = true;
    }
  }
}

function cost_low_to_hi() {
  let i;

  let switching;

  let shouldSwitch;

  let product_container;

  switching = true;

  while (switching) {
    switching = false;

    product_container = document.querySelectorAll(".product-container");

    for (i = 0; i < product_container.length - 1; i++) {
      shouldSwitch = false;

      const one_value = product_container[i]
        .querySelector(".amount")
        .innerHTML.split(" ");
      const two_value = product_container[i + 1]
        .querySelector(".amount")
        .innerHTML.split(" ");

      if (Number(one_value[1]) < Number(two_value[1])) {
        shouldSwitch = true;

        break;
      }
    }
    if (shouldSwitch) {
      product_container[i].parentNode.insertBefore(
        product_container[i + 1],
        product_container[i]
      );

      switching = true;
    }
  }
}
