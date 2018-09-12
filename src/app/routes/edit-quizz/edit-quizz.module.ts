import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditQuizzComponent } from './edit-quizz.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: '', component: EditQuizzComponent, pathMatch: 'full' },
];
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [EditQuizzComponent],
})
export class EditQuizzModule {}
