import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../services/country.service';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-understanding-ng-on-destroy',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './understanding-ng-on-destroy.component.html',
  styleUrl: './understanding-ng-on-destroy.component.scss',
})
export class UnderstandingNgOnDestroyComponent implements OnInit, OnDestroy {
  countries: Country[] = [];
  refreshCount = 0;
  currentEndpoint = '/demonym/indian';
  private pollSubscription?: Subscription;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.pollSubscription = timer(0, 15000)
      .pipe(
        switchMap((tick) => {
          if (tick % 2 === 0) {
            this.currentEndpoint = '/demonym/indian';
            return this.countryService.getByDemonym('indian');
          }

          this.currentEndpoint = '/translation/deutsch';
          return this.countryService.getByTranslation('deutsch');
        }),
      )
      .subscribe((data) => {
        this.countries = (data ?? []).slice(0, 3);
        this.refreshCount += 1;
      });
  }

  ngOnDestroy(): void {
    this.pollSubscription?.unsubscribe();
  }
}
