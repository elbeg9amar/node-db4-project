
exports.seed = function(knex) {
  const ingredients = [
    {
      ingredient: "cilantro",
      quantity: "2.5"
    },
    {
      ingredient: "spinach",
      quantity: "3.5"
    },
    {
      ingredient: "white beans",
      quantity: "2"
    }
  ]
      return knex('ingredients').insert(ingredients);
};
