import express from 'express'
import ModuleHandler from '../controller/module/module'

const router = express.Router()

router.get('/findAll', ModuleHandler.findAll)
router.post('/save', ModuleHandler.save)

export default router
