import { Component, OnInit, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { UIICon, UISeparator, UIHeading } from '../../../shared/components';
import { HeadingType } from '../../../shared/components/ui-heading/ui-heading';

export type Project = {
  title: string;
  description: string;
  github: string;
  url: string;
  image: string;
  stack: string[];
};

@Component({
  selector: 'projects',
  imports: [CardModule, ButtonModule, UIICon, UISeparator, UIHeading],
  templateUrl: './projects.html',
  styles: `
  :host ::ng-deep .p-card-body {
    padding: 0
  }`,
})
export class Projects implements OnInit {
  HeadingType = HeadingType;
  projects = signal<Project[]>([]);

  ngOnInit(): void {
    this.projects.set([
      {
        title: 'FormCraftify',
        description:
          'Herramienta que permite crear formularios y encuestas mediante un editor visual, con campos configurables y generación dinámica basada en JSON. Desarrollado con Angular, TypeScript y Tailwind.',
        github: 'https://github.com/JuanCHoyos/FormCraftify',
        url: 'https://form-craftify-91uz.vercel.app/',
        image: 'assets/formCraftify.png',
        stack: ['Angular', 'Typescript', 'Tailwind'],
      },
    ]);
  }
}
