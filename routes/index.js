import module from './module'
import student from './student'
import user from './user'

export default app => {
  app.use('/user', user)
  app.use('/module', module)
  app.use('/student', student)
}
