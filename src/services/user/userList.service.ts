import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";

const userListService = async () => {
  const userRepository = AppDataSource.getRepository(User);

  const users = userRepository.find({
    select: {
      name: true,
      email: true,
      createdAt: true,
      id: true,
      password: false,
    },
  });

  return users;
};

export default userListService;
