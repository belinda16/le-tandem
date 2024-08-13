import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsReservationFormComponent } from './details-reservation-form.component';

describe('DetailsReservationFormComponent', () => {
  let component: DetailsReservationFormComponent;
  let fixture: ComponentFixture<DetailsReservationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsReservationFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsReservationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
