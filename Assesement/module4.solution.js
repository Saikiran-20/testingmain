// Array of names
var names = ["John", "Jane", "Jack", "Alice", "Bob", "Jill"];

// Function to determine greeting based on name
function greetName(name) {
    if (name.charAt(0).toLowerCase() === "j") {
        return "Goodbye " + name;
    } else {
        return "Hello " + name;
    }
}

// Loop over names and print greetings to console
for (var i = 0; i < names.length; i++) {
    console.log(greetName(names[i]));
}