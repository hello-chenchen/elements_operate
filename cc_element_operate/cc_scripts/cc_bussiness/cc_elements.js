/**
 *@description 元素操作类
 */
function cc_elements(){
    var targetElement = null;//需要操作的元素
    this.getTargetElement = function() {
        return targetElement;
    }
    this.setTargetElement = function(element) {
        targetElement = element;
    }
    
    var originalOutLineStyle = "";//原有的OutLine属性,用于恢复上一个元素的属性
    this.setOriginalOutLineStyle = function(style) {
        originalOutLineStyle = style;
    }

    /**
     * @description 撤销上次对元素的OutLine风格的修改
     */
    this.revertTargetElementOutLine = function() {
        targetElement.style.outline = originalOutLineStyle;
    }

    /**
     * @description 高亮目标Element
     */
    this.highLightElement = function() {
        targetElement.style.outline = cc_css.cc_sideHighLight;
    }

    this.appendElement = function(elementText) {
        cc_util.transDOM2jQuery(targetElement).append(elementText);
    }

    /**
     * @description 选择element元素的内容
     */
    this.selectElement = function (element) {
        if(document.selecttion) {
            var range = document.body.createTextRange();
            range.moveToElementText(element);
            range.select();
        } else if(window.getSelection) {
            var range = document.createRange();
            range.selectNode(element);
            window.getSelection().removeAllRanges();
            window.getSelection().addRange(range);
        }
    }

    /**
     * @param {*} element
     * @description 复制element元素的内容
     */
    this.copyElement = function(element) {
        this.selectElement(element);
        document.execCommand("Copy");
    }
}