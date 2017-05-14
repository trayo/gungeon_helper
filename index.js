'use strict';

var Alexa = require('alexa-sdk');
var Guns = require('./lib/guns');

var guns = new Guns();

var handlers = {
  'GetGunInformationIntent': function () {
    var gun = guns.find_by_name(this.event.request.intent.slots.Gun.value);

    var gunInformation = gun.name + '. ' +
      gun.notes +
      ' The ' + gun.name + ' has a quality of ' + gun.quality + ',' +
      ' and the damage is ' + gun.damage + '.'

    this.emit(':tell', gunInformation);
  },

  'GetQualityIntent': function () {
    var gun = guns.find_by_name(this.event.request.intent.slots.Gun.value);

    this.emit(':tell', 'The quality for ' + gun.name + ' is ' + gun.quality + '.');
  },

  'GetDamageIntent': function () {
    var gun = guns.find_by_name(this.event.request.intent.slots.Gun.value);

    this.emit(':tell', 'The damage for ' + gun.name + ' is ' + gun.damage + '.');
  },

  'Unhandled': function () {
    this.emit(':tell', 'Ask for information, quality or damage of a gun',  'Ask for information, quality or damage of a gun');
  }
};

exports.handler = function(event, context, callback) {
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};
