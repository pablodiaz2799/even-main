import { Routes, RouterModule } from '@angular/router';

export const DETAIL_ROUTES: Routes = [
    {
        path: 'detalle',
        loadChildren: () => import('../../pages/detail-page-pages/service-detail/service-detail.module').then(m => m.ServiceDetailModule),
    },
    {
        path: 'planes',
        loadChildren: () => import('../../pages/detail-page-pages/plans-detail/plans-detail.module').then(m => m.PlansDetailModule)
    },
    {
        path: 'nosotros',
        loadChildren: () => import('../../pages/detail-page-pages/us-detail/us-detail.module').then(m => m.UsDetailModule)
    }
];
