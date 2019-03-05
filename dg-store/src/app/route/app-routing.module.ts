import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../system/components/not-found/not-found.component';
import { SystemComponent } from '../system/system.component';

const route: Routes = [
    { path: '', redirectTo: 'store', pathMatch: 'full' },
    { path: 'store', component: SystemComponent },
    { path: 'store/:category', component: SystemComponent },
    { path: '**', component: NotFoundComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot(route) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {
}