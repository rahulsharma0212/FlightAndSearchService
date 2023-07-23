const express = require("express");
const router = express.Router();
const cityController = require("../../controllers/city.controller");

router.post("/", cityController.create);
router.delete("/:id", cityController.destroy);
router.put("/:id", cityController.update);
router.get("/:id", cityController.get);

module.exports = router;
