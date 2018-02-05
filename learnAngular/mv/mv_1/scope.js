// $scope 作用域
// $rootScope 全局作用域
// 以局部为主
// $scope $rootScope 不可被修改，依赖注入
angular.module("Scope", [])
    .controller("Aaa", function ($scope, $rootScope) {
        $scope.name = "Hello";
        $scope.age = '40';
        $rootScope.age = '20';
    }).controller("Bbb", function ($scope) {
    $scope.name = "Hi";
//            $scope.age = '10'
}).controller("Ccc", function ($rscope) {
    $rscope.name = 'Scope';
});