import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingNgOnChangesComponent } from './understanding-ng-on-changes.component';

describe('UnderstandingNgOnChangesComponent', () => {
  let component: UnderstandingNgOnChangesComponent;
  let fixture: ComponentFixture<UnderstandingNgOnChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderstandingNgOnChangesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingNgOnChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
