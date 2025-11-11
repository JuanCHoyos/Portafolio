import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Projects } from './projects/projects';
import { Techs } from './tech/techs';
import { Navbar } from './navbar/navbar';

@Component({
  selector: 'home',
  imports: [CommonModule, About, Contact, Hero, Navbar, Projects, Techs],
  templateUrl: './home.html',
})
export class Home {}
