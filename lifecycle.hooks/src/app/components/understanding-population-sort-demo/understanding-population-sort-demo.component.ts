import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-understanding-population-sort-demo',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './understanding-population-sort-demo.component.html',
  styleUrl: './understanding-population-sort-demo.component.scss',
})
export class UnderstandingPopulationSortDemoComponent implements OnInit {
  countries: Country[] = [];
  currentSort = 'none';

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryService.getByRegion('Asia').subscribe((data) => {
      this.countries = (data ?? []).slice(0, 8);
    });
  }

  sortByPopulationAsc(): void {
    this.countries = [...this.countries].sort(
      (a, b) => (a.population ?? 0) - (b.population ?? 0),
    );
    this.currentSort = 'population asc';
  }

  sortByPopulationDesc(): void {
    this.countries = [...this.countries].sort(
      (a, b) => (b.population ?? 0) - (a.population ?? 0),
    );
    this.currentSort = 'population desc';
  }
}
