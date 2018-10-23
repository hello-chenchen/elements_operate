function cc_main () {
    var m_element = new cc_elements();
    var m_mouse = new cc_mouse(m_element);
    // var m_keyboard = new cc_mouse(m_element);    //@TODO暂未使用

    /**
     * @description 注册网页事件
     * @param {*} event
     */
    var registDocumentEvent = function() {
        document.addEventListener("mouseover", function() {
            m_mouse.mouseOverAction(window.event);
        }, true);

        document.addEventListener("mouseout", function() {
            m_mouse.mouseOutAction(window.event);
        }, true);

        document.addEventListener("mousedown", function(){
            m_mouse.mouseDownAction(window.event);
        }, true);
    }

    this.executeCommand = function(command) {
        if('stop' == command) {
            cc_util.consoleLog("command:" + command);
						m_mouse.lockOperation();
						m_element.revertTargetElementOutLine();
        } else if('start' == command) {
            cc_util.consoleLog("command:" + command);
            m_mouse.unLockOperation();
        } else {
            cc_util.consoleLog("unknow command:" + command);
        }
    }

    /**
     * @description 主业务，初始化函数
    */
    this.init = function() {
        registDocumentEvent();
    }

}
