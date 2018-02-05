angular.module("MV2", [])
    .controller("Aaa", function ($scope, $timeout) {
        $scope.name = "Hello";
        $timeout(function () {
            $scope.name = "hi";
        }, 5000);

        $scope.show = function () {
            $scope.name = 'You';
        }
    });