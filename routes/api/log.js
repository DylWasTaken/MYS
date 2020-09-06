const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/Users");
const Log = require("../../models/Logs");

//@route    POST api/log
//desc      log activity
//@access   Private
router.post("/", auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    const newLog = new Log({
      user: req.user.id,
      walk: req.body.walk,
      run: req.body.run,
      cycle: req.body.cycle,
      swim: req.body.swim,
      horseRiding: req.body.horseRiding,
    });
    const saveme = await newLog.save();
    res.json(saveme);
  } catch (err) {
    console.error(err.message);
    //    res.status(500).send("Server Error");
  }
});

//@route    Get api/log
//desc      get user logs
//@access   Private
router.get("/", auth, async (req, res) => {
  try {
    const logs = await Log.find({ user: req.user.id }).sort({ date: -1 });
    res.json(logs);
  } catch (error) {
    console.error(err.message);
    //    res.status(500).send("Server Error");
  }
});

//@route    Get api/log
//desc      get all logs
//@access   Private
router.get("/all", auth, async (req, res) => {
  try {
    
    const logs = await Log.aggregate([
      
        {
          $project: {
            _id: 0,
            walk: 1,
            run: 1,
            cycle: 1,
            swim: 1,
            horseRiding: 1,
          },
        },
        {
          $group: {
            _id: 1,
            walk: {
              $sum: "$walk",
            },
            run: {
              $sum: "$run",
            },
            cycle: {
              $sum: "$cycle",
            },
            swim: {
              $sum: "$swim",
            },
            horseRiding: {
              $sum: "$horseRiding",
            },
          },
        },
      ],
    );
    res.json(logs);
  } catch (error) {
    console.error(err.message);
    //    res.status(500).send("Server Error");
  }
});

//@route    delete api/log
//desc      delete individual log
//@access   Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const logs = await Log.findById(req.params.id);

    if (!logs) {
      return res.status(404).json({ msg: "Log not found" });
    }
    //Check user
    if (logs.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: " User not authorized" });
    }
    await logs.remove();
    res.json(logs);
  } catch (error) {
    console.error(err.message);
    //    res.status(500).send("Server Error");
  }
});

//@route    Get api/log/me
//desc      get current users totals
//@access   Private
router.get("/me", auth, async (req, res) => {

  try {
  
    const logs = await Log.aggregate(
      [
        {
          '$match': {
            'user': user.id
          }
        }, {
          '$project': {
            '_id': 1, 
            'walk': 1, 
            'run': 1, 
            'cycle': 1, 
            'swim': 1, 
            'horseRiding': 1
          }
        }, {
          '$group': {
            '_id': null, 
            'walk': {
              '$sum': '$walk'
            }, 
            'run': {
              '$sum': '$run'
            }, 
            'cycle': {
              '$sum': '$cycle'
            }, 
            'swim': {
              '$sum': '$swim'
            }, 
            'horseRiding': {
              '$sum': '$horseRiding'
            }
          }
        }
      ]
    );
    res.json(logs);
  } catch (error) {
    console.error(err.message);
    console.log("help me")
  }
});

module.exports = router;
