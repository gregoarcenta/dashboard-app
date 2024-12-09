import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '@/shared/components/navbar/navbar.component';
import { GabSideMenuComponent, TitleColor } from 'gab-side-menu';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, NavbarComponent, GabSideMenuComponent],
  templateUrl: './panel-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PanelLayoutComponent {
  protected isAuthenticated = signal(false);
  TitleColor = TitleColor;

  onSignIn() {
    this.isAuthenticated.set(true);
  }

  onSignOut() {
    this.isAuthenticated.set(false);
  }
}
