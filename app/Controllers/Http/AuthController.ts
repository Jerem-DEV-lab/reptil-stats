import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import User from "App/Models/User";
import RegisterValidator from "App/Validators/RegisterValidator";
import LoginValidator from "App/Validators/LoginValidator";

export default class AuthController {
  public showRegisterForm = ({view}) => {
    return view.render('auth/register')
  }

  public async register({auth, request, response}: HttpContextContract) {
    const payload = await request.validate(RegisterValidator);
    const isCapacitaire = payload.capacity === "true";
    const user = await User.create({...payload, capacity: isCapacitaire});
    await auth.login(user);
    return response.redirect('/')
  }

  public showLoginForm = ({view}: HttpContextContract) => {
    return view.render('auth/login')
  }

  public login = async ({auth, request, response}: HttpContextContract) => {
    const payload = await request.validate(LoginValidator);
    await auth.attempt(payload.user_credentials, payload.password)
    return response.redirect('/')
  }
  public logout = async ({auth, response}) => {
    await auth.logout()
    return response.redirect('/')
  }
}
