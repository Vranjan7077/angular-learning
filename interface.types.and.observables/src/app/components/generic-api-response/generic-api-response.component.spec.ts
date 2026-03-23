import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericApiResponseComponent } from './generic-api-response.component';

describe('GenericApiResponseComponent', () => {
  let component: GenericApiResponseComponent;
  let fixture: ComponentFixture<GenericApiResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenericApiResponseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenericApiResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
