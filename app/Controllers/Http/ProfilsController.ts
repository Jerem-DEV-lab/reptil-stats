import type {HttpContextContract} from "@ioc:Adonis/Core/HttpContext";

export default class ProfilsController {
  public index({view}: HttpContextContract){
    return view.render('profil/index')
  }
}
