const express = require('express');
const bodyParser = require('body-parser');
const { stderr } = require('process');

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
    console.error("Malformed request")
    stderr.write("ERROR")
    return res.status(400).json({ message: "Malformed request" })
})

const port = process.env.PORT || 5000;
app.listen(port)