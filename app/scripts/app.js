'use strict';

/**
 * @ngdoc overview
 * @name eventsAppApp
 * @description
 * # eventsAppApp
 *
 * Main module of the application.
 */
angular
  .module('eventsAppApp', [
    'firebase',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
   .constant('FIREBASE_URL', 'https://myeventsnathan.firebaseio.com/')
   .config(function ($routeProvider) {
    
    $routeProvider 
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
        controllerAs: 'registry'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'RegisterCtrl',
        controllerAs: 'registry'
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'eventsCtrl',
        controllerAs: 'eventsc',
        resolve: { // .run
            currentAuth: function(Authentication) {
                return Authentication.requireAuth();
            }
        }
      })
      .otherwise({
        redirectTo: '/login'
      });
  });
