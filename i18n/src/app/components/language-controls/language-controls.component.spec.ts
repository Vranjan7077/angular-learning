import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageControlsComponent } from './language-controls.component';

describe('LanguageControlsComponent', () => {
  let component: LanguageControlsComponent;
  let fixture: ComponentFixture<LanguageControlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LanguageControlsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LanguageControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
