import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingViewChildParentComponent } from './understanding-view-child-parent.component';

describe('UnderstandingViewChildParentComponent', () => {
  let component: UnderstandingViewChildParentComponent;
  let fixture: ComponentFixture<UnderstandingViewChildParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderstandingViewChildParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingViewChildParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
