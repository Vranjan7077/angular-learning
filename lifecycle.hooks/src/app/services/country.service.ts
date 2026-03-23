import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);
  private readonly BASE = 'https://restcountries.com/v3.1';
  private readonly DEFAULT_FIELDS = 'name,flags,region,population,capital,cca2';

  private normalizeToArray(
    response: Country[] | Country | null | undefined,
  ): Country[] {
    if (Array.isArray(response)) {
      return response;
    }

    if (response && typeof response === 'object') {
      return [response];
    }

    return [];
  }

  private getWithFallback(url: string): Observable<Country[]> {
    return this.http
      .get<Country[] | Country>(url)
      .pipe(map((response) => this.normalizeToArray(response)))
      .pipe(catchError(() => of([])));
  }

  private withFields(path: string, fields = this.DEFAULT_FIELDS): string {
    const delimiter = path.includes('?') ? '&' : '?';
    return `${this.BASE}/${path}${delimiter}fields=${fields}`;
  }

  getAll(fields = this.DEFAULT_FIELDS): Observable<Country[]> {
    return this.getWithFallback(this.withFields('all', fields));
  }

  searchByName(
    name: string,
    fullText = false,
    fields = this.DEFAULT_FIELDS,
  ): Observable<Country[]> {
    const queryName = encodeURIComponent(name.trim());
    const path = fullText
      ? `name/${queryName}?fullText=true`
      : `name/${queryName}`;

    return this.getWithFallback(this.withFields(path, fields));
  }

  getByAlphaCode(
    code: string,
    fields = this.DEFAULT_FIELDS,
  ): Observable<Country[]> {
    return this.getWithFallback(
      this.withFields(`alpha/${encodeURIComponent(code.trim())}`, fields),
    );
  }

  getByCodes(
    codes: string[],
    fields = this.DEFAULT_FIELDS,
  ): Observable<Country[]> {
    const joinedCodes = codes
      .map((code) => code.trim())
      .filter(Boolean)
      .join(',');
    return this.getWithFallback(
      this.withFields(`alpha?codes=${encodeURIComponent(joinedCodes)}`, fields),
    );
  }

  getByCurrency(
    currency: string,
    fields = this.DEFAULT_FIELDS,
  ): Observable<Country[]> {
    return this.getWithFallback(
      this.withFields(
        `currency/${encodeURIComponent(currency.trim())}`,
        fields,
      ),
    );
  }

  getByLanguage(
    language: string,
    fields = this.DEFAULT_FIELDS,
  ): Observable<Country[]> {
    return this.getWithFallback(
      this.withFields(`lang/${encodeURIComponent(language.trim())}`, fields),
    );
  }

  getByCapital(
    capital: string,
    fields = this.DEFAULT_FIELDS,
  ): Observable<Country[]> {
    return this.getWithFallback(
      this.withFields(`capital/${encodeURIComponent(capital.trim())}`, fields),
    );
  }

  getByRegion(
    region: string,
    fields = this.DEFAULT_FIELDS,
  ): Observable<Country[]> {
    return this.getWithFallback(
      this.withFields(`region/${encodeURIComponent(region.trim())}`, fields),
    );
  }

  getBySubregion(
    subregion: string,
    fields = this.DEFAULT_FIELDS,
  ): Observable<Country[]> {
    return this.getWithFallback(
      this.withFields(
        `subregion/${encodeURIComponent(subregion.trim())}`,
        fields,
      ),
    );
  }

  getByDemonym(
    demonym: string,
    fields = this.DEFAULT_FIELDS,
  ): Observable<Country[]> {
    return this.getWithFallback(
      this.withFields(`demonym/${encodeURIComponent(demonym.trim())}`, fields),
    );
  }

  getByTranslation(
    translation: string,
    fields = this.DEFAULT_FIELDS,
  ): Observable<Country[]> {
    return this.getWithFallback(
      this.withFields(
        `translation/${encodeURIComponent(translation.trim())}`,
        fields,
      ),
    );
  }

  getIndependentCountries(
    status = true,
    fields = this.DEFAULT_FIELDS,
  ): Observable<Country[]> {
    return this.getWithFallback(
      this.withFields(`independent?status=${status}`, fields),
    );
  }

  getByServicePath(
    path: string,
    fields = this.DEFAULT_FIELDS,
  ): Observable<Country[]> {
    return this.getWithFallback(
      this.withFields(path.replace(/^\//, ''), fields),
    );
  }
}
