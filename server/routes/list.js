const router = require("express").Router();
const User = require("../models/user");
const List = require("../models/list");

//add
router.post("/addlist", async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const list = new List({ title, body, user: existingUser });
      await list.save().then(() => res.status(200).json({ list }));
      existingUser.list.push(list);
      existingUser.save();
    }
  } catch (error) {
    console.log(error);
  }
});

//update
router.put("/updatelist/:id", async (req, res) => {
  try {
    const { title, body, email } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      const list = await List.findByIdAndUpdate(req.params.id, { title, body });
      await list
        .save()
        .then(() => res.status(200).json({ message: "Task is updated" }));
    }
  } catch (error) {
    console.log(error);
  }
});

//delete

router.delete("/deletelist/:id", async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await User.findOneAndDelete(
      { email },
      { $pull: { list: req.params.id } }
    );
    if (existingUser) {
      await List.findByIdAndDelete(req.params.id).then(() =>
        res.status(200).json({ message: "Deleted" })
      );
    }
  } catch (error) {
    console.log(error);
  }
});

//get task

router.get("/getlist/:id", async (req, res) => {
  try {
    const list = await List.find({ user: req.params.id }).sort({
      createdAt: -1,
    });
    if (list.length !== 0) {
      res.status(200).json({ list: list });
    } else {
      res.status(404).json({ message: "No task is found" });
    }
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
