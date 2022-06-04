import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesktopViewComponent } from './desktop-view/desktop-view.component';
import { ViewNexusComponent } from './view-nexus/view-nexus.component';

const routes: Routes = [
  {path: "", component: ViewNexusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
