import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingFormCustomValidatorComponent } from './understanding-form-custom-validator.component';

describe('UnderstandingFormCustomValidatorComponent', () => {
  let component: UnderstandingFormCustomValidatorComponent;
  let fixture: ComponentFixture<UnderstandingFormCustomValidatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderstandingFormCustomValidatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingFormCustomValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
