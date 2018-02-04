/**
 * 
 * 
 */
function cc_mouse () {

    var m_element = new cc_elements();

    /**
     * 添加鼠标悬停操作
     * @param {*} windowsEvent 
     */
    this.mouseOverAction = function(windowsEvent) {
        if(m_element.getTargetElement() != null)
        {
            m_element.revertTargetElementOutLine();
        }
        //更新cc_elements类中的targetElement
        m_element.setTargetElement(windowsEvent.target);
        m_element.setOriginalOutLineStyle(windowsEvent.target.style.outline);

        m_element.highLightElement();
    };
}