import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigatorComponent } from "./db-navigator/components/navigator/navigator.component";

const routes: Routes = [
	{ path: '', component: NavigatorComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}