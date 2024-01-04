import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BucketListItem } from './BucketListItem';
import { BucketListItemComponent } from './bucket-list-item/bucket-list-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BucketListItemComponent],
  template: `<h2>Bucket List</h2>
    @for (listItem of bucketList; track $index) {
    <app-bucket-list-item
      [item]="listItem"
      [index]="$index"
      (toggleItemEvent)="toggle($event)"
    ></app-bucket-list-item>
    } @empty {
    <p>Empty Bucket List</p>
    }`,
})
export class AppComponent {
  title = 'bucket-list';
  bucketList: Array<BucketListItem> = [
    {
      text: 'Solve 30 problems in leetcode.com by March 2024',
      done: false,
      type: 'work',
    },
    {
      text: 'Complete a 5k in 30 mins by May 2024',
      done: false,
      type: 'health',
    },
    {
      text: 'Watch 3 movies with the kids by June 2024',
      done: false,
      type: 'family',
    },
  ];

  toggle(index: number) {
    this.bucketList[index].done = !this.bucketList[index].done;
  }
}
