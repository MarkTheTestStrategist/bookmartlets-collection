// Generate a random Email
javascript: (function () {
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text)
            .then(() => {
                alert('Email ' + generatedText + ' has been copied to clipboard!');
            })
            .catch(err => {
                console.error('Unable to copy to clipboard:', err);
            });
    }

    const generatedText = 'Stuart' + String((new Date()).getTime()).replace(/\D/gi, '').substring(7) + "@MinionTestInc.com";
    copyToClipboard(generatedText);
})();