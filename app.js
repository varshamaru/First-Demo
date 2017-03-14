(function(){
  'use strict';

  angular.module('myFirstApp',[])
  .controller('MyFirstController',function($scope){
    $scope.name="varsha";
    $scope.sayHello=function()
    {
      return "Hello Coursera!";
    };
  });
})();
