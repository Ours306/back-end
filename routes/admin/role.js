import express from 'express'
import RoleHandler from '../../controller/admin/role/role'

const router = express.Router()

router.post('/save', RoleHandler.save);
router.post('/delete', RoleHandler.delete)
router.post('/edit', RoleHandler.edit)
router.get('/findById', RoleHandler.findById)
router.get('/findAll', RoleHandler.findAll)

export default router;