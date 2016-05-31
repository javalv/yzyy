angular.module('root.controllers', [])

    .controller('rootCtrl', function ($rootScope, $scope, $ionicModal,$timeout) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
            console.info(toState)
            if (toState.name == 'chats') {
                $scope.backBtn = 'true';
            } else {
                $scope.backBtn = 'true';
            }
        })


        var inits = {}
        //多选
        $rootScope.multipleShow = function (initParams,key) {
            var times = inits[key];
            if(typeof times == 'undefined' || times == null){//第一次
                inits[key] = 1;
                $timeout(function () {
                    $rootScope.multipleSelectShow = initParams;
                });
            }
            else{
                inits[key] = inits[key] + 1;
            }
            $scope.multipleModal.show();
        }

        //$rootScope.$on('multiple-select-init', function (event,initParams) {
        //    $timeout(function () {
        //        $rootScope.multipleSelectShow = initParams;
        //    },200)
        //    $scope.multipleModal.show();
        //})

        $ionicModal.fromTemplateUrl('multipleModal.html', function (modal) {
            $scope.multipleModal = modal;
        }, {
            animation: 'slide-in-up',
            focusFirstInput: false
        });


        //大列表多选
        $rootScope.multiplePlusShow = function (initParams,key) {
            var times = inits[key];
            if(typeof times == 'undefined' || times == null){//第一次
                inits[key] = 1;
                $timeout(function () {
                    $rootScope.multiplePlusSelectShow = initParams;
                });
            }
            else{
                inits[key] = inits[key] + 1;
            }
            $scope.multiplePlusModal.show();
        }
        //$rootScope.$on('multiple-plus-select-init', function (event,initParams) {
        //    $timeout(function () {
        //        $rootScope.multiplePlusSelectShow = initParams;
        //    },200)
        //    $scope.multiplePlusModal.show();
        //})

        $ionicModal.fromTemplateUrl('multiplePlusModal.html', function (modal) {
            $scope.multiplePlusModal = modal;
        }, {
            animation: 'slide-in-up',
            focusFirstInput: false
        });


        //地区联动
        $rootScope.areaShow = function (initParams,key) {
            var times = inits[key];
            if(typeof times == 'undefined' || times == null){//第一次
                inits[key] = 1;
                $timeout(function () {
                    $rootScope.areaSelectShow = initParams;
                });
            }
            else{
                inits[key] = inits[key] + 1;
            }
            $scope.areaModal.show();
        }
        //$rootScope.$on('area-select-init', function (event,initParams) {
        //    $timeout(function () {
        //        $rootScope.areaSelectShow = initParams;
        //    },200)
        //    $scope.areaModal.show();
        //})
        $ionicModal.fromTemplateUrl('areaModal.html', function (modal) {
            $scope.areaModal = modal;
        }, {
            animation: 'slide-in-up',
            focusFirstInput: false
        });
    })

    .controller('multipleCtrl', function ($rootScope, $scope) {
        $rootScope.$watch('multipleSelectShow', function (newV) {
            if(typeof newV == 'undefined' || newV == null){
                return;
            }
            $scope.multipleSelect = {
                title: newV.title,
                positive: true,
                opts: newV.opts
            }
        });

    })

    .controller('multiplePlusCtrl', function ($rootScope, $scope) {
        $rootScope.$watch('multiplePlusSelectShow', function (newV) {
            if(typeof newV == 'undefined' || newV == null){
                return;
            }

            if(typeof newV.opts == 'undefined' || newV.opts == null ){
                return;
            }

            if(Object.prototype.toString.call(newV.opts) !== '[object Array]' || newV.opts.length == 0){
                $scope.noDivide = false;
                $scope.divide = false;
                return ;
            }

            if(typeof(newV.opts[0].data) == 'undefined' || newV.opts[0].data == null){//不用划分
                $scope.noDivide = true ;
                $scope.divide = false;
            }else{
                $scope.noDivide = false;
                $scope.divide = true;
            }

            $scope.multipleSelect = {
                title: newV.title,
                positive: true,
                opts: newV.opts
            }
        });

    })

    .controller('areaCtrl', function ($rootScope, $scope) {
        $rootScope.$watch('areaSelectShow', function (newV) {
            if(typeof newV == 'undefined' || newV == null){
                return;
            }
            $scope.areaSelect = {
                title: newV.title,
                positive: true,
                opts: newV.opts
            }
        });

    });