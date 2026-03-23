import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslationPreviewComponent } from './translation-preview.component';

describe('TranslationPreviewComponent', () => {
  let component: TranslationPreviewComponent;
  let fixture: ComponentFixture<TranslationPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslationPreviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TranslationPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
