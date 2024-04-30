const http = require("http");
const express = require("express");
const app = express();
const server = http.createServer(app);
const cors = require("cors");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const port = 8081;

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const { db } = require("./helper/connectionDb");


app.get("/artikel", (req, res) => {
  let { id } = req.query;


  // Melakukan kueri SQL dengan menggunakan teknik blind time-based
  db.query(`SELECT id, judul, nama_author, content FROM artikel WHERE id = ${id}`, (err, result) => {
    if (err) {
      return res.status(200).send(
       "something wrong"
      );
    }
    return res.status(200).send({
      error: false,
      data: result,
    });
  });
});







server.listen(port, () => console.log(`this server running on port ${port}`));
