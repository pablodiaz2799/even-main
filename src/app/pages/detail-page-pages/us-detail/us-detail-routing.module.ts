import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsDetailComponent } from './us-detail.component';

const routes: Routes = [
    {
        path: '',
        component: UsDetailComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsDetailRoutingModule {}
