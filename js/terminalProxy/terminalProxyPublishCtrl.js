angular.module('terminalProxyPublish.controllers', [])

    .controller('terminalProxyPublishCtrl', ['$scope','$rootScope','$switchLoad', function ($scope, $rootScope , $switchLoad) {

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
                        [
                            {id: 1, text: '呼吸内科'},
                            {id: 2, text: '心内科'},
                            {id: 1, text: '神内科'},
                            {id: 2, text: '消化科'},
                            {id: 3, text: '基数测试'}
                        ],
                        [
                            {id: 1, text: '血液科'},
                            {id: 1, text: '肾病科'},
                            {id: 2, text: '内分泌科'},
                            {id: 1, text: '风湿免疫科'},

                        ]
                    ]},
                    {sign:"外科",data:[
                        [
                            {id: 1, text: '呼吸内科'},
                            {id: 2, text: '心内科'},
                            {id: 1, text: '神内科'},
                            {id: 2, text: '消化科'},
                            {id: 3, text: '基数测试'}
                        ],
                        [
                            {id: 1, text: '血液科'},
                            {id: 1, text: '肾病科'},
                            {id: 2, text: '内分泌科'},
                            {id: 1, text: '风湿免疫科'},

                        ]
                    ]},
                    {sign:"其它",data:[
                        [
                            {id: 1, text: '呼吸内科'},
                            {id: 2, text: '心内科'},
                            {id: 1, text: '神内科'},
                            {id: 2, text: '消化科'},
                            {id: 3, text: '基数测试'}
                        ],
                        [
                            {id: 1, text: '血液科'},
                            {id: 1, text: '肾病科'},
                            {id: 2, text: '内分泌科'},
                            {id: 1, text: '风湿免疫科'},

                        ]
                    ]}
                ];

                $scope.expectOptions = [
                    {id: 1, text: '处方药'},
                    {id: 2, text: '检验设备'},
                    {id: 1, text: '影像设备'},
                    {id: 2, text: '高值耗材'},
                    {id: 1, text: '低值耗材'},
                    {id: 1, text: 'POCT'}
                ];

                $scope.contactsSexOptions = [
                    {id:1,text:'男'},
                    {id:2,text:'女'}
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
                    $rootScope.multiplePlusShow(params,'doExpectSelect');
                }

                //行业经验
                $scope.doIndustryExperienceSelect = function () {
                    var params = {
                        title: '行业经验',
                        opts: $scope.expectOptions,
                    }
                    $rootScope.multipleShow(params,'doIndustryExperienceSelect');
                }

                //联系人性别
                $scope.doContactsSexSelect = function () {

                }



            },
            //refresh
            function () {
                //$scope.isActive = "1";
                //initSel("1");
                console.info("refresh...")
            })
    }])
