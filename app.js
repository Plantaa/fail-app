const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
    return res.status(400).json({ message: "Hello World" })
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`App UI available http://localhost:${port}`);
});