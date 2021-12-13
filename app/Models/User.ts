import {DateTime} from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import {
  column,
  beforeSave,
  BaseModel,
} from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({isPrimary: true})
  public id: number

  @column()
  public email: string

  @column({serializeAs: null})
  public password: string

  @column()
  public pseudo: string

  @column()
  public avatar: string

  @column()
  public region: string

  @column()
  public city: string

  @column()
  public status: string

  @column()
  public capacity: boolean

  @column()
  public postal_code: string

  @column()
  public rememberMeToken?: string

  @column.dateTime({autoCreate: true})
  public createdAt: DateTime

  @column.dateTime({autoCreate: true, autoUpdate: true})
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}