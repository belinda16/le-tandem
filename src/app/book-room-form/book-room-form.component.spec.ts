import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRoomFormComponent } from './book-room-form.component';

describe('BookRoomFormComponent', () => {
  let component: BookRoomFormComponent;
  let fixture: ComponentFixture<BookRoomFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookRoomFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookRoomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
