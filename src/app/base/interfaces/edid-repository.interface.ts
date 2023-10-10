import { Observable } from 'rxjs';
import { Maybe } from '../types';

export interface EdidRepositoryInterface {
  fetchFiles(fileNames: string[]): Observable<Maybe<Edid>[]>;
}

export interface Edid {
  Name: string;
  NativeResolution: EdidResolution;
  Size: number;
  status: 1 | 0;
  selected?: boolean;
}

export type EdidResolution = string;
