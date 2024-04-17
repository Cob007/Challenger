/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
  .createTable("user", (table) => {
    table.increments("id").primary();
    table.string("firstname").notNullable();
    table.string("lastname").notNullable();
    table.string("username");
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table
      .timestamp("updated_at")
      .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
  })
    .createTable("challenge", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.string("description").notNullable();
      table.string("contenturl").notNullable();
      table.string("status").notNullable();
      table.string("mediatype").notNullable();
      table.integer("duration").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .integer("user_id")
        .unsigned()
        .references("user.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    })
    .createTable("post", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.string("posturl").notNullable();
      table.integer("likes").notNullable().defaultTo(0);
      table
        .integer("challenge_id")
        .unsigned()
        .references("challenge.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .integer("user_id")
        .unsigned()
        .references("user.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
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
  return knex.schema.dropTable("post").dropTable("challenge").dropTable("user");
};
