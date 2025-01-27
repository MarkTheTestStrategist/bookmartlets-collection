// Convert text on a webpage to lowercase 
javascript: void ((function () {
    var selection = window.getSelection();
    if (selection && selection.baseNode && selection.baseNode.parentElement) {
        selection.baseNode.parentElement.innerHTML = selection.baseNode.textContent.toLowerCase();
    }
})());