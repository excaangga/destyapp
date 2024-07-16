import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Shipping extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare shippingCost: number

  @column()
  declare shippingFullName: string

  @column()
  declare shippingAddress: string

  @column()
  declare shippingArea: string

  @column()
  declare shippingCity: string

  @column()
  declare shippingProvince: string

  @column()
  declare shippingPostCode: string

  @column()
  declare shippingPhone: string

  @column()
  declare deliveryDeadline: string

  @column()
  declare trackingNumber: string

  @column()
  declare courier: string

  @column()
  declare shipper: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}