import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackjackDealerComponent } from './blackjack-dealer.component';

describe('BlackjackDealerComponent', () => {
  let component: BlackjackDealerComponent;
  let fixture: ComponentFixture<BlackjackDealerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackjackDealerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackjackDealerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
