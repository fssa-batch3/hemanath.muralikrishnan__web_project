const order_histroy = JSON.parse(localStorage.getItem("order_histroy"));
console.log(order_histroy);
function check_user_histroy() {

  let check_histroy = false;

  if (order_histroy !== null) {

    order_histroy.find(function (obj) {

      if (user_id === obj.user_id) {

        check_histroy = true;

        
      }

      return check_histroy;
    });

    show_histroy(check_histroy);
  }

  else{

    show_histroy(check_histroy);
  }
}

function show_histroy(check_histroy){

  let histroy_count = 0;

  if(check_histroy){

    order_histroy.filter(function(obj){

      if(user_id === obj.user_id){

        histroy_count++;

        append_histroy(obj);

        return histroy_count;
      }
    });
  }

  else {

    document.querySelector(".container_card").innerHTML = `<h1>No order histroy</h1>`

  }

}


function append_histroy(obj){

  const main_contianer = document.createElement("div");
  main_contianer.setAttribute("class", "main-container");
  document.querySelector(".container_card").appendChild(main_contianer);

  const head_div = document.createElement("div");
  head_div.setAttribute("class", "head");
  head_div.innerHTML = `<p>${obj.order_histroy.length} products</p>
      <p>₹${obj.total_amount}</p>
      <p>Processing</p>`;
  main_contianer.appendChild(head_div);

  const when_coming = document.createElement("p");
  when_coming.innerHTML = `${obj.which_day}`;
  head_div.appendChild(when_coming);

  const angle_down = document.createElement("div");
  angle_down.setAttribute("class", "fas fa-angle-down arrow");
  head_div.appendChild(angle_down);

  const demo_p = document.createElement("p");
  demo_p.setAttribute("class", "order_deliver");
  demo_p.innerHTML = `<b>Delivery Addresss:</b> ${obj.delivery_address.street} ${obj.delivery_address.district} ${obj.delivery_address.state} ${obj.delivery_address.pincode}`;
  main_contianer.append(demo_p);

  const other_contents = document.createElement("div");
  other_contents.setAttribute("class", "other-contents");
  main_contianer.appendChild(other_contents);

  const ord_histroy = obj.order_histroy;

  for (let j = 0; j < ord_histroy.length; j++) {
    const many_contents = document.createElement("div");
    many_contents.setAttribute("class", "many_contents");
    other_contents.appendChild(many_contents);

    const many_images = document.createElement("div");
    many_images.setAttribute("class", "many_images");
    many_contents.appendChild(many_images);

    const many_img = document.createElement("img");
    many_img.setAttribute(
      "src",
      `${ord_histroy[j].product_details.image.source}`
    );
    many_img.setAttribute(
      "alt",
      `image of ${ord_histroy[j].product_details.image.alt}`
    );
    many_images.appendChild(many_img);

    const p_name = document.createElement("p");
    p_name.innerHTML = `${ord_histroy[j].product_details.name.eng}`;
    many_images.appendChild(p_name);

    const p_qty = document.createElement("p");
    p_qty.innerHTML = `<b>Qty:</b> ${ord_histroy[j].product_details.selected_qty.qty} ${ord_histroy[j].product_details.selected_qty.unit}`;
    many_images.appendChild(p_qty);

    const p_unit_price = document.createElement("p");
    p_unit_price.innerHTML = `₹ ${ord_histroy[j].product_details.selected_qty.rs}`;
    many_contents.appendChild(p_unit_price);

    // let how_many_qty = document.createElement("p");
    // how_many_qty.innerHTML = `20kg`
    // many_contents.appendChild(how_many_qty);
  }

  head_div.addEventListener("click", () => {
    if (other_contents.style.display === "none") {
      other_contents.style.display = "block";
      angle_down.classList.remove("fa-angle-down");
      angle_down.classList.add("fa-angle-up");
    } else {
      other_contents.style.display = "none";
      angle_down.classList.remove("fa-angle-up");
      angle_down.classList.add("fa-angle-down");
    }
  });

}

check_user_histroy();

