import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  roles: string[] = [
    'Desarrollador Full-Stack',
    'Arquitecto de Soluciones Backend',
    'Especialista en Spring Boot & Angular',
    'Gestor de Software Ágil (SCRUM)'
  ];
  
  currentRoleIndex: number = 0;
  displayedRole: string = '';
  private isDeleting: boolean = false;
  private typingSpeed: number = 75;

  ngOnInit(): void {
    this.typeRole();
  }

  private typeRole(): void {
    const fullText = this.roles[this.currentRoleIndex];

    if (this.isDeleting) {
      this.displayedRole = fullText.substring(0, this.displayedRole.length - 1);
    } else {
      this.displayedRole = fullText.substring(0, this.displayedRole.length + 1);
    }

    let delta = this.typingSpeed;

    if (!this.isDeleting && this.displayedRole === fullText) {
      delta = 2000; // Pausa al terminar de escribir la frase
      this.isDeleting = true;
    } else if (this.isDeleting && this.displayedRole === '') {
      this.isDeleting = false;
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
      delta = 400; // Pausa antes de comenzar la siguiente frase
    }

    setTimeout(() => {
      this.typeRole();
    }, delta);
  }
}
