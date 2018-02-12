/**
 * @description 鼠标事件
 */
function cc_mouse () {
    var m_element = new cc_elements();
    var locked = true;  //加锁
    var unlocked = false;   //未加锁
    var m_popmenuLock = unlocked;

    /**
     * 添加鼠标悬停操作
     * @param {*} windowsEvent
     */
    this.mouseOverAction = function(windowsEvent) {
        // if(m_element.getTargetElement() != null)
        // {
        //     m_element.revertTargetElementOutLine();
        // }
        //更新cc_elements类中的targetElement
        m_element.setTargetElement(windowsEvent.target);
        m_element.setOriginalOutLineStyle(windowsEvent.target.style.outline);

        m_element.highLightElement();
    }

    this.mouseOutAction =function(windowsEvent) {
        if(m_element.getTargetElement() != null)
        {
            m_element.revertTargetElementOutLine();
        }
    }

    this.mouseEnterAction = function(windowsEvent) {
        m_element.setTargetElement(windowsEvent.target);
        // m_element.setOriginalOutLineStyle(windowsEvent.target.style.outline);
        m_element.highLightElement();
    }

    this.mouseLeaveAction = function(windowsEvent) {
        m_element.revertTargetElementOutLine();
    }

    /**
     * 添加鼠标点击操作
     * @param {*} windowsEvent
     */
    this.mouseDownAction = function(windowsEvent) {
        console.log("mouseDownAction");
        m_element.setTargetElement(windowsEvent.target);
        m_element.appendElement(cc_css.cc_button_test);
    }
}