// routers/pairRouter.js
const express = require('express');
const router = express.Router();
const pairController = require("../controllers/pairController");

router.post("/findsum", pairController.findPairWithSumHandler);

module.exports = router;
