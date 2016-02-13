# Dr. Boom: Gatepost

![npm i drboom-gatepost](https://nodei.co/npm/drboom-gatepost.png)

Auto-cast errors from [Gatepost](https://github.com/fritzy/gatepost) into Hapi HTTP Errors.

##Example / Boilerplate

Plugin registration boilerplate:

```javascript
var hapi = require('hapi');
var config = require('./config.json');
var Boom = require('boom');
var Gatepost = require('gatepost')(config.db);

var server = new hapi.Server();
server.connection(config);

server.register([{
    register: require('drboom'), 
    options: {
        plugins: [require('drboom-gatpost')({Gatepost: Gatepost, Boom: Boom})]
    },
}, function (err) {
    server.log(['startup'], 'Loaded pgboom plugin');
    server.start(function (err) {
        //...
    }
});
```

Now, you can pass your seaquell errors right on through to hapi reply!

```javascript
function someHandler(request, reply) {
    SomeGatepostModel.method(reply);
});
```

