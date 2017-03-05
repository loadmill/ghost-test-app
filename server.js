var path = require('path');
var ghost = require('ghost');
var express = require('express');
var parentApp = express();

ghost({
  config: path.join(__dirname, 'config.js')
}).then(function (ghostServer) {
    parentApp.use(function (req, res, next) {
        var origin = req.header("Origin");
        var requestMethod = req.header("Access-Control-Request-Method");

        // we allow CORS from any origin
        res.header("Access-Control-Allow-Origin", origin);

        if (req.method === 'OPTIONS' && origin && requestMethod) {
            // It's a pre-flight request:
            var requestHeaders = req.header("Access-Control-Request-Headers");
            setPreFlightHeaders(res, requestMethod || "", requestHeaders || "");

            return res.sendStatus(204);
        } else {
            var exposedHeaders = req.header("Loadmill-Request-Expose-Headers") || "";
            res.header("Access-Control-Expose-Headers", exposedHeaders);
        }

        return next();
    });

    function setPreFlightHeaders(res, allowedMethod, allowedHeaders) {
        res.header({
            // This header asks the browser not to pre-flight
            // the same request URL again for the next 24 hours:
            "Access-Control-Max-Age": "86400",
            "Access-Control-Allow-Methods": allowedMethod,
            "Access-Control-Allow-Headers": allowedHeaders
        });
    }

    parentApp.use(ghostServer.config.paths.subdir, ghostServer.rootApp);
    ghostServer.start(parentApp);
});
