'use strict';

var Alexa = require('alexa-sdk');
var Items = require('./lib/items');

var items = new Items();

var handlers = {
  'GetItemInformationIntent': function () {
    var item = items.find_by_name(this.event.request.intent.slots.Item.value);

    if (item) {
      var itemInformation = item.name + '. ' +
        item.notes +
        ' The ' + item.name + ' has a quality of ' + item.quality + ',' +
        ' and the damage is ' + item.damage + '.'

      this.emit(':tell', itemInformation);
    } else {
      this.emit(':tell', 'NotFoundIntent');
    }
  },

  'GetQualityIntent': function () {
    var item = items.find_by_name(this.event.request.intent.slots.Item.value);

    if (item) {
      this.emit(':tell', 'The quality for ' + item.name + ' is ' + item.quality + '.');
    } else {
      this.emit(':tell', 'NotFoundIntent');
    }
  },

  'GetDamageIntent': function () {
    var item = items.find_by_name(this.event.request.intent.slots.Item.value);

    if (item) {
      this.emit(':tell', 'The damage for ' + item.name + ' is ' + item.damage + '.');
    } else {
      this.emit(':tell', 'NotFoundIntent');
    }
  },

  'NotFoundIntent': function () {
    this.emit(':tell', 'I didn\'t find the item you asked for.');
  },

  'Unhandled': function () {
    this.emit(':tell', 'Ask for information, quality or damage of an item.',  'Ask for information, quality or damage of an item.');
  }
};

exports.handler = function(event, context, callback) {
  var alexa = Alexa.handler(event, context);

  if (typeof process.env.DEBUG === 'undefined') {
    alexa.appId = 'amzn1.ask.skill.d16db6f9-e869-4345-ac89-fa86b73d7663';
  }

  alexa.registerHandlers(handlers);
  alexa.execute();
};
