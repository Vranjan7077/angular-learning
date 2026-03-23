import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingRequiredValidationsComponent } from './understanding-required-validations.component';

describe('UnderstandingRequiredValidationsComponent', () => {
  let component: UnderstandingRequiredValidationsComponent;
  let fixture: ComponentFixture<UnderstandingRequiredValidationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderstandingRequiredValidationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingRequiredValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
