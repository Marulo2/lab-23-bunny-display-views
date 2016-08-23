'use strict';

const angular = require('angular');
const demoApp = angular.module('demoApp');

demoApp.controller('ThumbnailController', ['$rootScope', ThumbnailController]);

function ThumbnailController($rootScope){
  this.images = $rootScope.imageData;
}
