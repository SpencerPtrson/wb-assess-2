// Unit 2 Assessment: js-dom.js
// This file is imported as a script by `js-dom.html`.
// Refer to `js-dom.html` to see the HTML elements you will be interacting with.

// Log in/log out button
//
// When a user clicks on the button that says "Log In", its text should
// update and say "Log out". If a user clicks on the button again, its text
// should switch from "Log Out" to "Log In".

let authBtn = document.getElementById("auth");
authBtn.addEventListener('click', evt => {
    if (authBtn.textContent === "Log in") authBtn.textContent = "Log out";
    else if (authBtn.textContent === "Log out") authBtn.textContent = "Log in";
})

// Send an alert
//
// This form will send an alert to a user via the built-in alert function.
//
// A user should be able to enter what they want the alert to say in the
// text box. Then, they can submit the form to trigger the alert.

let alertFrm = document.getElementById("send-alert");
let alertInput = document.getElementById("alert-message");
alertFrm.addEventListener('submit', evt => {
    evt.preventDefault();
    alert(alertInput.value);
})

// Add an item
//
// This is a pretty silly feature -- when a user clicks on the
// button (the one that says "Double-click to add an item"), a new list
// item should appear.
//
// In other words, whenever a user clicks on the button, just
// add another <li>Item</li>. So, a user has clicked on the
// button once, the list should look like this:
//
//   <ol id="list">
//     <li>Item</li>  <!-- This list item was already here -->
//     <li>Item</li>  <!-- This was added after double-clicking -->
//   </ol>

let doubleClickBtn = document.getElementById("item-adder");
let doubleClickList = document.getElementById('list');
doubleClickBtn.addEventListener('click', evt => {
    let newItem = document.createElement("li");
    newItem.textContent = "Item"
    doubleClickList.append(newItem);
})


// Change colors
//
// Users should be able to change the color of any element with the
// class, "changes-colors", by clicking on the "Turn Stuff Red" button
// or "Turn Stuff Blue" button.
//
// Clicking on "Turn Stuff Red" should make text red and clicking on "Turn
// Stuff Blue" should make text blue.

let blueBtn = document.getElementById("blue");
let redBtn = document.getElementById("red");
let colorWords = document.getElementsByClassName("changes-colors")

blueBtn.addEventListener('click', evt => {
    changeColors("blue");
})
redBtn.addEventListener('click', evt => {
    changeColors("red");
})

const changeColors = (color) => {
    console.log(color);
    console.log(colorWords);
    for (let node of colorWords) {
        node.style.color = color;
    }
}


// Calculate factorial
//
// The factorial of a number is the product of an integer and all the integers
// below it. For example, the factorial of 4 is equal to 4 * 3 * 2 * 1 = 24. The
// factorial of 6 is 6 * 5 * 4 * 3 * 2 * 1 = 720.
//
// Write the following code to calculate the factorial of a positive integer (you
// don't need to worry about negative numbers).
//
// Write a function that calculates the factorial of a positive number Add an
// event listener that catches when someone clicks on the "calculate" button and:
//   - gets whatever number is inside the input field
//   - calls your function that calculates a factorial
//   - puts the result of the function inside the "result" span

let factorialFrm = document.getElementById("factorial-calculator");
let factorialInput = document.getElementById("factorial-input");
let resultSpan = document.getElementById("result");
factorialFrm.addEventListener('submit', evt => {
    evt.preventDefault();
    resultSpan.textContent = factorial(factorialInput.value);
})

const factorial = (num) => {
    if (num === 0) return 1;

    let result = num;
    for (let i = 2; i < num; i++) {
        result *= i;
    }
    return result;
}

// Validate a form
//
// This form is used to collect word recommendations from users. However, it
// only accepts words that are at least four characters long. Add code that
// checks the length of the text entered into the <textarea> when the user
// submits the form.
//
//  If the text is three or more characters long, change
//  the feedback text to say "Thanks for your submission!" and change
//  the color of the text to green.
//
// If the text is less than three characters long, change
// the feedback text to say "The word must be at least 4 characters long." and
// change the color of the text to red..


let wordFrm = document.getElementById("recommend-word");
let wordInput = document.getElementById("word");
let feedbackText = document.querySelector(".form-feedback");

wordFrm.addEventListener('submit', evt => {
    evt.preventDefault();
    console.log(feedbackText);
    if (wordInput.value.length >= 4) {
        feedbackText.textContent = "Thanks for your submission!";
        feedbackText.style.color = "green";
    }
    else {
        feedbackText.textContent = "The word must be at least 4 characters long.";
        feedbackText.style.color = "red";
    }
})