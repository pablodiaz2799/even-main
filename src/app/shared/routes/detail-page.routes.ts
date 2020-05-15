import { Routes, RouterModule } from '@angular/router';

export const DETAIL_ROUTES: Routes = [
    {
        path: 'detalle',
        loadChildren: () => import('../../pages/detail-page-pages/service-detail/service-detail.module').then(m => m.ServiceDetailModule),
    },
];
