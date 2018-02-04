// var cc_elements = {
//     targetElement: null,
//     originalOutLineStyle: "",

//     highLightElement: function() {

//         cc_elements.originalOutLineStyle = cc_elements.targetElement.style.outline;
//         cc_elements.targetElement.style.outline = "solid 6px rgba(255,0,0,0.5)";
//     },

//     removeHighLightElement: function() {
//         cc_elements.targetElement.style.outline = cc_elements.originalOutLineStyle;
//     }
// }

function cc_elements(){
    var targetElement = null;
    var originalOutLineStyle = "";

    this.getTargetElement = function() {
        return targetElement;
    }

    this.setTargetElement = function(element) {
        targetElement = element;
    }

    this.highLightElement = function() {
        originalOutLineStyle = targetElement.style.outline;
        targetElement.style.outline = cc_css.cc_sideHighLight;
    }

    this.removeHighLightElement = function() {
        targetElement.style.outline = originalOutLineStyle;
    }
}