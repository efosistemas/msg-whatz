import { Router } from 'express'
import { UserController } from './controllers/UserController'
import { MensagemController } from './controllers/MensagemController'
import { authMiddleware } from './middlewares/authMiddleware'


const routes = Router()

routes.post('/user', new UserController().create)
routes.post('/login', new UserController().login)

routes.use(authMiddleware)

routes.post('/mensagem', new MensagemController().create)
routes.get('/mensagem', new MensagemController().list)

routes.get('/profile', new UserController().getProfile)

export default routes
