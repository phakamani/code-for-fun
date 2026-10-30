import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-side-nav',
  styleUrl: './side-nav.scss',
  templateUrl: './side-nav.html',
})
export class SideNav {}
