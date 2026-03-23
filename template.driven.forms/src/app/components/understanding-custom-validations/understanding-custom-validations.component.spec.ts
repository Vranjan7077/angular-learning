import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingCustomValidationsComponent } from './understanding-custom-validations.component';

describe('UnderstandingCustomValidationsComponent', () => {
  let component: UnderstandingCustomValidationsComponent;
  let fixture: ComponentFixture<UnderstandingCustomValidationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderstandingCustomValidationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingCustomValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
