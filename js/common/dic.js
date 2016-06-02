angular.module('dic', [])

    .factory('$DicService', ['$httpService', function ($httpService) {

        return {

            //代理人类型
            getProxyOptions : function () {
                return $httpService.get("/json/proxyOptions.json");
            },

            //办公负责区
            getOfficesOptions : function () {
                return $httpService.get("/json/officesOptions.json");
            },

            //期望代理哪种产品
            getExpectOptions : function () {
                return $httpService.get("/json/expectOptions.json");
            },

            //性别
            getSexOptions : function () {
                return $httpService.get("/json/sexOptions.json");
            },

            //代理商能力
            getProxyPowerOptions : function () {
                return $httpService.get("/json/proxyPowerOptions.json");
            }

        }

    }]);