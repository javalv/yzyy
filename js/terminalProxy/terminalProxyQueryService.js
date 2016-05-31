angular.module('terminalProxyQuery.service', [])

    .factory('$TerminalProxyQueryService', ['$httpService', function ($httpService) {
        return {

            //获取列表
            getList: function (params) {
                console.log(params);
                var url = "/store/updateStoreMsg";
                return $httpService.get(url, params);
            },

            //获取一个
            getOne: function () {

            }
        };
    }])