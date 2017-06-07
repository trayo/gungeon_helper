'use strict';

function Item(data) {
  this.name    = data.Name.toLowerCase().replace('\'', '');
  this.quality = data.Quality ? data.Quality.replace('Quality Item.png', '').trim() : 'not found';
  this.damage  = data.Damage ? data.Damage.toString().toLowerCase() : 'not found';
  this.notes   = data.Notes ? data.Notes.toLowerCase() : 'not found';
}

module.exports = Item;
