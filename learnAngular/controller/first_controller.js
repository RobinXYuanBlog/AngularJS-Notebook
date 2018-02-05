angular.module("FirstCtrl", [])
    .controller('FirstController', function ($scope) {
        $scope.counter = 0;
        $scope.add = function (amount) {
            $scope.counter += amount;
        };
        $scope.substract = function (amount) {
            $scope.counter -= amount;
        };
    });