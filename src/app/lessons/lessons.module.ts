import { NgModule } from '@angular/core';
import { CustomPipeComponent } from './pages';
import { LessonsComponent } from './pages';
import { LessonsRoutingModule } from './lessons-routing.module';

@NgModule({
  imports: [LessonsRoutingModule],
  declarations: [LessonsComponent, CustomPipeComponent],
  exports: [],
})
export class LessonsModule {}
