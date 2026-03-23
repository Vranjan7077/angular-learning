import { CommonModule } from '@angular/common';
import { AfterContentInit, Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-understanding-ng-after-content-init',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './understanding-ng-after-content-init.component.html',
  styleUrl: './understanding-ng-after-content-init.component.scss',
})
export class UnderstandingNgAfterContentInitComponent implements AfterContentInit {
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  ngAfterContentInit(): void {
    this.countryService.getIndependentCountries(true).subscribe((data) => {
      this.countries = (data ?? []).slice(0, 3);
    });
  }
}
