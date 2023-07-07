const express = require("express");
const router = express.Router();
const { fetchRecipeList } = require("../handlers/fetchRecipeList");
require("dotenv").config();
require("../db");

/* GET recipe list. */
router.get("/api/recipe/list", fetchRecipeList);

module.exports = router;
