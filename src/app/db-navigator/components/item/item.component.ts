import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-item',
	templateUrl: './item.component.html',
	styleUrls: ['./item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnInit {

	@Input() text: string | undefined;
	@Input() type: string | undefined;
	@Input() hasChildren: boolean | undefined;

	@Output() clicked$ = new EventEmitter();

	constructor() {
	}

	ngOnInit(): void {
	}

}
