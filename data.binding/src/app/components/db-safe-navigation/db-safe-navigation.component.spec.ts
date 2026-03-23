import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DbSafeNavigationComponent } from './db-safe-navigation.component';
import { ApiServiceService } from '../../services/api-service.service';

describe('DbSafeNavigationComponent', () => {
  let component: DbSafeNavigationComponent;
  let fixture: ComponentFixture<DbSafeNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbSafeNavigationComponent],
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

    fixture = TestBed.createComponent(DbSafeNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
