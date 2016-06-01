angular.module('terminalProxyQuery.controllers', [])

    .controller('terminalProxyQueryCtrl', ['$scope','$rootScope','$switchLoad', function ($scope, $rootScope , $switchLoad) {

        $switchLoad.$ready($scope,
            //init
            function () {


                //选择导致内容切换
                $scope.switchType = {

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

            },
            //refresh
            function () {
                //$scope.isActive = "1";
                //initSel("1");
                console.info("refresh...")
            })
    }])
