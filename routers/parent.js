const { Router } = require("express");
const User = require("../models/").user;
const Kid = require("../models").kid;
const Playdate = require("../models").playdate;
const Interest = require("../models").interest;
const auth = require("../auth/middleware");

const router = new Router();

router.get("/", auth, async (req, res, next) => {
  const { id } = req.user;
  try {
    const allKids = await Kid.findAll({
      where: { userId: id },
      include: {
        model: Interest,
      },
    });

    res.send(allKids);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.post("/kid", auth, async (req, res, next) => {
  const { name, gender, birthDate } = req.body;
  const userId = req.user.id;

  if (!name || !gender || !birthDate) {
    return res
      .status(400)
      .send({ message: "Please provide all necessary data for kid" });
  }

  const newKid = await Kid.create({
    name,
    gender,
    birthDate,
    userId,
  });

  return res.status(200).send({ message: "New kid is created", newKid });
});

router.post("/kid/interest", async (req, res, next) => {
  const { name, kidId } = req.body;

  if (!name || !kidId) {
    return res
      .status(400)
      .send({ message: "Please provide your kid's main interest" });
  }

  const newKidInterest = await Interest.create({
    name,
    kidId,
  });

  return res
    .status(200)
    .send({ message: "New kid is created", newKidInterest });
});

router.patch("/kid", async (req, res, next) => {
  const { avatar, name, gender, birthDate, interests, kidId } = req.body;

  const id = parseInt(kidId);

  try {
    const newKid = await Kid.findByPk(id);

    await newKid.update({ avatar, name, gender, birthDate });

    return res.status(200).send({ newKid });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
