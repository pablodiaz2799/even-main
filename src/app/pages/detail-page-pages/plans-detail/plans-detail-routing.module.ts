import { Routes, RouterModule } from '@angular/router';
import { PlansDetailComponent } from './plans-detail.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: PlansDetailComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PlansDetailRoutingModule {}
