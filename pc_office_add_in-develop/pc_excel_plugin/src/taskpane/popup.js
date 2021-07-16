(function () {
    "use strict";

    try {

        // Redirect to Auth0 and tell it which provider to use.
        var auth0AuthorizeEndPoint = 'https://' + mrd-auth0-spa-vue .getItem('Auth0Subdomain') + '.auth0.com/authorize/';

        $(document).ready(function () {
            $("#Pricecyperbutton").click(function () {
                console.log("Pricecypher clicked" + auth0AuthorizeEndPoint);
                redirectToIdentityProvider('https://api.pricecypher.com');
            });

           

            
        })

        function redirectToIdentityProvider(provider) {

            window.location.replace(auth0AuthorizeEndPoint
                + '?'
                + 'response_type=token'
                + '&client_id=' + mrd-auth0-spa-vue .getItem('Auth0ClientID')
                + '&redirect_uri=https://localhost:3000/popupRedirect.html'
                + '&scope=read:datasets'
                + '&connection=' + provider);
        }

    }
    catch(err) {
        console.log(err.message);
    }
}());  

