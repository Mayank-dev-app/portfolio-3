const express = require("express");
const { user } = require("./dbfolder");
const { generatToken } = require("./jwbauthentication");
const Router = express.Router();

Router.post("/createAccount", async (req, res) => {
  try {
    const { Name, Proffession, Email, Password } = req.body;
    if (!Name || !Email || !Password) {
      return res.status(401).send({
        success: false,
        message: "Please fill Al inputes Fileds",
      });
    }

    const userData = await user.create({
      Name,
      Proffession,
      Email,
      Password,
    });

    const payload = {
      id: user._id,
      Name: user.Name,
    };

    const token = generatToken(payload);

    await userData.save();
    return res.status(200).send({
      success: true,
      message: "User Created Successfully",
      user: { Name: userData.Name },
      token,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send({
      success: false,
      message: "Server have an error",
    });
  }
});

module.exports = Router;
