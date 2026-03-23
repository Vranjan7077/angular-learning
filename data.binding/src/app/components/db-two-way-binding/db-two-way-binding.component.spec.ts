import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DbTwoWayBindingComponent } from './db-two-way-binding.component';
import { ApiServiceService } from '../../services/api-service.service';

describe('DbTwoWayBindingComponent', () => {
  let component: DbTwoWayBindingComponent;
  let fixture: ComponentFixture<DbTwoWayBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbTwoWayBindingComponent],
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

    fixture = TestBed.createComponent(DbTwoWayBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
