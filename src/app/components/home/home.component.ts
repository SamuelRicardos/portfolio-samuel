import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  botaoMostrarProjetos: any;
  projetosInativos: any;

  ngOnInit(): void {
    this.mostrarOuEsconderProjetos()
  }


mostrarOuEsconderProjetos() {
this.botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
this.projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

  this.botaoMostrarProjetos.addEventListener('click', () => {
      this.mostrarMaisProjetos();
      this.esconderBotao();
  });
}


esconderBotao() {
    this.botaoMostrarProjetos.classList.add("remover");
}

mostrarMaisProjetos() {
    this.projetosInativos.forEach((projetoInativo: { classList: { add: (arg0: string) => void; }; }) => {
        projetoInativo.classList.add('ativo');
    });
}

}
