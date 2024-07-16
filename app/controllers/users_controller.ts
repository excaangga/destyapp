import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class UsersController {
    async store({ request, response }: HttpContext){
        const payload = request.all()
        try {
            const user = await User.create(payload)
            return response.status(200).json({ code: 200, status: 'success', data: user })
        } catch (error) {
            return response.status(500).json({ code: 500, status: 'error', message: error.message })
        }
    }
}