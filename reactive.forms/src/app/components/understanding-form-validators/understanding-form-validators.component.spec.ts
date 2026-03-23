import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingFormValidatorsComponent } from './understanding-form-validators.component';

describe('UnderstandingFormValidatorsComponent', () => {
  let component: UnderstandingFormValidatorsComponent;
  let fixture: ComponentFixture<UnderstandingFormValidatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderstandingFormValidatorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingFormValidatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
