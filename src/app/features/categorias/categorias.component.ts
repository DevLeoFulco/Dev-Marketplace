import { Component } from '@angular/core';
import { Produto } from '../../shared/interface/produto.interface';
import { ProdutoCardComponent } from '../../components/produto-card/produto-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CommonModule, ProdutoCardComponent],
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
  produtos: Produto[] = [
    {
      id: 1,
      name: 'Especialista em SPA',
      price: 150.00,
      image: 'https://via.placeholder.com/300x200',
      description: 'Desenvolvimento de Single Page Applications com Angular, React ou Vue'
    },
    {
      id: 2,
      name: 'Automação de Processos',
      price: 120.00,
      image: 'https://via.placeholder.com/300x200',
      description: 'Automação de processos e workflows com Python e Node.js'
    },
    {
      id: 3,
      name: 'Integrações API',
      price: 130.00,
      image: 'https://via.placeholder.com/300x200',
      description: 'Especialista em integrações de APIs e microsserviços'
    }
  ];
}
