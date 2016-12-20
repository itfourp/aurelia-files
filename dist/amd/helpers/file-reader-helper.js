define(["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    var FileReaderHelper = (function () {
        function FileReaderHelper() {
            _classCallCheck(this, FileReaderHelper);
        }

        _createClass(FileReaderHelper, null, [{
            key: "createReader",
            value: function createReader(file, onLoaded, onProgress, onError, additionalData) {
                var reader = new FileReader();
                reader.onload = function (fileLoadedEvent) {
                    onLoaded(file, fileLoadedEvent.target.result, additionalData);
                };

                if (typeof onProgress == "function") {
                    reader.onprogress = function (fileProgressEvent) {
                        onProgress(file, fileProgressEvent.loaded, fileProgressEvent.total, additionalData);
                    };
                }

                if (typeof onError == "function") {
                    reader.onerror = function (fileErrorEvent) {
                        onError(file, fileErrorEvent.target.error, additionalData);
                    };
                }

                return reader;
            }
        }]);

        return FileReaderHelper;
    })();

    exports.FileReaderHelper = FileReaderHelper;
});