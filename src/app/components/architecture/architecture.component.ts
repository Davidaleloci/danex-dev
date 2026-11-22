import { Component } from '@angular/core';

export interface LayerDetails {
  id: string;
  name: string;
  tech: string;
  iconType: 'frontend' | 'backend' | 'database';
  protocol: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-architecture',
  templateUrl: './architecture.component.html',
  styleUrls: ['./architecture.component.scss']
})
export class ArchitectureComponent {
  layers: LayerDetails[] = [
    {
      id: 'frontend',
      name: 'Capa de Presentación',
      tech: 'Angular 16 & TypeScript & SCSS',
      iconType: 'frontend',
      protocol: 'HTTPS / JSON RESTful Payloads',
      description: 'Single Page Application (SPA) orientada a la experiencia de usuario. Implementa desacoplamiento estricto de la vista, reactividad de eventos con RxJS y diseño adaptativo multidispositivo.',
      features: [
        'Arquitectura de componentes modulares con Lazy Loading e inyección de dependencias.',
        'Flujos de datos asíncronos y observables gestionados mediante RxJS.',
        'Diseño responsivo móvil-first implementado con CSS Grid y variables SCSS.'
      ]
    },
    {
      id: 'backend',
      name: 'Capa de Negocio & Servicios',
      tech: 'Spring Boot 3 / Kotlin & Java',
      iconType: 'backend',
      protocol: 'TCP / HikariCP JDBC Connection Pool',
      description: 'Núcleo transaccional del sistema. Expone contratos RESTful robustos, ejecuta las reglas de negocio, valida los estados de inventario e implementa control de acceso basado en roles (RBAC).',
      features: [
        'Arquitectura en capas (Controller, Service, Repository) bajo principios SOLID.',
        'Seguridad centralizada con Spring Security, filtros de interceptación y tokens JWT.',
        'Manejo global de excepciones (@ControllerAdvice) y documentación OpenAPI / Swagger.'
      ]
    },
    {
      id: 'database',
      name: 'Capa de Persistencia & Almacenamiento',
      tech: 'MySQL 8.0 & Docker Container',
      iconType: 'database',
      protocol: 'Almacenamiento Persistente ACID',
      description: 'Gestor relacional configurado para garantizar consistencia ACID en operaciones comerciales críticas, minimizando latencia de consulta mediante indexación y procedimientos almacenados.',
      features: [
        'Modelado relacional normalizado con restricciones de integridad referencial.',
        'Mapeo Objeto-Relacional (ORM) de alto rendimiento utilizando JPA y Hibernate.',
        'Empaquetado y aislamiento en contenedores Docker para consistencia de entornos.'
      ]
    }
  ];

  selectedLayer: LayerDetails = this.layers[1];

  selectLayer(layer: LayerDetails): void {
    this.selectedLayer = layer;
  }
}
