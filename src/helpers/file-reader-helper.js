export class FileReaderHelper
{
    static createReader(file, onLoaded, onProgress, onError, additionalData) {
        var reader = new FileReader();
        reader.onload = function(fileLoadedEvent) {
            onLoaded(file, fileLoadedEvent.target.result, additionalData);
        };

        if(typeof(onProgress) == "function")
        {
            reader.onprogress = function(fileProgressEvent) {
                onProgress(file, fileProgressEvent.loaded, fileProgressEvent.total, additionalData);
            };
        }

        if(typeof(onError) == "function")
        {
            reader.onerror = function(fileErrorEvent) {
                onError(file, fileErrorEvent.target.error, additionalData);
            };
        }

        return reader;
    }
}