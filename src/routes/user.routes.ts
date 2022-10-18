import { Router } from "express";
import userCreateController from "../controllers/user/userCreate.controller";
import userListController from "../controllers/user/userList.controller"

const userRoutes = Router()

userRoutes.post('/users', userCreateController)
userRoutes.get('/users', userListController)

export default userRoutes