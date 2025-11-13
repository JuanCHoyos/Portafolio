import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Projects } from './projects/projects';
import { Techs } from './tech/techs';
import { Navbar } from './navbar/navbar';
import { Experience } from './experience/experience';
import { UIParticles } from '../../shared/components';
import { UIBackground } from '../../shared/components/ui-background/ui-background';

@Component({
  selector: 'home',
  imports: [
    CommonModule,
    About,
    Experience,
    Hero,
    Navbar,
    Projects,
    Techs,
    UIBackground,
    UIParticles,
  ],
  templateUrl: './home.html',
  styles: ``,
})
export class Home {}
