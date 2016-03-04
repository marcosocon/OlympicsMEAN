import angular from 'angular'
import 'angular-ui-router'
angular.module('olympics',['ui.router'])
.config(($stateProvider, $urlRouterProvider) => {
  $urlRouterProvider.otherwise('/sports')

  $stateProvider
  .state('sports',{
    url: '/sports',
    templateUrl: 'sports/sports-nav.html',
    resolve:{
      sportsService:function($http){
      return $http.get('/sports');
      }
    },
    controller: function(sportsService){
      this.sports = sportsService.data;
      },
    controllerAs: 'sportsCtrl'
  })
  .state('sports.medals',{
    url: '/:sportName',
    templateUrl: 'sports/sports-medals.html',
    resolve:{
      sportService:function($q){
        return $q((resolve, reject)=> {
          let sport = {
            "name":"Judo",
            "goldMedals":[
            {
              "division": "Men -60kg",
              "country": "JPN",
              "year":2012
            },
            {
              "division":"Women's -48kg",
              "country" : "ARG",
              "year": 2015
            }]
          };
          resolve({data: sport});
        })
      }
    },
    controller:function(sportService){
      this.sport  = sportService.data;
    },
    controllerAs: 'sportCtrl'
  })
})
