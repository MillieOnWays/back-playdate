const { Router } = require("express");
const User = require("../models/").user;
const Kid = require("../models").kid;
const Playdate = require("../models").playdate;

const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const limit = req.query.limit || 10;
    const offset = req.query.offset || 0;
    const order = req.query.order || "DESC";
    const by = req.query.by || "createdAt";
    const playdates = await Playdate.findAndCountAll({
      limit,
      offset,
      include: [
        {
          model: User,
          where: Playdate.userId === User.id,
          attributes: { exclude: ["password", "email"] },
        },
      ],
      order: [[by, order]],
    });
    res.status(200).send({ message: "ok", playdates });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);

    const playdateDetails = await Playdate.findByPk(id, {
      include: { model: User, attributes: ["name", "avatar"] },
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
