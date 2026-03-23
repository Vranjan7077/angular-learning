import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingFormSubmitComponent } from './understanding-form-submit.component';

describe('UnderstandingFormSubmitComponent', () => {
  let component: UnderstandingFormSubmitComponent;
  let fixture: ComponentFixture<UnderstandingFormSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderstandingFormSubmitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingFormSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
