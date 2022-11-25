import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomPipeComponent } from './pages';
import { LessonsComponent } from './pages';

const routes: Routes = [
  {
    path: 'lessons',
    component: LessonsComponent,
    children: [
      {
        path: 'custompipe',
        component: CustomPipeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LessonsRoutingModule {}
