import {
  AfterViewInit,
  Component,
  computed,
  ElementRef,
  inject,
  OnInit,
  signal,
  viewChildren,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PopoverModule } from 'primeng/popover';

import { filter, take } from 'rxjs';
import { ThemeManager } from '../../../core/services/theme-manager';
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
export class Navbar implements OnInit, AfterViewInit {
  public readonly themeManager = inject(ThemeManager);
  private readonly router = inject(Router);
  sections = signal<{ name: string; url: string }[]>([]);
  currentSection = signal<string | undefined>(undefined);
  sectionsTemplate = viewChildren<ElementRef<HTMLLIElement>>('navUrl');
  currentSectionTemplate = computed(() =>
    this.calculateActiveSectionPosition()
  );
  lockObserver = signal<boolean>(false);
  debounce: number | undefined = undefined;

  constructor() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        take(1)
      )
      .subscribe(() => {
        const currentSection = this.router.url.split('/#')[1];
        this.currentSection.set(currentSection ?? undefined);
        this.lockObserver();
      });
  }

  ngOnInit(): void {
    this.sections.set([
      {
        name: 'Sobre mi',
        url: 'about',
      },
      {
        name: 'Experiencia',
        url: 'experience',
      },
      {
        name: 'Tecnología',
        url: 'tech',
      },
      {
        name: 'Proyectos',
        url: 'projects',
      },
    ]);
  }

  ngAfterViewInit() {
    this.startSectionObserver();
  }

  private startSectionObserver() {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((e) => e.isIntersecting);

        if (visible && !this.lockObserver()) {
          this.currentSection.set(visible.target.id);
        }
      },
      { threshold: 0.75 }
    );

    for (const { url } of this.sections()) {
      const el = document.getElementById(url);
      if (el) observer.observe(el);
    }

    return observer;
  }

  calculateActiveSectionPosition() {
    const items = this.sectionsTemplate();
    const index = this.sections().findIndex(
      (s) => s.url === this.currentSection()
    );

    if (index < 0 || !items.length) return null;

    const width = items[index].nativeElement.offsetWidth;
    const x = items
      .slice(0, index)
      .reduce((acc, el) => acc + el.nativeElement.offsetWidth, 0);

    return { width, x };
  }

  setCurrentSection(url: string) {
    this.lockerObserver();
    this.currentSection.set(url);
  }

  lockerObserver() {
    this.lockObserver.set(true);
    clearTimeout(this.debounce);
    this.debounce = setTimeout(() => {
      this.lockObserver.set(false);
    }, 100);
  }
}
