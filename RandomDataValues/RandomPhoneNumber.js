// Generate a random phone number using the uk film & tv prefix
javascript: (function () {
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('Phone number: ' + generatedText + ' is copied to clipboard!');
            })
            .catch(err => {
                console.error('Unable to copy to clipboard:', err);
            });
    }

    const generatedText = '0770090' + String((new Date()).getTime()).replace(/\D/gi, '').substring(9);
    copyToClipboard(generatedText);
})();