# Calculator

A functional calculator built from scratch as part of The Odin Project curriculum. Handles basic arithmetic operations, decimal inputs, chaining operations, and error states with proper state management.

---

## 🔗 Live Demo

[Click here to view the live demo](https://ikram-muhr.github.io/odin-foundations-course/05-calculator/)

---

## 🚀 Key Features

- **Basic Arithmetic**: Add, subtract, multiply, and divide
- **Chaining Operations**: Evaluate pairs sequentially (e.g., `12 + 7 - 1 = 18`)
- **Decimal Support**: Input floating-point numbers with decimal points
- **Error Handling**: Display friendly error message for divide by zero, prevent cascade failures
- **Display Management**: Clear after result, backspace to delete last digit
- **State Persistence**: Tracks first number, operator, second number, and result state independently
- **Consecutive Operator Handling**: Using last operator if pressed multiple times in sequence

---

## 🚀 How to Run

1. Clone this repository

    ```bash
   git clone https://github.com/ikram-muhr/odin-foundations-course.git
    ```

2. Navigate to the project folder

    ```bash
   cd odin-foundations-course-05-calculator
    ```

3. Open `index.html` in your browser

4. Click buttons or use keyboard:
   - **Numbers**: 0-9
   - **Operators**: `+` `-` `*` `/`
   - **Equals**: `=`
   - **Clear**: `AC`
   - **Backspace**: `Del`
   - **Decimal**: `.`

---

## 🛠️ Built With

- **HTML5** - Structure and UI elements
- **CSS3** - Simple tyling and layout
- **Vanilla JavaScript** - All logic, state management, and DOM interaction
  - No frameworks, no libraries—pure JS
  - Event listeners for button clicks and keyboard input
  - Switch statement for operator logic
  - String/number type checking for error handling

---

## 💡 What I've Learned

### State Management

Understanding how to track multiple pieces of state (`num1`, `operator`, `num2`, `isResultOrErrorDisplayed`) and manage transitions between them. The key insight: **state determines behavior**. When `isResultOrErrorDisplayed = true`, the next digit input should clear and start fresh—the code handles this automatically without needing explicit resets.

### Chaining Operations

The trickiest part: evaluating `12 + 7 - 1 = 18` correctly requires **evaluating the first pair (12 + 7) the moment the second operator (-) is pressed**, not waiting for equals. This means:

- Operator button checks: "Is there already a num2?"
- If yes: evaluate, store result as num1, set new operator
- If no: just set the operator
This pattern ensures proper left-to-right evaluation.

### Error Handling

Divide by zero returns a string instead of crashing. The handler must:

1. Check `typeof result === "string"` before assigning to num1
2. Display the error
3. Set flag so next digit input resets state
4. Prevent num1 from becoming an error message

---

## 🤔 The Challenges I Face

**The real problem:** Confusion about *when* to call `operate()` (on operator button vs equals) and *what state to track* (why do we need `isResultDisplayed`?). Restarting didn't clarify this. it just pushed the confusion forward.

**What helped:** Stopping, tracing through a concrete example (`12 + 7 - 1 =`), writing down what state *should* be at each step, then comparing to code. That's when the logic clicked.

---

## 🚧 What I Want to Improve

### Code Organization

- Extract event listener logic into separate functions for better readability and reusability (especially if adding keyboard support later)
- Consider a calculator class/object to encapsulate state instead of global variables

### UI/UX

- Add keyboard support indicator (show which keys do what)
- Visual feedback for button presses (hover, active states)
- Larger display for better readability
- Maybe a history of past operations for learning?

### Testing

- Implement automated tests for edge cases (divide by zero, chaining, consecutive operators, etc.)
- Currently testing manually—would scale better with unit tests

### Decimal Precision

- Currently using `.toFixed(2)` for decimals. For some operations, this might hide precision issues
- Could implement smarter rounding or display logic

---

## 📎 Source

- [The Odin Project - Calculator](https://www.theodinproject.com/lessons/foundations-calculator)