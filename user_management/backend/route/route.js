const express = require('express');
const { getAllUser, addUser, updateUser, deleteUser, getUser } = require('../controller/controller.js');

const router = express.Router();

router.get("/all-users",getAllUser);
router.get("/fetchone/:id",getUser)
router.post("/add",addUser);
router.put("/update/:id",updateUser);
router.delete("/delete/:id",deleteUser);

module.exports = router;
