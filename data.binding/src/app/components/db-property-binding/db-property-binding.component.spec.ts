import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DbPropertyBindingComponent } from './db-property-binding.component';
import { ApiServiceService } from '../../services/api-service.service';

describe('DbPropertyBindingComponent', () => {
  let component: DbPropertyBindingComponent;
  let fixture: ComponentFixture<DbPropertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbPropertyBindingComponent],
      providers: [
        {
          provide: ApiServiceService,
          useValue: {
            getPhotos: () =>
              of([
                {
                  id: '10',
                  author: 'Paul Jarvis',
                  width: 2500,
                  height: 1667,
                  url: 'https://picsum.photos/id/10/2500/1667',
                  download_url: 'https://picsum.photos/id/10/2500/1667',
                },
              ]),
          },
        },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbPropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
