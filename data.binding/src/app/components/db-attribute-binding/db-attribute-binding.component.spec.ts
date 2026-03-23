import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DbAttributeBindingComponent } from './db-attribute-binding.component';
import { ApiServiceService } from '../../services/api-service.service';

describe('DbAttributeBindingComponent', () => {
  let component: DbAttributeBindingComponent;
  let fixture: ComponentFixture<DbAttributeBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbAttributeBindingComponent],
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

    fixture = TestBed.createComponent(DbAttributeBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
