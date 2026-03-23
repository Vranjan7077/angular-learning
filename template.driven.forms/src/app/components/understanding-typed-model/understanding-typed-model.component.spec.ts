import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingTypedModelComponent } from './understanding-typed-model.component';

describe('UnderstandingTypedModelComponent', () => {
  let component: UnderstandingTypedModelComponent;
  let fixture: ComponentFixture<UnderstandingTypedModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderstandingTypedModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingTypedModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
