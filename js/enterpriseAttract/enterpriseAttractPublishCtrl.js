angular.module('terminalProxyPublish.controllers', [])

    .controller('terminalProxyPublishCtrl', ['$scope','$rootScope','$switchLoad', function ($scope, $rootScope , $switchLoad) {

        $switchLoad.$ready($scope,
            //init
            function () {

                $scope.data = {};

                //代理人类型: 药品公司 、器械公司 、业务代表、 自然人 (单选)
                $scope.proxyOptions = [{
                    id: '1',
                    text: '药品公司'
                }, {
                    id: '2',
                    text: '器械公司'
                }, {
                    id: '3',
                    text: '业务代表'
                }, {
                    id: '4',
                    text: '自然人'
                }];

                $scope.officesOptions = [
                    {sign:"内科",data:[
                        {id: 1, text: '呼吸内科'},
                        {id: 2, text: '心内科'},
                        {id: 1, text: '神内科'},
                        {id: 2, text: '消化科'},
                        {id: 1, text: '血液科'},
                        {id: 1, text: '肾病科'},
                        {id: 2, text: '内分泌科'},
                        {id: 1, text: '风湿免疫科'}
                    ]},
                    {sign:"外科",data:[
                        {id: 1, text: '呼吸内科'},
                        {id: 2, text: '心内科'},
                        {id: 1, text: '神内科'},
                        {id: 2, text: '消化科'},
                        {id: 1, text: '血液科'},
                        {id: 1, text: '肾病科'},
                        {id: 2, text: '内分泌科'},
                        {id: 1, text: '风湿免疫科'}
                    ]},
                    {sign:"其它",data:[
                        {id: 1, text: '呼吸内科'},
                        {id: 2, text: '心内科'},
                        {id: 1, text: '神内科'},
                        {id: 2, text: '消化科'},
                        {id: 1, text: '血液科'},
                        {id: 1, text: '肾病科'},
                        {id: 2, text: '内分泌科'},
                        {id: 1, text: '风湿免疫科'}
                    ]}
                ];



            },
            //load
            function () {
                var initSel;
                //代理人类型
                $scope.doProxySelect = function () {
                    var data = $scope.data.proxy;

                }

                //目前负责的区域：省份（直辖市）、  市（勾选，单选）*
                $scope.doAreaSelect = function () {
                    var params = {

                    };

                }

                //主要负责医院的类别 ：城市医院、 城市社区、 县级医院、第三终端(单选)*
                $scope.doHospitalTypeSelect = function () {
                    var params = {

                    };
                }

                //主要负责医院的级别： 三级 、二级、一级、未分级（单选）*
                $scope.doHospitalStageSelect = function () {
                    var params = {

                    };
                }

                //主要医院列举: 如 北大人民医院、北京301医院、山东齐鲁医院 (手写， 全称，可设5个框，用于分别填写医院 ）*

                //目前主要负责的科室：下拉列表（*最多选择5个科室）*详见科室列表P6
                $scope.doMajorOfficesSelect = function () {
                    var params = {
                        title: '主要负责的科室',
                        opts: $scope.officesOptions
                    }
                    $rootScope.multiplePlusShow(params,'doMajorOfficesSelect');
                }


                //想代理哪种产品：处方药、检验设备、影像设备、高值耗材、低值耗材、POCT（可多选）*
                $scope.doExpectSelect = function () {
                    var params = {
                        title: '期望代理商品',
                        opts: [
                            {id: 1, text: '处方药'},
                            {id: 2, text: '检验设备'},
                            {id: 1, text: '影像设备'},
                            {id: 2, text: '高值耗材'},
                            {id: 1, text: '低值耗材'},
                            {id: 1, text: 'POCT'}
                        ],
                    }
                    $rootScope.multiplePlusShow(params,'doExpectSelect');
                }

                //期望合作方式：  开发 、上量 、开发+上量(勾选，单选)*
                $scope.doHospitalStageSelect = function () {
                    var params = {

                    };
                    $scope.$emit('area-select-init', params);
                }
                //期望结算方式： 底价 、差价 、佣金制、面议（勾选，单选）*
                $scope.doHospitalStageSelect = function () {
                    var params = {

                    };
                    $scope.$emit('area-select-init', params);
                }
                //是否有区域代理意愿：是、否、以后再说（勾选，单选）





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

                //选择导致内容切换
                $scope.switchType = {
                    //产品类型(药品、器械) 该页面暂时没有
                    productType:1,
                    //tab (医院/药店)
                    tabType:1
                };
            },
            //refresh
            function () {
                //$scope.isActive = "1";
                //initSel("1");
                console.info("refresh...")
            })
    }])
