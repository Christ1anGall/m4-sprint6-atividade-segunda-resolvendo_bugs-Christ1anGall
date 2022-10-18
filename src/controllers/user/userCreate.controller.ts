import { Request, Response } from 'express'
import userCreateService from '../../services/user/userCreate.service'


const userCreateController = async (req: Request, res: Response) => {
    const {name, email, password} = req.body

    if(!name || !email || !password){
        return res.status(400).json({
            message: "Following fields are required: name, email & password."
        })
    }

    const newUser =  await userCreateService({name, email, password})
    
    return res.status(201).send(newUser)
}

export default userCreateController