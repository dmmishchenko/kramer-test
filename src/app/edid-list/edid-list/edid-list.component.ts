import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { FILE_NAMES } from 'src/app/base/consts';
import { SortingDirections } from 'src/app/base/types';
import { EdidSortingKeys } from '../pipes/sort/sort.pipe';
import { LoadEdidsUsecase } from './usecases/load-edids.usecase';

@Component({
  selector: 'app-edid-list',
  templateUrl: './edid-list.component.html',
  styleUrls: ['./edid-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EdidListComponent implements OnInit {
  public readonly sortFields: EdidSortingKeys[] = [
    'Name',
    'NativeResolution',
    'Size',
  ];
  public readonly searchControl = new FormControl('');

  public readonly sortingForm = new FormGroup({
    sortingByFieldControl: new FormControl<EdidSortingKeys>(this.sortFields[0]),
    selectedSortOrderControl: new FormControl<SortingDirections>('asc'),
  });

  public edids$ = inject(LoadEdidsUsecase).execute(FILE_NAMES);
  public searchTerm: string | null = null;
  public sortOrder: SortingDirections | null | undefined;
  public sortField: EdidSortingKeys | null | undefined;

  constructor(private readonly cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe((searchTerm) => {
        this.searchTerm = searchTerm;
        this.cdr.markForCheck();
      });

    this.sortingForm.valueChanges
      .pipe(debounceTime(300), distinctUntilChanged())
      .subscribe(({ selectedSortOrderControl, sortingByFieldControl }) => {
        this.sortOrder = selectedSortOrderControl;
        this.sortField = sortingByFieldControl;
        
        this.cdr.markForCheck();
      });
  }
}
