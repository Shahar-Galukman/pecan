import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { DbMetadataService } from "../../services/db-metadata.service";
import { Item } from "../../models/item";
import { Observable, of } from "rxjs";

@Component({
	selector: 'app-navigator',
	templateUrl: './navigator.component.html',
	styleUrls: ['./navigator.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigatorComponent {
	public dbMetaDataChildren$: Observable<Item[] | null> = of(null);

	@Input()
	public items: Item[] | null = [];

	constructor(private dbMetadataService: DbMetadataService) {
	}

	onClick(item: Item) {
		if (item.children ) {
			this.dbMetaDataChildren$ = this.dbMetadataService.getDBMetadataById(item.id);
		}
	}

	trackByItem(index: number, item: Item) {
		return item.id;
	}
}
