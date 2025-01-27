// Generate a random reference id
javascript: (function () {
    function twoSF(numb) {
        return (`0${numb}`).slice(-2);
    }

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('Random Reference Id "' + referenceId + '" has been copied to clipboard!');
            })
            .catch(err => {
                console.error('Unable to copy to clipboard:', err);
            });
    }

    var d = new Date();
    var prefix = "Test Random Reference ID: ";
    var referenceId = `${prefix}${d.getDate()}${"-"}${twoSF(d.getMonth() + 1)}${"-"}${d.getFullYear()}${" @ "}${twoSF(d.getHours())}${":"}${twoSF(d.getMinutes())}${":"}${twoSF(d.getSeconds())}`;
    copyToClipboard(referenceId);
})();