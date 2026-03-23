import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingSubmitComponent } from './understanding-submit.component';

describe('UnderstandingSubmitComponent', () => {
  let component: UnderstandingSubmitComponent;
  let fixture: ComponentFixture<UnderstandingSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderstandingSubmitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
