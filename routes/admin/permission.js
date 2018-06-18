import express from 'express'
import PermissionHandler from '../../controller/admin/permission/permission'

const router = express.Router()

router.post('/save', PermissionHandler.save);

export default router;