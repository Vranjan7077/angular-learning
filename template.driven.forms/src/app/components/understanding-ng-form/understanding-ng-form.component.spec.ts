import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingNgFormComponent } from './understanding-ng-form.component';

describe('UnderstandingNgFormComponent', () => {
  let component: UnderstandingNgFormComponent;
  let fixture: ComponentFixture<UnderstandingNgFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderstandingNgFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingNgFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
