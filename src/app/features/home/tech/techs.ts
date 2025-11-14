import { Component, signal } from '@angular/core';

import { IconType, UIICon } from '../../../shared/components';
import {
  HeadingType,
  UIHeading,
} from '../../../shared/components/ui-heading/ui-heading';

@Component({
  selector: 'techs',
  imports: [UIICon, UIHeading],
  templateUrl: './techs.html',
})
export class Techs {
  techStacks = signal<{ label: string; color: string; icon: IconType }[]>([
    { color: 'text-orange-700', icon: 'simpleHtml5', label: 'HTML' },
    { color: 'text-blue-700', icon: 'simpleCss', label: 'CSS' },
    {
      color: 'text-yellow-700',
      icon: 'simpleJavascript',
      label: 'JavaScript',
    },
    {
      color: 'text-blue-700',
      icon: 'simpleTypescript',
      label: 'TypeScript',
    },
    { color: 'text-[#bd23f2]', icon: 'simpleAngular', label: 'Angular' },
    { color: 'text-cyan-700', icon: 'simpleReact', label: 'React' },
    { color: 'text-blue-700', icon: 'simpleIonic', label: 'Ionic' },
    {
      color: 'text-[#523b77]',
      icon: 'simpleBootstrap',
      label: 'Bootstrap',
    },
    {
      color: 'text-[#38bdf8]',
      icon: 'simpleTailwindcss',
      label: 'TailwindCSS',
    },
    { color: 'text-[#c3002f]', icon: 'simplePrimeng', label: 'PrimeNG' },

    { color: 'text-green-700', icon: 'simpleNodedotjs', label: 'Node.js' },
    { color: '', icon: 'simpleExpress', label: 'Express' },
    { color: 'text-green-700', icon: 'simpleMongodb', label: 'MongoDB' },
    {
      color: 'text-blue-700',
      icon: 'simplePostgresql',
      label: 'PostgreSQL',
    },
    { color: 'text-[#005e86]', icon: 'simpleMysql', label: 'MySQL' },
    { color: 'text-[#0092e7]', icon: 'simpleDocker', label: 'Docker' },
    { color: 'text-[#f05033]', icon: 'simpleGit', label: 'Git' },
    { color: '', icon: 'simpleGithub', label: 'GitHub' },
    { color: 'text-blue-700', icon: 'simpleBitbucket', label: 'Bitbucket' },
    { color: 'text-blue-700', icon: 'simpleJira', label: 'Jira' },
    { color: 'text-[#fe6c35]', icon: 'simplePostman', label: 'Postman' },
    { color: 'text-gray-700', icon: 'simpleJson', label: 'JSON' },
    { color: 'text-[#99425b]', icon: 'simpleJest', label: 'Jest' },
    { color: 'text-[#2e65b1]', icon: 'simpleZod', label: 'Zod' },
    { color: 'text-pink-700', icon: 'simpleGraphql', label: 'GraphQL' },
  ]);

  HeadingType = HeadingType;
}
