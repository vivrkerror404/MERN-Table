const Recipe = require("../models/recipe");

async function fetchRecipeList(req, res, next) {
  try {
    // at FE we used material react - have built in support for aggrefation
    // used aggregate just for demo purpose - in real case scenario find({}) is efficient
    const recipeList = await Recipe.aggregate([
      { $group: { _id: "$category", categories: { $push: "$$ROOT" } } },
    ]).exec();

    res.status(200).json({ success: 1, data: recipeList });
  } catch (err) {
    next(err);
  }
}

module.exports = { fetchRecipeList };
