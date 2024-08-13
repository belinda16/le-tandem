import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeatilsReservationFormHotelComponent } from './deatils-reservation-form-hotel.component';

describe('DeatilsReservationFormHotelComponent', () => {
  let component: DeatilsReservationFormHotelComponent;
  let fixture: ComponentFixture<DeatilsReservationFormHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeatilsReservationFormHotelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeatilsReservationFormHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
