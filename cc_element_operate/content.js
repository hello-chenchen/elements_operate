var cc_content = {
    m_mouse: new cc_mouse(),

    /**
     * @description content页面初始化
     */
    init: function() {

        //添加监听消息
        chrome.runtime.onMessage.addListener( function (message, sender, sendResponse){
            cc_util.executeFunctionByName(message.methond, window, message.params);
        });

        // document.addEventListener("mouseenter", function() {
        //     cc_content.m_mouse.mouseEnterAction(window.event);
        // }, true);

        // document.addEventListener("mouseleave", function () {
        //     cc_content.m_mouse.mouseLeaveAction(window.event);
        // }, true);

        //注册mouseover事件
        document.addEventListener("mouseover", function() {
            cc_content.m_mouse.mouseOverAction(window.event);
        }, true);

        document.addEventListener("mouseout", function() {
            cc_content.m_mouse.mouseOutAction(window.event);
        }, true);

        //注册mousedown事件
        // document.addEventListener("mousedown", function(){
        //     cc_content.m_mouse.mouseDownAction(window.event);
        // }, true);

        //获取当前网页主机名
        var currentDomain = window.location.host;
        cc_util.consoleLog(currentDomain);
    },

    /**
     * @description 向后台发送测试消息
     */
    sendMessage2BackgroundTest: function() {
        cc_chrome_util.sendMessage2Background("cc_util.alertMessage", "testMessage");
    }
}

cc_content.init();