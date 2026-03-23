import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DbInterpolationComponent } from './db-interpolation.component';
import { ApiServiceService } from '../../services/api-service.service';

describe('DbInterpolationComponent', () => {
  let component: DbInterpolationComponent;
  let fixture: ComponentFixture<DbInterpolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbInterpolationComponent],
      providers: [
        {
          provide: ApiServiceService,
          useValue: {
            getUsers: () =>
              of([
                {
                  id: 1,
                  name: 'Leanne Graham',
                  email: 'leanne@example.com',
                  company: { name: 'Romaguera-Crona' },
                },
              ]),
          },
        },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
