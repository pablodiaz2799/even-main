import { Routes, RouterModule } from '@angular/router';

export const SINGLE_ROUTES: Routes = [
    {
        path: 'nosotros',
        loadChildren: () => import('../../pages/single-page-pages/our-team/our-team.module').then(m => m.OurTeamModule)
    },
    {
        path: 'planes',
        loadChildren: () => import('../../pages/single-page-pages/plans/plans.module').then(m => m.PlansModule)
    },
    {
        path: 'servicios',
        loadChildren: () => import('../../pages/single-page-pages/our-services/our-services.module').then(m => m.OurServicesModule)
    },
];
