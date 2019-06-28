
window.loadmill_code = "e7cdcd0b-d410-4404-bb7c-72f07ed60274";
if ('serviceWorker' in navigator) {
    var lm_w = navigator.serviceWorker;
    window.addEventListener('load', function() {
        const url = `loadmill-worker.js?loadmill_code=${window.loadmill_code}&not_secure=true`;
        lm_w.register(url).then(function () {
            lm_w.controller && lm_w.controller.postMessage({ type: "page-loaded" });
        });
    });
}
