var cc_content = {

    /**
     * @description content页面初始化
     */
    init: function() {

        //添加监听消息
        chrome.runtime.onMessage.addListener( function (message, sender, sendResponse){
            cc_util.executeFunctionByName(message.methond, window, message.params);
        });

        //注册mouseover事件
        document.addEventListener("mouseover", function() {
            cc_mouse.mouseOverAction(window.event);
        }, true);

        //获取当前网页主机名
        var currentUrl = cc_util.getCurrentUrl();
        var currentDomain = cc_util.parseDoMainUrl(currentUrl); 
        cc_util.consoleLog(currentUrl);
    },

    /**
     * @description 向后台发送测试消息
     */
    sendMessage2BackgroundTest: function() {
        cc_chrome_util.sendMessage2Background("cc_util.alertMessage", "testMessage");
    }
}

cc_content.init();
// cc_content.sendMessage2BackgroundTest();



