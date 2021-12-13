import {rules, schema} from '@ioc:Adonis/Core/Validator'
import {HttpContextContract} from '@ioc:Adonis/Core/HttpContext'

export default class RegisterValidator {
  constructor(protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
    pseudo: schema.string({trim: true}, [rules.required(), rules.unique({
      table: 'users',
      column: 'pseudo'
    }), rules.minLength(4)]),
    email: schema.string({trim: true}, [rules.unique({
      table: 'users',
      column: 'email'
    }), rules.email(), rules.required()]),
    password: schema.string({trim: true}, [rules.confirmed("password_confirmation"), rules.required(), rules.minLength(6)]),
    region: schema.string({trim: true}, [rules.required()]),
    postal_code: schema.string({trim: true}, [rules.required(), rules.maxLength(5)]),
    capacity: schema.string.optional(),
    city: schema.string({trim: true}, [rules.required(), rules.minLength(2)])
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages = {}
}
