/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("reward", (table) => {
    table.increments("id").primary();
    table
      .integer("challenge_id")
      .unsigned()
      .references("challenge.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("post_id")
      .unsigned()
      .references("post.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table
      .integer("user_id")
      .unsigned()
      .references("post.user_id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("reward");
};
