// Brocfile.js
var concat = require('broccoli-concat'),
    pickFiles = require('broccoli-static-compiler'),
    mergeTrees = require('broccoli-merge-trees'),
    esTranspiler = require("broccoli-6to5-transpiler");
// concat the JS
var scripts = concat('app/', {
  inputFiles: ['**/*.js'],
  outputFile: '/assets/scripts.js'
});
// concat the CSS
var styles = concat('app/styles', {
  inputFiles: ['**/*.css'],
  outputFile: '/assets/styles.css'
});
// grap any static assets
var public = pickFiles('public', {
  srcDir: '.',
  destDir: '.'
});

var scriptTree = esTranspiler(scripts, {});


// and merge all the trees together
module.exports = mergeTrees([scriptTree, styles, public]);
