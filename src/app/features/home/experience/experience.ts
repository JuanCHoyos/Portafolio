import { Component, signal } from '@angular/core';
import { TimelineModule } from 'primeng/timeline';
import { UIICon, UIHeading } from '../../../shared/components';
import { HeadingType } from '../../../shared/components/ui-heading/ui-heading';

interface TimelineType {
  title: string;
  description: string;
  time: string;
  company: string;
  city: string;
}

@Component({
  selector: 'experience',
  imports: [TimelineModule, UIICon, UIHeading],
  templateUrl: './experience.html',
  styles: `:host ::ng-deep .p-timeline-left .p-timeline-event-opposite {
    flex: 0;
    padding: 0;
  }`,
})
export class Experience {
  timeline = signal<TimelineType[]>([]);
  HeadingType = HeadingType;

  constructor() {
    this.timeline.set([
      {
        title: 'Full Stack Developer',
        description: `Optimizé aplicaciones web en Angular y Node.js, mejorando rendimiento, velocidad y UX. Implementé buenas prácticas, documentación y pruebas que redujeron errores en 55% y aceleraron despliegues en 20%. Resolví incidencias críticas y aumenté el performance general en 70%. Creé componentes reutilizables que redujeron tiempos de desarrollo futuros en 30%. Participé activamente en Scrum, mejorando coordinación entre equipos.`,
        company: 'Integra IT',
        city: 'Bogotá, Colombia',
        time: 'Ene. 2022 – Actual',
      },
      {
        title: 'Desarrollador Web',
        description: `Implementé y mantuve 20+ sitios web con HTML, CSS y JavaScript, optimizando UX, accesibilidad y SEO. Reduje tiempos de inactividad en 45% mediante mantenimiento preventivo y mejoras de código. Desarrollé animaciones interactivas para educación y plantillas que permitieron a usuarios no técnicos actualizar contenido sin código, logrando hasta 35% más velocidad de carga.`,
        company: 'Universidad del Norte',
        city: 'Barranquilla, Colombia',
        time: 'Ene. 2021 – Dic. 2021',
      },
      {
        title: 'Frontend Developer',
        description: `Construí sitios y aplicaciones desde cero para clientes internacionales cumpliendo estándares globales y entregas a tiempo. Mantuve y escalé 4+ proyectos personalizados. Apliqué optimizaciones y pruebas de carga que redujeron tiempos de carga hasta en 20%.`,
        company: 'Freelancer',
        city: 'Barranquilla, Colombia',
        time: 'Ene. 2020 – Dic. 2020',
      },
    ]);
  }
}
