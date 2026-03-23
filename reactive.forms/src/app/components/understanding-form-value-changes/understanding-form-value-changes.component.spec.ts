import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingFormValueChangesComponent } from './understanding-form-value-changes.component';

describe('UnderstandingFormValueChangesComponent', () => {
  let component: UnderstandingFormValueChangesComponent;
  let fixture: ComponentFixture<UnderstandingFormValueChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderstandingFormValueChangesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingFormValueChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
