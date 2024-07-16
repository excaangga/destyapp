import type { HttpContext } from '@adonisjs/core/http'
import Customer from '../models/customer.js'
import Shipping from '../models/shipping.js'
import Order from '../models/order.js'

export default class OrdersController {
    async store({ request, response }: HttpContext){
        try {
            const payload = request.all()
            const customerInfo = payload.customerInfo
            const customer = await Customer.create({
                name: customerInfo.name,
                phone: customerInfo.phone,
                email: customerInfo.email
            })

            // should add interface to check the type inside item
            const itemListObject = payload.itemList.map(item => {
                const itemList = {
                    itemOrderId: item.itemOrderId,
                    itemId: item.itemId,
                    itemCode: item.itemCode,
                    itemName: item.itemName,
                    orderStatus: item.orderStatus,
                    platformOrderStatus: item.platformOrderStatus,
                    description: item.description,
                    price: item.price,
                    quantity: item.quantity,
                    onHandStock: item.onHandStock,
                    promotionStock: item.promotionStock,
                    discountAmount: item.discountAmount,
                    taxAmount: item.taxAmount,
                    sellPrice: item.sellPrice,
                    originalPrice: item.originalPrice,
                    locationName: item.locationName,
                    locationId: item.locationId,
                    platformWarehouseId: item.platformWarehouseId,
                    platformWarehouseName: item.platformWarehouseName,
                    platformWarehouseAddress: item.platformWarehouseAddress,
                    imageUrl: item.imageUrl,
                    shippingDetail: item.shippingDetail
                }
                return itemList
            })

            // cant pass the object directly,
            // convert all objects into string first
            const order = await Order.create({
                id: payload.orderId,
                orderSn: payload.orderSn,
                orderStatusList: JSON.stringify(payload.orderStatusList),
                subOrderStatusList: JSON.stringify(payload.subOrderStatusList),
                platformOrderStatusList: JSON.stringify(payload.platformOrderStatusList),
                orderCreateTime: payload.orderCreateTime,
                orderUpdateTime: payload.orderUpdateTime,
                createTime: payload.createTime,
                hasPaid: payload.hasPaid,
                orderPaymentTime: payload.orderPaymentTime,
                includeTax: payload.includeTax,
                buyerNotes: payload.buyerNotes,
                subTotal: payload.subTotal,
                discount: payload.discount,
                tax: payload.tax,
                totalPrice: payload.totalPrice,
                insuranceCost: payload.insuranceCost,
                paymentMethod: payload.paymentMethod,
                platform: payload.platform,
                platformName: payload.platformName,
                preOrder: payload.preOrder,
                codOrder: payload.codOrder,
                customersId: customer.id,
                platformOrderStatus: payload.platformOrderStatus,
                storeId: payload.storeId,
                storeName: payload.storeName,
                packageCount: payload.packageCount,
                totalWeight: payload.totalWeight,
                itemList: JSON.stringify(itemListObject),
                cancelBy: payload.cancelBy,
                logisticStatus: payload.logisticStatus
            })
            
            for (const item of payload.itemList) {
                const shippingDetail = item.shippingDetail
                if (shippingDetail) {
                    await Shipping.create({
                        shippingCost: shippingDetail.shippingCost,
                        shippingFullName: shippingDetail.shippingFullName,
                        shippingAddress: shippingDetail.shippingAddress,
                        shippingArea: shippingDetail.shippingArea,
                        shippingCity: shippingDetail.shippingCity,
                        shippingProvince: shippingDetail.shippingProvince,
                        shippingPostCode: shippingDetail.shippingPostCode,
                        shippingPhone: shippingDetail.shippingPhone,
                        deliveryDeadline: shippingDetail.deliveryDeadline,
                        trackingNumber: shippingDetail.trackingNumber,
                        courier: shippingDetail.courier,
                        shipper: shippingDetail.shipper,
                    })
                    console.log("shipping instance created")
                }
            }
            return response.status(200).json({ code: 200, status: 'success', data: order })
        } catch (error) {
            return response.status(500).json({ code: 500, status: 'error', message: error.message })
        }
    }
}