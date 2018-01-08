var cc_content = {

    init: function() {

        chrome.runtime.onMessage.addListener( function (message, sender, sendResponse){
            cc_util.executeFunctionByName(message.methond, window, message.params);
        });

    }
}

cc_content.init();



