var cc_content = {

    /**
     * @description content页面初始化
     */
    init: function() {

        chrome.runtime.onMessage.addListener( function (message, sender, sendResponse){
            cc_util.executeFunctionByName(message.methond, window, message.params);
        });

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



