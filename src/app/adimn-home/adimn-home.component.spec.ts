import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdimnHomeComponent } from './adimn-home.component';

describe('AdimnHomeComponent', () => {
  let component: AdimnHomeComponent;
  let fixture: ComponentFixture<AdimnHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdimnHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdimnHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
