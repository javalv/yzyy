// Ionic Starter App
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

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
