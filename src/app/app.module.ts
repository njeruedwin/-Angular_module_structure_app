import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LessonsModule } from './lessons';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './shared/app-routing.module';
import { SharedModule } from './shared';
import { AdminModule } from './admin/admin.module';
import { GitHubModule } from './github/github.module';
import { GitHubService } from './core';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AdminModule,
    GitHubModule,
    LessonsModule,
  ],
  declarations: [AppComponent],
  providers: [GitHubService],
  bootstrap: [AppComponent],
})
export class AppModule {}
