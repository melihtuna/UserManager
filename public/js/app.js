'use strict';


// Declare app level module which depends on filters, and services
var app = angular.module('plpApp', ['plpApp.filters', 'plpApp.services', 'plpApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/users', {templateUrl: 'partials/user-list', controller: UserList});
    $routeProvider.when('/users/:uid', {templateUrl: 'partials/edit-user', controller: EditUser});
    $routeProvider.otherwise({redirectTo: '/users'});
    $locationProvider.html5Mode(true);
  }]);