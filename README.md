# Gourmet Grub
This is a full-stack web application for ordering food online aswell as having the option to open your own restaurant. The app allows users to browse a menu, add items to their cart, and place orders.

App deployment:
[Gourmet Grub](https://mern-vite-ts-food-app-frontend.onrender.com/)

# Details
The app is build with [![My Skills](https://skillicons.dev/icons?i=mongo,express,react,nodejs)](https://skillicons.dev) stack.

# Used frameworks and libraries
* server-side - `express, express-validator, mongoose, mongodb, jsonwebtoken, dotenv, cors`
* client-side - `react, react-router-dom, react-query, react-hook-form, lucide-react, auth0, tailwind, zod`

# 🎯 Features
🔐 `User Authentication & Authorization`
* Users can sign up, log in, and manage their accounts securely.
* Authentication is handled via Auth0, ensuring secure login.
* Role-based authorization allows restaurant owners to access management features.

🍽️ `Browse Menu Items Categorized by Type`
* Users can browse menu items filtered by categories (e.g., burgers, pasta, drinks).
* The app fetches real-time menu updates from the database.

🔍 `Search for Nearby Restaurants or Cuisines`
* Users can search restaurants based on location or cuisine type (e.g. manchester, london).
* Searching might take 30-60 seconds for the database to warm up.
* Search results are dynamically fetched from the database.

 🛒 `Add Items to Cart & Update Quantities`
* Users can add menu items to a cart before checkout.
* Quantity adjustments allow users to increase or decrease item amounts.
* The cart updates in real-time for better user experience.
* Checkout is handled all by Stripe.
    
🏪 `Create Your Own Restaurant & Take Orders`
 * Users with owner privileges can register their own restaurant.
 * They can add, update, or remove menu items.
 * The app allows restaurant owners to receive and manage customer orders.
