import app from './app';
import * as https from 'https';
import * as fs from 'fs';
const PORT = process.env.PORT || 4000;

const httpsOptions = {
    key: fs.readFileSync('./config/key.pem'),
    cert: fs.readFileSync('./config/cert.pem')
};

// Start up the Node server
//app.listen(PORT, () => {
//  console.log(`Node Express server listening on http://localhost:${PORT}`);
//});

// Start up the HTTPS Node server
https.createServer(httpsOptions, app).listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});
