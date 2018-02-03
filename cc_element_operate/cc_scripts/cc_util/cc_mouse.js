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

function hc_mouse () {
    this.mouseOverAction = function (windowsEvent) {
        if(cc_elements.targetElement != null)
        {
            cc_elements.removeHighLightElement();
        }

        cc_elements.targetElement = windowsEvent.target;

        cc_elements.highLightElement();
    }

    var privateMouse = 18;

    this.publicMouse = 22;

    this.getPrivateMouse = function() {
        return privateMouse;
    };
}