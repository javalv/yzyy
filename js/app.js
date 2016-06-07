// Ionic Starter App
var app = angular.module('starter', ['ionic','services','directives',
    'context','contextManager','dic','notice',
    'root.controllers',
    'terminalProxyPublish.controllers','terminalProxyPublish.service',
    'terminalProxyQuery.controllers','terminalProxyQuery.service'])

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            //终端代理发布
            .state('terminal-proxy-publish', {
                url: '/terminal-proxy-publish',
                templateUrl: 'page/terminal-proxy-publish.html',
                controller: 'terminalProxyPublishCtrl'
            })
            //终端代理查询
            .state('terminal-proxy-query', {
                url: '/terminal-proxy-query',
                templateUrl: 'page/terminal-proxy-query.html',
                controller: 'terminalProxyQueryCtrl'
            })
            //终端代理查询详情页
            .state('terminal-proxy-detail', {
                url: '/terminal-proxy-detail/:id',
                templateUrl: 'page/terminal-proxy-detail.html',
                controller: 'terminalProxyQueryCtrl'
            })


        // if none of the above states are matched, use this as the fallback
        //$urlRouterProvider.otherwise('/terminal-proxy-publish');
        $urlRouterProvider.otherwise('/terminal-proxy-query');
        //$urlRouterProvider.otherwise('/terminal-proxy-detail');
    });
