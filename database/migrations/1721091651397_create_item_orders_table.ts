import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'item_orders'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id')
      table.string('item_id')
      table.string('item_code')
      table.string('item_name')
      table.string('order_status')
      table.string('platform_order_status')
      table.string('description')
      table.integer('price')
      table.integer('quantity')
      table.integer('on_hand_stock')
      table.integer('promotion_stock')
      table.integer('discount_amount')
      table.integer('tax_amount')
      table.integer('sell_price')
      table.integer('original_price')
      table.string('location_name')
      table.string('location_id')
      table.string('platform_warehouse_id')
      table.string('platform_warehouse_name')
      table.string('platform_warehouse_address')
      table.string('image_url')
      table.integer('shipping_id').unsigned().references('shippings.id').onDelete('CASCADE')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}