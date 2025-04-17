const express = require('express');
const {add,update,deleteProduct,show,fetchSingle} = require('../controller/controller.js');

const router  = express.Router();

router.get("/getProduct",show);
router.post("/add",add);
router.put("/update/:id",update);
router.delete("/delete/:id",deleteProduct);
router.get("/fetchone/:id",fetchSingle)

module.exports = router;
