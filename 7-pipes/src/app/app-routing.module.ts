import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ConfiguratorComponent } from './components/configurator/configurator.component';
import { ConfiguratorStartComponent } from './components/configurator-start/configurator-start.component';
import { ConfiguratorOptionsComponent } from './components/configurator-options/configurator-options.component';
import { ConfiguratorSummaryComponent } from './components/configurator-summary/configurator-summary.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  {
    path: 'configurator',
    component: ConfiguratorComponent,
    children: [
      { path: '', redirectTo: 'start', pathMatch: 'full' },
      { path: 'start', component: ConfiguratorStartComponent },
      { path: 'options', component: ConfiguratorOptionsComponent },
      { path: 'summary', component: ConfiguratorSummaryComponent }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'welcome'} // Catch all route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

