import { NgModule } from '@angular/core';
import { GitHubRoutingModule } from './github-routing.module';
import { RepoListComponent } from './pages';
import { SharedModule } from './shared';

@NgModule({
  imports: [GitHubRoutingModule, SharedModule],
  declarations: [RepoListComponent],
})
export class GitHubModule {}
