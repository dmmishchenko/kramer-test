import { Pipe, PipeTransform } from '@angular/core';
import { Edid } from 'src/app/base/interfaces/edid-repository.interface';
import { SortingDirections } from 'src/app/base/types';

export type EdidSortingKeys = keyof Pick<
  Edid,
  'Name' | 'NativeResolution' | 'Size'
>;

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(
    items: Edid[],
    property: EdidSortingKeys | null | undefined,
    direction: SortingDirections | null | undefined = 'asc'
  ): any[] {
    if (!items || items.length <= 1 || !property) {
      return items;
    }

    return items.sort((a, b) => {
      const aValue = a[property];
      const bValue = b[property];

      if (direction === 'asc') {
        return aValue < bValue ? -1 : 1;
      } else {
        return aValue > bValue ? -1 : 1;
      }
    });
  }
}
