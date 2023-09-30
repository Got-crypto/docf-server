import { Router } from "express"
import { authorizeUser } from "../controllers/registration.js"

const router = Router()

router.get('/auth', authorizeUser)

export default router