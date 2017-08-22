var fs = require('fs');
var html = fs.readFileSync('./MDN/IntroductionToTheDOM/simple.html', 'utf8');

var chai = require('chai');
var plugin = require('chai-jq');
chai.use(plugin);
var expect = chai.expect;

var jsdom = require("jsdom/lib/old-api.js");
global.document = jsdom.jsdom(html);
global.window = document.defaultView;
var $ = require('jquery');

var GenerateText = require('./generate_text.js');
var InsertText = require('./insert_text.js');
var text = new GenerateText();
var insert = new InsertText();

describe('Traversing the DOM', function () {
       
    it('finds an element and its text', function () {
        expect($('h1')).to.have.length(1);
        expect($('h1')).to.have.$text('A Simple HTML File');       
    });

});

describe('Testing functions which do not manipulate the DOM', function () {
    
    it('should generate paragraph text', function () {
        expect(text.generate_paragraph()).to.equal('This will be paragraph text.');
    });

    it('should generate an array of text', function () {
        expect(text.generate_list_text(2)).to.deep.equal([ ['a', 'A'], ['b', 'B'] ]);
    });

});

describe('Testing functions which do manipulate the DOM', function () {

    it('should add a paragraph with text', function () {
        var paragraph_text = text.generate_paragraph();
        insert.insert_paragraph(paragraph_text);
        expect($('p')).to.have.length(2);           
    });
});
