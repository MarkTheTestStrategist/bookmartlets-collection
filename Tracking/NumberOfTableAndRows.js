javascript: (function () {
    var tables = document.getElementsByTagName('table');
    var message = 'Total Tables: ' + tables.length + '\n';
    for (var i = 0; i < tables.length; i++) {
        var rows = tables[i].rows.length;
        message += 'Table ' + (i + 1) + ' has ' + rows + ' rows.\n';
    }
    alert(message);
})();