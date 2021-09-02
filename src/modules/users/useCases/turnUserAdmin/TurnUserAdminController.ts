import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    
    try {
       const { id } =  request.body;

       const user = this.turnUserAdminUseCase.execute(id);
      
       return response.json({user}).send();
    } catch (error) {
      
      return response.status(400).send({error: "deu ruim"});
    }

  }
}

export { TurnUserAdminController };
