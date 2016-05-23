'use strict';


angular.module('eventsAppApp')
       .controller('eventsCtrl', ['$scope', '$rootScope', '$firebaseAuth', '$firebaseArray', 'FIREBASE_URL', function ($scope, $rootScope, $firebaseAuth, $firebaseArray, FIREBASE_URL) {
    
           var ref = new Firebase(FIREBASE_URL);
           var auth = $firebaseAuth(ref);
           
           auth.$onAuth(function(authUser) {
               if (authUser) {
                   
                   var eventsRef = new Firebase(FIREBASE_URL + 'users/' + $rootScope.currentUser.$id + '/events');
                   var eventsInfo = $firebaseArray(eventsRef);
                   
                   
                   $scope.events = eventsInfo;
                   
                   
                   $scope.addEvent = function() {
                       eventsInfo.$add({
                           name: $scope.eventname,
                           date: Firebase.ServerValue.TIMESTAMP,
                       }).then(function() {
                           $scope.eventname='';
                       });
                   };
                   
                   $scope.deleteEvent = function(key) {
                       eventsInfo.$remove(key);
                   };
                   
               }
           });
  }]);
