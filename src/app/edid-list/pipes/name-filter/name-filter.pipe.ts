import { Pipe, PipeTransform } from '@angular/core';
import { Edid } from 'src/app/base/interfaces/edid-repository.interface';

@Pipe({
  name: 'nameFilter',
})
export class NameFilterPipe implements PipeTransform {
  transform(items: Edid[], searchTerm: string | null): Edid[] {
    if (!items || !searchTerm) {
      return items;
    }

    return items.filter((item) =>
      item.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
}
