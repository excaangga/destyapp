import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @column()
  declare orderSn: string

  @column()
  declare orderStatusList: object

  @column()
  declare subOrderStatusList: object

  @column()
  declare platformOrderStatusList: object

  // time object, but number input
  // (just following the desty docs payload example)
  @column()
  declare orderCreateTime: number

  // time object, but number input
  // (just following the desty docs payload example)
  @column()
  declare orderUpdateTime: number

  // time object, but number input
  // (just following the desty docs payload example)
  @column()
  declare createTime: number

  @column()
  declare hasPaid: boolean

  // time object, but number input
  // (just following the desty docs payload example)
  @column()
  declare orderPaymentTime: number

  @column()
  declare includeTax: boolean

  @column()
  declare buyerNotes: string

  @column()
  declare subTotal: number

  @column()
  declare discount: number

  @column()
  declare tax: number

  @column()
  declare totalPrice: number

  @column()
  declare insuranceCost: number

  @column()
  declare paymentMethod: string

  @column()
  declare platform: string

  @column()
  declare platformName: string

  @column()
  declare preOrder: boolean

  @column()
  declare codOrder: boolean

  @column()
  declare customersId: number

  @column()
  declare platformOrderStatus: string

  @column()
  declare storeId: string

  @column()
  declare storeName: string

  @column()
  declare packageCount: number

  @column()
  declare totalWeight: number

  @column()
  declare itemList: object

  @column()
  declare cancelBy: string

  @column()
  declare logisticStatus: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}