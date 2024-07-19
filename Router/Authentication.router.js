const express = require("express");
const router = express.Router();
const { getUserToken } = require("../Service/authentication.js");

router.get("/auth", (req, res) => {
  const Token = req.cookies.token;
  if (Token) {
    // console.log(Token);
    const userPayload = getUserToken(Token);
    userPayload ? res.json({ success: true }) : res.json({ success: false });
  } else {
    res.json({ success: false });
  }
});
router.post("/logout", (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Match the secure flag
      sameSite: "None",
    });
    res.json({ success: true });
  } catch (error) {}
});
module.exports = router;
