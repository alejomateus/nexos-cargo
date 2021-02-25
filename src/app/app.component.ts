import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  classHeader: boolean = false;
  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      { name: 'description', content: 'Ubox' },
      { name: 'author', content: 'matheus' },
      { name: 'keywords', content: 'ubox, minibodega, bodega, cellar, importaciones, exportaciones' }
    ]);
    this.setTitle('Ubox');
    const self = this;
    window.onscroll = function () {
      self.scrollChange(window.scrollY);
    };
  }
  public setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }
  scrollChange(scrollY) {
    if (scrollY >= 160) {
      this.classHeader = true;
    } else {
      this.classHeader = false;
    }
  }
}
