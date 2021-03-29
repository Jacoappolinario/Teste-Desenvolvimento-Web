import { Router } from 'express'

import UserController from './controllers/UserController'
import SessionController from './controllers/SessionController';
import PokemonController from './controllers/PokemonController'

import auth from './middlewares/auth'

const routes = new Router();

routes.post('/users', UserController.create);
routes.post('/session', SessionController.create);

routes.use(auth);

routes.get('/users', UserController.index);

routes.get('/pokemon/', PokemonController.index)
routes.post('/pokemon/create', PokemonController.create)
routes.put('/pokemon/:id', PokemonController.update)
routes.delete('/pokemon/:id', PokemonController.delete)

export default routes