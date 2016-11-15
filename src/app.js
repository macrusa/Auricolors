angular.module('AuriApp', [
  'ngRoute',
  'ngMessages',

]).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $locationProvider
    .html5Mode(true);

// route all views here
    $routeProvider
      .when('/', {
        templateUrl : './src/views/home.html',
        controller : 'HomeController',
        reloadOnSearch: false
      })
      .when('/products', {
        templateUrl : './src/views/products.html',
        controller : 'ProductsController',
        reloadOnSearch: false
      })
      .otherwise({
        redirect: './src/views/home.html'
      })
}]);
