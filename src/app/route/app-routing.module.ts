import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from '../app.component';

const route: Routes = [
    { path: '', redirectTo: 'store', pathMatch: 'full' },
    { path: 'store', component: AppComponent },
    { path: 'store/:category', component: AppComponent }
]

@NgModule({
    imports: [ RouterModule.forRoot(route) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {
}