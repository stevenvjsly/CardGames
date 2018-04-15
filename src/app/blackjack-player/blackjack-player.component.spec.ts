import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackjackPlayerComponent } from './blackjack-player.component';

describe('BlackjackPlayerComponent', () => {
  let component: BlackjackPlayerComponent;
  let fixture: ComponentFixture<BlackjackPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlackjackPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackjackPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
