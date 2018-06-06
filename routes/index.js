import module from './admin/module'
import student from './business/student'
import user from './admin/user'

export default app => {
  
  app.use('/student', student)

  /**
   * 管理员角色路由控制
   */
  app.use('/user', user)
  app.use('/module', module)
}
