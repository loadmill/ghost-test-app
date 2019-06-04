
window.loadmill_code = "3e6a533e-b84e-4879-88e0-4409a5a71eb7";

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
