import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DbAsyncPipeComponent } from './db-async-pipe.component';
import { ApiServiceService } from '../../services/api-service.service';

describe('DbAsyncPipeComponent', () => {
  let component: DbAsyncPipeComponent;
  let fixture: ComponentFixture<DbAsyncPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbAsyncPipeComponent],
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

    fixture = TestBed.createComponent(DbAsyncPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
