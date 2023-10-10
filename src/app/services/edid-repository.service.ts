import { Injectable } from '@angular/core';
import {
  Edid,
  EdidRepositoryInterface,
} from '../base/interfaces/edid-repository.interface';
import { Observable, catchError, forkJoin, map, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Maybe } from '../base/types';

@Injectable({
  providedIn: 'root',
})
export class EdidRepositoryService implements EdidRepositoryInterface {
  constructor(private readonly httpClient: HttpClient) {}

  fetchFiles(fileNames: string[]): Observable<Maybe<Edid>[]> {
    const edidReqs$ = fileNames.map((file) => this.fetchJsonFile(file));
    return forkJoin(edidReqs$).pipe(
      map((items) => {
        return items;
      })
    );
  }

  private fetchJsonFile(fileName: string): Observable<Edid | null> {
    const filePath = `assets/JSONmonitors/${fileName}.json`;

    return this.httpClient.get<Edid>(filePath).pipe(
      catchError((err) => {
        console.error(`Failed to load file: ${fileName}, error: ${err}`);
        return of(null);
      })
    );
  }
}
