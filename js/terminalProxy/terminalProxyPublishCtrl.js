angular.module('terminalProxyPublish.controllers', [])

    .controller('terminalProxyPublishCtrl', ['$scope','$rootScope','$switchLoad','$DicService','$Notice',
        function ($scope, $rootScope , $switchLoad, $DicService,$Notice) {

        $switchLoad.$ready($scope,
            //init
            function () {

                $scope.data = {
                    proxy:'1'
                };

                //选择导致内容切换
                $scope.switchType = {

                    //产品类型(药品、器械) 该页面暂时没有
                    productType:1,
                    //tab (医院/药店)
                    tabType:1,

                    //医院
                    hospital:true,
                    //药房
                    pharmacy:false
                };

                //代理人类型: 药品公司 、器械公司 、业务代表、 自然人 (单选)
                $DicService.getProxyOptions().then(function (result) {
                    $scope.proxyOptions = result.data;
                });

                //办公负责区
                $DicService.getOfficesOptions().then(function (result) {
                    $scope.officesOptions = result.data;
                });

                $DicService.getExpectOptions().then(function (result) {
                    $scope.expectOptions = result.data;
                });

                //联系人性别
                $DicService.getSexOptions().then(function (result) {
                    $scope.contactsSexOptions = result.data;
                });

                //代理商能力
                $DicService.getProxyPowerOptions().then(function (result) {
                    $scope.proxyPowerOptions = result.data;
                });

                $scope.hospitals = [
                    {id:1,text:"第一项",value:""},
                    {id:1,text:"第二项",value:""},
                    {id:1,text:"第三项",value:""},
                    {id:1,text:"第四项",value:""},
                    {id:1,text:"第五项",value:""}
                ]
            },

            //load
            function () {

                //医院/药店切换
                $scope.switchClick = function (flag) {
                    $scope.switchType.tabType = flag;

                    if(flag == '1'){
                        $scope.switchType.hospital = true;
                        $scope.switchType.pharmacy = false;
                    }else{
                        $scope.switchType.hospital = false;
                        $scope.switchType.pharmacy = true;
                    }

                }

                //主要医院列举: 如 北大人民医院、北京301医院、山东齐鲁医院 (手写， 全称，可设5个框，用于分别填写医院 ）*
                $scope.doMajorHospital = function () {
                    var params = {
                        title: '主要医院列举',
                        opts: $scope.hospitals
                    }
                    $rootScope.listDiyShow(params);
                }

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
                        opts: $scope.expectOptions,
                    }
                    $rootScope.multipleShow(params,'doExpectSelect');
                }

                //负责区域
                $scope.doAreaSelect = function () {
                    var params = {
                        title: '负责区域',
                        opts: $scope.expectOptions,
                    }
                    $rootScope.areaShow(params);
                }

                //行业经验
                $scope.doIndustryExperienceSelect = function () {
                    var params = {
                        title: '行业经验',
                        opts: $scope.expectOptions,
                    }
                    $rootScope.multiplePlusShow(params,'doIndustryExperienceSelect');
                }

                //行业经验
                $scope.doProxyPowerSelect = function () {
                    var params = {
                        title: '代理商能力',
                        opts: $scope.proxyPowerOptions,
                    }
                    $rootScope.multipleShow(params,'doProxyPowerSelect');
                }

                $scope.publish = function () {
                    $Notice.show($scope,"发布成功","我们将在1个工作日内审核您的信息!","button-assertive");
                }

            },
            //refresh
            function () {
                console.info("refresh...")
            })
    }])
