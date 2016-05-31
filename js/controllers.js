angular.module('root.controllers', [])

    .controller('rootCtrl', function ($rootScope, $scope, $ionicModal) {
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
            console.info(toState)
            if (toState.name == 'chats') {
                $scope.backBtn = 'true';
            } else {
                $scope.backBtn = 'true';
            }
        })

        //多选
        $rootScope.$on('multiple-select-init', function (event,initParams) {
            $rootScope.multipleSelectShow = initParams;
            $scope.multipleModal.show();
        })

        $ionicModal.fromTemplateUrl('multipleModal.html', function (modal) {
            $scope.multipleModal = modal;
        }, {
            animation: 'slide-in-up',
            focusFirstInput: false
        });


        //多列表多选
        $rootScope.$on('multiple-plus-select-init', function (event,initParams) {
            $rootScope.multiplePlusSelectShow = initParams;
            $scope.multiplePlusModal.show();
        })

        $ionicModal.fromTemplateUrl('multiplePlusModal.html', function (modal) {
            $scope.multiplePlusModal = modal;
        }, {
            animation: 'slide-in-up',
            focusFirstInput: false
        });

        //地区联动
        $rootScope.$on('area-select-init', function (event,initParams) {
            $rootScope.areaSelectShow = initParams;
            $scope.areaModal.show();
        })
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