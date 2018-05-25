import express from 'express'
import UserController from '../controller/user/user'

const router = express.Router()

router.post('/save', UserController.save)

export default router
