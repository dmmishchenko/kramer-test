import { InjectionToken } from '@angular/core';
import { EdidRepositoryInterface } from './interfaces/edid-repository.interface';

export const EDID_REPOSITORY_TOKEN =
  new InjectionToken<EdidRepositoryInterface>('EdidRepositoryInterface');
