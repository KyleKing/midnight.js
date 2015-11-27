Package.describe({
  name: 'kyleking:midnightjs',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'A jQuery plugin to switch fixed headers on the fly',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/KyleKing/midnight.js',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('0.9.4');
  api.addFiles('midnight.jquery.min.js');
});

// Package.onTest(function(api) {
//   api.use('ecmascript');
//   api.use('tinytest');
//   api.use('kyleking:midnightjs');
//   api.addFiles('midnightjs-tests.js');
// });
