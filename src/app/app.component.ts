import { Component, inject, OnInit } from '@angular/core';
import { Home } from './features/home/home';
import { ThemeManager } from './core/services/theme-manager';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-root',
  imports: [Home, ToastModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private readonly darkModeManager = inject(ThemeManager);

  ngOnInit() {
    this.darkModeManager.init();
  }
}
