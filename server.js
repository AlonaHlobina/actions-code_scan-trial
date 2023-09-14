var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.use(express.static('public'));

var routes = require("./api/routes");
routes(app);

if (! module.parent) {
  app.listen(port);
}

module.exports = app

console.log("Server running on port " + port);

document.write("Hello, world!");

document.write(window.location.search);

document.write(window.location.search);


// It's a classic:
document.write(window.location.search)

// Here's a different one
app.get('/some/path', function(req, res) {
    let url = req.param('url'),
        host = urlLib.parse(url).host;
    // BAD: the host of `url` may be controlled by an attacker
    let regex = /^((www|beta).)?example.com/;
    if (host.match(regex)) {
        res.redirect(url);
    }
});
