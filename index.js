'use strict';

var Alexa = require('alexa-sdk');
var Guns = require('./lib/guns');

var guns = new Guns();

var handlers = {
  'GetGunInformationIntent': function () {
    var gun = guns.find_by_name(this.event.request.intent.slots.Gun.value);

    if (gun) {
      var gunInformation = gun.name + '. ' +
        gun.notes +
        ' The ' + gun.name + ' has a quality of ' + gun.quality + ',' +
        ' and the damage is ' + gun.damage + '.'

      this.emit(':tell', gunInformation);
    } else {
      this.emit(':tell', 'NotFoundIntent');
    }
  },

  'GetQualityIntent': function () {
    var gun = guns.find_by_name(this.event.request.intent.slots.Gun.value);

    if (gun) {
      this.emit(':tell', 'The quality for ' + gun.name + ' is ' + gun.quality + '.');
    } else {
      this.emit(':tell', 'NotFoundIntent');
    }
  },

  'GetDamageIntent': function () {
    var gun = guns.find_by_name(this.event.request.intent.slots.Gun.value);

    if (gun) {
      this.emit(':tell', 'The damage for ' + gun.name + ' is ' + gun.damage + '.');
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
  alexa.registerHandlers(handlers);
  alexa.execute();
};
