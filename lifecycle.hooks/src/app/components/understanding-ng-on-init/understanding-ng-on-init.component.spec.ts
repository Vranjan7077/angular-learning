import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingNgOnInitComponent } from './understanding-ng-on-init.component';

describe('UnderstandingNgOnInitComponent', () => {
  let component: UnderstandingNgOnInitComponent;
  let fixture: ComponentFixture<UnderstandingNgOnInitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderstandingNgOnInitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingNgOnInitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
