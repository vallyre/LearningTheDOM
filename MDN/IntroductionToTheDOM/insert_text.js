var $ = require('jquery');

function InsertText() {
}

InsertText.prototype.insert_paragraph = function(text) {
    var first_paragraph = $('p:first');
    $("<p>" + text + "</p>").insertAfter(first_paragraph);
};

module.exports = InsertText;