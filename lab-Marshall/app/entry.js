'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const angular_route = require('angular-route');

// angular modules
var app = angular.module('demoApp', [angular_route]);

app.run(['$rootScope', function($rootScope){
  $rootScope.imageData = require('./data/images.js');
  $rootScope.errorMessage = 'Error: Can not access unknown page';
}]);

app.config(['$routeProvider', function($route) {
  $route
    .when('/', {
      template: require('./view/home/home.html'),
      controller: 'HomeController',
      controllerAs: 'hc'
    })
    .when('/thumbnail', {
      template: require('./view/thumbnail/thumbnail.html'),
      controller: 'ThumbnailController',
      controllerAs: 'th'
    })
    .when('/fullsize/:id', {
      template: require('./view/fullsize/fullsize.html'),
      controller: 'FullsizeController',
      controllerAs: 'fs'
    })
    .when('/error', {
      template: require('./view/error/error.html'),
      controller: 'ErrorController',
      controllerAs: 'er'
    })
    .otherwise({
      redirectTo: '/error'
    });
}]);

// angular components
require('./view/home');
require('./view/thumbnail');
require('./view/fullsize');
require('./view/error');
