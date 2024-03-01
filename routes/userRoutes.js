const express = require ("express");
const router = express.Router();
const {loginPage, loginPost} = require("../controllers/userController");

console.log("Usercontroller");

router.get('/signin', loginPage);
router.post('/login', loginPost);

module.exports = router