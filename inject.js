
window.loadmill_code = "c28400f5-2205-4a52-9a68-515bc3887491";

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        const url = `worker.js?loadmill_code=${window.loadmill_code}&notSecure=true`
        navigator.serviceWorker.register(url).then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
        // registration failed :/
        console.log('ServiceWorker registration failed: ', err);
        });
    });
}
