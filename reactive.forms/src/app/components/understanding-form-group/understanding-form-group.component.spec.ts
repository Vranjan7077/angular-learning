import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingFormGroupComponent } from './understanding-form-group.component';

describe('UnderstandingFormGroupComponent', () => {
  let component: UnderstandingFormGroupComponent;
  let fixture: ComponentFixture<UnderstandingFormGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderstandingFormGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
