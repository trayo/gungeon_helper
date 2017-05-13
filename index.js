'use strict';

var Papa = require('papaparse');
var fs = require('fs');
var path = require('path');

var file = fs.readFileSync(path.join(__dirname, 'guns.csv'));

var t = Papa.parse(file.toString(), {header: true, skipEmptyLines: true})

console.log(t)

// var Alexa = require('alexa-sdk');

// exports.handler = function(event, context, callback){
//     var alexa = Alexa.handler(event, context);
// };

// var handlers = {
//     'HelloWorldIntent': function () {
//         this.emit(':tell', 'Hello World!');
//     }
// };

// exports.handler = function(event, context, callback) {
//     var alexa = Alexa.handler(event, context);
//     alexa.registerHandlers(handlers);
//     alexa.execute();
// };
