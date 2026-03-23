import { CommonModule } from '@angular/common';
import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';

@Component({
  selector: 'app-understanding-lifecycle-logger-panel',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './understanding-lifecycle-logger-panel.component.html',
  styleUrl: './understanding-lifecycle-logger-panel.component.scss',
})
export class UnderstandingLifecycleLoggerPanelComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() region = '';
  @Input() alphaCode = '';
  logs: string[] = [];
  private hasLoggedDoCheck = false;
  private hasLoggedAfterContentChecked = false;
  private hasLoggedAfterViewChecked = false;
  private pendingLogs: string[] = [];
  private flushScheduled = false;

  ngOnChanges(changes: SimpleChanges): void {
    const keys = Object.keys(changes).join(', ');
    this.log(`ngOnChanges (${keys || 'none'})`);
  }

  ngOnInit(): void {
    this.log('ngOnInit');
  }

  ngDoCheck(): void {
    if (!this.hasLoggedDoCheck) {
      this.hasLoggedDoCheck = true;
      this.log('ngDoCheck (first cycle)');
    }
  }

  ngAfterContentInit(): void {
    this.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    if (!this.hasLoggedAfterContentChecked) {
      this.hasLoggedAfterContentChecked = true;
      this.log('ngAfterContentChecked (first cycle)');
    }
  }

  ngAfterViewInit(): void {
    this.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    if (!this.hasLoggedAfterViewChecked) {
      this.hasLoggedAfterViewChecked = true;
      this.log('ngAfterViewChecked (first cycle)');
    }
  }

  ngOnDestroy(): void {
    this.log('ngOnDestroy');
  }

  clearLogs(): void {
    this.logs = [];
    this.pendingLogs = [];
    this.flushScheduled = false;
    this.hasLoggedDoCheck = false;
    this.hasLoggedAfterContentChecked = false;
    this.hasLoggedAfterViewChecked = false;
  }

  private log(hook: string): void {
    const timestamp = new Date().toLocaleTimeString();
    this.pendingLogs.unshift(`${timestamp} - ${hook}`);
    this.scheduleFlush();
  }

  private scheduleFlush(): void {
    if (this.flushScheduled) {
      return;
    }

    this.flushScheduled = true;
    setTimeout(() => {
      this.logs = [...this.pendingLogs, ...this.logs].slice(0, 12);
      this.pendingLogs = [];
      this.flushScheduled = false;
    });
  }
}
