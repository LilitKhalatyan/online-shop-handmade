const express = require('express');
const app = express();
const http = require('http').createServer(app);
const json = express.json();
const port = process.env.PORT || 3003;

const staticFiles = express.static('./pages');
app.use(staticFiles);

app.use(json);

http.listen(port, () => {
    console.log(`server is listening port ${port}`);
});
