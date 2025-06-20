// Select input field, button, and list elements
const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

// Function to add a new to-do item
function addTodo() {
    const todoText = todoInput.value.trim(); // Get the input value and remove extra spaces

    if (todoText) { // Check if input is not empty
        // Create a new list item
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item");

        // Add text to the list item
        listItem.textContent = todoText;

        // Create a close button
        const closeButton = document.createElement("button");
        closeButton.innerHTML = "&times;";
        closeButton.classList.add("close-btn");
        closeButton.addEventListener("click", () => {
            listItem.remove(); // Remove the list item on click
            removeFromCookies(todoText); // Update cookies
        });

        // Append the close button to the list item
        listItem.appendChild(closeButton);

        // Append the list item to the to-do list
        todoList.appendChild(listItem);

        // Add the new item to cookies
        storeInCookies(todoText);

        // Clear the input field
        todoInput.value = "";
    } else {
        alert("Please enter a to-do item."); // Alert if input is empty
    }
}

// Function to store the final to-do item in cookies
function storeInCookies(todo) {
    let todos = getTodosFromCookies(); // Retrieve existing todos from cookies
    todos.push(todo); // Add the new to-do to the array
    document.cookie = `todos=${JSON.stringify(todos)}; path=/;`; // Save back to cookies
}

// Function to remove a to-do item from cookies
function removeFromCookies(todo) {
    let todos = getTodosFromCookies();
    todos = todos.filter((t) => t !== todo); // Remove the item from the array
    document.cookie = `todos=${JSON.stringify(todos)}; path=/;`; // Save updated array back to cookies
}

// Function to retrieve to-do items from cookies
function getTodosFromCookies() {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        if (cookie.startsWith("todos=")) {
            return JSON.parse(cookie.substring(6));
        }
    }
    return [];
}

// Add event listener to the button
addButton.addEventListener("click", addTodo);

// Load to-do items from cookies on page load and display them
window.addEventListener("load", () => {
    const todos = getTodosFromCookies();
    for (let todo of todos) {
        const listItem = document.createElement("li");
        listItem.textContent = todo;
        listItem.classList.add("list-group-item");

        const closeButton = document.createElement("button");
        closeButton.innerHTML = "&times;";
        closeButton.classList.add("close-btn");
        closeButton.addEventListener("click", () => {
            listItem.remove();
            removeFromCookies(todo);
        });

        listItem.appendChild(closeButton);
        todoList.appendChild(listItem);
    }
});
