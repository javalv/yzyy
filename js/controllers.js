angular.module('root.controllers', [])

    .controller('rootCtrl', function ($rootScope, $scope, $ionicModal,$timeout) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
            console.info(toState)
        })

        var initMapping = {}
        //多选
        $rootScope.multipleShow = function (initParams,key) {

            $timeout(function () {
                $rootScope.multipleSelectShow = initParams;
            },200);
            $scope.multipleModal.show();
        }

        $ionicModal.fromTemplateUrl('multipleModal.html', function (modal) {
            $scope.multipleModal = modal;
        }, {
            animation: 'slide-in-up',
            focusFirstInput: false
        });


        //大列表多选
        $rootScope.multiplePlusShow = function (initParams,key) {

            $timeout(function () {
                $rootScope.multiplePlusSelectShow = initParams;
            });
            $scope.multiplePlusModal.show();
        }

        $ionicModal.fromTemplateUrl('multiplePlusModal.html', function (modal) {
            $scope.multiplePlusModal = modal;
        }, {
            animation: 'slide-in-up',
            focusFirstInput: false
        });


        //地区联动
        $rootScope.areaShow = function (initParams,key) {

            $timeout(function () {
                $rootScope.areaSelectShow = initParams;
            });
            $scope.areaModal.show();
        }

        $ionicModal.fromTemplateUrl('areaModal.html', function (modal) {
            $scope.areaModal = modal;
        }, {
            animation: 'slide-in-up',
            focusFirstInput: false
        });

        //手动填写
        $rootScope.listDiyShow = function (initParams,key) {

            $timeout(function () {
                $rootScope.listShow = initParams;
            });
            $scope.listDiyModal.show();
        }

        $ionicModal.fromTemplateUrl('listDiyModal.html', function (modal) {
            $scope.listDiyModal = modal;
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
                assertive: true,
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
                assertive: true,
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

    })
    .controller('listDiyCtrl', function ($rootScope, $scope) {
        $rootScope.$watch('listShow', function (newV) {
            if(typeof newV == 'undefined' || newV == null){
                return;
            }
            $scope.params = {
                title: newV.title,
                positive: true,
                opts: newV.opts
            }
        });

    });