chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    //只有页面完成才加载
    if ("complete" == changeInfo.status) {
        cc_chrome_util.sendMessage2Content("hello world");
        //判断url是否是localStorage中存储，是则执行下面的操作
        // isExistUrl();
    }
});

function isExistUrl() {
    var currentTabUrl = getCurrentTabUrl();
}

// function sendMessage2Content(message) {
//     alert("cccc");
//     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
//         chrome.tabs.sendMessage(tabs[0].id,
//             { methond: "cc_util.consoleLog", params:["print log"] },
//             null);
//     });
// }
