import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderstandingTemplateReferenceComponent } from './understanding-template-reference.component';

describe('UnderstandingTemplateReferenceComponent', () => {
  let component: UnderstandingTemplateReferenceComponent;
  let fixture: ComponentFixture<UnderstandingTemplateReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnderstandingTemplateReferenceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderstandingTemplateReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
