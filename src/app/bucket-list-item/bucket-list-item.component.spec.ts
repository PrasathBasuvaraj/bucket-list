import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketListItemComponent } from './bucket-list-item.component';

describe('BucketListItemComponent', () => {
  let component: BucketListItemComponent;
  let fixture: ComponentFixture<BucketListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BucketListItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BucketListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
