/**
 * @description 导入js脚本
 * @argments 可变参数, 需要导入的js脚本文件path
 * @returns
 * @author hello_chenchen
 */
function importJsFiles() {
    for (param in arguments) {
        chrome.tabs.executeScript(null, { file: param }, null);
        sendMessage2Content(null, {'consoleLog': param}, null);
    }
}

function getCurrentTabUrl () {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        var tab = tabs[0];
        var url = tab.url;
        return url;
    });
}

/**
 * 
 * @param {*} tabId 
 * @param {*} message 
 * @param {*} responseCallBack 
 */
function sendMessage2Content(tabId, message, responseCallBack) {
    chrome.tabs.sendMessage(tabId, message, responseCallBack);
}