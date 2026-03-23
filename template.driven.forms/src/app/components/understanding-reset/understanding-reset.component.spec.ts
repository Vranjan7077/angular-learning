import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingResetComponent } from './understanding-reset.component';

describe('UnderstandingResetComponent', () => {
  let component: UnderstandingResetComponent;
  let fixture: ComponentFixture<UnderstandingResetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderstandingResetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
