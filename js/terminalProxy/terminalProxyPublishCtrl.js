angular.module('terminalProxyPublish.controllers', [])

    .controller('terminalProxyPublishCtrl', ['$scope', '$switchLoad', function ($scope, $switchLoad) {

        var initSel;
        $switchLoad.$ready($scope,
            //加载ctrl
            function () {

                //目前主要负责的科室
                $scope.doMajorOfficesSelect1 = function () {
                    var params = {
                        title: '测试标题1',
                        opts: [
                            {id: 1, text: '第1项'},
                            {id: 2, text: '第二项'},
                            {id: 1, text: '第一项'},
                            {id: 2, text: '第二项'},
                            {id: 1, text: '第一项'},
                            {id: 1, text: '第一项'},
                            {id: 2, text: '第二项'},
                            {id: 2, text: '第10项'}
                        ],
                    }
                    $scope.$emit('multiple-select-init', params);
                }


                //目前主要负责的科室
                $scope.doMajorOfficesSelect = function () {
                    var params = {
                        title: '主要负责的科室',
                        opts: [
                            {id: 1, text: '第1项'},
                            {id: 2, text: '第二项'},
                            {id: 1, text: '第一项'},
                            {id: 2, text: '第二项'},
                            {id: 1, text: '第一项'},
                            {id: 1, text: '第一项'},
                            {id: 2, text: '第二项'},
                            {id: 1, text: '第一项'},
                            {id: 2, text: '第二项'},
                            {id: 1, text: '第一项'},
                            {id: 2, text: '第二项'},
                            {id: 1, text: '第一项'},
                            {id: 2, text: '第二项'},
                            {id: 1, text: '第一项'},
                            {id: 2, text: '第二项'},
                            {id: 1, text: '第一项'},
                            {id: 2, text: '第二项'},
                            {id: 2, text: '第10项'}
                        ],
                    }
                    $scope.$emit('multiple-plus-select-init', params);
                }

                $scope.areaSelect = function () {
                    var params = {};
                    $scope.$emit('area-select-init', params);
                }

                initSel = function (flag) {
                    $scope.selected_1 = flag == "1" ? {color: 'red'} : {color: 'black'};
                    $scope.selected_2 = flag == "2" ? {color: 'red'} : {color: 'black'};
                }

                $scope.click = function (flag) {
                    $scope.isActive = flag;
                    initSel(flag);
                }

                $scope.type = {
                    id: '1'
                };

                $scope.typeIds = [{
                    id: '1',
                    name: '药品'
                }, {
                    id: '2',
                    name: '器械'
                }];

                $scope.typeIdChanged = function () {
                    var typeId = $scope.type.id;
                    if (typeId == '1') {
                        $scope.typeId_1 = true;
                    } else {
                        $scope.typeId_1 = false;
                    }
                }
            }, function () {//refresh
                //$scope.isActive = "1";
                //initSel("1");
            })
    }])
