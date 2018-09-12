import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@app/routes/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home/herbalism' },
  {
    path: 'home/:theme',
    component: HomeComponent,
  },
  {
    path: 'not-found',
    loadChildren: '@routes/not-found/not-found.module#NotFoundModule',
  },
  // CHA: routing
  // ------------
  {
    path: 'edit-quizz/:id',
    loadChildren: '@routes/edit-quizz/edit-quizz.module#EditQuizzModule',
  },
  // ------------
  {
    path: '**',
    redirectTo: '/not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
