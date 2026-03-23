import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingDisablingComponent } from './understanding-disabling.component';

describe('UnderstandingDisablingComponent', () => {
  let component: UnderstandingDisablingComponent;
  let fixture: ComponentFixture<UnderstandingDisablingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderstandingDisablingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingDisablingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
