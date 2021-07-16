/// <reference path="./App.js" />

(function () {
    "use strict";

    // The Office initialize function must be run each time a new page is loaded.
    Office.initialize = function () {
        $(document).ready(function () {

            // Initialize error message banner.
            app.initialize();

            // Enable the buttons
            $(".popupButton").prop("disabled", false);

            $("#insertUserNameButton").click(function () {

                // Auth0 repackages the JSON data from different providers into
                // a common JSON userinfo structure with consistent property names. 
                // For example, Google's "displayName" becomes just "name".                
                var userInfo = JSON.parse(sessionStorage.getItem('authOUserInfo'));
                insertUserNameInDocument(userInfo.name);
            });
        });       
    };

     function insertUserNameInDocument(name) {
        
        Excel.run(function (context) {

            // Create a proxy object for the document body.
            var body = context.document.body;

            // Queue commands to insert text into the end of the Word document body.
            body.insertText(name, "End");

            // Synchronize the document state by executing the queued commands, and 
            // return a promise to indicate task completion.
            return context.sync();
        })
        .catch(function() {app.showNotification(err.message);});
    }
}());