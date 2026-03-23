import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-understanding-ng-after-view-checked',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './understanding-ng-after-view-checked.component.html',
  styleUrl: './understanding-ng-after-view-checked.component.scss',
})
export class UnderstandingNgAfterViewCheckedComponent implements AfterViewChecked {
  countries: Country[] = [];
  private hasLoaded = false;

  constructor(private countryService: CountryService) {}

  ngAfterViewChecked(): void {
    if (this.hasLoaded) {
      return;
    }

    this.hasLoaded = true;
    queueMicrotask(() => {
      this.countryService.getByServicePath('subregion/southern europe').subscribe((data) => {
        this.countries = (data ?? []).slice(0, 3);
      });
    });
  }
}
