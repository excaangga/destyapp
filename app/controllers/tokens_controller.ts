import type { HttpContext } from '@adonisjs/core/http'
import Token from '../models/token.js'
import User from '../models/user.js'
import crypto from 'crypto'
import { DateTime } from 'luxon'

export default class TokensController {
    async store({ request, response }: HttpContext){
        try {
            const { applyId, username, mobile } = request.only(['applyId', 'username', 'mobile'])
            const user = await User.findByOrFail('id', applyId)
            const usernameDB = await User.findByOrFail('username', username)
            const mobileDB = await User.findByOrFail('mobile', mobile)
            // wrong user instance checking, fix later
            if (user && usernameDB && mobileDB){
                const tokenVal = await crypto.randomBytes(10).toString('hex')
                const token = await Token.create({ applyId: applyId, token: tokenVal, expiredAt: DateTime.now().plus({ days: 30 }) })
                return response.status(200).json({ code: 200, status: 'success', data: token })
            }else{
                return response.status(404).json({
                    message: 'User details do not match'
                })
            }
            
        } catch (error) {
            return response.status(500).json({ code: 500, status: 'error', message: error.message })
        }
    }
}