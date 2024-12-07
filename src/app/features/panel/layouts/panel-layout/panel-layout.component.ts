import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '@/shared/components/side-menu/side-menu.component';
import { NavbarComponent } from '@/shared/components/navbar/navbar.component';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, SideMenuComponent, NavbarComponent],
  templateUrl: './panel-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PanelLayoutComponent {
  protected isAuthenticated = signal(false);

  onSignIn() {
    this.isAuthenticated.set(true);
  }

  onSignOut() {
    this.isAuthenticated.set(false);
  }
}
