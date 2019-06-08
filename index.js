const spellings = require('./spellings');

exports.correct = function(text) {

    // from https://stackoverflow.com/a/17265031
    function matchCase(text, pattern) {
        let result = '';
        for(let i = 0; i < text.length; i++) {
            let c = text.charAt(i);
            let p = pattern.charCodeAt(i);
    
            if(p >= 65 && p < 65 + 26) {
                result += c.toUpperCase();
            } else {
                result += c.toLowerCase();
            }
        }
        return result;
    }

    spellings.forEach(duo => {
        let r = new RegExp( duo.US.toLowerCase() , 'gi' );
        text = text.replace(r, function(match) {
            return matchCase(duo.UK, match);
        });
    });

    return text;
    
};