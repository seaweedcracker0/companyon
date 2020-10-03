import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    // path: '',
    // loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    path: '' , redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'home', loadChildren: () => import('./pages/home/home.module').then(h => h.HomePageModule), canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}