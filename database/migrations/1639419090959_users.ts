import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('pseudo').notNullable()
      table.string('email').notNullable()
      table.string('password').notNullable()
      table.string('avatar').nullable()
      table.string('region').notNullable()
      table.string('city').notNullable()
      table.boolean('capacity').notNullable().defaultTo(false)
      table.string('postal_code').notNullable()
      table.timestamp('created_at', {useTz: true})
      table.timestamp('updated_at', {useTz: true})
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
