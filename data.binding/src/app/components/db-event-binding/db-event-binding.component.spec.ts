import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DbEventBindingComponent } from './db-event-binding.component';
import { ApiServiceService } from '../../services/api-service.service';

describe('DbEventBindingComponent', () => {
  let component: DbEventBindingComponent;
  let fixture: ComponentFixture<DbEventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbEventBindingComponent],
      providers: [
        {
          provide: ApiServiceService,
          useValue: {
            getPosts: () =>
              of([
                {
                  userId: 1,
                  id: 1,
                  title: 'Sample post title',
                  body: 'Sample post body',
                },
              ]),
          },
        },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
