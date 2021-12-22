import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Reptiles extends BaseSchema {

  public async up() {
    this.schema.createTable("reptiles", (table) => {
      table.increments('id')
      table.string('name')
      table.integer('category_id').unsigned().references('reptiles_categories.id')
      table.integer('user_id').unsigned().references('users.id')
      table.foreign('category_id').references('category.id')
      table.foreign('user_id').references('users.id')
    })
    this.schema.createTable('reptile_categories', (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('description')
    })
  }

  public async down() {
    this.schema.dropTable("reptiles")
    this.schema.dropTable("reptile_categories")
  }
}
