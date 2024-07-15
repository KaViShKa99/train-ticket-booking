import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookngComponent } from './bookng.component';

describe('BookngComponent', () => {
  let component: BookngComponent;
  let fixture: ComponentFixture<BookngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookngComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
