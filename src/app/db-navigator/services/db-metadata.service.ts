import { Injectable } from "@angular/core";
import metadata from './dummy-db-metadata.json';
import parentId1Response from './dummy-db-metadata-id-1.json';
import parentId11Response from './dummy-db-metadata-id-1.1.json';
import parentId112Response from './dummy-db-metadata-id-1.1.2.json';
import parentId1111Response from './dummy-db-metadata-id-1.1.1.1.json';

import { Observable, of } from "rxjs";
import { Item } from "../models/item";

@Injectable()
export class DbMetadataService {

	getDBMetadata(): Observable<Item[] | null> {
		return of(metadata.data);
	}

	getDBMetadataById(id: string): Observable<Item[] | null> {
		switch (id) {
			case '1':
				return of(parentId1Response.data);
			case '1.1':
				return of(parentId11Response.data);
			case '1.1.2':
				return of(parentId112Response.data);
			case '1.1.1.1':
				return of(parentId1111Response.data);
		}

		return of([]);
	}
}