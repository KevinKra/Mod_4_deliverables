const express = require("express");
const router = express.Router();
const Joi = require("@hapi/joi");

const people = [
  { id: 1, name: "Steven", age: 15 },
  { id: 2, name: "Richard", age: 53 },
  { id: 3, name: "Sammy", age: 21 }
];

router.get("/", (req, res) => {
  res.send(people);
});

router.post("/addPerson", (req, res) => {
  const { error } = validateSchema(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const newPerson = {
    id: people.length + 1,
    name: req.body.name,
    age: req.body.age
  };
  people.push(newPerson);
  res.send(newPerson);
});

router.get("/findPerson/:id", (req, res) => {
  const matchingPerson = findMatch(req.params.id);
  if (matchingPerson) return res.send(matchingPerson);
  else return res.status(404).send("Yoinks, that user doesn't seem to exist!");
});

router.put("/updatePerson/:id", (req, res) => {
  const { error } = validateSchema(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const matchingPerson = findMatch(req.params.id);
  if (!matchingPerson)
    return res.status(404).send("Hm, nobody seems to match with that id.");
  matchingPerson.name = req.body.name;
  matchingPerson.age = req.body.age;
  res.send(matchingPerson);
});

router.delete("/deletePerson/:id", (req, res) => {
  const matchingPerson = findMatch(req.params.id);
  if (!matchingPerson)
    return res.status(404).send("Sorry, there is nobody with that id. 😢");
  const index = people.indexOf(matchingPerson);
  people.splice(index, 1);
  res.send(people);
});

function validateSchema(person) {
  const personSchema = {
    name: Joi.string()
      .min(1)
      .required(),
    age: Joi.number()
      .integer()
      .min(0)
      .max(110)
      .required()
  };
  return Joi.validate(person, personSchema);
}

function findMatch(query) {
  return people.find(person => {
    return person.id === parseInt(query);
  });
}

module.exports = router;
