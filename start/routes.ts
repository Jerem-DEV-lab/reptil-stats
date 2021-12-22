import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({view}) => {
  return view.render('pages/home')
})
import './Auth/AuthRoutes'
import './Reptiles/ReptilesRoutes'
