import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Produto } from '../../interfaces/produto.interface';

@Component({
  selector: 'app-produto-card',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './produto-card.component.html',
  styleUrl: './produto-card.component.css'
})
export class ProdutoCardComponent {
  produto: Produto = {
    id: 1,
    name: 'Desenvolvedor Full Stack',
    price: 150.00,
    image: 'https://via.placeholder.com/300x200',
    description: 'Desenvolvedor Full Stack com experiência em Angular e Java (8 +)'
  };
}
