import { IUserCreate } from "../../interfaces/user";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { hash } from "bcrypt";
import { AppError } from "../../errors/appError";
import { Cart } from "../../entities/cart.entity";

const userCreateService = async ({name, email, password}: IUserCreate) => {

    const userRepository = AppDataSource.getRepository(User) 
    const cartRepository = AppDataSource.getRepository(Cart)

    const emailAlreadyExists = await userRepository.findOne({
        where: {
            email
        }
    })

    if (emailAlreadyExists) {
        throw new AppError(409, "Email already exists")
    }

    const cart = cartRepository.create({
        subtotal: 0
    })

    const [ hashedPassword ] = await Promise.all([
        hash(password, 10),
        cartRepository.save(cart)
    ])

    const user = userRepository.create({
        name,
        email,
        password: hashedPassword,
        cart
    })
    
    await userRepository.save(user)

    return user
}

export default userCreateService