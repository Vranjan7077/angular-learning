import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingInputParentComponent } from './parent.component';

describe('UnderstandingInputParentComponent', () => {
  let component: UnderstandingInputParentComponent;
  let fixture: ComponentFixture<UnderstandingInputParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderstandingInputParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingInputParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
