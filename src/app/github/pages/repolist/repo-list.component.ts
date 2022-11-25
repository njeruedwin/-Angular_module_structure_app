import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { GitHubService } from '../../../core';
import { repos } from '../../../core';

@Component({
  templateUrl: './repo-list.component.html',
})
export class RepoListComponent {
  userName: string = '';
  repos: repos[];

  loading: boolean = false;
  errorMessage;

  constructor(private githubService: GitHubService) {}

  public getRepos() {
    this.loading = true;
    this.errorMessage = '';
    this.githubService.getRepos(this.userName).subscribe({
      complete: () => {},
      error: () => {
        this.errorMessage;
      },
      next: (response) => {
        this.repos = response;
      },
    });
  }
}
