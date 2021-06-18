import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewpendingserproComponent } from './viewpendingserpro.component';

describe('ViewpendingserproComponent', () => {
  let component: ViewpendingserproComponent;
  let fixture: ComponentFixture<ViewpendingserproComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewpendingserproComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewpendingserproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
