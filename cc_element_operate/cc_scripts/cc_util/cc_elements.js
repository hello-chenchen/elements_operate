var cc_elements = {
    targetElement: null,
    originalOutLineStyle: "",

    highLightElement: function() {

        cc_elements.originalOutLineStyle = cc_elements.targetElement.style.outline;
        cc_elements.targetElement.style.outline = "solid 6px rgba(255,0,0,0.5)";
    },

    removeHighLightElement: function() {
        cc_elements.targetElement.style.outline = cc_elements.originalOutLineStyle;
    }
}