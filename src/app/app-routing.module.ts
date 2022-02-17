import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Módulos
import { PagesRoutingModule } from './pages/pages-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';

// Componentes
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [
  // path: '/dashboard' PagesRoutingModule
  // path: '/auth' AuthRoutingModule
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
           PagesRoutingModule,
           AuthRoutingModule,
             CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
