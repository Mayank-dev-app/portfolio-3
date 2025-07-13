const jwt = require("jsonwebtoken");
const secret_key = process.env.Secret_KEY;

const jwtAuthentication = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res.status(401).send({
        success: false,
        message: "You are not enable to access it , please login",
      });
    } else {
      const decode = jwt.verify(token, secret_key);
      req.user = { _id: decode.id };
      next();
    }
  } catch (error) {
    console.log(error);
    return res.status(200).send({
      success: false,
      message: "Jwt Authantication have an error",
    });
  }
};

if (!secret_key) {
  console.log("Secret key is not set so token can not generate");
  return;
}

const generatToken = (userData) => {
    return jwt.sign(userData, secret_key);
};

module.exports = { jwtAuthentication, generatToken}