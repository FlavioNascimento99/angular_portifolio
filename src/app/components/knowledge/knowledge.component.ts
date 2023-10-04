import { Component } from '@angular/core';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.sass']
})
export class KnowledgeComponent {
  knowledge_tuple : [string, string, string, string][] = [
    [
      'Angular',
      'Meu principal e favorito framework de desenvolvimento web, é onde tenho maior afinidade e experiência com banco de dados locais e firebase.',
      'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/20/external-angular-a-typescript-based-open-source-web-application-framework-logo-shadow-tal-revivo.png',
      '#f31111'
    ],
    [
      'React',
      'Conceitos e aplicações bem frisadas de JSX, componentes, states, props, eventos e hooks, roteamento e gerenciamento de estado em conjunto com algumas boas práticas.',
      'https://img.icons8.com/color/48/react-native.png',
      'rgba(8,140,245,0.98)'
    ],
    [
      'PostgreSQL',
      'É o Sistema de Gerenciamento de Banco de Dados que mais tenho proximidade, tanto pelo conceito relacional, ferramenta que mais utilizo em aplicações que desenvolvo em meus estudos.',
      'https://img.icons8.com/color/48/postgreesql.png',
      'rgb(96,46,248)'
    ],
    [
      'NodeJS',
      'Foco dos meus estudos atuais para complementar meus conhecimentos de modularização, assincronicidade e callbacks e conexões com banco, eventos e ExpressJS.',
      'https://img.icons8.com/color/48/nodejs.png',
      '#04a114'
    ],
    [
      'ASP.Net MVC',
      'Meu primeiro contato com Arquitetura MVC, onde desenvolvi uma clara visão sobre como a mesma funciona e a sua conectividade no banco de dados.',
      'https://img.icons8.com/color/48/visual-studio.png',
      '#cb27fd'

    ],
    [
      'TypeScript',
      'Superset JavaScript, que venho utilizado dentro dos meus estudos no Front-end, muito pela sua tipagem forte, facilidade de implementação e manutenção de código.',
      'https://img.icons8.com/color/48/typescript.png',
      '#121ac9'
    ],
    [
      'Bibliotecas JavaScript',
      'Em meio aos meus estudos com JavaScript, conheci algumas bibliotecas web com foco em dinamizar o desenvolvimento web com JavaScript puro, como JQuery e KendoUI.',
      'https://img.icons8.com/color/48/javascript.png',
      '#efe542'
    ],
    [
      'Bibliotecas CSS',
      'Sendo entusiasta de design e construção de interfaces, já utilizei diversas bibliotecas de desenvolvimento de interfaces, tendo conhecimento extenso com Bootstrap e Tailwind.',
      'https://img.icons8.com/color/48/css3.png',
      '#07d4f5'
    ]
  ]
}
