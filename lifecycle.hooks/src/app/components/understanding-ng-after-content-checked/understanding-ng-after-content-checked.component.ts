import { CommonModule } from '@angular/common';
import { AfterContentChecked, Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-understanding-ng-after-content-checked',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './understanding-ng-after-content-checked.component.html',
  styleUrl: './understanding-ng-after-content-checked.component.scss',
})
export class UnderstandingNgAfterContentCheckedComponent implements AfterContentChecked {
  countries: Country[] = [];
  private hasLoaded = false;

  constructor(private countryService: CountryService) {}

  ngAfterContentChecked(): void {
    if (this.hasLoaded) {
      return;
    }

    this.hasLoaded = true;
    this.countryService.getByCurrency('eur').subscribe((data) => {
      this.countries = (data ?? []).slice(0, 3);
    });
  }
}
