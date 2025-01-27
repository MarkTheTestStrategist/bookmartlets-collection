// Generate a random landline number using the film & tv prefix
javascript: (function () {
    'use strict';

    function copyToClipboard(text) {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('Telephone number: "' + generatedText + '" has been copied to clipboard!');
            })
            .catch(err => {
                console.error('Unable to copy to clipboard:', err);
            });
    }

    var generatedText = '0116496' + String((new Date()).getTime()).replace(/\D/gi, '').substring(9);

    copyToClipboard(generatedText);
})();