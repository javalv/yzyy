angular.module('notice', [])

    .factory('$Notice', ['$ionicPopup', '$timeout', function ($ionicPopup, $timeout) {
        return {
            //信息提示
            show: function ($scope, title, content, clazz) {

                //var myPopup = $ionicPopup.show({
                //    //template: '<p class="text-center"><i class="icon ion-information-circled"></i> ' + '<span class="margin-left-5">' + content + '</span></p>',
                //    template:'<p>' + content + '</p>',
                //    title: title,
                //    //subTitle: 'Please use normal things',
                //    scope: $scope
                //
                //});

                var myPopup = $ionicPopup.alert({
                    title: title,
                    template: content,
                    okText:'关闭',
                    okType:clazz
                });

                $timeout(function () {
                    myPopup.close();
                }, 5000);

            },

            //数据加载
            loadPopup: {

                open: function ($scope, text) {
                    var myPopup = $ionicPopup.show({
                        template: '<p class="text-center"><ion-spinner icon="ios"></ion-spinner>' + '</p>' +
                        '<p class="text-center">' + text + '</p>',
                        scope: $scope
                    });
                    myPopup.then(function (res) {
                    });
                    return myPopup;
                },

                close: function (myPopup) {
                    myPopup.close();
                }

            }


        }
    }]);

