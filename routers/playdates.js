const { Router } = require("express");
const User = require("../models/").user;
const Kid = require("../models").kid;
const Playdate = require("../models").playdate;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const playdates = await Playdate.findAll();
    res.send(playdates);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const playdateDetails = await Playdate.findByPk(id, {
      include: [User],
    });
    res.send(playdateDetails);
  } catch (e) {
    console.log("The error:", e);
    next(e);
  }
});

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
