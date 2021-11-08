import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuario.model';
import { UsuariosResponse } from 'src/app/models/usuarios-response';
import { BancoService } from 'src/app/services/banco.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
  usuarios: any = [];

  chave: boolean = false;
  botao: boolean = false;

  constructor(private bancoService: BancoService) { }

  ngOnInit(): void {
    this.chamandoDados();
  }

  chamandoDados(): void {
    this.bancoService.getAll().subscribe((data: UsuariosResponse) => {
      this.usuarios = data;
    });
  }

  mostrarDados(): void {
    if (this.usuario.cpf == "12345678910" ||
      this.usuario.cpf == "01987654321" ||
      this.usuario.cpf == "99999999999" ||
      this.usuario.cpf == "88888888888" ||
      this.usuario.cpf == "77777777777") {
        this.botao = true;
        this.chave = true;
    } else {
      alert('CPF não identificado.')
    }
  }

  voltarHome(): void {
    this.botao = false;
    this.chave = false;
    this.usuario.cpf = '';
  }

}
