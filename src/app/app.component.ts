import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  classHeader: boolean = false;
  constructor() {
    const self = this;
    window.onscroll = function () {
      self.scrollChange(window.scrollY);
    };
  }

  scrollChange(scrollY) {
    if (scrollY >= 160) {
      this.classHeader = true;
    } else {
      this.classHeader = false;
    }
  }
}
