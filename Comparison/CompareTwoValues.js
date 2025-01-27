javascript: var value1 = prompt("Please enter Value 1 (Case Sensitive)", "");
if (value1 === null || value1 === "") {
    alert("User cancelled the prompt.");
} else {
    var value2 = prompt("Please enter Value 2 (Case Sensitive)", "");
}
if (value1 != value2) {
    alert("NO MATCH");
} else {
    alert("THESE MATCH");
};