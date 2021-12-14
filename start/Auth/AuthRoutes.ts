import Route from '@ioc:Adonis/Core/Route'

Route.get('inscription', 'AuthController.showRegisterForm')
Route.post('register', 'AuthController.register')

Route.get('connexion', 'AuthController.showLoginForm')
Route.post('login', 'AuthController.login')

Route.post('logout', 'AuthController.logout')
