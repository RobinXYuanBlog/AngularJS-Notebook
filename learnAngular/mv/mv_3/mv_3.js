angular.module("MV3", [])
    .controller("SimplePrice", function ($scope) {
        $scope.iPhone = {
            price: 5,
            num: 1
        }
        
        $scope.sum = function () {
            return $scope.iPhone.price * $scope.iPhone.num
        }
    });