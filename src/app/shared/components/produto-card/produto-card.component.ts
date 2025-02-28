import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Produto } from '../../interface/produto.interface';

@Component({
  selector: 'app-produto-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './produto-card.component.html',
  styleUrl: './produto-card.component.css'
})
export class ProdutoCardComponent {
  @Input() produto!: Produto;
}
