import { Inject, Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import {
  Edid,
  EdidRepositoryInterface,
} from 'src/app/base/interfaces/edid-repository.interface';
import { Usecase } from 'src/app/base/interfaces/usecase.interface';
import { EDID_REPOSITORY_TOKEN } from 'src/app/base/tokens';
import { Maybe } from 'src/app/base/types';

@Injectable({ providedIn: 'root' })
export class LoadEdidsUsecase implements Usecase<Observable<Edid[]>> {
  constructor(
    @Inject(EDID_REPOSITORY_TOKEN)
    private readonly edidRepository: EdidRepositoryInterface
  ) {}

  execute(fileNames: string[]): Observable<Edid[]> {
    return this.edidRepository
      .fetchFiles(fileNames)
      .pipe(
        map<Maybe<Edid>[], Edid[]>(
          (items) => items.filter((item) => !!item) as Edid[]
        )
      );
  }
}
