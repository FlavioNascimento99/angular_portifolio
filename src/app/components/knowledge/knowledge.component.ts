import { Component } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.sass']
})
export class KnowledgeComponent {
  knowledge_tuple : [string, string][] = [
    [
      'Angular',
      'Meu principal e favorito framework de desenvolvimento web, é onde tenho maior afinidade e experiência com banco de dados locais e firebase.'
    ],
    [
      'React',
      'Conceitos e aplicações bem frisadas de JSX, componentes, states, props, eventos e hooks, roteamento e gerenciamento de estado em conjunto com algumas boas práticas.'
    ],
    [
      'PostgreSQL',
      'É o Sistema de Gerenciamento de Banco de Dados que mais tenho proximidade, tanto pelo conceito relacional, ferramenta que mais utilizo em aplicações que desenvolvo em meus estudos.'
    ],
    [
      'NodeJS',
      'Foco dos meus estudos atuais para complementar meus conhecimentos de modularização, assincronicidade e callbacks e conexões com banco, eventos e ExpressJS.'
    ],
    [
      'ASP.Net MVC',
      'Meu primeiro contato com Arquitetura MVC, onde desenvolvi uma clara visão sobre como a mesma funciona e a sua conectividade no banco de dados.'
    ],
    [
      'TypeScript',
      'Superset JavaScript, que venho utilizado dentro dos meus estudos no Front-end, muito pela sua tipagem forte, facilidade de implementação e manutenção de código.'
    ],
    [
      'Bibliotecas JavaScript',
      'Em meio aos meus estudos com JavaScript, conheci algumas bibliotecas web com foco em dinamizar o desenvolvimento web com JavaScript puro, como JQuery e KendoUI.'
    ],
    [
      'Bibliotecas CSS',
      'Sendo entusiasta de design e construção de interfaces, já utilizei diversas bibliotecas de desenvolvimento de interfaces, tendo conhecimento extenso com Bootstrap e Tailwind.'
    ]
  ]
}
