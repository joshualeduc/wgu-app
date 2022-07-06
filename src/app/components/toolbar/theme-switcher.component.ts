import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Option } from './option.model';

@Component({
  selector: 'wgu-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss']
})

export class ThemeSwitcherComponent {
  @Input() options!: Option[] | null;
  @Output() themeChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  changeTheme(themeToSet: string) {
    this.themeChange.emit(themeToSet)
  }

}
