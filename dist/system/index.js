System.register(["aurelia-pal"], function (_export) {
    "use strict";

    var PLATFORM;

    _export("configure", configure);

    function configure(config) {
        config.globalResources([PLATFORM.moduleName("./attributes/files-attribute")]);
    }

    return {
        setters: [function (_aureliaPal) {
            PLATFORM = _aureliaPal.PLATFORM;
        }],
        execute: function () {}
    };
});