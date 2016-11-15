angular.module('AuriApp')
  .controller('ProductsController', ['$scope', '$location',
  function($scope, $location) {
    $scope.hi = true;
  }]);

  // .directive('navbar', function () {
  //   return {
  //     templateUrl: './src/views/navbar.html',
  //     controller: 'NavbarController'
  //   }
  // });
