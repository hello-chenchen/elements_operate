chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    //只有页面完成才加载
    if ("complete" == changeInfo.status) {
        // chrome.tabs.executeScript(null, { file: "third_party/jquery-3.2.1.js" }, null);
        // chrome.tabs.executeScript(null, { file: "cc_scripts/cc_util/cc_chrome_util.js" }, null);

        // cc_chrome_util.importJsFiles( "cc_scripts/cc_util/cc_util.js" );

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
