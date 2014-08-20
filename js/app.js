var kramnorth = angular.module('kramnorth', [
  'ngRoute',
  'kramnorthControllers'
]);

kramnorth.config(['$routeProvider', '$httpProvider',
  function($routeProvider, $httpProvider) {
  	delete $httpProvider.defaults.headers.common["X-Requested-With"];
  	
    $routeProvider.
      when('/', {
        templateUrl: 'partials/main.html',
        controller: 'HomeCtrl'
      }).
      when('/when', {
        templateUrl: 'partials/when.html',
        controller: 'WhenCtrl'
      }).
      when('/where', {
        templateUrl: 'partials/where.html',
      }).
      when('/menu', {
        templateUrl: 'partials/menu.html',
        controller: 'MenuCtrl'
      }).
      when('/rsvp', {
        templateUrl: 'partials/rsvp.html',
        controller: 'RSVPCtrl'
      }).
      otherwise({
      	redirectTo: '/'
      });
  }]);