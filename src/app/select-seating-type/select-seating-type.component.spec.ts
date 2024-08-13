import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectSeatingTypeComponent } from './select-seating-type.component';

describe('SelectSeatingTypeComponent', () => {
  let component: SelectSeatingTypeComponent;
  let fixture: ComponentFixture<SelectSeatingTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectSeatingTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectSeatingTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
