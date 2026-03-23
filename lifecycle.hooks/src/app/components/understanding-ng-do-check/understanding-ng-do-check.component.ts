import { CommonModule } from '@angular/common';
import { Component, DoCheck, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-understanding-ng-do-check',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './understanding-ng-do-check.component.html',
  styleUrl: './understanding-ng-do-check.component.scss',
})
export class UnderstandingNgDoCheckComponent implements DoCheck {
  @Input() query = '';
  countries: Country[] = [];
  private previousQuery = '';

  constructor(private countryService: CountryService) {}

  ngDoCheck(): void {
    if (this.query === this.previousQuery) {
      return;
    }

    this.previousQuery = this.query;
    const normalized = this.query.trim();
    if (normalized.length < 2) {
      this.countries = [];
      return;
    }

    this.countryService.searchByName(normalized, true).subscribe((data) => {
      this.countries = (data ?? []).slice(0, 5);
    });
  }
}
