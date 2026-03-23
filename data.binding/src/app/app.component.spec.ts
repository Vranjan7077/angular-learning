import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { ApiServiceService } from './services/api-service.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
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
            getPosts: () =>
              of([
                {
                  userId: 1,
                  id: 1,
                  title: 'Sample post title',
                  body: 'Sample post body',
                },
              ]),
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
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'repro.understanding.angular.data.binding' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('repro.understanding.angular.data.binding');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Angular Data Binding');
  });
});
