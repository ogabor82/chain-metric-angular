import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewWatchlistComponent } from './new-watchlist.component';

describe('NewWatchlistComponent', () => {
  let component: NewWatchlistComponent;
  let fixture: ComponentFixture<NewWatchlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewWatchlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewWatchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
