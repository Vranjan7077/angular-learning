import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { CardComponent } from '../../shared/card/card.component';
import { CustomDropdownComponent } from '../../shared/custom-dropdown/custom-dropdown.component';

@Component({
  selector: 'app-understanding-signals-rest-integration',
  standalone: true,
  imports: [CommonModule, CardComponent, CustomDropdownComponent],
  templateUrl: './understanding-signals-rest-integration.component.html',
  styleUrl: './understanding-signals-rest-integration.component.scss',
})
export class UnderstandingSignalsRestIntegrationComponent {
  readonly regions = ['Asia', 'Europe', 'Africa', 'Americas', 'Oceania'];
  readonly selectedRegion = signal('Asia');

  private readonly region$ = toObservable(this.selectedRegion);
  readonly countries = toSignal(
    this.region$.pipe(
      switchMap((region) => this.countryService.getByRegion(region)),
    ),
    { initialValue: [] },
  );

  constructor(private countryService: CountryService) {}

  onRegionChange(region: string): void {
    this.selectedRegion.set(region);
  }
}
