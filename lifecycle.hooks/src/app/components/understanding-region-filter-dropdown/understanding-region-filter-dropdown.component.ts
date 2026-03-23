import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';
import { CardComponent } from '../../shared/card/card.component';
import { CustomDropdownComponent } from '../../shared/custom-dropdown/custom-dropdown.component';

@Component({
  selector: 'app-understanding-region-filter-dropdown',
  standalone: true,
  imports: [CommonModule, CardComponent, CustomDropdownComponent],
  templateUrl: './understanding-region-filter-dropdown.component.html',
  styleUrl: './understanding-region-filter-dropdown.component.scss',
})
export class UnderstandingRegionFilterDropdownComponent implements OnInit {
  readonly regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  selectedRegion = 'Asia';
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.loadByRegion(this.selectedRegion);
  }

  onRegionChange(region: string): void {
    this.selectedRegion = region;
    this.loadByRegion(region);
  }

  private loadByRegion(region: string): void {
    this.countryService.getByRegion(region).subscribe((data) => {
      this.countries = (data ?? []).slice(0, 8);
    });
  }
}
