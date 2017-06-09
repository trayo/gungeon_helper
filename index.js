'use strict';

var Alexa = require('alexa-sdk');
var Items = require('./lib/items');

var items = new Items();

var handlers = {
  'LaunchRequest': function (event, context) {
    this.emit(':ask',
      'Okay. With Gungeon helper you can ask for information about an item. ' +
      'Such as, tell me about the rad gun. ' +
      'Or, what is the quality of the unicorn horn.' +
      'What item would you like to know about?'
    );
  },

  'GetItemInformationIntent': function () {
    var value = this.event.request.intent.slots.Item.value;
    var item = items.find_by_name(value);

    if (item) {
      this.emit(':tell',
        'Okay. I found ' + item.name + '. ' +
        item.notes +
        ' The ' + item.name + ' has a quality of ' + item.quality + ',' +
        ' and the damage is ' + item.damage + '.');
    } else {
      this.emit('NotFoundIntent', value);
    }
  },

  'GetQualityIntent': function () {
    var value = this.event.request.intent.slots.Item.value;
    var item = items.find_by_name(value);

    if (item) {
      this.emit(':tell',
        'The quality for ' + item.name + ' is ' + item.quality + '.'
      );
    } else {
      this.emit('NotFoundIntent', value);
    }
  },

  'GetDamageIntent': function () {
    var value = this.event.request.intent.slots.Item.value;
    var item = items.find_by_name(value);

    if (item) {
      this.emit(':tell',
        'The damage for ' + item.name + ' is ' + item.damage + '.'
      );
    } else {
      this.emit('NotFoundIntent', value);
    }
  },

  'NotFoundIntent': function (value) {
    this.emit(':tell',
      'I didn\'t find ' + value + '.'
    );
  },

  'Unhandled': function () {
    this.emit(':tell',
      'Ask for information, quality or damage of an item.',
      'Ask for information, quality or damage of an item.'
    );
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
