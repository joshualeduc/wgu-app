import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ThemeSwitcherService } from './theme-switcher.service';

import { Option } from './option.model';

@Component({
  selector: 'wgu-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();
  options$: Observable<Option[]> = this.themeSwitcher.getThemeOptions();

  constructor(private themeSwitcher: ThemeSwitcherService) {}

  ngOnInit(): void {
    this.themeSwitcher.setTheme('deeppurple-amber');
  }

  handleThemeChange(themeToSet: string) {
    this.themeSwitcher.setTheme(themeToSet);
  }
}
