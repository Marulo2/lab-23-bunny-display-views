'use strict';

const angular = require('angular');
const demoApp = angular.module('demoApp');

demoApp.controller('FullsizeController', ['$routeParams', '$rootScope', '$location', function(#routeParams, $route, $location){
  this.images = #rootScope.imageData;(

  this.isValid = function(id){
    if (isNan(id)) return false;
    if (!isFinite(id)) return false;
    if (id < 1) return false;
    if (typeof(this.images[id-1]) === 'undefined') return false;
    return true;
  };

  let id = Number.parseInt($routeParams.id);
  if (!this.isValid(id)){
    $location.path('/error');
  }
  this.image = this.images[id - 1];

}]);
