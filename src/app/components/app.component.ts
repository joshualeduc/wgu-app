import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'wgu-root',
  template: `
    <wgu-sidenav>
      <div fxLayout="row" fxLayoutAlign="center" class="main-container">
          <router-outlet></router-outlet>
      </div>
    </wgu-sidenav>
  `,
  styles: [`
    .main-container {
      margin-top: 25px;
      height: calc(100% - 65px);
    }
  `]
})
export class AppComponent {
  title = 'wgu-app';
  @ViewChild(MatSidenav) sidenav!: MatSidenav;
}
