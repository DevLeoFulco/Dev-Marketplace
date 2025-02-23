import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ProdutoCardComponent } from './components/produto-card/produto-card.component';
import { Produto } from './interfaces/produto.interface';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule, HeaderComponent, ProdutoCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  produtos: Produto[] = [
    {
      id: 1,
      name: 'Desenvolvedor Full Stack',
      price: 150.00,
      image: 'https://via.placeholder.com/300x200',
      description: 'Desenvolvedor Full Stack com experiência em Angular e Java (8 +)'
    },
    {
      id: 2,
      name: 'Desenvolvedor BackEnd',
      price: 120.00,
      image: 'https://via.placeholder.com/300x200',
      description: 'Desenvolvedor BackEnd com experiência em Java 8'
    },
    {
      id: 3,
      name: 'Desenvolvedor Frontend',
      price: 100.00,
      image: 'https://via.placeholder.com/300x200',
      description: 'Desenvolvedor Frontend com experiência em Angular e React'
    },
    {
      id: 4,
      name: 'Desenvolvedor Mobile',
      price: 130.00,
      image: 'https://via.placeholder.com/300x200',
      description: 'Desenvolvedor Mobile com experiência em React Native e Flutter'
    },
    {
      id: 5,
      name: 'Arquiteto de Software',
      price: 200.00,
      image: 'https://via.placeholder.com/300x200',
      description: 'Arquiteto de Software com vasta experiência em sistemas distribuídos'
    },
    {
      id: 6,
      name: 'DevOps Engineer',
      price: 180.00,
      image: 'https://via.placeholder.com/300x200',
      description: 'DevOps Engineer com experiência em AWS e Azure'
    }
  ];
}
