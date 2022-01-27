const { Router } = require("express");

const User = require("../models/").user;
const Playdate = require("../models").playdate;

const router = new Router();

router.post("/:id", async (req, res) => {
  
  const {
    name,
    date,
    startTime,
    endTime,
    address,
    city,
    imageUrl,
    tag,
    description,
  } = req.body;
  if (
    !name ||
    !date ||
    !startTime ||
    !address ||
    !city ||
    !tag ||
    !description
  ) {
    return res.status(400).send("Please provide all required fields");
  }
  try {
    const newPlaydate = await Playdate.create({
      name,
      date,
      startTime,
      endTime,
      address,
      city,
      tag,
      description,
      userId: req.params.id,
    });
    console.log("new playdate", newPlaydate);
    res.send(newPlaydate);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});

module.exports = router;
