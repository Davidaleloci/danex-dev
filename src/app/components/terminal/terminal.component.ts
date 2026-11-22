import { Component, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';

export interface TerminalLine {
  text: string;
  type: 'input' | 'output' | 'error' | 'success';
}

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements AfterViewChecked {
  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;
  @ViewChild('cliInput') private cliInput!: ElementRef;

  isOpen: boolean = false;
  currentInput: string = '';
  
  history: TerminalLine[] = [
    { text: 'danex.dev OS [v2.4.0 LTS] - Consola de Ingeniería & Diagnóstico', type: 'success' },
    { text: 'Proyectos insignia cargados: OmniMark IA, PROTECEDU ERP, HILDAX.', type: 'output' },
    { text: 'Escribe "help" o presiona uno de los comandos rápidos inferiores.', type: 'output' },
    { text: '', type: 'output' }
  ];

  quickCommands: string[] = ['help', 'omnimark', 'protecedu', 'hildax', 'skills', 'clear'];

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  toggleTerminal(): void {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      setTimeout(() => {
        if (this.cliInput && this.cliInput.nativeElement) {
          this.cliInput.nativeElement.focus();
        }
      }, 80);
    }
  }

  runQuickCommand(cmd: string): void {
    this.currentInput = cmd;
    this.handleCommand();
  }

  handleCommand(): void {
    const command = this.currentInput.trim().toLowerCase();
    if (!command) return;

    this.history.push({ text: `danex.dev@guest:~$ ${this.currentInput}`, type: 'input' });

    switch (command) {
      case 'help':
        this.history.push(
          { text: 'Comandos del Sistema Disponibles:', type: 'success' },
          { text: '  omnimark  - Arquitectura del agente de marketing con IA generativa.', type: 'output' },
          { text: '  protecedu - Especificaciones del ERP educativo multi-tenant.', type: 'output' },
          { text: '  hildax    - Especificaciones del sistema transaccional de inventario.', type: 'output' },
          { text: '  skills    - Stack tecnológico: Backend, Frontend, Data & Ops.', type: 'output' },
          { text: '  projects  - Resumen de los proyectos destacados.', type: 'output' },
          { text: '  api       - Información sobre la consola de simulación de APIs.', type: 'output' },
          { text: '  contact   - Canales directos de comunicación y correo.', type: 'output' },
          { text: '  clear     - Limpiar pantalla de comandos.', type: 'output' },
          { text: '  exit      - Cerrar consola de comandos.', type: 'output' }
        );
        break;

      case 'omnimark':
        this.history.push(
          { text: 'Proyecto OmniMark — IA de Marketing:', type: 'success' },
          { text: '  - Cliente: PROTECLINE S.A.C.', type: 'output' },
          { text: '  - Core: Pipeline de generación de imágenes publicitarias y copy persuasivo.', type: 'output' },
          { text: '  - Arquitectura: FastAPI + Asynchronous Worker Queues + Angular + Docker.', type: 'output' },
          { text: '  - Seguridad: Autenticación corporativa con cuotas de tokens y auditoría.', type: 'output' }
        );
        break;

      case 'protecedu':
        this.history.push(
          { text: 'Proyecto PROTECEDU — ERP Educativo Multi-Tenant:', type: 'success' },
          { text: '  - Alcance: Inicial (3-5 años), Básica (Primaria/Secundaria) y Superior.', type: 'output' },
          { text: '  - Nivel Inicial: Control de asistencia diferida y por código QR en puerta.', type: 'output' },
          { text: '  - Nivel Básica: Matrículas, calificaciones bimestrales y actas SIAGIE.', type: 'output' },
          { text: '  - Nivel Superior: Mallas curriculares por créditos y tesorería académica.', type: 'output' },
          { text: '  - Control Maestro: Superadministrador con aislamiento de instituciones.', type: 'output' }
        );
        break;

      case 'hildax':
        this.history.push(
          { text: 'Proyecto HILDAX S.A.C. — Inventario & Ventas:', type: 'success' },
          { text: '  - Arquitectura: Cliente-Servidor en 3 Capas Desacopladas.', type: 'output' },
          { text: '  - Core: Spring Boot 3 + Angular + MySQL 8 relacional transaccional.', type: 'output' },
          { text: '  - Seguridad: Filtros JWT con control de acceso por roles (RBAC).', type: 'output' }
        );
        break;

      case 'skills':
        this.history.push(
          { text: 'Capacidades Técnicas Registradas:', type: 'success' },
          { text: '  [Backend]  -> Java, Spring Boot, Kotlin, Python/FastAPI, REST APIs, JWT', type: 'output' },
          { text: '  [Frontend] -> Angular 16+, TypeScript, SCSS Modular, RxJS Observables', type: 'output' },
          { text: '  [Data/Ops] -> MySQL Relacional, Hibernate/JPA, Docker Contenedores, Cloud', type: 'output' },
          { text: '  [AI/Agile] -> IA Generativa (Pipelines), Marco SCRUM, Jira Software', type: 'output' }
        );
        break;

      case 'projects':
        this.history.push(
          { text: 'Proyectos Principales en Producción:', type: 'success' },
          { text: '  1. OmniMark  -> Plataforma de IA generativa de marketing (PROTECLINE S.A.C.).', type: 'output' },
          { text: '  2. PROTECEDU -> ERP de gestión educativa multi-nivel y multi-tenant.', type: 'output' },
          { text: '  3. HILDAX    -> Sistema de gestión de inventarios y ventas 3-Tier.', type: 'output' }
        );
        break;

      case 'api':
        this.history.push(
          { text: 'Consola API Sandbox (danex.dev):', type: 'success' },
          { text: '  - Endpoints disponibles: OmniMark IA, PROTECEDU ERP y HILDAX S.A.C.', type: 'output' },
          { text: '  - Formato: application/json con latencia simulada.', type: 'output' },
          { text: '  - Dirígete a la sección #api-simulator para disparar las peticiones.', type: 'output' }
        );
        break;

      case 'contact':
        this.history.push(
          { text: 'Canales de Contacto Directo:', type: 'success' },
          { text: '  - Correo: contacto@danex.dev', type: 'output' },
          { text: '  - GitHub: https://github.com/danex-dev', type: 'output' },
          { text: '  - LinkedIn: https://linkedin.com/in/danex-dev', type: 'output' }
        );
        break;

      case 'clear':
        this.history = [];
        break;

      case 'exit':
        this.toggleTerminal();
        break;

      default:
        this.history.push({ 
          text: `Comando desconocido: "${command}". Escribe "help" para ver las opciones.`, 
          type: 'error' 
        });
        break;
    }

    this.currentInput = '';
  }

  private scrollToBottom(): void {
    try {
      if (this.scrollContainer && this.scrollContainer.nativeElement) {
        this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
      }
    } catch (err) {}
  }
}
