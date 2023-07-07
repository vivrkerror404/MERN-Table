const Recipe = require("../models/recipe");

async function fetchRecipeList(req, res, next) {
  try {
    const recipeList = await Recipe.aggregate([
      { $group: { _id: "$category", categories: { $push: "$$ROOT" } } },
    ]).exec();

    res.status(200).json({ success: 1, data: recipeList });
  } catch (err) {
    next(err);
  }
}

module.exports = { fetchRecipeList };
