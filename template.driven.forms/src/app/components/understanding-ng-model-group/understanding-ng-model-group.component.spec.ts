import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingNgModelGroupComponent } from './understanding-ng-model-group.component';

describe('UnderstandingNgModelGroupComponent', () => {
  let component: UnderstandingNgModelGroupComponent;
  let fixture: ComponentFixture<UnderstandingNgModelGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderstandingNgModelGroupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingNgModelGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
