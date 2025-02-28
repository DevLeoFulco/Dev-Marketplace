import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'categorias',
        loadChildren: () => import('./features/categorias/categoria.routes')
          .then(m => m.CATEGORIAS_ROUTES)
      },
      {
        path: 'projetos',
        loadChildren: () => import('./features/projetos/projetos.routes')
          .then(m => m.PROJETOS_ROUTES)
      },
      {
        path: 'leilao',
        loadChildren: () => import('./features/leilao/leilao.routes')
          .then(m => m.LEILAO_ROUTES)
      },
      {
        path: '',
        redirectTo: 'categorias',
        pathMatch: 'full'
      }
];
