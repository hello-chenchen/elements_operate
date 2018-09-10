chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    //只有页面完成才加载
    if ("complete" == changeInfo.status) {
        cc_chrome_util.sendMessage2Content("cc_util.consoleLog", "hello world!");
        //判断url是否是localStorage中存储，是则执行下面的操作
        // isExistUrl();
    }
});

chrome.runtime.onMessage.addListener(
    function (message, sender, sendResponse) {
        cc_util.executeFunctionByName(message.methond, window, message.params);
        // alert("cc_methond:" + message.methond + message.params);
    });

chrome.commands.onCommand.addListener(function(command) {
    cc_chrome_util.sendMessage2Content("cc_util.consoleLog", command);
    });