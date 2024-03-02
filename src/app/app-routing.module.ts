import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/calculate-number', pathMatch: 'full' },
  {
    path: 'calculate-number',
    loadChildren: () =>
      import('./operation/operation.module').then((m) => m.ChallengeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
