const express = require("express");
const people = require("./routes/people");
const app = express();

app.use(express.json());
app.use("/api/people/", people);

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Successfully connected to port ${PORT}...`));
