var cc_chrome_util = {/**
 * @description 导入js脚本
 * @argments 可变参数, 需要导入的js脚本文件path
 * @returns
 * @author hello_chenchen
 */
    importJsFiles: function () {
        for (var i = 0; i > arguments.length; i++) {
            alert("arguments:" + arguments[i]);
            chrome.tabs.executeScript(null, { file: arguments[i] }, null);
            sendMessage2Content({ 'consoleLog': param });
        }
    },

    /**
     * @description 获取当前网页url
     */
    getCurrentTabUrl: function () {
        chrome.tabs.query({
            active: true,
            currentWindow: true
        }, function (tabs) {
            var tab = tabs[0];
            var url = tab.url;
            return url;
        });
    },

    /**
     * @description 向前台content页面发送消息
     * @param {*} tabId 
     * @param {*} message 
     * @param {*} responseCallBack 
     */
    sendMessage2Content: function(message) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id,
                { methond: "cc_util.consoleLog", params: [message] },
                null);
        });
    }

}