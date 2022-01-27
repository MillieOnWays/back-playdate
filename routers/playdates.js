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

module.exports = router;
