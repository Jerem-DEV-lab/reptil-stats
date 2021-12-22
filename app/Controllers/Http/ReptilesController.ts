import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'
import ReptileCategory from "App/Models/ReptileCategory";

export default class ReptilesController {
  public storeCategory = async ({request, session}: HttpContextContract) => {
    /* TODO: Validation des données */
    const payload = request.all();
    await ReptileCategory.create(payload)
    return session.flash({
      success: 'Nouvelle catégorie de reptile a bien été créer !'
    })
  }

  public getCategories = () => {

  }
}
