let add_city_arr = JSON.parse(localStorage.getItem("add_city")) ?? {"chennai":[]};

// form elements from the html
let add_city_form = document.getElementById("add-city-form");
let select_city = document.getElementById("select-city");

let area_name = document.getElementById("area-name");
let area_pincode = document.getElementById("pincode-input");

// creating table to append the data from add city
let table_tr = document.createElement("tr");
document.querySelector(".body_table").appendChild(table_tr);

let sn_td = document.createElement("td");
table_tr.appendChild(sn_td);

let location_td = document.createElement("td")
table_tr.appendChild(location_td);

let area_name_td = document.createElement("td");
table_tr.appendChild(area_name_td);

let pincode_td = document.createElement("td");
table_tr.appendChild(pincode_td);

let td_edit = document.createElement("td");
table_tr.appendChild(td_edit);


let td_delete = document.createElement("td");
table_tr.appendChild(td_delete);


add_city_form.addEventListener("submit", function(e){

    e.preventDefault();

    let select_city_value = select_city.value;
    let area_name_input = area_name.value.trim();
    let pincode_input = area_pincode.value.trim();

    if(select_city_value != "no"){

        let city_obj = {
            "area_id" : pincode_input,
            "area_name": area_name_input,
            "area_pincode" : pincode_input
        }


        add_city_arr[select_city_value].push(city_obj);

       Notify.success("Area added");

        localStorage.setItem("add_city_arr", JSON.stringify(add_city_arr));

        add_city_form.reset();

       
    }

    else {

        Notify.error("Please select district");

    }

})