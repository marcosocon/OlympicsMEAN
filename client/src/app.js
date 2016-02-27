import angular from 'angular'
angular.module('olympics',[])
.controller('sportsController',function(){
  this.sports = ['Judo', 'Cycling'];
})
