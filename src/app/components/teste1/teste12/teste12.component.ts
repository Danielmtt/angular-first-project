import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste12',
  templateUrl: './teste12.component.html',
  styleUrls: ['./teste12.component.css']
})
export class Teste12Component implements OnInit {

  titulo:string = 'meu primeiro component';
  dados:string = "";
  imgUrl:string = "/assets/Img.jpg";

  mostrarImagem = true;

  constructor() { }

  ngOnInit(): void {
    this.dados = "vazio"
  }

  executar(): void {
    alert(this.dados);
  }

}
