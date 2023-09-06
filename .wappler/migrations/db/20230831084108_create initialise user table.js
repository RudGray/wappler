
exports.up = function(knex) {
  return knex.schema
    .createTable('user', async function (table) {
      table.increments('user_id');
      table.string('first_name');
      table.string('email');
      table.string('password');
      table.datetime('date_signup').defaultTo(knex.fn.now());
      table.string('last_name');
    })
    .createTable('role', async function (table) {
      table.increments('role_id');
      table.string('user_id');
      table.string('role');
    })

};

exports.down = function(knex) {
  return knex.schema
    .dropTable('role')
    .dropTable('user')
};
