import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNav } from './layout/side-nav/side-nav';
import { TopBar } from './layout/top-bar/top-bar';

@Component({
  imports: [RouterOutlet, SideNav, TopBar],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('code-fun');
  protected readonly navOpen = signal(false);

  protected toggleNav(): void {
    this.navOpen.update(open => !open)
  }
}
