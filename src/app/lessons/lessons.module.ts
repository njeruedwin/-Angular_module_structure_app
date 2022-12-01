import { NgModule } from '@angular/core';
import { CustomPipeComponent } from './pages';
import { LessonsComponent } from './pages';
import { FormsModule } from '@angular/forms';
import { LessonsRoutingModule } from './lessons-routing.module';
import { TemparetureConverterPipe } from '../core';

@NgModule({
  imports: [LessonsRoutingModule, FormsModule],
  declarations: [
    LessonsComponent,
    CustomPipeComponent,
    TemparetureConverterPipe,
  ],
  exports: [],
})
export class LessonsModule {}
