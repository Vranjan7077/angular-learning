import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-understanding-ng-on-changes',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './understanding-ng-on-changes.component.html',
  styleUrl: './understanding-ng-on-changes.component.scss',
})
export class UnderstandingNgOnChangesComponent implements OnChanges {
  @Input() region = 'Asia';
  @Input() alphaCode = 'IN';
  countries: Country[] = [];
  lastChangeDescription = 'Waiting for first input change';
  endpointUsed = '';

  constructor(private countryService: CountryService) {}

  ngOnChanges(changes: SimpleChanges): void {
    const alphaCodeChange = changes['alphaCode'];
    const regionChange = changes['region'];
    if (!regionChange && !alphaCodeChange) {
      return;
    }

    if (alphaCodeChange) {
      const previous =
        (alphaCodeChange.previousValue as string | undefined) ?? 'none';
      const current =
        (alphaCodeChange.currentValue as string | undefined) ?? 'none';
      this.lastChangeDescription = `alphaCode: ${previous} -> ${current}`;
      this.endpointUsed = `/alpha/${current}`;

      if (typeof alphaCodeChange.currentValue === 'string' && alphaCodeChange.currentValue.trim().length > 0) {
        this.countryService.getByAlphaCode(alphaCodeChange.currentValue).subscribe((data) => {
          this.countries = data ?? [];
        });
      }
      return;
    }

    if (regionChange) {
      const previous =
        (regionChange.previousValue as string | undefined) ?? 'none';
      const current =
        (regionChange.currentValue as string | undefined) ?? 'none';
      this.lastChangeDescription = `region: ${previous} -> ${current}`;
      this.endpointUsed = `/region/${current}`;

      if (
        typeof regionChange.currentValue === 'string' &&
        regionChange.currentValue.trim().length > 0
      ) {
        this.countryService.getByRegion(regionChange.currentValue).subscribe((data) => {
          this.countries = (data ?? []).slice(0, 5);
        });
      }
    }
  }
}
