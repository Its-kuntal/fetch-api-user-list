# 📡 Fetch and Display User Data from a Public API

A modern, responsive web application that **fetches user data** from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users) using JavaScript's **Fetch API** and displays it in a beautifully styled UI with search, reload, and scroll-to-top features.

---

## 🚀 Features

* **Real-time API Fetching** – Retrieves live data from a public API.
* **Responsive UI** – Works seamlessly across desktop, tablet, and mobile devices.
* **Tailwind CSS Styling** – Clean, modern design with hover effects and animations.
* **Search Functionality** – Filter users by name, email, or address.
* **Reload Button** – Instantly refetch and update data.
* **Scroll-to-Top Button** – Smooth scroll back to the top of the page.
* **Error Handling** – Displays friendly messages when the network fails.
* **Loading Indicator** – Animated spinner while fetching data.

---

## 🛠️ Technologies Used

* **HTML5** – Structure and semantic markup
* **CSS3** – Custom styling with animations
* **Tailwind CSS** – Utility-first CSS framework
* **JavaScript (ES6+)** – Fetch API, DOM manipulation, event handling
* **Font Awesome** – Icons for UI elements
* **Google Fonts** – Inter font for modern typography
* **JSONPlaceholder API** – Mock REST API for testing

---

## 📂 Project Structure

```
📁 project-folder
 ├── index.html       # Main HTML structure
 ├── style.css        # Custom CSS styles and animations
 ├── script.js        # Fetch API logic, event handlers, UI updates
 └── README.md        # Project documentation
```

---

## ⚙️ Installation & Setup

1. **Clone or Download** this repository:

   ```bash
   git clone https://github.com/yourusername/fetch-api-users.git
   ```

2. **Open the project folder** in VS Code or your preferred editor.

3. **Run the project**:

   * Simply open `index.html` in your browser.
   * Or use **Live Server** extension in VS Code for auto-reload.

---

## 📜 Usage Guide

1. On page load, the app will:

   * Display a **loading spinner**.
   * Fetch user data from the API.
   * Render user cards with **name**, **email**, and **address**.

2. **Search Users**:

   * Type in the search bar to filter results in real-time.

3. **Reload Data**:

   * Click the "Reload Data" button to fetch fresh API data.

4. **Scroll to Top**:

   * Scroll down and click the round arrow button to smoothly go back up.

5. **Test Error Handling**:

   * Disconnect internet and click reload to see the error message.

---

## 💡 Learning Outcomes

By building this project, you will:

* Understand **asynchronous JavaScript** with `async/await`.
* Learn **Fetch API** for making network requests.
* Parse and display **JSON** data.
* Implement **real-time search filtering**.
* Create **responsive layouts** with Tailwind CSS.
* Handle **network errors gracefully**.

---

## 🖇 API Reference

**Endpoint:**

```
GET https://jsonplaceholder.typicode.com/users
```

**Returns:**
An array of user objects containing:

* `name`
* `email`
* `address` (street, suite, city, zipcode)

---

