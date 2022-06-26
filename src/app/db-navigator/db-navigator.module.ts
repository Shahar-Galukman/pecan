import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './components/item/item.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { DbMetadataService } from "./services/db-metadata.service";


@NgModule({
	declarations: [
		ItemComponent,
		NavigatorComponent
	],
	imports: [
		CommonModule
	],
	exports: [
		NavigatorComponent
	],
	providers: [
		DbMetadataService
	]
})
export class DbNavigatorModule {}
