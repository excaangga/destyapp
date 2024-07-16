/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import UsersController from '../app/controllers/users_controller.js'
import TokensController from '../app/controllers/tokens_controller.js'
import OrdersController from '../app/controllers/orders_controller.js'
// import { middleware } from './kernel.js'
import AuthMiddleware from '../app/middleware/auth_middleware.js'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.group(() => {
  router.group(() => {
    // unusable, token functionality is not used 
    router.post('apply', [UsersController, 'store'])
    router.post('token', [TokensController, 'store'])
  }).prefix('auth')
  // to be explored: .use(middleware) --> cant use this right now
  router.post('order', [OrdersController, 'store']).middleware(async (ctx, next) => {
    const auth = new AuthMiddleware()
    await auth.handle(ctx, next)
  })
}).prefix('api')