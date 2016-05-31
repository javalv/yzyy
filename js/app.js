// Ionic Starter App
var app = angular.module('starter', ['ionic','services','directives','context','contextManager',
    'root.controllers',
    'terminalProxyPublish.controllers','terminalProxyPublish.service',
    'terminalProxyQuery.controllers','terminalProxyQuery.service'])

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            //终端代理
            .state('terminal-proxy-publish', {
                url: '/terminal-proxy-publish',
                templateUrl: 'page/terminal-proxy-publish.html',
                controller: 'terminalProxyPublishCtrl'
            })


        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/terminal-proxy-publish');

    });
