myFunction();

// Export functions to be used elsewhere
export function myFunction() {
// Function logic
console.log("myFunction called");

// Additional code to integrate with rest of file

const root = document.body; // getElementById("root");

root.innerHTML = "<h1>Hello World</h1>";

// Render app
render(root);
}

function render(root) {
root.innerHTML = `
<div>
<h1>My App</h1>
<button id="btn">Click Me</button>
</div>
`;

// Initialize
init();
}

function init() {
// Select DOM elements
const btn = document.querySelector("#btn");

// Add click handler
btn.addEventListener("click", () => {
// Handle click
console.log("Button clicked!");

// Call function
myFunction();
});
}