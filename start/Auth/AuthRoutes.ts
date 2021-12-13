import Route from '@ioc:Adonis/Core/Route'

Route.get('inscription', 'AuthController.showRegisterForm')
Route.post('register', 'AuthController.register')
