const User = require("../models/User.model.js");
const { setUserToken } = require("../Service/authentication.js");
const userRegisterhandler = async (req, res) => {
  try {
    const { fullname, email, password, address, mobile } = req.body;
    const registerUser = User.create({
      fullname,
      email,
      password,
      address,
      mobile,
    });
    if (registerUser) {
      return res.json({ success: true });
    } else {
      console.log("user not register");
    }
  } catch (error) {
    console.log("error:", error);
  }
};

const userLoginhandler = async (req, res) => {
  const { email, password } = req.body;
  const checkUser = await User.findOne({ email });
  if (checkUser) {
    const passwordcheck = await checkUser.checkpassword(password);
    if (passwordcheck) {
      const usertoken = setUserToken(checkUser);
      // console.log(usertoken)
      res.cookie("token", usertoken, {
        httpOnly: true,
        secure: true, // Use secure cookies in production
        sameSite: "None",
      });
      return res.json({ success: true });
    } else {
      return res.json({ success: false });
    }
  } else {
    return res.json({ success: false });
  }
};

module.exports = {
  userRegisterhandler,
  userLoginhandler,
};
