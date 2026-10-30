import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-top-bar',
  styleUrl: './top-bar.scss',
  templateUrl: './top-bar.html',
})
export class TopBar {
  readonly navOpen = input.required<boolean>();
  readonly toggle = output<void>()
}
