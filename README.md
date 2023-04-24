## AgroKart/100 Days Project

## [![Bugs](https://sonarcloud.io/api/project_badges/measure?project=fssa-batch3_hemanath.muralikrishnan__web_project&metric=bugs)](https://sonarcloud.io/summary/new_code?id=fssa-batch3_hemanath.muralikrishnan__web_project)

## [![Netlify Status](https://api.netlify.com/api/v1/badges/12615b8a-9902-49c1-b80a-b71f76ef75d7/deploy-status)](https://app.netlify.com/sites/agrokart/deploys)

## About AgroKart 

Agriculture is the backbone of India. We all know how the farmers are facing many issues at this time. I am going to create a web application to help farmers. The major problem faced by farmers was that they couldn’t get fair prices for their vegetables and fruits. And also, they are facing transportation problems while getting cultivated vegetables and selling them in the market. They need four-wheeler vehicles to bring the produced vegetables to the wholesale market or daily market. If the cultivated crops are in massive amounts. 

-> Problem Statement: https://docs.google.com/document/d/1AHPBYm2fnF4bNKjW-cPdkb6QdeSP4ChR05ZG6O7hMwA/edit?usp=share_link

-> Market Research : https://docs.google.com/document/d/1cqMkg-4VtnFtgnth94iG6FW-bwfc19BZL1a7Q0YpXpA/edit?usp=share_link

-> User Flow: https://drive.google.com/file/d/1HeQi3UNsgJjKxJ3PNX1WQPWRB70A-PuQ/view?usp=sharing

-> Wireframe: https://drive.google.com/file/d/14D6dNG8daewqX7rU0vSFeyGTitoul7YU/view?usp=sharing

-> Live Website: https://fssa-batch3.github.io/hemanath.muralikrishnan__web_project/

<hr>

# E-commerce

## Buyer

### Create an account[Completed]
- Scenario 1: Successfully create an account.
    - Steps:
        1. Navigate to the registration page.
        2. Enter the required information such as first name,last name, email, mobile number and password.
        3. Click the "Sign Up" button.
    - Expected Result:
        - The user is redirected to the login page.

### Create an account[Completed]
- Scenario 1: Successfully login in to account.
    - Steps:
        1. Navigate to the login page.
        2. Enter the required information such as email, and password.
        3. Click the "Continue" button.
    - Expected Result:
        - The user is redirected to the home page of the website.

### Profile Account[Completed]
- Scenario 1: Successfully created a new profile account.
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the user index page.
        3. Click on the "My Account" option in the nav.
    - Expected Result:
        - The user is redirected to the Personal Information page.

### Edit Profile Account[Completed]
- Scenario 1: Successfully read data in profile account.
    - Steps:
        1. Navigate to the user index page.
        2. If the user wants to edit their profile.
        3. Click "Edit" Button.
    - Expected Result:
        - When the user click on the edit button expect email id input all other input disabled to enter the details.
        - The user is able to edit the details on the page.

### Update Profile Account[Completed]
- Scenario 1: Successfully read data in profile account.
    - Steps:
        1. The user can enter the updated details on the disabled input.
        2. Enter the required information such as first name, last name and mobile number.
        3. Click "save" Button.
    - Expected Result:
        - The user is able to see the updated details on the input field in the profile page.

### Add address on the profile page[Completed]
- Scenario 1: Successfully create the address on the profile page.
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the user index page.
        3. Click on the "My Account" option in the nav.
        4. In the profile the user can see the "add address" button.
        5. While click on the button the address form will popup.
        6. In that popup form the user want to enter the street, district and pincode of the district.
        7. After the entering the above details the user can save the address.
        8. If will shown on the address section in the profile page.
    - Expected Result:
        - Address was created successfully and shown in the profile addressn section.

### Update address on the profile page[Completed]
- Scenario 1: Successfully update the address on the profile page.
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the user index page.
        3. Click on the "My Account" option in the nav.
        4. In the profile the user can see the "add address" button.
        5. While click on the button the address form will popup.
        6. In that popup form the user want to enter the street, district and pincode of the district.
        7. After the entering the above details the user can save the address.
        8. If will shown on the address section in the profile page.
    - Expected Result:
        - Address was created successfully and shown in the profile addressn section.

### Delete address on the profile page[Completed]
- Scenario 1: Successfully delete the address on the profile page.
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the user index page.
        3. Click on the "My Account" option in the nav.
        4. In the address section you can see the already created address with the menus.
        5. In the menu you have two option one is "Edit" and another one is "Delete".
        6. Using the delete options user can delete the address.
    - Expected Result:
        - Particulary address was deleted successfully.

### View products/items[Completed]
- Scenario 1: Successfully view products/items.
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the product listing page.
        3. View the list of available products/items.
    - Expected Result:
        - The user can view the list of available products/items.

### View product/item details[Completed]
- Scenario 1: Successfully view product/item details.
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the product listing page.
        3. Select a product/item to view its details.
    - Expected Result:
        - The user can view the details of the selected product/item.


### Add product/item to wishlist[Completed]
- Scenario 1: Successfully add product/item to wishlist.
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the product listing page.
        3. Select a product/item to wishlist.
        4. Click the "heart" icon.
    - Expected Result:
        - The product/item is added to the user's wishlist.

### View items in wishlist[Completed]
- Scenario 1: Successfully view items in wishlist.
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the wishlist page.
        3. View the list of items in the wishlist.
    - Expected Result:
        - The user can view the list of items in the wishlist.

### Remove item from wishlist[Completed]
- Scenario 1: Successfully remove item from wishlist.
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the wishlist page.
        3. Remove the selected item from the wishlist.
    - Expected Result:
        - The item is removed from the user's wishlist.

### Add product to cart[Completed]
- Scenario 1: Successfully add product to the cart.
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the product listing page or product indiviudal page.
        3. Select the "product quantity" and "number of quantity" you want.
        4. Click on the "cart" icon to add the product to the cart.
    - Expected Result:
        - The product is added to cart.

### Update product on cart[Completed]
- Scenario 1: Successfully update product on the cart.
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the cart page.
        3. The user can see the products that are already added to cart.
        4. In the cart for the each product you can the quantity updates button.
        5. Using plus icon the user can increase the quantity of the product.
        6. Using minus icon the user can decrease the quantity of the product.
        7. And also for the each product subtotal was increased regarding the quanatity given.
        8. And also total was shown regarding the subtotal for the each product.
    - Expected Result:
        - The product quantity was updated in the cart successfully.

### Delete product on cart[Completed]
- Scenario 1: Successfully delete product on the cart.
    - Steps:
        1. Log in as a buyer.
        2. Navigate to the cart page.
        3. The user can see the products that are already added to cart.
        4. For the each product you can see the "delete" icon.
        5. Using the delete icon user can delete the particular cart product.
    - Expected Result:
        - Successfully deleted the cart product on the cart page.

        







