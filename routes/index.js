import module from './admin/module'
import student from './business/student'
import user from './admin/user'
import permission from './admin/permission'
import person from './business/person'
import role from './admin/role'

export default app => {
  app.use('/student', student)

  /**
   * 管理员角色路由控制
   */
  app.use('/user', user)
  app.use('/module', module)
  app.use('/permission', permission)
  app.use('/person', person)
  app.use('/role', role)
}