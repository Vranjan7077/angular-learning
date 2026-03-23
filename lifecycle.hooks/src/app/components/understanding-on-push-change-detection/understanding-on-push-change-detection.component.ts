import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-understanding-on-push-change-detection',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './understanding-on-push-change-detection.component.html',
  styleUrl: './understanding-on-push-change-detection.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnderstandingOnPushChangeDetectionComponent implements OnInit {
  countries: Country[] = [];
  lastOperation = 'Loaded with OnPush + markForCheck';

  constructor(
    private countryService: CountryService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.countryService.getByRegion('Europe').subscribe((data) => {
      this.countries = (data ?? []).slice(0, 5);
      this.lastOperation = 'Fetched /region/Europe';
      this.cdr.markForCheck();
    });
  }

  reverseOrder(): void {
    this.countries = [...this.countries].reverse();
    this.lastOperation = 'Immutable reverse (new array reference)';
  }
}
