import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DbSignalBindingComponent } from './db-signal-binding.component';
import { ApiServiceService } from '../../services/api-service.service';

describe('DbSignalBindingComponent', () => {
  let component: DbSignalBindingComponent;
  let fixture: ComponentFixture<DbSignalBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbSignalBindingComponent],
      providers: [
        {
          provide: ApiServiceService,
          useValue: {
            getTodos: () =>
              of([
                {
                  userId: 1,
                  id: 1,
                  title: 'delectus aut autem',
                  completed: false,
                },
              ]),
          },
        },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbSignalBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
