 var app=angular.module('boilerplate');
 app.controller('historyCtrl',historyCtrl);
 function historyCtrl($scope,QueryService)
 {  

  QueryService.query('GET', 'data1.json', {}, {})
  .then(function(data) {
        //console.log(data);
        $scope.myData=data.data;
      }, function(error) {
        console.log(error);
      });

  
  }