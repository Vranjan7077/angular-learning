import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingOutputParentComponent } from './parent.component';

describe('UnderstandingOutputParentComponent', () => {
  let component: UnderstandingOutputParentComponent;
  let fixture: ComponentFixture<UnderstandingOutputParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderstandingOutputParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingOutputParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
