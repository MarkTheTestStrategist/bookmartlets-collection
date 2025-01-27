// Generate a random french mobile number
javascript: (function () {
    'use strict';

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('The French mobile number "' + generatedText + '" has been copied to clipboard!');
            })
            .catch(err => {
                console.error('Unable to copy to clipboard:', err);
            });
    }

    var generatedText = '063998' + String((new Date()).getTime()).replace(/\D/gi, '').substring(9);

    copyToClipboard(generatedText);
})();