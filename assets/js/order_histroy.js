let user_records = JSON.parse(localStorage.getItem("users"));

// user logged_in value
let user_details = localStorage.getItem("logged_in");

let order_histroy = JSON.parse(localStorage.getItem("order_histroy"));

let user_id;

if (user_records !== null) {

    user_records.find(function (obj) {

        if (user_details === obj.emailid) {

            user_id = obj.user_id;

            return user_id;


        }
    });
}


order_histroy.filter(function (obj) {

    if (user_id == obj.user_id) {


        let main_contianer = document.createElement("div");
        main_contianer.setAttribute("class", "main-container");
        document.querySelector(".container_card").appendChild(main_contianer);

        let head_div = document.createElement("div");
        head_div.setAttribute("class", "head");
        main_contianer.appendChild(head_div);


        let head_contents_div = document.createElement("div");
        head_contents_div.setAttribute("class", "head-contents");
        head_contents_div.innerHTML = `<p>${obj.order_histroy.length} products</p>
<p>₹${obj.total_amount}</p>
<p>Processing</p>`
        head_div.appendChild(head_contents_div);


        let when_coming = document.createElement("p");
        when_coming.innerHTML = `${obj.which_day}`;
        head_div.appendChild(when_coming);

        let angle_down = document.createElement("div");
        angle_down.setAttribute("class", "fas fa-angle-down arrow");
        head_div.appendChild(angle_down);


        let other_contents = document.createElement("div");
        other_contents.setAttribute("class", "other-contents");
        main_contianer.appendChild(other_contents);

        let ord_histroy = obj.order_histroy;

        for (let j = 0; j < ord_histroy.length; j++) {

            let many_contents = document.createElement("div");
            many_contents.setAttribute("class", "many_contents");
            other_contents.appendChild(many_contents);

            let many_images = document.createElement("div");
            many_images.setAttribute("class", "many_images");
            many_contents.appendChild(many_images);

            let many_img = document.createElement("img");
            many_img.setAttribute("src", `${ord_histroy[j].product_details.image.source}`);
            many_img.setAttribute("alt", `image of ${ord_histroy[j].product_details.image.alt}`);
            many_images.appendChild(many_img);

            let p_name = document.createElement("p");
            p_name.innerHTML = `${ord_histroy[j].product_details.name.eng}`
            many_images.appendChild(p_name);

            let p_qty = document.createElement("p");
            p_qty.innerHTML = `<b>Qty:</b> ${ord_histroy[j].product_details.selected_qty.qty} ${ord_histroy[j].product_details.selected_qty.unit}`
            many_images.appendChild(p_qty);

            let p_unit_price = document.createElement("p");
            p_unit_price.innerHTML = `₹ ${ord_histroy[j].product_details.selected_qty.rs}`;
            many_contents.appendChild(p_unit_price);

            // let how_many_qty = document.createElement("p");
            // how_many_qty.innerHTML = `20kg`
            // many_contents.appendChild(how_many_qty);
        }

        head_div.addEventListener('click', function () {
            if (other_contents.style.display === 'none') {
                other_contents.style.display = 'block';
                angle_down.classList.remove('fa-angle-down');
                angle_down.classList.add('fa-angle-up');
            } else {
                other_contents.style.display = 'none';
                angle_down.classList.remove('fa-angle-up');
                angle_down.classList.add('fa-angle-down');
            }
        });



    }
})




