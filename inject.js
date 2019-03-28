
 window.loadmillUserId = "21"
 
 if ('serviceWorker' in navigator) {
    var swUrl = `worker.js?loadmillUserId=${window.loadmillUserId}&notSecure=true`;
    window.addEventListener('load', function() {
        navigator.serviceWorker.register(swUrl).then(function(registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function(err) {
            // registration failed :/
            console.log('ServiceWorker registration failed: ', err);
            });
        });
}

