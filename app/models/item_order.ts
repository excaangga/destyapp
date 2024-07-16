import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class ItemOrder extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare itemId: string

  @column()
  declare itemCode: string

  @column()
  declare itemName: string

  @column()
  declare orderStatus: string

  @column()
  declare platformOrderStatus: string

  @column()
  declare description: string

  @column()
  declare price: number

  @column()
  declare quantity: number

  @column()
  declare onHandStock: number

  @column()
  declare promotionStock: number

  @column()
  declare discountAmount: number

  @column()
  declare taxAmount: number

  @column()
  declare sellPrice: number

  @column()
  declare originalPrice: number

  @column()
  declare locationName: string

  @column()
  declare locationId: string

  @column()
  declare platformWarehouseId: string

  @column()
  declare platformWarehouseName: string

  @column()
  declare platformWarehouseAddress: string

  @column()
  declare imageUrl: string

  @column()
  declare shippingId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}