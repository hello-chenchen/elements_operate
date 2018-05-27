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
     * @description 显示消息1秒钟
     */
    showMessage: function (pWidth, content)
    {    
        $("#msg").remove();
        var html ='<div id="msg" style="position:fixed;top:50%;width:100%;height:30px;line-height:30px;margin-top:-15px;"><p style="background:#000;opacity:0.8;width:'+ pWidth +'px;color:#fff;text-align:center;padding:10px 10px;margin:0 auto;font-size:12px;border-radius:4px;">'+ content +'</p></div>'
                $("body").append(html);
                var t=setTimeout(next,1000);
                function next()
                {
                    $("#msg").remove();
                    
                }
    }
}