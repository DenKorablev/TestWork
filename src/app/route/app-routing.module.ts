import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';

const route: Routes = [
    { path: 'store', component: AppComponent, pathMatch: 'full' }
]

@NgModule({
    imports: [ RouterModule.forRoot(route) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {
}