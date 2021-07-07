
exports.seed = function(knex) {
  const recipes = [
    {
      recipe: "Crab linguine with chilli & parsley"
    },
    {
      recipe: "The Best Coffee Cake. Ever"
    },
    {
      recipe: "Devil Dogs"
    },
  ]
      return knex('recipes').insert(recipes);
};
