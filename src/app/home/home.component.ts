import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatIconModule, CommonModule, NgFor, NgIf]
})

export class HomeComponent {

  constructor(private router: Router) { }

  verDetalhes(livroId: string) {
    this.router.navigate(['/detalhes', livroId]);
  }

  toogleFavorito(index: number): void {
    this.livros[index].favorito = !this.livros[index].favorito
  }

  nome: string = 'Ana';
  sobrenome: string = 'Frizzo';
  data: any = new Date();
  livros: Array<any> = [
    {
      id: 1,
      titulo: 'É Assim Que Acaba',
      foto: 'https://imgs.casasbahia.com.br/1556415367/1xg.jpg',
      autor: 'Colleen Hoover',
      paginas: 304,
      assunto: 'Romance',
      preco: 40,
      favorito: true
    },
    {
      id: 2,
      titulo: 'Todas As Suas Perfeições',
      foto: 'https://images-americanas.b2w.io/produtos/134521080/imagens/livro-todas-as-suas-im-perfeicoes/134521080_3_xlarge.jpg',
      autor: 'Colleen Hoover',
      paginas: 424,
      assunto: 'Ficção',
      preco: 54,
      favorito: true
    },
    {
      id: 3,
      titulo: 'O Lado Feio Do Amor',
      foto: 'https://images-americanas.b2w.io/produtos/123669409/imagens/o-lado-feio-do-amor-ugly-love-1-ed/123669409_3_xlarge.jpg',
      autor: 'Colleen Hoover',
      paginas: 336,
      assunto: 'Romance',
      preco: 32,
      favorito: true
    },
    {
      id: 4,
      titulo: 'A Biblioteca da Meia-Noite',
      foto: 'https://images-americanas.b2w.io/produtos/3885356994/imagens/livro-a-biblioteca-da-meia-noite/3885356994_4_xlarge.jpg',
      autor: 'Matt Haig',
      paginas: 308,
      assunto: 'Ficção',
      preco: 36,
      favorito: true
    },
    {
      id: 5,
      titulo: 'A Vida Invisivel de Addie',
      foto: 'https://images-americanas.b2w.io/produtos/01/00/img3/36182910/9/3618291006_2SZ.jpg',
      autor: 'Schwab, V. E.',
      paginas: 504,
      assunto: 'Ficção',
      preco: 39,
      favorito: true
    },
    {
      id: 6,
      titulo: 'Mamãe Bruxa - Rapunzel',
      foto: 'https://imgs.casasbahia.com.br/1500317507/1xg.jpg',
      autor: 'Serena Valentino',
      paginas: 336,
      assunto: 'Infantil',
      preco: 37,
      favorito: true
    },
    {
      id: 7,
      titulo: 'A Rainha Vermelha',
      foto: 'https://imgs.casasbahia.com.br/1511410265/1xg.jpg',
      autor: 'Victoria Aveyard',
      paginas: 424,
      assunto: 'Ficção',
      preco: 39,
      favorito: true
    },
    {
      id: 8,
      titulo: 'Uma Segunda Chance',
      foto: 'https://imgs.casasbahia.com.br/1540059095/1xg.jpg',
      autor: 'Colleen Hoover',
      paginas: 368,
      assunto: 'Romance',
      preco: 35,
      favorito: true
    },
    {
      id: 9,
      titulo: 'O Pequeno Príncipe',
      foto: 'https://imgs.casasbahia.com.br/12218682/1xg.jpg',
      autor: 'Antoine de Saint',
      paginas: 64,
      assunto: 'Literatura',
      preco: 14,
      favorito: true
    },
    {
      id: 10,
      titulo: 'Diários Do Vampiro',
      foto: 'https://imgs.casasbahia.com.br/2735159/1g.jpg',
      autor: 'L. J. Smith',
      paginas: 176,
      assunto: 'Juvenil',
      preco: 46,
      favorito: true
    },
    {
      id: 11,
      titulo: 'Diário de uma Garota',
      foto: 'https://imgs.casasbahia.com.br/5498004/1xg.jpg',
      autor: 'Rachel Renée',
      paginas: 304,
      assunto: 'Juvenil',
      preco: 39,
      favorito: true
    },
    {
      id: 12,
      titulo: 'Diário de um Banana',
      foto: 'https://imgs.casasbahia.com.br/242235/1xg.jpg',
      autor: 'Jeff Kinney',
      paginas: 218,
      assunto: 'Juvenil',
      preco: 56,
      favorito: true
    },
    {
      id: 13,
      titulo: 'Trinta e Cinco Garotas',
      foto: 'https://imgs.casasbahia.com.br/1715315/1xg.jpg',
      autor: ' Kiera Cassd',
      paginas: 368,
      assunto: 'Juvenil',
      preco: 39,
      favorito: true
    },
    {
      id: 14,
      titulo: 'O Extraordinário',
      foto: 'https://imgs.casasbahia.com.br/13458659/1xg.jpg',
      autor: 'R. J. Palacio',
      paginas: 396,
      assunto: 'Drama',
      preco: 60,
      favorito: true
    },
    {
      id: 15,
      titulo: 'A Cinco Passos de Você',
      foto: 'https://images-americanas.b2w.io/produtos/134273784/imagens/a-cinco-passos-de-voce-1-ed/134273784_3_xlarge.jpg',
      autor: 'R. Lippincott',
      paginas: 288,
      assunto: 'Drama',
      preco: 33,
      favorito: true
    }
  ];

}