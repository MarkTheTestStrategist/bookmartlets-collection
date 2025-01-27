// Convert text on a webpage to lowercase 
javascript: (function (window) {
    var selection = window.getSelection();
    selection.baseNode.parentElement.innerHTML = selection.baseNode.textContent.toLowerCase();
})(window);