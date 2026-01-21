import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class Bcrypt {
  async criptografarSenha(senha: string): Promise<string> {
    //recebe a senha
    const saltos: number = 10; //quantas vezes vai embaralhar a senha, nesse caso, 10
    return await bcrypt.hash(senha, saltos); // criptogtafa a senha
  }
  async compararSenhas(
    senhaDigitada: string,
    senhaBanco: string,
  ): Promise<boolean> {
    return await bcrypt.compare(senhaDigitada, senhaBanco); //compara se a senha digitada é igual a criptografada
  }
}
