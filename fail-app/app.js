const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get("/", async (req, res) => {
    console.error({
        error_message: "Malformed request",
    })
    return res.status(400).json({
        message: "Malformed request",
    })
})

const port = process.env.PORT || 5000;
app.listen(port)