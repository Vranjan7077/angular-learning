import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DbClassBindingComponent } from './db-class-binding.component';
import { ApiServiceService } from '../../services/api-service.service';

describe('DbClassBindingComponent', () => {
  let component: DbClassBindingComponent;
  let fixture: ComponentFixture<DbClassBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbClassBindingComponent],
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

    fixture = TestBed.createComponent(DbClassBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
