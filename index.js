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

  this.cwd = options.cwd;
  this.main = options.main || "Main.elm";
  this.output = options.output || "elm.js";
  this.withDebug = options.debug;
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
  if (this.withDebug) {
    args = args.concat("--debug");
  }
  return childProcess.execSync(args.join(" "), { cwd: this.cwd });
};


module.exports = ElmMakePlugin;
