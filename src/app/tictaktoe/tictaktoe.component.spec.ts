import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TictaktoeComponent } from './tictaktoe.component';

describe('TictaktoeComponent', () => {
  let component: TictaktoeComponent;
  let fixture: ComponentFixture<TictaktoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TictaktoeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TictaktoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
