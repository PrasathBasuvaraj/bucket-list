import { UpperCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BucketListItem } from '../BucketListItem';

@Component({
  selector: 'app-bucket-list-item',
  standalone: true,
  imports: [UpperCasePipe],
  template: ` <p>
    <input type="checkbox" (change)="toggle(index)" />
    @if (item.done) {
    <s
      ><b class="term">{{ item.type | uppercase }}</b> : {{ item.text }}</s
    >
    } @else {
    <span
      ><b class="term">{{ item.type | uppercase }}</b> : {{ item.text }}</span
    >
    }
  </p>`,
})
export class BucketListItemComponent {
  @Input() item!: BucketListItem;

  @Input() index!: number;

  @Output() toggleItemEvent = new EventEmitter<number>();

  toggle(index: number) {
    this.toggleItemEvent.emit(index);
  }
}
