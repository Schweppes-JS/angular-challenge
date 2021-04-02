import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {
  @Input() public counter = 0;
  @Input() public min = 0;
  @Input() max = Number.MAX_SAFE_INTEGER;

  public minusOne(): void {
    if (this.min < this.counter) {
      this.counter--;
    }
  }

  public plusOne(): void {
    if (this.max > this.counter) {
      this.counter++;
    }
  }
}
