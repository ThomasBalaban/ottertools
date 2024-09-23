const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files from the dist directory
app.use(express.static(__dirname + '/dist/ottertools/browser'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/ottertools/browser/index.csr.html'));
});

app.get('/privacy-policy', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/ottertools/browser/privacy-policy/index.html'));
});

app.get('/terms-of-service', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/ottertools/browser/terms-of-service/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
