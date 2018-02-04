/**
 * 
 * 
 */
function cc_mouse () {

    var m_element = new cc_elements();

    /**
     * 
     * @param {*} windowsEvent 
     */
    this.mouseOverAction = function(windowsEvent) {
        if(m_element.getTargetElement() != null)
        {
            m_element.removeHighLightElement();
        }

        //更新cc_elements类中的targetElement
        m_element.setTargetElement(windowsEvent.target);

        m_element.highLightElement();
    };
}