// Requiring Express.
const express = require("express");
// Requiring Router from Express.
const router = express.Router();
// Requiring controllers from the controllers folder's index.js.
const {
  createController,
  getController,
  updateController,
  deleteController,
} = require("../controllers/index.js");

router.get("/", getController);
router.post("/create", createController);
router.put("/update/:id", updateController);
router.delete("/delete/:id", deleteController);

// Exporting controllers to server.js.
module.exports = router;
