import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'shippings'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('shipping_cost')
      table.string('shipping_full_name')
      table.string('shipping_address')
      table.string('shipping_area')
      table.string('shipping_city')
      table.string('shipping_province')
      table.string('shipping_post_code')
      table.string('shipping_phone')
      table.string('delivery_deadline')
      table.string('tracking_number')
      table.string('courier')
      table.string('shipper')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}