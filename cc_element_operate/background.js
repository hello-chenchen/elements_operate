chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    //只有页面完成才加载
    if ("complete" == changeInfo.status) {

        importJsFiles(
            "third_party/jquery-3.2.1.js",
            "third_party/cc_chrome_util.js",
            "cc_scripts/cc_util/cc_util.js"
        );

        //判断url是否是localStorage中存储，是则执行下面的操作
        isExistUrl();
    }
});


function isExistUrl() {
    var currentTabUrl = getCurrentTabUrl();
}

function getTabUrl()