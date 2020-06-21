import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoUpThreeDownComponent } from './two-up-three-down.component';

describe('TwoUpThreeDownComponent', () => {
  let component: TwoUpThreeDownComponent;
  let fixture: ComponentFixture<TwoUpThreeDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoUpThreeDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoUpThreeDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
