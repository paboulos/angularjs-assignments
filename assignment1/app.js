(function () {
'use strict';

angular.module('LunchChkApp', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope, $filter) {
  $scope.lunchItems = "";
  $scope.lunchResult = "";

  $scope.countItems = function () {
    var  arrayOfStrings;
    if ( $scope.lunchItems === ""){
      $scope.lunchResult = "Please enter data first";
      return;
    }
    else{
      arrayOfStrings = $scope.lunchItems.split(",");
    }
    if (arrayOfStrings.length < 4 ){
      $scope.lunchResult = "Enjoy!";
    }else{
      $scope.lunchResult = "Too much!";
    }
  };
}

})();
