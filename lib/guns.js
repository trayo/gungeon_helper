var Gun = require('./gun')
var Papa = require('papaparse');
var fs = require('fs');
var path = require('path');

var gunsFilePath = '../guns.csv';
var csvOptions = {
  header: true,
  skipEmptyLines: true
}

function Guns() {
  this.guns = makeGuns();
}

function makeGuns() {
  var file = fs.readFileSync(path.join(__dirname, gunsFilePath));
  var g = Papa.parse(file.toString(), {header: true, skipEmptyLines: true}).data;

  var guns = []
  for(var i = 0; i < g.length; i++) {
    guns.push(new Gun(g[i]))
  }

  return guns
}

Guns.prototype.find_by_name = function(name) {
  for (var i = 0; i < this.guns.length; i++) {
    if (this.guns[i].name === name) {
      return this.guns[i];
    }
  }
}

module.exports = Guns;
