window._nativeApi = {
    getAppVersion: function(info, onSuccess, onFailure) {
        onSuccess = onSuccess || function(){};
        onFailure = onFailure || function(){};

        if(window.cefQuery) {
            var req = {
                type: "app",
                fn: "getAppVersion",
                params: {}
            };
            window.cefQuery({
                request: JSON.stringify(req),
                onSuccess: onSuccess,
                onFailure: onFailure
            });
        }

    },
    getSettings: function(callback) {
        if(!window.cefQuery) {
            callback();
            return ;
        }
        var req = {
            type: "setting",
            fn: "getSettings",
            params: {}
        };
        window.cefQuery({
            request: JSON.stringify(req),
            onSuccess: function(response) {
                callback(JSON.parse(response));
            },
            onFailure: function(errorCode, errorMessage) {
                callback({});
            }
        });
    },
    saveSettings: function(params) {
        if(!window.cefQuery) {
            return ;
        }
        if(typeof(params) === 'object') {
            var req = {
                type: "setting",
                fn: "saveSettings",
                params: params
            };
            window.cefQuery({
                request: JSON.stringify(req),
                onSuccess: function(response) {},
                onFailure: function(errorCode, errorMessage) {}
            });
        }
    },
    showNotification: function(title, options, callback) {
        callback = callback || function(){};
        if(window.cefQuery) {
            var req = {
                type: "notify",
                fn: 'showNotification',
                params: {
                    title: title||"",
                    options: options
                }
            };
            window.cefQuery({
                request: JSON.stringify(req),
                onSuccess: function(response) {
                    callback(response);
                },
                onFailure: function(errorCode, errorMessage) {}
            });
        }
    },
    notifyMessage: function(url){
        if(window.cefQuery) {
            dispatcher._$redirect(
                url,{replace:!0}
            );
        }
    },
    notifyMesssageRead:function(_id){
        if(window.cefQuery) {
            var req = {
                type: "read",
                fn: 'notifyMesssageRead',
                params: {
                    chatid:_id
                }
            };
            window.cefQuery({
                request: JSON.stringify(req),
                onSuccess: function(response) {

                },
                onFailure: function(errorCode, errorMessage) {}
            });
        }
    },
	/**
     * 登入接口
     * @param uid
     */
    login: function(uid, hostname, onSuccess, onFailure){
        onSuccess = onSuccess || function(){};
        onFailure = onFailure || function(){};

        if(window.cefQuery){
            var req = {
                type : 'user',
                fn: 'login',
                params:{
                    uid: uid,
                    hostname: hostname
                }
            }
            window.cefQuery({
                request: JSON.stringify(req),
                onSuccess:onSuccess,
                onFailure:onFailure
            });
        }

    },
	/**
     * 登出接口
     * @param uid
     */
    logout: function(uid, onSuccess, onFailure){
        onSuccess = onSuccess || function(){};
        onFailure = onFailure || function(){};
        if(window.cefQuery){
            var req = {
                type : 'user',
                fn: 'logout',
                params:{
                    uid: uid
                }
            }
            window.cefQuery({
                request: JSON.stringify(req),
                onSuccess:onSuccess,
                onFailure:onFailure
            });
        }

    },
	/**
     * 播放视频
     * @param url
     * @param onSuccess
     * @param onFailure
     */
    playAudio: function(url, onSuccess, onFailure){
        onSuccess = onSuccess || function(){};
        onFailure = onFailure || function(){};

        if(window.cefQuery){
            var req = {
                type : 'audio',
                fn: 'playAudio',
                params:{
                    url: url
                }
            }
            window.cefQuery({
                request: JSON.stringify(req),
                onSuccess:onSuccess,
                onFailure:onFailure
            });
        }
    },
	/**
     * 停止播放
     * @param url
     * @param onSuccess
     * @param onFailure
     */
    stopAudio: function(url, onSuccess, onFailure){
        onSuccess = onSuccess || function(){};
        onFailure = onFailure || function(){};
        if(window.cefQuery){
            var req = {
                type : 'audio',
                fn: 'stopAudio',
                params:{
                    url: url
                }
            }
            window.cefQuery({
                request: JSON.stringify(req),
                onSuccess:onSuccess,
                onFailure:onFailure
            });
        }

    },
	/**
     * 完成播放
     * @param url
     * @param onSuccess
     * @param onFailure
     */
    completeAudio: function(url, onSuccess, onFailure){
        onSuccess = onSuccess || function(){};
        onFailure = onFailure || function(){};
        if(window.cefQuery){
            var req = {
                type : 'audio',
                fn: 'completeAudio',
                params:{
                    url : url
                }
            };
            window.cefQuery({
                request: JSON.stringify(req),
                onSuccess:onSuccess,
                onFailure:onFailure
            });
        }
    },
	/**
     * 重定向到login页面
     * @param url
     * @param onSuccess
     * @param onFailure
     */
    redirectLogin: function(url, onSuccess, onFailure){
        onSuccess = onSuccess || function(){};
        onFailure = onFailure || function(){};
        if(window.cefQuery){
            var req = {
                type : 'user',
                fn: 'redirectLogin',
                params:{
                    url : url||'/login'
                }
            };
            window.cefQuery({
                request: JSON.stringify(req),
                onSuccess:onSuccess,
                onFailure:onFailure
            });
        }
    }
}