angular
  .module('Porfolio', ['ui.router'])

  .config(['$urlRouteProvider', '$stateProvider', function($urlRouteProvider, $StateProvider)]
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/templates/home.html'
        // controller: function($scope) {
        //     $scope.title = "Home";
        //     $scope.items = ['item1, item2']
        // }
      });
      .state('about', {
       url: '/about',
       templateUrl: 'views/templates/about.html'
      });
      .state('projects', {
       url: '/projects',
       templateUrl: 'views/templates/projects.html'
      });
      .state('games', {
       url: '/games',
       templateUrl: 'views/templates/games.html'
      });
      .state('rockPaperScissors', {
       url: '/rps',
       templateUrl: 'views/templates/rps.html'
      });
      .state('clickGame', {
       url: '/clickgame',
       templateUrl: 'views/templates/about.html'
      });
      .otherwise({
        templateUrl: "initial.html"
      });
      $locationProvider.html5Mode(true);
}]);