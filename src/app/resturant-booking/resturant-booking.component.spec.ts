import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResturantBookingComponent } from './resturant-booking.component';

describe('ResturantBookingComponent', () => {
  let component: ResturantBookingComponent;
  let fixture: ComponentFixture<ResturantBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResturantBookingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResturantBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
