/**
 * @description 通用工具类
 */
var cc_util = {
    /**
     * @description 通过字符串执行函数
     */
    executeFunctionByName: function (functionName, context /*, args */) {
        var args = Array.prototype.slice.call(arguments, 2);
        var namespaces = functionName.split(".");
        var func = namespaces.pop();
        for (var i = 0; i < namespaces.length; i++) {
            context = context[namespaces[i]];
        }
        return context[func].apply(context, args);
    },

    /**
     * @description 打印日志
     */
    consoleLog: function () {
        for(var i = 0; i < arguments.length; i++) {
            console.log("cconsoleLog: " + arguments[i]);
        }
    },

    /**
     * @description 弹出窗口信息
     */
    alertMessage: function () {
        for(var i = 0; i < arguments.length; i++) {
            alert("alertLog: " + arguments[i]);
        }
    },

    /**
     * @description 获取当前页面的url
     */
    getCurrentUrl: function () {
        return window.location.href;
    },

    /**
     * @description 解析主机名
     * @argument strUrl:url
     */
    parseDoMainUrl: function (strUrl) {
        var regExp = /(\w+):\/\/([^/:]+)(:\d*)?([^# ]*)/;

        var matches = strUrl.match(regExp);

        return matches[2];
    }
}