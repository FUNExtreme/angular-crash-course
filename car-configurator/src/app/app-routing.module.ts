import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { MyGuardGuard } from './my-guard.guard';

class DetailComponent {}
class DetailBasisComponent {}
class DetailStatusComponent {}

const routes: Routes = [
  {
    path: 'detail',
    component: DetailComponent,
    children: [
      { path: '', redirectTo: 'basis' },
      { path: 'basis', component: DetailBasisComponent },
      { path: 'status', component: DetailStatusComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

