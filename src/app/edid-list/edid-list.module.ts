import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EdidItemComponent } from './edid-item/edid-item.component';
import { EdidListComponent } from './edid-list/edid-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NameFilterPipe } from './pipes/name-filter/name-filter.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { SortPipe } from './pipes/sort/sort.pipe';

@NgModule({
  declarations: [EdidItemComponent, EdidListComponent, NameFilterPipe, SortPipe],
  exports: [EdidListComponent],
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule],
})
export class EdidListModule {}
