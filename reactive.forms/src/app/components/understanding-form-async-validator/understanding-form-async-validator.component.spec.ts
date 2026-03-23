import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingFormAsyncValidatorComponent } from './understanding-form-async-validator.component';

describe('UnderstandingFormAsyncValidatorComponent', () => {
  let component: UnderstandingFormAsyncValidatorComponent;
  let fixture: ComponentFixture<UnderstandingFormAsyncValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderstandingFormAsyncValidatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingFormAsyncValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
