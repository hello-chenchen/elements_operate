var cc_mouse = {

    /**
     * @description 添加鼠标悬停注册函数
     */
    mouseOverActionRegist: function(functionName, context, windowsEvent) {
        cc_elements.targetElement = windowsEvent.target;
        cc_util.executeFunctionByName(functionName, context);
    },

    /**
     * @description 添加鼠标悬停动作
     */
    mouseOverAction: function(e) {
        e.target.style.outline = "solid 6px rgba(255,0,0,0.5)";
    },

    mouseOutActionRegist: function(functionName,context) {
        cc_util.executeFunctionByName(functionName, context);
    }
}