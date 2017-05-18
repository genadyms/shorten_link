import { Component } from '@angular/core';
import { Link } from './_models/link';
import { LINKS } from './_mocks/mock-links';
import { UserLink } from './_models/user-link';
import { USER_LINKS } from './_mocks/mock-user-links';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shorten links app';
  links: Link[] = LINKS;
  userLinks: UserLink[] = USER_LINKS;
}
