import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  debounceTime,
  distinctUntilChanged,
  of,
  Subject,
  Subscription,
  switchMap,
} from 'rxjs';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-understanding-live-country-search-switchmap',
  standalone: true,
  imports: [CommonModule, FormsModule, CardComponent],
  templateUrl: './understanding-live-country-search-switchmap.component.html',
  styleUrl: './understanding-live-country-search-switchmap.component.scss',
})
export class UnderstandingLiveCountrySearchSwitchmapComponent
  implements OnInit, OnDestroy
{
  query = '';
  countries: Country[] = [];
  private search$ = new Subject<string>();
  private searchSubscription?: Subscription;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.searchSubscription = this.search$
      .pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term) => {
          const normalized = term.trim();
          if (normalized.length < 2) {
            return of([]);
          }

          return this.countryService.searchByName(normalized);
        }),
      )
      .subscribe((data) => {
        this.countries = (data ?? []).slice(0, 8);
      });
  }

  onQueryChange(value: string): void {
    this.query = value;
    this.search$.next(value);
  }

  ngOnDestroy(): void {
    this.searchSubscription?.unsubscribe();
  }
}
