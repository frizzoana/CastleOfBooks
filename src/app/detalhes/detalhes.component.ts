import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss'],
  standalone: true,
  imports: [MatGridListModule, MatCardModule, MatIconModule, CommonModule, NgFor, NgIf]
})
export class DetalhesComponent implements OnInit {

  livroId: string | undefined;

  description: Array<any> = [
    {
      id: 1,
      titulo: 'É Assim Que Acaba',
      foto: 'https://imgs.casasbahia.com.br/1556415367/1xg.jpg',
      autor: 'Colleen Hoover',
      editora: 'Galera Record',
      paginas: 304,
      assunto: 'Romance',
      sinopse: 'Bem-vindo(a) ao seu futuro lar! Esta magnífica casa de 4 quartos, com duas suítes, é a oportunidade perfeita para você e sua família desfrutarem de uma vida confortável e elegante. Com seus generosos 4 quartos, esta casa oferece amplo espaço para acomodar toda a família. Além disso, duas suítes privativas garantem o máximo de conforto e privacidade para os moradores. A sala de estar espaçosa e aconchegante é perfeita para momentos de lazer em família ou para receber amigos. O ambiente proporciona um cenário ideal para desfrutar de noites agradáveis e descontraídas.',
    },
    {
      id: 2,
      titulo: 'Todas As Suas Perfeições',
      foto: 'https://images-americanas.b2w.io/produtos/134521080/imagens/livro-todas-as-suas-im-perfeicoes/134521080_3_xlarge.jpg',
      autor: 'Colleen Hoover',
      editora: 'Galera Record',
      paginas: 424,
      assunto: 'Ficção',
      sinopse: 'Uma inesquecível história da rainha do drama Colleen Hoover, Todas as suas (im)perfeições fala sobre um casamento conturbado e uma promessa esquecida que pode ser capaz de salvá-lo. Todas as suas imperfeições narra a história de Quinn e Graham. Ele s se conhecem no pior dia de suas vidas ela chega mais cedo de uma viagem para surpreender o noivo, ele testemunha a traição da namorada. E é assim que ambos acabam no corredor de um prédio, trocando confidências, biscoitos da sorte e palavras de co nforto. Fim da dança... se o destino não tivesse outros planos para os dois. Meses mais tarde, os acordes tocam para o casal mais uma vez e eles se reencontram. Graham está convencido de que são almas gêmeas. Quinn jamais se sentiu dessa forma antes. A intensidade do sentimento os assusta, mas eles mergulham de cabeça mesmo assim. O casamento é tudo o que sonhavam, a parceria perfeita. Mesmo nos momentos difíceis, sabem que podem contar com o outro. Nenhum deles desiste do amor que sentem. Até q ue a primeira nota dissonante abala a sinfonia do casal. Até que Quinn parece estar disposta a trocar tudo o que é pela única coisa que não consegue ser: mãe. A luta do casal por um filho arrisca os alicerces da relação. Quinn não pode engravidar. Gr aham não é um candidato para adoção por conta de um erro do passado. O impasse os deixa parados no salão, no silêncio. A orquestra está em suspenso. Os dois parecem surdos para a música do amor. Em Todas as suas imperfeições, Colleen coloca sua marca em mais uma obra comovente e inesquecível.',
    },
    {
      id: 3,
      titulo: 'O Lado Feio Do Amor',
      foto: 'https://images-americanas.b2w.io/produtos/123669409/imagens/o-lado-feio-do-amor-ugly-love-1-ed/123669409_3_xlarge.jpg',
      autor: 'Colleen Hoover',
      editora: 'Galera Record',
      paginas: 336,
      assunto: 'Romance',
      sinopse: 'Livro usado em ótimo estado, levíssimos desgastes nas quinas, levíssima sujidade no corte, miolo perfeito. 21×14 cm , 336 pág. , brochura. Quando Tate Collins se muda para o apartamento de seu irmão, Corbin, a fim de se dedicar ao mestrado em enfermagem, não imaginava conhecer o lado feio do amor. Um relacionamento onde companheirismo e cumplicidade não são prioridades. E o sexo parece ser o único objetivo. Mas Miles Archer, piloto de avião, vizinho e melhor amigo de Corbin, sabe ser persuasivo… apesar da armadura emocional que usa para esconder um passado de dor. O que Miles e Tate sentem não é amor à primeira vista, mas uma atração incontrolável. Em pouco tempo não conseguem mais resistir e se entregam ao desejo. O rapaz impõe duas regras: sem perguntas sobre o passado e sem esperanças para o futuro. Será um relacionamento casual. Eles têm a sintonia perfeita. Tate prometeu não se apaixonar. Mas vai descobrir que nenhuma regra é capaz de controlar o amor e o desejo.'
    },
    {
      id: 4,
      titulo: 'A Biblioteca da Meia-Noite',
      foto: 'https://images-americanas.b2w.io/produtos/3885356994/imagens/livro-a-biblioteca-da-meia-noite/3885356994_4_xlarge.jpg',
      autor: 'Matt Haig',
      editora: '',
      paginas: 308,
      assunto: 'Ficção',
      sinopse: ''
    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
    {

    },
  ]

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.livroId = params.get('id') ?? '';
    });
  }

}