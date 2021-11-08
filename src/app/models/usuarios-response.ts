export class UsuariosResponse {
    public usuarios!: Array<Usuario>;
}

export class Usuario {
    nome!: string;
    cpf!: string;
    contaAplicacao!: number;
    contaCorrente!: number;
}