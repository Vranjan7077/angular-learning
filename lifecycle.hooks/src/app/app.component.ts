import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ComponentsModule } from './components/components.module';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ComponentsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'repro.understanding.angular.lifecycle.hooks';
  regions = ['Asia', 'Europe', 'Africa', 'Americas', 'Oceania'];
  searchTerms = ['India', 'United States', 'Japan', 'Australia'];
  alphaCodes = ['IN', 'US', 'JP', 'DE'];
  selectedRegion = this.regions[0];
  selectedSearchTerm = this.searchTerms[0];
  selectedAlphaCode = this.alphaCodes[0];
  showOnDestroyDemo = true;

  nextRegion(): void {
    const currentIndex = this.regions.indexOf(this.selectedRegion);
    const nextIndex = (currentIndex + 1) % this.regions.length;
    this.selectedRegion = this.regions[nextIndex];
  }

  nextSearchTerm(): void {
    const currentIndex = this.searchTerms.indexOf(this.selectedSearchTerm);
    const nextIndex = (currentIndex + 1) % this.searchTerms.length;
    this.selectedSearchTerm = this.searchTerms[nextIndex];
  }

  nextAlphaCode(): void {
    const currentIndex = this.alphaCodes.indexOf(this.selectedAlphaCode);
    const nextIndex = (currentIndex + 1) % this.alphaCodes.length;
    this.selectedAlphaCode = this.alphaCodes[nextIndex];
  }

  toggleOnDestroyDemo(): void {
    this.showOnDestroyDemo = !this.showOnDestroyDemo;
  }
}
