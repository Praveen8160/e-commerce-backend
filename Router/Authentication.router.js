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
    res.clearCookie("token");
    // const Token = req.cookies.token;
    // console.log(Token);
    res.json({ success: true });
  } catch (error) {}
});
module.exports = router;
