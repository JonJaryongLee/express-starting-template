const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const PORT = 80;
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  return res.sendFile(__dirname + "/views/index.html");
});

app.listen(PORT, () => console.log(`this server listening on ${PORT}`));
