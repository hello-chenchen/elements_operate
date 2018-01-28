var cc_mouse = {

    /**
     * @description 添加鼠标悬停动作
     */
    mouseOverAction: function(windowsEvent) {

        if(cc_elements.targetElement != null)
        {
            cc_elements.removeHighLightElement();
        }

        cc_elements.targetElement = windowsEvent.target;

        cc_elements.highLightElement();
    }
}