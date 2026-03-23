import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingFormNestedGroupComponent } from './understanding-form-nested-group.component';

describe('UnderstandingFormNestedGroupComponent', () => {
  let component: UnderstandingFormNestedGroupComponent;
  let fixture: ComponentFixture<UnderstandingFormNestedGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderstandingFormNestedGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingFormNestedGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
