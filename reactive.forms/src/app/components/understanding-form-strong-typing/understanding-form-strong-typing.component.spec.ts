import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingFormStrongTypingComponent } from './understanding-form-strong-typing.component';

describe('UnderstandingFormStrongTypingComponent', () => {
  let component: UnderstandingFormStrongTypingComponent;
  let fixture: ComponentFixture<UnderstandingFormStrongTypingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderstandingFormStrongTypingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingFormStrongTypingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
