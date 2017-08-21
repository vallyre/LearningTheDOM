function GenerateText () {

}

GenerateText.prototype.generate_paragraph = function() {
    return "This will be paragraph text."
};

GenerateText.prototype.generate_list_text = function(number_of_list_items) {
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var list_text = [];
    for (var i = 0; i < number_of_list_items; i++) {
        list_text.push([alphabet[i], alphabet[i].toUpperCase()])
    }
    return list_text;
};

module.exports = GenerateText;