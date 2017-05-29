import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolopComponent } from './holop.component';

describe('HolopComponent', () => {
  let component: HolopComponent;
  let fixture: ComponentFixture<HolopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
