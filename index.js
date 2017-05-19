var Plugin = require('broccoli-caching-writer');
var chalk = require('chalk');
var childProcess = require('child_process');
var log = console.log;
var path = require('path');


ElmMakePlugin.prototype = Object.create(Plugin.prototype);
ElmMakePlugin.constructor = ElmMakePlugin;


function ElmMakePlugin(inputNode, options) {
  options = options || {};

  if (!(this instanceof ElmMakePlugin)) {
    return new ElmMakePlugin(options);
  }

  Plugin.call(this, [inputNode], {
    annotation: options.annotation
  });

  this.main = options.main || "Main.elm";
  this.output = options.output || "elm.js";
}


ElmMakePlugin.prototype.build = function() {
  log("Compiling", chalk.blue(this.main));
  var args = [
    "elm-make",
    this.main,
    "--yes",
    "--output",
    path.join(this.outputPath, this.output)
  ];
  return childProcess.execSync(args.join(" "));
};


module.exports = ElmMakePlugin;
