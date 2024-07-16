import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Token from '../models/token.js'
import { DateTime } from 'luxon'

export default class AuthMiddleware {
  public async handle({ request, response }: HttpContextContract, next: () => Promise<void>) {
    const token = request.header('Authorization')

    if (!token) {
      return response.status(401).json({ message: 'Access token is missing' })
    }

    const isValidToken = await this.verifyToken(token)
    if (!isValidToken) {
      return response.status(401).json({ message: 'Invalid or expired access token' })
    }

    await next()
  }

  private async verifyToken(token: string): Promise<boolean> {
    const tokenRecord = await Token.query().where('token', token).first()

    if (!tokenRecord) {
      return false
    }

    const now = DateTime.local()
    if (tokenRecord.expiredAt < now) {
      return false
    }

    return true
  }
}
