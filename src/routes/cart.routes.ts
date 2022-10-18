import { Router } from "express"

const cartRoutes = Router()

cartRoutes.get("/carts", (req, res) => res.sendStatus(200))
cartRoutes.post("/carts", (req, res) => res.sendStatus(200))

export default cartRoutes