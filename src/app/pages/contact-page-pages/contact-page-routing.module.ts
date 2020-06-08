import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MobileWebComponent } from './mobile-web/mobile-web.component';
import { ContactPlansComponent } from './contact-plans/contact-plans.component';
import { ContactBusinessComponent } from './contact-business/contact-business.component';
import { ContactMoreInfoComponent } from './contact-more-info/contact-more-info.component';

const routes: Routes = [
    {
        path: 'plataforma',
        component: MobileWebComponent,
    },
    {
        path: 'planes',
        component: ContactPlansComponent,
    },
    {
        path: 'proyecto',
        component: ContactBusinessComponent,
    },
    {
        path: 'info',
        component: ContactMoreInfoComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ContactPageRoutingModule {}
