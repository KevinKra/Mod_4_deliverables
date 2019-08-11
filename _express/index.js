const express = require("express");
const Joi = require("@hapi/joi");
const app = express();

app.use(express.json());

const people = [
  { id: 1, name: "Steven", age: 15 },
  { id: 2, name: "Richard", age: 53 },
  { id: 3, name: "Sammy", age: 21 }
];

app.get("/", (req, res) => {
  res.send(people);
});

app.post("/api/addperson/", (req, res) => {
  const personSchema = {
    name: Joi.string()
      .min(1)
      .required(),
    age: Joi.number()
      .min(1)
      .required()
  };
  const { error } = Joi.validate(req.body, personSchema);
  if (error) return res.status(400).send(error.details[0].message);
  const newPerson = {
    id: people.length + 1,
    name: req.body.name,
    age: req.body.age
  };
  people.push(newPerson);
  res.send(people);
});

app.get("/api/findUser:id", (req, res) => {});

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Successfully connected to port ${PORT}...`));
