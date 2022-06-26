import { Component } from '@angular/core';
import { DbMetadataService } from "./db-navigator/services/db-metadata.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pecan-test';

  public dbMetaData$ = this.dbMetadataService.getDBMetadata();

  constructor(private dbMetadataService: DbMetadataService) {
  }
}
