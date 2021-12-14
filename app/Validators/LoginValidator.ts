import {rules, schema} from '@ioc:Adonis/Core/Validator'
import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'

export default class LoginValidator {
  constructor(protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
    user_credentials: schema.string({}, [rules.required()]),
    password: schema.string()
  })
  public messages = {}
}
