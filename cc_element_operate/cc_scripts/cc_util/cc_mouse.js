var cc_mouse = {

    /**
     * @description 添加鼠标悬停注册函数
     */
    mouseOverActionRegist: function(functionName, message) {
        cc_util.executeFunctionByName(functionName, message);
    }
}