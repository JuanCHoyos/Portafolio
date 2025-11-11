import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PopoverModule } from 'primeng/popover';

import { filter, Subscription } from 'rxjs';
import { ThemeManager } from '../../../core/services/theme-manager';
import { ThemeMode, ThemeModeIcon } from '../../../core/models/theme';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'navbar',
  imports: [CommonModule, ButtonModule, PopoverModule],
  templateUrl: './navbar.html',
  styles: `
  :host ::ng-deep .p-popover-content {
      padding: 8px 4px;
    }
  `,
})
export class Navbar implements OnInit, OnDestroy {
  private readonly router = inject(Router);
  public readonly themeManager = inject(ThemeManager);
  fragment = signal('');
  routerSubscribe = signal<Subscription | undefined>(undefined);
  menuItems = signal<{ name: string; url: string }[]>([]);
  constructor() {
    this.routerSubscribe.set(
      this.router.events
        .pipe(filter((x) => x instanceof NavigationEnd))
        .subscribe(() => {
          this.fragment.set(
            this.router.parseUrl(this.router.url).fragment ?? ''
          );
        })
    );
  }

  ngOnInit(): void {
    this.menuItems.set([
      {
        name: 'About',
        url: 'about',
      },
      {
        name: 'Tech',
        url: 'tech',
      },
      {
        name: 'Projects',
        url: 'projects',
      },
      {
        name: 'Contact',
        url: 'contact',
      },
    ]);
  }

  ngOnDestroy(): void {
    this.routerSubscribe()?.unsubscribe();
  }
}
