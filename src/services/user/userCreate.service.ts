import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { hashSync } from "bcrypt";
import { AppError } from "../../errors/appError";
import { Cart } from "../../entities/cart.entity";
import { IUserCreate } from "../../interfaces/user";

const userCreateService = async ({ name, email, password }: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);
  const cartRepository = AppDataSource.getRepository(Cart);

  const emailAlreadyExists = await userRepository.findOne({
    where: {
      email,
    },
  });

  if (emailAlreadyExists) {
    throw new AppError(409, "Email already exists");
  }

  const cart = new Cart();

  cart.subtotal = 0;

  cartRepository.create(cart);

  cartRepository.save(cart);

  const hashedPassword = hashSync(password, 10);

  const user = new User();

  user.name = name;
  user.email = email;
  user.password = hashedPassword;
  user.cart = cart;

  userRepository.create();

  await userRepository.save(user);

  return user;
};

export default userCreateService;
