import { Component, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-top-of-page',
  templateUrl: './top-of-page.component.html',
  styleUrls: ['./top-of-page.component.scss']
})
export class TopOfPageComponent {
  public isShown: boolean = false;

  @HostListener('window:scroll') onWindowScroll() {
    const yCoordinate = this.ViewportScroller.getScrollPosition()[1];
    this.isShown = yCoordinate > 400;
  }

  constructor(private ViewportScroller: ViewportScroller) { }

  public goToTop(): void {
    this.ViewportScroller.scrollToPosition([0, 0]);
  }

}
