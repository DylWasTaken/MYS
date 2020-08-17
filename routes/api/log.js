const express = require("express");
const router = express.Router();
//const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");
const User = require("../../models/Users");
//const Profile = require("../../models/Profile");
const Log = require("../../models/Logs");


//@route    POST api/log
//desc      log run/swim/cycle
//@access   Private
router.post("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    const newLog = new Log({
      user: req.user.id,
      run: req.body.run,
      cycle: req.body.cycle,
      swim: req.body.swim
    });
    const saveme = await newLog.save();
    res.json(saveme);
  } catch (err) {
    console.error(err.message);
//    res.status(500).send("Server Error");
  }
});

module.exports = router;
