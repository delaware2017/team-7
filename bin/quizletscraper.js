var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/scrape', function(req, res) {
    var urls = ["https://quizlet.com/113841341/word-roots-uv-flash-cards/", "https://quizlet.com/112476308/word-roots-t-flash-cards/", "https://quizlet.com/110093270/word-roots-s-flash-cards/", "https://quizlet.com/106428526/word-roots-nr-flash-cards/", "https://quizlet.com/103487631/word-roots-mq-flash-cards/", "https://quizlet.com/100856434/word-roots-hj-flash-cards/", "https://quizlet.com/98811170/gi-word-roots-flash-cards/", "https://quizlet.com/97497864/df-word-roots-flash-cards/", "https://quizlet.com/95885391/word-roots-ce-flash-cards/", "https://quizlet.com/94090860/word-roots-a-b-flash-cards/"];
    var output = {};
    function Word(qdef) {
    	this.def = qdef.substring(0, qdef.indexOf("(") - 1);
    	this.examples = qdef.substring(qdef.indexOf("(") + 1, qdef.length - 1);
    }
    function becWord(def, examples) {
        this.def = def;
        this.examples = examples;
    }

    // To write to the system we will use the built in 'fs' library.
    // In this example we will pass 3 parameters to the writeFile function
    // Parameter 1 :  output.json - this is what the created filename will be called
    // Parameter 2 :  JSON.stringify(json, null, 4) - the data to write, here we do an extra step by calling JSON.stringify to make our JSON easier to read
    // Parameter 3 :  callback function - a callback function to let us know the status of our function
    function write() {
        fs.writeFile('../app/quizlet.json', JSON.stringify(output, null, 4), function(err) {

            console.log('File successfully written! - Check your project directory for the output.json file');

        });
    }

    function rebecca($, html) {
        var roots = $(".terms .term .text .word .TermText", html).toArray();
        var qdef = $(".terms .term .text .definition .TermText", html).toArray();

        var words = [];
        for(var i=0; i<roots.length; i+=2) {
            var root = $(roots[i]).text().replace(/ /g, '').toUpperCase();
            var def = $(qdef[i]).text();
            var examples = $(qdef[i+1]).text();
            output[root] = new becWord(def, examples);
        }
    }

    function jason(html) {
        var roots = $(".terms .term .text .word .TermText", html).toArray();
        var qdef = $(".terms .term .text .definition .TermText", html).toArray();

        for(var i = 0; i < roots.length; i++) {
            var root = $(roots[i]).text().replace(/ /g, '').toUpperCase();
            var def = $(qdef[i]).text();
            output[root] = new Word(def);
        }
    }



    for(var u = 0; u < urls.length; u++) {
    	var url = urls[u];
        var counter = 0;
    	request(url, function(error, response, html) {
            counter++;
            if(!error) {
                var $ = cheerio.load(html);

                rebecca($, html);
            }
            if(counter === urls.length) write();
        });
    }




    // Finally, we'll just send out a message to the browser reminding you that this app does not have a UI.
    res.send('Check your console!');
});

app.listen('8081');
console.log('Magic happens on port 8081');
exports = module.exports = app;
