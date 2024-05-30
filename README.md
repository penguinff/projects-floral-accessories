# Floral Accessories E-commerce

![image](https://github.com/penguinff/readme_pictures/blob/4be7e13869f5da9260c21c8c451702c182656b3a/floral-accessories/homepage5.gif)

## Web Demo

https://floral-accessories.christinefong.site/

## Introduction

This website is a front-end practice project.

### Main Features

- Front-end:

  - Product display
  - Shopping cart functionality
  - Wishlist functionality
  - User registration and login
  - View my account
  - Place orders and checkout

- Linked to **Firebase** backend services:
  - Manage new user registration and login using **Authentication**
  - Store product information, user data, and order records using **Firestore**
  - Admin can easily add/delete/modify listed products and view user orders
  - Save user shopping cart items and wishlist to the cloud, allowing users to manage on any device
  - Build cloud backend using **Cloud Functions** to integrate **Stripe** payment API

### Main Practices

- React
- React Router
- Redux
- Redux-Saga
- Integrating Firebase
- Integrating Stripe payment API
- CSS using CSS modules & Sass
- Responsive Web Design (this website can be viewed on any device)

## Website Content Introduction

### 1. Promotion Carousel

- Add promotional images for website activities, switching every 8 seconds. Users can also switch to the content they are interested in.

  ![image](https://github.com/penguinff/readme_pictures/blob/bb5f466a2b1e53f8dbf005d7da9519687cee986c/floral-accessories/carousel.PNG)

### 2. Latest Products

- Automatically fetch the latest two items from each category from Firestore, totaling 12 latest products.

  ![image](https://github.com/penguinff/readme_pictures/blob/bb5f466a2b1e53f8dbf005d7da9519687cee986c/floral-accessories/new_arrival.PNG)

### 3. Breadcrumb Navigation

- Inform users of their current location
- Return to the main category page through breadcrumb links, improving website usability
- Enhance SEO

  ![image](https://github.com/penguinff/readme_pictures/blob/bb5f466a2b1e53f8dbf005d7da9519687cee986c/floral-accessories/breadcrumb.PNG)

### 4. Product Preview

- Allow users to preview part of each product, attracting them to browse the category page

  ![image](https://github.com/penguinff/readme_pictures/blob/bb5f466a2b1e53f8dbf005d7da9519687cee986c/floral-accessories/shoppage.PNG)

### 5. Product Details

- Detailed introduction of a single product
- Product images can be zoomed in
- More images can be added below if needed

  ![image](https://github.com/penguinff/readme_pictures/blob/bb5f466a2b1e53f8dbf005d7da9519687cee986c/floral-accessories/productpage.PNG)

### 6. My Wishlist

- Users can add products to their wishlist for future purchase

  ![image](https://github.com/penguinff/readme_pictures/blob/bb5f466a2b1e53f8dbf005d7da9519687cee986c/floral-accessories/add_wishlist.png)

### 7. My Shopping Cart

- When products are added to the shopping cart on the desktop version, a prompt will appear on the top right cart list
- In the cart page, users can adjust the quantity or delete products

  ![image](https://github.com/penguinff/readme_pictures/blob/bb5f466a2b1e53f8dbf005d7da9519687cee986c/floral-accessories/cartpage.PNG)

### 8. Checkout Information

- An order summary allows users to clearly see the quantity, amount, and shipping cost of the products they are about to order
- After entering recipient information, users can confirm the content is correct, and if necessary, click edit to go back to the previous page

  ![image](https://github.com/penguinff/readme_pictures/blob/bb5f466a2b1e53f8dbf005d7da9519687cee986c/floral-accessories/checkoutpage1.PNG)
  ![image](https://github.com/penguinff/readme_pictures/blob/bb5f466a2b1e53f8dbf005d7da9519687cee986c/floral-accessories/checkoutpage2.PNG)

### 9. User Registration and Login

- Users can register and log in using email or OAuth via Google/Facebook

  ![image](https://github.com/penguinff/readme_pictures/blob/bb5f466a2b1e53f8dbf005d7da9519687cee986c/floral-accessories/signin_signup_page.PNG)

- After logging in, the shopping cart, wishlist, and order records will be saved to Firestore, making it convenient for users to browse on different devices

  ![image](https://github.com/penguinff/readme_pictures/blob/bb5f466a2b1e53f8dbf005d7da9519687cee986c/floral-accessories/wishlist.PNG)
  ![image](https://github.com/penguinff/readme_pictures/blob/bb5f466a2b1e53f8dbf005d7da9519687cee986c/floral-accessories/order_history.PNG)

### 10. Sidebar Menu

- The sidebar menu is especially suitable for mobile browsing

  <img src='https://github.com/penguinff/readme_pictures/blob/bb5f466a2b1e53f8dbf005d7da9519687cee986c/floral-accessories/m_sidenav.jpeg' width='375px'/>

### 11. Responsive Web Design

- This website has page adjustments for different resolutions
- Users can browse on any device, from desktop to mobile, with the best user experience

  <img src='https://github.com/penguinff/readme_pictures/blob/bb5f466a2b1e53f8dbf005d7da9519687cee986c/floral-accessories/m_homepage.jpeg' width='375px'/>

### 12. Internationalization
- User can choose either English or Chinese version of the website.

## Plugins Used

- react-transition-group (React transition animation)
- react-multi-carousel (slidable slideshow)
- react-magnifier (product image magnifier feature)
- react-i18next (internationalization)

## Production Time

- About 20 working days

## Image Sources

- Unsplash <https://unsplash.com/>