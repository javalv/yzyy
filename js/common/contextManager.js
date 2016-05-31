angular.module('contextManager', [])

    .factory('$UserService', ['locals', function (locals) {

        var key = "user";

        var getUser = function () {
            var user = locals.getObject(key);
            if (user == null || user == "undefined"
                || user.id == "undefined" || user.id == null
                || user.token == "undefined" || user.token == null) {
                return null;
            }

            return user;
        }

        var isLogined = function () {
            var user = locals.getObject(key);
            var flag = user == null || user == "undefined"
                || user.id == "undefined" || user.id == null
                || user.token == "undefined" || user.token == null;

            return !flag;
        }

        var updateUser = function (user) {
            locals.setObject(key, user);
        }

        var destroy = function () {
            locals.clear(key)
        }

        var verifyToken = function (token) {
            return true;
        }

        return {

            update: function (user) {
                updateUser(user);
            },

            getUser: function () {
                var user = getUser();
                return user;
            },

            isLogined: function () {
                return isLogined();
            },

            exit: function () {
                destroy();
            },

            updateToken: function (token) {
                var user = getUser();
                if (user != null) {
                    user.token = token;
                }

            },

            hasLogin: function () {
                var user = getUser();
                if (user == null) {
                    return false;
                }
                var token = user.token;
                return verifyToken(token);
            }

        }

    }])

    .provider('$EnvService', function () {

        //可以在config里面配置的属性
        this.env = GLOBAL.WEIXIN;

        this.$get = function () {
            var that = this;

            return {
                currentEnv: function () {
                    return that.env;
                }
            };
        }

    });
