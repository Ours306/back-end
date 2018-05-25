import express from 'express'
import StudentHandler from '../controller/student/student'

const router = express.Router()

router.post('/save', StudentHandler.save)

export default router
