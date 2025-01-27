javascript: (function () {
    var tables = document.getElementsByTagName("table");
    if (tables.length > 0) {
        var rowCount = tables[0].rows.length;
        alert("Number of rows in the first table: " + rowCount);
    } else {
        alert("No tables found on this page.");
    }
})();