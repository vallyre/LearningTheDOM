var GenerateText = require('./generate_text.js');
var fs = require('fs');
var html = fs.readFileSync('./MDN/IntroductionToTheDOM/simple.html', 'utf8');

var chai = require('chai');
var plugin = require('chai-jq');
chai.use(plugin);
var expect = chai.expect;

var JSDOM = require('jsdom').JSDOM;
var jsdom = new JSDOM(html);
var window = jsdom.window;
var $ = global.jQuery = require('jquery')(window);

var text = new GenerateText();

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
