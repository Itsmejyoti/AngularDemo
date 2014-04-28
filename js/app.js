/**
 * The main app module
 *
 * @type {angular.Module}
 */
define([
  'angular',
  'angular-route',
  'angular-aerobatic'
  'asset!js/services/thing',
  'css!css/normalize',
  'css!css/app'
  ], function(angular) {
  'use strict';

  var app = angular.module('angular-seed', ['ngRoute', 'seedServices', 'aerobatic']);

  // Declare all the top level dependencies our app requires
  var dependencies = [
    'asset!partials/layout',
    'asset!js/controllers/indexCtrl',
    'asset!partials/index',
    'asset!js/controllers/detailCtrl',
    'asset!partials/detail'
  ];

  require(dependencies, function(layout, indexCtrl, indexView, detailCtrl, detailView) {
    app.config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/', {
        controller: indexCtrl,
        template: indexView
      }).when('/:id', {
        controller: detailCtrl,
        template: detailView
      }).otherwise({
        redirectTo: '/'
      });
    }]);

    angular.element(document).ready(function() {
      // Append an ng-view to the body to load our partial views into
      angular.element(document.body).append(angular.element(layout));
      angular.bootstrap(document, ['angular-seed']);
    });
  });
});
