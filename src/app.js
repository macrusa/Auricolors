angular.module('AuriApp', [
  'ngRoute',
  'ngMessages',
  'AuriApp.directives',

]).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider
    .html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl : './src/views/home.html',
        controller : 'HomeController',
        reloadOnSearch: false
      })
      .otherwise({
        redirect: '/'
      })
}]);
