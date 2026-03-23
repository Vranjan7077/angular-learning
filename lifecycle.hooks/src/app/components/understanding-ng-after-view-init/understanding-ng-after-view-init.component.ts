import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-understanding-ng-after-view-init',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './understanding-ng-after-view-init.component.html',
  styleUrl: './understanding-ng-after-view-init.component.scss',
})
export class UnderstandingNgAfterViewInitComponent implements AfterViewInit {
  @ViewChild('status', { static: false }) status?: ElementRef<HTMLParagraphElement>;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  ngAfterViewInit(): void {
    if (this.status) {
      this.status.nativeElement.textContent = 'View initialized. Loading `/lang/english`';
    }

    this.countryService.getByLanguage('english').subscribe((data) => {
      this.countries = (data ?? []).slice(0, 3);
    });
  }
}
