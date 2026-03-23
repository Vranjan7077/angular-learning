import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingFormArrayComponent } from './understanding-form-array.component';

describe('UnderstandingFormArrayComponent', () => {
  let component: UnderstandingFormArrayComponent;
  let fixture: ComponentFixture<UnderstandingFormArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderstandingFormArrayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingFormArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
