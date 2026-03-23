import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingInputChildComponent } from './child.component';

describe('UnderstandingInputChildComponent', () => {
  let component: UnderstandingInputChildComponent;
  let fixture: ComponentFixture<UnderstandingInputChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderstandingInputChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingInputChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
