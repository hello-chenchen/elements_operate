var cc_util = {
    
    executeFunctionByName: function (functionName, context /*, args */) {
        var args = Array.prototype.slice.call(arguments, 2);
        var namespaces = functionName.split(".");
        var func = namespaces.pop();
        for (var i = 0; i < namespaces.length; i++) {
            context = context[namespaces[i]];
        }
        return context[func].apply(context, args);
    },

    consoleLog: function () {
        for(var i = 0; i < arguments.length; i++) {
            console.log("cconsoleLog: " + arguments[i]);
        }
    }
}