import { HttpContext } from '@adonisjs/core/http'
import env from '#start/env'
import base64 from 'base-64'


export default class AuthMiddleware {
  public async handle({ request, response }: HttpContext, next: () => Promise<void>) {
    const authorizationHeader = request.header('Authorization')

    if (!authorizationHeader || !authorizationHeader.startsWith('Basic ')) {
      return response.status(401).json({ message: 'Invalid credentials' })
    }

    const base64Credentials = authorizationHeader.split(' ')[1]
    const credentials = base64.decode(base64Credentials).split(':')
    const username = credentials[0]
    const password = credentials[1]

    const validUsername = env.get('APP_USERNAME')
    const validPassword = env.get('APP_PASSWORD')

    if (username !== validUsername || password !== validPassword) {
      return response.status(401).json({ message: 'Invalid credentials' })
    }

    await next()
  }
}
