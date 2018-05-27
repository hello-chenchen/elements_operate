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

    highLightElements: function(message) {
        console.log(message);
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
    },

    /**
     * @description 将DOM元素对象转换成jQuery对象
     */
    transDOM2jQuery: function (domElement) {
        if(!(domElement instanceof jQuery)) {
            return $(domElement);
        }
    },

    /**
     * @description 复制element元素的内容
     */
    selectText: function (containerid) {
        if(document.selecttion) {
            var range = document.body.createTextRange();
            range.moveToElementText(document.getElementById(containerid));
            range.select();
            // document.execCommand("Copy");
        } else if(window.getSelection) {
            var range = document.createRange();
            range.selectNode(document.getElementById(containerid));
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
            // document.execCommand("Copy");
        }
    }

}