import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {

    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("deu ruim");
    }

    if (user.admin === true) {
      const allUsers = this.usersRepository.list();

      return allUsers;
    } else {
      throw new Error("Não há nenhum usuário admin");
    }

    

   
  }
}

export { ListAllUsersUseCase };
