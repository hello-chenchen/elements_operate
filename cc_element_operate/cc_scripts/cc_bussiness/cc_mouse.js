/**
 * @description 鼠标事件
 */
function cc_mouse (element) {
    var m_element = element;
    var locked = true;  //加锁
    var unlocked = false;   //未加锁
    var m_popmenuLock = unlocked;

    /**
     * @description 添加鼠标悬停操作
     * @param {*} windowsEvent
     */
    this.mouseOverAction = function(windowsEvent) {
        //更新cc_elements类中的targetElement
        m_element.setTargetElement(windowsEvent.target);
        m_element.setOriginalOutLineStyle(windowsEvent.target.style.outline);

        m_element.highLightElement();
    }

    /**
     * @description 添加离开选中元素事件
     * @param {*} windowsEvent 
     */
    this.mouseOutAction =function(windowsEvent) {
        if(m_element.getTargetElement() != null)
        {
            m_element.revertTargetElementOutLine();
        }
    }

    /**
     * 添加鼠标点击操作
     * @param {*} windowsEvent
     */
    this.mouseDownAction = function(windowsEvent) {
        console.log("mouseDownAction");
        m_element.setTargetElement(windowsEvent.target);
        m_element.copyElement(windowsEvent.target);
        cc_util.showMessage(100, "Copyed");
    }
}