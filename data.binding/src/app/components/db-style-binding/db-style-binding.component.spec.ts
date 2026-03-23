import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DbStyleBindingComponent } from './db-style-binding.component';
import { ApiServiceService } from '../../services/api-service.service';

describe('DbStyleBindingComponent', () => {
  let component: DbStyleBindingComponent;
  let fixture: ComponentFixture<DbStyleBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbStyleBindingComponent],
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

    fixture = TestBed.createComponent(DbStyleBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
