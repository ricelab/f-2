// Generated by CoffeeScript 1.6.3
(function() {
  var Call, Client, holla, shims;

  Client = require('./Client');

  Call = require('./Call');

  shims = require('./shims');

  holla = {
    createClient: function(opt) {
      if (opt == null) {
        opt = {};
      }
      return new Client(opt);
    },
    Call: Call,
    Client: Client,
    shims: shims,
    supported: shims.supported,
    config: shims.PeerConnConfig,
    createStream: function(opt, cb) {
      var err, succ;
      if (shims.getUserMedia == null) {
        return cb("Missing getUserMedia");
      }
      err = cb;
      succ = function(s) {
        return cb(null, s);
      };
      shims.getUserMedia(opt, succ, err);
      return holla;
    },
    createFullStream: function(cb) {
      return holla.createStream({
        video: true,
        audio: true
      }, cb);
    },
    createVideoStream: function(cb) {
      return holla.createStream({
        video: true,
        audio: false
      }, cb);
    },
    createAudioStream: function(cb) {
      return holla.createStream({
        video: false,
        audio: true
      }, cb);
    }
  };

  module.exports = holla;

}).call(this);