# Etch A Sketch

This project is an interactive digital drawing board created as part of the **The Odin Project** curriculum. Users can draw on a pixel grid by moving the mouse, resize the grid, and enjoy dynamic RGB color effects.

---

## 🔗 Live Demo

[Click here to view the live demo](https://ikram-muhr.github.io/odin-foundations-course/04-etch-a-sketc/)

---

## 🚀 Key Features

- **Dynamic Grid:** Creates a grid of squares (default 16x16) entirely using JavaScript.
- **Custom Size:** Users can change the grid size using the reset button (maximum 100x100).
- **Rainbow Effect (RGB):** Each square generates a random color whenever the mouse hovers over it.
- **Progressive Darkening:** A gradual darkening effect of 10% each t   ime a square is touched, until it becomes a solid color after 10 interactions.
- **Responsive Design:** Uses **Flexbox** to ensure the grid remains proportional within a 960px container.

---

## 🚀 How to Run

1. Clone this repository

    ```bash
   git clone https://github.com/ikram-muhr/odin-foundations-course.git
    ```

2. Navigate to the project folder

    ```bash
   cd odin-foundations-course/04-etch-a-sketch
    ```

3. Open `index.html` in your browser
4. How to use

    - Click the "Create New Square" button.
    - Enter the number of squares you want per side (Maximum: 100).
    - Move your mouse over the board to start drawing on each square.

---

## 🛠️ Built With

- **HTML5**
- **CSS3 (Custom Properties & Flexbox)**
- **JavaScript (Vanilla)** - DOM manipulation, event listeners, and logic.

---

## 💡 What I’ve Learned

1. **DOM Manipulation:** How to dynamically create, remove, and modify elements without modifying the HTML file.
2. **Nested Loops:** Using nested loops to create grid rows and columns.
3. **Event Bubbling vs Direct Listeners:** Understanding how to handle mouse interactions across thousands of elements simultaneously.
4. **Logic Implementation:** Combining `Math.random()` logic for colors and `opacity` calculations for fading effects.

## 🤔 The Challenges I Face

1. **Dynamic Grid Logic:** The biggest challenge was ensuring the grid stayed within a 960px container regardless of how many boxes the user entered. I learned that using Flexbox with the `flex: 1` property on rows and columns is key to making the box sizes adjust automatically.

2. **DOM Manipulation Efficiency:** At first, I was confused about how to replace the old grid with a new one. I learned to use `container.innerHTML = “”` to clear all child elements before rendering the new grid to prevent grid overlap on the page.

3. **Logical Comparisons in JS:** I realized that writing a numerical range like `1 <= x <= 100` doesn’t work in JavaScript the same way it does in mathematics. I learned to use the logical operator `&&` (AND) to validate user input correctly.

4. **Combining Visual Effects:** Combining the “random RGB color” instruction with “10% gradual fading” required extra logic. I solved this by using the opacity property, which increases each time there is a mouseover interaction.

---

## 🚧 What I Want to Improve

1. Additional Tools: I plan to add an “Eraser” and “Color Picker” feature so users can select a specific color, rather than just a random one.

2. UI/UX Enhancements: Adding smoother transition animations when the grid is created or when colors change to give it a more modern look.

---

## 📎 Source

- [The Odin Project](https://www.theodinproject.com/lessons/foundations-etch-a-sketch)
