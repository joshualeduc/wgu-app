import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Option } from './option.model';

// Some functions taken from https://github.com/angular/material.angular.io/blob/master/src/app/shared/style-manager/style-manager.ts

function getLinkElementForKey(key: string) {
  return getExistingLinkElementByKey(key) || createLinkElementWithKey(key);
}

function getExistingLinkElementByKey(key: string) {
  return document.head.querySelector(
    `link[rel="stylesheet"].${getClassNameForKey(key)}`
  );
}

function createLinkElementWithKey(key: string) {
  const linkEl = document.createElement('link');
  linkEl.setAttribute('rel', 'stylesheet');
  linkEl.classList.add(getClassNameForKey(key));
  document.head.appendChild(linkEl);
  return linkEl;
}

function getClassNameForKey(key: string) {
  return `app-${key}`;
}

// Set the stylesheet with the specified key.
function setStyle(key: string, href: string) {
  getLinkElementForKey(key).setAttribute('href', href);
}

// Remove the stylesheet with the specified key.
function removeStyle(key: string) {
  const existingLinkElement = getExistingLinkElementByKey(key);
  if (existingLinkElement) {
    document.head.removeChild(existingLinkElement);
  }
}

@Injectable({
  providedIn: 'root',
})
export class ThemeSwitcherService {
  constructor(private http: HttpClient) {}

  getThemeOptions(): Observable<Option[]> {
    return this.http.get<Option[]>('assets/themeOptions.json');
  }

  setTheme(themeToSet: string) {
    setStyle('theme', `assets/themes/${themeToSet}.css`);
  }
}
