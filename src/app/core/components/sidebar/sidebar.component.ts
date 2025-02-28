import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronRight, faCode, faGavel, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

interface MenuItem {
  icon: any;
  label: string;
  route: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  isExpanded = false;
  faChevronRight = faChevronRight;

  menuItems: MenuItem[] = [
    {
      icon: faLayerGroup,
      label: 'Categorias',
      route: '/categorias'
    },
    {
      icon: faCode,
      label: 'Projetos',
      route: '/projetos'
    },
    {
      icon: faGavel,
      label: 'Leilão',
      route: '/leilao'
    }
  ];

  toggleSidebar() {
    this.isExpanded = !this.isExpanded;
  }
}
