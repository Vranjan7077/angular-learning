import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingViewChildComponent } from './understanding-view-child-child.component';

describe('UnderstandingViewChildComponent', () => {
  let component: UnderstandingViewChildComponent;
  let fixture: ComponentFixture<UnderstandingViewChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderstandingViewChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingViewChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
