const express = require("express");
const app = express();
const port = 3005;

app.get('/', (req, res) => {
    res.send("Hello serve is running")
});

app.listen(port, () => {
    console.log(`server is breathing hello at http://localhost:${port}`)
});