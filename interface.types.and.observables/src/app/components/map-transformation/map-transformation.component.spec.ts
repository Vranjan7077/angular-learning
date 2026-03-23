import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapTransformationComponent } from './map-transformation.component';

describe('MapTransformationComponent', () => {
  let component: MapTransformationComponent;
  let fixture: ComponentFixture<MapTransformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapTransformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapTransformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
