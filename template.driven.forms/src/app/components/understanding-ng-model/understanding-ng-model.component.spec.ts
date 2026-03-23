import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingNgModelComponent } from './understanding-ng-model.component';

describe('UnderstandingNgModelComponent', () => {
  let component: UnderstandingNgModelComponent;
  let fixture: ComponentFixture<UnderstandingNgModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderstandingNgModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingNgModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
