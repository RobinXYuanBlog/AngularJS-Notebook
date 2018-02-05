// angular.module('Direct', [])
//     .directive('myDirective', function () {
//         return {
//             restrict: 'E',
//             replace: true,
//             template: '<a href="http://google.com"> ' +
//             'Click me to go to Google</a>'
//         };
//     });

// replace -> true: replace custom directive, only left template

// Better way

angular.module('Direct', [])
    .directive('myDirective', function () {
        return {
            restrict: 'A',
            replace: true,
            scope: {
                myUrl: '@', // 绑定策略
                myLinkText: '@'
            },
            template: '<a href="{{myUrl}}">' + '{{myLinkText}}</a>'
        };
    });