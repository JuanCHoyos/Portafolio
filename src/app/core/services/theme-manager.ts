import { computed, Injectable, signal } from '@angular/core';
import { ThemeColor, ThemeMode, Theme, ThemeModeIcon } from '../models/theme';
import { updatePrimaryPalette } from '@primeuix/themes';
@Injectable({
  providedIn: 'root',
})
export class ThemeManager {
  primaryColors = signal<{ color: ThemeColor; class: string }[]>([
    { color: ThemeColor.AMBER, class: 'bg-amber-500' },
    { color: ThemeColor.INDIGO, class: 'bg-indigo-500' },
    { color: ThemeColor.BLUE, class: 'bg-blue-500' },
    { color: ThemeColor.CYAN, class: 'bg-cyan-500' },
    { color: ThemeColor.GREEN, class: 'bg-green-500' },
    { color: ThemeColor.ORANGE, class: 'bg-orange-500' },
    { color: ThemeColor.PINK, class: 'bg-pink-500' },
    { color: ThemeColor.PURPLE, class: 'bg-purple-500' },
    { color: ThemeColor.RED, class: 'bg-red-500' },
    { color: ThemeColor.TEAL, class: 'bg-teal-500' },
  ]);

  modes = signal<{ label: string; icon: string; value: ThemeMode }[]>([
    {
      label: 'Light',
      icon: ThemeModeIcon[ThemeMode.LIGHT],
      value: ThemeMode.LIGHT,
    },
    {
      label: 'Dark',
      icon: ThemeModeIcon[ThemeMode.DARK],
      value: ThemeMode.DARK,
    },
    {
      label: 'System',
      icon: ThemeModeIcon[ThemeMode.SYSTEM],
      value: ThemeMode.SYSTEM,
    },
  ]);

  themeState = signal<Theme>({
    mode: ThemeMode.LIGHT,
    modeIcon: ThemeModeIcon[ThemeMode.LIGHT],
    primary: ThemeColor.INDIGO,
  });

  init() {
    const localTheme = this.getThemeFromStorage();
    let theme: Theme = localTheme ?? this.themeState();
    this.setMode(theme.mode);
    this.setPrimaryColor(theme.primary);
  }

  setMode(mode: ThemeMode) {
    if (mode === ThemeMode.DARK) return this.applyDark();
    if (mode === ThemeMode.LIGHT) return this.applyLight();
    this.applySystem();
  }

  private applySystem() {
    const isDark = globalThis.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    isDark ? this.applyDark(false) : this.applyLight(false);
    this.updateThemeMode(ThemeMode.SYSTEM);
    this.listenSystem();
  }

  private applyDark(save = true) {
    this.updateDocumentTheme(ThemeMode.DARK);
    if (save) this.updateThemeMode(ThemeMode.DARK);
  }

  private applyLight(save = true) {
    this.updateDocumentTheme(ThemeMode.LIGHT);
    if (save) this.updateThemeMode(ThemeMode.LIGHT);
  }

  private updateThemeMode(mode: ThemeMode) {
    if (this.themeState().mode === mode) return;
    this.setTheme({
      ...this.themeState(),
      mode: mode,
      modeIcon: ThemeModeIcon[mode],
    });
  }

  updateDocumentTheme(mode: ThemeMode) {
    if (document.startViewTransition && this.themeState().mode !== mode) {
      document.startViewTransition(() => {
        if (mode === ThemeMode.DARK) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      });
    }
  }

  private listenSystem() {
    const mq = globalThis.matchMedia('(prefers-color-scheme: dark)');
    mq.addEventListener('change', (e) => {
      const localTheme = this.getThemeFromStorage();
      if (localTheme?.mode === ThemeMode.SYSTEM) {
        e.matches ? this.applyDark(false) : this.applyLight(false);
      }
    });
  }

  setPrimaryColor(color: ThemeColor) {
    updatePrimaryPalette({
      50: `{${color}.50}`,
      100: `{${color}.100}`,
      200: `{${color}.200}`,
      300: `{${color}.300}`,
      400: `{${color}.400}`,
      500: `{${color}.500}`,
      600: `{${color}.600}`,
      700: `{${color}.700}`,
      800: `{${color}.800}`,
      900: `{${color}.900}`,
      950: `{${color}.950}`,
    });
    this.setTheme({ ...this.themeState(), primary: color });
  }

  private setTheme(theme: Theme) {
    this.themeState.set(theme);
    this.setThemeInStorage(theme);
  }

  private getThemeFromStorage(): Theme | undefined {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) return JSON.parse(localTheme);
    return undefined;
  }

  private setThemeInStorage(theme: Partial<Theme>) {
    localStorage.setItem('theme', JSON.stringify(theme));
  }
}
