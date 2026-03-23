import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingFormControlComponent } from './understanding-form-control.component';

describe('UnderstandingFormControlComponent', () => {
  let component: UnderstandingFormControlComponent;
  let fixture: ComponentFixture<UnderstandingFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderstandingFormControlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
