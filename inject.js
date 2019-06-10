
window.loadmill_code = "e7cdcd0b-d410-4404-bb7c-72f07ed60274";

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        const url = `loadmill-worker.js?loadmill_code=${window.loadmill_code}&notSecure=true`
        navigator.serviceWorker.register(url).then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
        // registration failed :/
        console.log('ServiceWorker registration failed: ', err);
        });
    });
}
