import { Routes, RouterModule } from '@angular/router';

export const CONTACT_ROUTES: Routes = [
    {
        path: 'contacto',
        loadChildren: () => import('../../pages/contact-page-pages/contact-page.module').then(m => m.ContactPageModule),
    },
];
