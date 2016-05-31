angular.module('notice', [])

    .factory('$Notice', ['$ionicPopup', '$timeout', '$EnvService', function ($ionicPopup, $timeout, $EnvService) {
        return {
            //信息提示
            show: function ($scope, title, content) {

                var env = $EnvService.currentEnv();
                if (env == GLOBAL.ANDROID) {
                    NativeDelegate.toase(content);
                } else {
                    var myPopup = $ionicPopup.show({
                        template: '<p class="text-center"><i class="icon ion-information-circled"></i> ' + '<span class="margin-left-5">' + content + '</span></p>',
                        title: title,
                        //subTitle: 'Please use normal things',
                        scope: $scope

                    });
                    myPopup.then(function (res) {
                    });
                    $timeout(function () {
                        myPopup.close();
                    }, 2000);
                }

            },

            //数据加载
            loadPopup: {

                open:function ($scope,text){
                    var myPopup = $ionicPopup.show({
                        template: '<p class="text-center"><ion-spinner icon="ios"></ion-spinner>' + '</p>' +
                                    '<p class="text-center">' + text + '</p>',
                        scope: $scope
                    });
                    myPopup.then(function (res) {
                    });
                    return myPopup;
                },

                close:function(myPopup){
                    myPopup.close();
                }

            }



        }
    }]);

