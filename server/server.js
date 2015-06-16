var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();

var listenFunction = function () {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
    var UserRepos = loopback.getModel('UserRepos');
    UserRepos.get('lumannnn', function (err, msg) {
        if (err) {
            console.log('user repos:', err);
            return;
        }
        msg.forEach(function (val, idx, arr) {
            console.log(val.id, val.full_name);
        });
    });


    var Users = loopback.getModel('Users');
    Users.get('lumannnn', function (err, val) {
        if (err) {
            console.log('users:', err);
            return;
        }
        console.log(val.id, val.name, val.company);
    });
};

app.start = function () {
    // start the web server
    return app.listen(listenFunction);
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function (err) {
    if (err) throw err;

    // start the server if `$ node server.js`
    if (require.main === module)
        app.start();
});
