import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'orders'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('id')
      table.string('order_sn')
      table.json('order_status_list')
      table.json('sub_order_status_list')
      table.json('platform_order_status_list')
      table.integer('order_create_time')
      table.integer('order_update_time')
      table.integer('create_time')
      table.boolean('has_paid')
      table.integer('order_payment_time')
      table.boolean('include_tax')
      table.string('buyer_notes')
      table.integer('sub_total')
      table.integer('discount')
      table.integer('tax')
      table.integer('total_price')
      table.integer('insurance_cost')
      table.string('payment_method')
      table.string('platform')
      table.string('platform_name')
      table.boolean('pre_order')
      table.boolean('cod_order')
      table.integer('customers_id').unsigned().references('customers.id').onDelete('CASCADE')
      table.string('platform_order_status')
      table.string('store_id')
      table.string('store_name')
      table.integer('package_count')
      table.integer('total_weight')
      table.json('item_list')
      table.string('cancel_by')
      table.string('logistic_status')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}