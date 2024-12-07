import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: `
    .routerLinkActive {
      @apply rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 active:opacity-[0.85] w-full flex items-center gap-4 capitalize;
    }

    .routerLinkActive button:active,
    .routerLinkActive button:hover {
      background: transparent;
    }
  `,
})
export class SideMenuComponent {
  public readonly isAuthenticated = input(false);

  protected readonly onSignOut = output();
  protected readonly onSignIn = output();
}
