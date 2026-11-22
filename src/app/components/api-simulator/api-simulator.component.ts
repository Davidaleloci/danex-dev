import { Component } from '@angular/core';

export interface Endpoint {
  method: 'GET' | 'POST';
  path: string;
  description: string;
  project: string;
  responseBody: any;
  requestBody?: any;
}

@Component({
  selector: 'app-api-simulator',
  templateUrl: './api-simulator.component.html',
  styleUrls: ['./api-simulator.component.scss']
})
export class ApiSimulatorComponent {
  endpoints: Endpoint[] = [
    {
      method: 'POST',
      path: '/api/v1/ai/generate-campaign',
      project: 'OmniMark IA',
      description: 'Orquesta el pipeline de inferencia para generar imágenes publicitarias y textos promocionales comerciales en alta resolución.',
      requestBody: {
        clienteId: 'PROT-892',
        producto: 'Zapatillas Urban Running',
        objetivo: 'CONVERSION_ECOMMERCE',
        estiloVisual: 'FOTOREALISTA_NEON_TECH',
        formatos: ['POST_1080x1080', 'STORY_1080x1920']
      },
      responseBody: {
        status: 'SUCCESS',
        codigoHttp: 201,
        jobId: 'JOB-AI-2026-981',
        tiempoInferenciaMs: 780,
        assetsGenerados: [
          {
            tipo: 'IMAGE_RENDER',
            dimension: '1080x1080',
            url: 'https://cdn.danex.dev/omnimark/render-01.webp',
            scoreCalidad: 0.985
          }
        ],
        copyGenerado: 'Desafía la ciudad en cada zancada. Máximo amortiguamiento y estilo urbano sin límites.',
        tokensConsumidos: 48,
        estadoPipeline: 'COMPLETADO'
      }
    },
    {
      method: 'GET',
      path: '/api/v1/educacion/matriculas/resumen',
      project: 'PROTECEDU ERP',
      description: 'Recupera el consolidado de matrículas, validación de actas SIAGIE y estado de asistencia QR por niveles formativos.',
      responseBody: {
        institucion: 'I.E. Leaside School - Sede Central',
        periodoLectivo: '2026',
        conexionSegura: 'SSL_ACTIVE',
        niveles: [
          { nivel: 'Educación Inicial (3 a 5 años)', matriculados: 142, controlQR: 'ACTIVO' },
          { nivel: 'Primaria y Secundaria (EBR)', matriculados: 618, actasSIAGIE: 'SINCRONIZADAS' },
          { nivel: 'Educación Superior (Institutos/Univ)', matriculados: 395, mallaCreditos: 'VIGENTE' }
        ],
        tenant: {
          tenantId: 'TENANT-EDU-LBS01',
          modo: 'SUPERADMINISTRADOR_MULTI_INSTITUCION',
          auditoriaGlobal: 'COMPLIANT'
        }
      }
    },
    {
      method: 'GET',
      path: '/api/v1/inventario/stock-alerta',
      project: 'HILDAX S.A.C.',
      description: 'Consulta los artículos textiles cuyo stock disponible se encuentra por debajo del umbral mínimo de seguridad en el catálogo.',
      responseBody: [
        {
          id: 104,
          sku: 'TEL-PIM-001',
          producto: 'Algodón Pima Premium - Negro',
          stockActual: 12,
          stockMinimo: 50,
          unidadMedida: 'METROS',
          estado: 'CRITICO_REPOSICION'
        },
        {
          id: 211,
          sku: 'TEL-DEN-042',
          producto: 'Denim Confort Stretch - Azul',
          stockActual: 8,
          stockMinimo: 30,
          unidadMedida: 'ROLLOS',
          estado: 'CRITICO_REPOSICION'
        }
      ]
    }
  ];

  selectedEndpoint: Endpoint = this.endpoints[0];
  isLoading: boolean = false;
  showResponse: boolean = false;
  httpStatus: number = 200;
  latencyMs: number = 42;
  copySuccess: boolean = false;

  changeEndpoint(event: Event): void {
    const index = (event.target as HTMLSelectElement).value;
    this.selectedEndpoint = this.endpoints[Number(index)];
    this.showResponse = false;
    this.copySuccess = false;
  }

  sendRequest(): void {
    this.isLoading = true;
    this.showResponse = false;
    this.copySuccess = false;

    // Simulación de latencia realista de red entre 500ms y 750ms
    const simulatedLatency = Math.floor(Math.random() * 200) + 520;
    
    setTimeout(() => {
      this.isLoading = false;
      this.showResponse = true;
      this.httpStatus = this.selectedEndpoint.method === 'POST' ? 201 : 200;
      this.latencyMs = Math.floor(Math.random() * 25) + 38;
    }, simulatedLatency);
  }

  copyResponse(): void {
    if (!this.showResponse) return;
    const jsonStr = JSON.stringify(this.selectedEndpoint.responseBody, null, 2);
    navigator.clipboard.writeText(jsonStr).then(() => {
      this.copySuccess = true;
      setTimeout(() => {
        this.copySuccess = false;
      }, 2500);
    });
  }
}
