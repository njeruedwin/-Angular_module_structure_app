import { NgModule } from '@angular/core';
import { HomeComponent, AboutUsComponent, ContactUsComponent } from './pages';
import { HomeRoutingModule } from './home-routing.module';

import { SharedModule } from '../shared';

@NgModule({
  imports: [HomeRoutingModule, SharedModule],
  declarations: [HomeComponent, AboutUsComponent, ContactUsComponent],
  providers: [],
})
export class HomeModule {}
