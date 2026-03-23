import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingOutputChildComponent } from './child.component';

describe('UnderstandingOutputChildComponent', () => {
  let component: UnderstandingOutputChildComponent;
  let fixture: ComponentFixture<UnderstandingOutputChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderstandingOutputChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingOutputChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
