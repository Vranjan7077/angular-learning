import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { UsersPageComponent } from './pages/users-page/users-page.component';
import { UserDetailPageComponent } from './pages/user-detail-page/user-detail-page.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Angular Routing Demo',
    component: HomePageComponent,
    pathMatch: 'full',
  },
  { path: 'home', title: 'Angular Routing Demo', component: HomePageComponent },
  {
    path: 'users',
    title: 'Users List',
    component: UsersPageComponent,
  },
  {
    path: 'users/:id',
    title: 'User Details',
    component: UserDetailPageComponent,
    children: [
      {
        path: 'posts',
        title: 'User Posts',
        loadComponent: () =>
          import('./pages/user-posts-page/user-posts-page.component').then(
            (m) => m.UserPostsPageComponent,
          ),
      },
      {
        path: 'posts/:postId',
        title: 'User Post Details',
        loadComponent: () =>
          import('./pages/user-post-detail-page/user-post-detail-page.component').then(
            (m) => m.UserPostDetailPageComponent,
          ),
      },
    ],
  },
  {
    path: '**',
    title: '404 - Page Not Found',
    component: NotFoundPageComponent,
  },
];
