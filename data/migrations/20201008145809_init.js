
exports.up = function(knex) {
   return knex.schema
    .createTable('recipes' , tbl => {
        tbl.increments();
        tbl.string('recipe', 100).notNullable().unique()
    })
    .createTable('ingredients', tbl => {
        tbl.increments();
        tbl.string('ingredient', 150).notNullable()
        tbl.float('quantity').notNullable()
       
    })
    .createTable('recipes_ingredients', tbl => {
        tbl.increments();
        tbl.integer('recipe_id').unsigned().references('recipes.id').onDelete('RESTRICT').onUpdate('CASCADE')
        tbl.integer('ingredient_id').unsigned().references('ingredients.id').onDelete('RESTRICT').onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("recipes_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes")
};
