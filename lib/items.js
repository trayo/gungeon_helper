var Item = require('./item')
var Papa = require('papaparse');
var fs = require('fs');
var path = require('path');

var itemsFilePath = '../items.csv';
var csvOptions = {
  header: true,
  skipEmptyLines: true
}

function Items() {
  this.items = makeItems();
}

function makeItems() {
  var file = fs.readFileSync(path.join(__dirname, itemsFilePath));
  var parsedItems = Papa.parse(file.toString(), {header: true, skipEmptyLines: true}).data;

  var items = []
  for(var i = 0; i < parsedItems.length; i++) {
    items.push(new Item(parsedItems[i]))
  }

  return items
}

Items.prototype.find_by_name = function(name) {
  if (!name) {return};

  var parsedName = name.replace('\'', '').replace(/\./g, '').trim()

  for (var i = 0; i < this.items.length; i++) {
    if (this.items[i].name === parsedName) {
      return this.items[i];
    }
  }
}

module.exports = Items;
