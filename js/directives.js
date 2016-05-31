angular.module('directives', [])

    .directive('myTitle', function () {
        return {
            restrict: 'AE',
            replace: true,
            template: '<h1 class="title" ng-bind="headerTitle"></h1>',
            link: function ($scope, $element, $attrs) {

                $scope.$on('$ionicView.beforeEnter', function (event, data) {
                    $scope.headerTitle = data.title;
                });

            }
        }
    })

    .directive('switchLoad', function ($compile,$rootScope) {
        return {
            restrict: 'AE',
            scope: true,
            controller: function ($scope,$rootScope) {

            },
            link: function ($scope, $element, $attrs) {

                var html = '<div style="height:100% ; width: 100%; top:0px; position: absolute; z-index: 65536 ; background-color: rgb(234, 234, 234)"' +
                    ' ng-hide="loadComplete">' +
                    '<p style="position: relative;top: 30%;" class="text-center">加载中...</p>' +
                    '</div>';
                var el = $compile(html)($scope);
                $element.append(el);

                $scope.loadComplete = false;

                //加载完成
                $rootScope.$on('switch-load-complete', function (event, data) {
                    $scope.loadComplete = true;
                });
            }
        };
    })

