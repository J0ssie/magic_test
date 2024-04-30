const http = require("http");
const express = require("express");
const { exec } = require("child_process");
const app = express();
const server = http.createServer(app);
const cors = require("cors");

const bodyParser = require("body-parser");
const port = 3300;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/ping", (req, res) => {
  let { ip } = req.query;

  // Execute ping command
  exec(`ping -c 4 ${ip}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).send("Error occurred while pinging the IP.");
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    return res.status(200).send(stdout);
  });
});

app.get("/", (req, res) => {
    return res.status(200).send("<h1>endpoint started</h1>");
});

const featureStatus = {
  "ping": "ready",
  "nslookup": "coming soon",
  "uploadfile": "coming soon"
};

// Endpoint for listing feature status
app.get("/list", (req, res) => {
  let htmlResponse = "<h1>Feature List</h1>";
  htmlResponse += "<ul>";
  for (const feature in featureStatus) {
      htmlResponse += `<li>${feature}: ${featureStatus[feature]}</li>`;
  }
  htmlResponse += "</ul>";
  return res.status(200).send(htmlResponse);
});


app.get("/ns", (req, res) => {
  return res.status(200).send("<h1>fiture soon</h1>");
});

app.get("/upload", (req, res) => {
  return res.status(200).send("<h1>fiture soon</h1>");
});

server.listen(port, () => console.log(`this server running on port ${port}`));
