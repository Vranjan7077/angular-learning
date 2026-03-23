import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-understanding-ng-on-init',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './understanding-ng-on-init.component.html',
  styleUrl: './understanding-ng-on-init.component.scss',
})
export class UnderstandingNgOnInitComponent implements OnInit {
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  ngOnInit() {
    this.countryService.getByCodes(['IN', 'US', 'JP']).subscribe((data) => {
      this.countries = data ?? [];
    });
  }
}
