
exports.seed = function(knex) {
  const table = [
    {
      recipe_id: 1,
      ingredient_id :1
    },
    {
      recipe_id: 1,
      ingredient_id :2
    },
    {
      recipe_id: 1,
      ingredient_id :3
    },
    {
      recipe_id: 2,
      ingredient_id :1
    },
    {
      recipe_id: 2,
      ingredient_id :3
    },
    {
      recipe_id: 3,
      ingredient_id :1
    },
    {
      recipe_id: 3,
      ingredient_id :2
    },
  ]
  return knex('recipes_ingredients').insert(table);
};
