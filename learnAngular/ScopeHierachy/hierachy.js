angular.module('Hierachy', [])
    .controller('ParentController', function ($scope) {
        $scope.person = {greeted: false};
    })
    .controller('ChildController', function ($scope) {
        $scope.sayHello = function () {
            $scope.person.greeted = true;
            $scope.person.name = 'Ari Lerner';
        }
    });