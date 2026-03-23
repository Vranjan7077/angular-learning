import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import {
  ApiServiceService,
  PicsumPhoto,
} from '../../services/api-service.service';

@Component({
  selector: 'app-db-property-binding',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './db-property-binding.component.html',
  styleUrl: './db-property-binding.component.scss',
})
export class DbPropertyBindingComponent implements OnInit {
  photos: PicsumPhoto[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private readonly apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.apiService.getPhotos(1, 2).subscribe({
      next: (photos) => {
        this.photos = photos;
        this.isLoading = false;
      },
      error: () => {
        this.errorMessage = 'Unable to load sample photos right now.';
        this.isLoading = false;
      },
    });
  }

  getImageUrl(photo: PicsumPhoto): string {
    return `https://picsum.photos/id/${photo.id}/480/320`;
  }

  getPhotoAlt(photo: PicsumPhoto): string {
    return `Sample landscape by ${photo.author}`;
  }

  getAspectRatio(photo: PicsumPhoto): string {
    return `${photo.width} / ${photo.height}`;
  }
}
