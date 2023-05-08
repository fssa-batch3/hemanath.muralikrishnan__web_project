let mobile_filter = document.getElementById("mobile_filter");
let show_mobile_filter = document.querySelector(".items");

let mobile_sort_by = document.getElementById("mobile_sort_by");
let show_sort_by = document.querySelector(".sort-items");

show_mobile_filter.style.display = "none";

show_sort_by.style.display = "none";

mobile_filter.addEventListener("click", function () {

    if ((show_mobile_filter.style.display) == "none") {
        show_mobile_filter.style.display = "block";
    }
    else {
        show_mobile_filter.style.display = "none";
    }
})


mobile_sort_by.addEventListener("click", function () {

    if ((show_sort_by.style.display) == "none") {
        show_sort_by.style.display = "block";
    }
    else {
        show_sort_by.style.display = "none";
    }
})

let product_details = JSON.parse(localStorage.getItem("product_list"));

const url = window.location.search;                // ?name=Arun
const urlParams = new URLSearchParams(url);        // converting string into key value pair
const product_cat = urlParams.get("cat");


let filter_array = [];

let url_products = [];

if (product_cat === "00") {

   list_products(product_details)
}

else {
    product_details.filter(function (item) {

        if ((item["category"]["id"] === product_cat) && (item["status"])) {

            url_products.push(item);

        }

        list_products(url_products)
    });

}

let checkboxes = document.querySelectorAll("input[type=checkbox][name=filter_cat]");

checkboxes.forEach(function (checkbox) {

    checkbox.addEventListener('click', function () {

        if (checkbox.checked) {

            filter_array = [];

            let convert_array = Array.from(checkboxes);

            let checked_input = convert_array.filter(i => i.checked);

            let map_input = checked_input.map(i => i.value);

            map_input.forEach(item => {

                product_details.filter(function (obj) {

                    let cat_id = obj.category.id;

                    if (item === cat_id) {

                        filter_array.push(obj);

                        list_products(filter_array);
                    }
                });
            });
        }
        else {
            list_products(product_details);
        }
    });
});

document.getElementById("name_a_to_z").addEventListener("click", function(){

    let i;

    let switching;

    let shouldSwitch;

    let product_container;

    switching = true;

    while (switching) {

        switching = false;

        product_container = document.querySelectorAll(".product-container");

        for (i = 0; i < (product_container.length - 1); i++) {

            shouldSwitch = false;

            if (product_container[i].querySelector(".product_english_name").innerHTML.toLowerCase() > product_container[i + 1].querySelector(".product_english_name").innerHTML.toLowerCase()) {

                shouldSwitch = true;

                break;
            }
        }
        if (shouldSwitch) {

            product_container[i].parentNode.insertBefore(product_container[i + 1], product_container[i]);

            switching = true;
        }
    }


})


document.getElementById("name_z_to_a").addEventListener("click", function(){

    let i;

     let switching;

    let shouldSwitch;

    let product_container;

    switching = true;

    while (switching) {

        switching = false;

        product_container = document.querySelectorAll(".product-container");

        for (i = 0; i < (product_container.length - 1); i++) {

            shouldSwitch = false;

            if (product_container[i].querySelector(".product_english_name").innerHTML.toLowerCase() < product_container[i + 1].querySelector(".product_english_name").innerHTML.toLowerCase()) {

                shouldSwitch = true;

                break;
            }
        }
        if (shouldSwitch) {

            product_container[i].parentNode.insertBefore(product_container[i + 1], product_container[i]);

            switching = true;
        }
    }
})


document.getElementById("cost_high_to_low").addEventListener("click", function(){

    let i;

    let switching;

    let shouldSwitch;

    let product_container;

    switching = true;

    while (switching) {

        switching = false;

        product_container = document.querySelectorAll(".product-container");

        for (i = 0; i < (product_container.length - 1); i++) {

            shouldSwitch = false;

            let one_value = product_container[i].querySelector(".amount").innerHTML.split(" ");
            let two_value = product_container[i + 1].querySelector(".amount").innerHTML.split(" ");


            if (Number(one_value[1]) > Number(two_value[1])) {

                shouldSwitch = true;

                break;
            }
        }
        if (shouldSwitch) {

            product_container[i].parentNode.insertBefore(product_container[i + 1], product_container[i]);

            switching = true;
        }
    }
})


document.getElementById("cost_low_to_high").addEventListener("click", function(){

    let i;

    let switching;

    let shouldSwitch;

    let product_container;

    switching = true;

    while (switching) {

        switching = false;

        product_container = document.querySelectorAll(".product-container");

        for (i = 0; i < (product_container.length - 1); i++) {

            shouldSwitch = false;

            let one_value = product_container[i].querySelector(".amount").innerHTML.split(" ");
            let two_value = product_container[i + 1].querySelector(".amount").innerHTML.split(" ");


            if (Number(one_value[1]) < Number(two_value[1])) {

                shouldSwitch = true;

                break;
            }
        }
        if (shouldSwitch) {

            product_container[i].parentNode.insertBefore(product_container[i + 1], product_container[i]);

            switching = true;
        }
    }
})







