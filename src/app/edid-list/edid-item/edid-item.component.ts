import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Edid } from 'src/app/base/interfaces/edid-repository.interface';

@Component({
  selector: 'app-edid-item',
  templateUrl: './edid-item.component.html',
  styleUrls: ['./edid-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EdidItemComponent {
  @Input() item!: Edid;

  public itemClicked(): void {
    this.item.selected = !this.item.selected
  }
}
