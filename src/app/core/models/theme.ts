export type Theme = {
  mode: ThemeMode;
  modeIcon: string;
  primary: ThemeColor;
};

export enum ThemeMode {
  DARK = 'dark',
  LIGHT = 'light',
  SYSTEM = 'system',
}

export enum ThemeColor {
  INDIGO = 'indigo',
  AMBER = 'amber',
  BLUE = 'blue',
  CYAN = 'cyan',
  GREEN = 'green',
  ORANGE = 'orange',
  PINK = 'pink',
  PURPLE = 'purple',
  RED = 'red',
  TEAL = 'teal',
}

export const ThemeModeIcon: Record<ThemeMode, string> = {
  dark: 'pi pi-moon',
  light: 'pi pi-sun',
  system: 'pi pi-desktop',
};
