var cc_chrome_util = {

    /**
     * @description 向前台content页面发送消息
     */
    sendMessage2Content: function(funcName, message) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id,
                { methond: funcName, params: [message] },
                null);
        });
    },

    /**
     * @description 向后台background页面发送消息
     */
    sendMessage2Background: function(funcName, message) {
        chrome.runtime.sendMessage({ methond: funcName, params: [message] }, null);
    }

}