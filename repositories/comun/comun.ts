/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { AxiosHttpRequest } from './core/AxiosHttpRequest';
import { AutNomoService } from './services/AutNomoService';
import { CategorARecursoMaterialService } from './services/CategorARecursoMaterialService';
import { ConfiguraciNService } from './services/ConfiguraciNService';
import { CriterioEstNdarService } from './services/CriterioEstNdarService';
import { EmpresaService } from './services/EmpresaService';
import { IdiomaService } from './services/IdiomaService';
import { PersonaService } from './services/PersonaService';
import { TipoDocumentoInformatizadoService } from './services/TipoDocumentoInformatizadoService';
import { TipoDocumentoUniversalService } from './services/TipoDocumentoUniversalService';
type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;
export class Comun {
    public readonly autNomo: AutNomoService;
    public readonly categorARecursoMaterial: CategorARecursoMaterialService;
    public readonly configuraciN: ConfiguraciNService;
    public readonly criterioEstNdar: CriterioEstNdarService;
    public readonly empresa: EmpresaService;
    public readonly idioma: IdiomaService;
    public readonly persona: PersonaService;
    public readonly tipoDocumentoInformatizado: TipoDocumentoInformatizadoService;
    public readonly tipoDocumentoUniversal: TipoDocumentoUniversalService;
    public readonly request: BaseHttpRequest;
    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = AxiosHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? '',
            VERSION: config?.VERSION ?? '1.0-SNAPSHOT',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });
        this.autNomo = new AutNomoService(this.request);
        this.categorARecursoMaterial = new CategorARecursoMaterialService(this.request);
        this.configuraciN = new ConfiguraciNService(this.request);
        this.criterioEstNdar = new CriterioEstNdarService(this.request);
        this.empresa = new EmpresaService(this.request);
        this.idioma = new IdiomaService(this.request);
        this.persona = new PersonaService(this.request);
        this.tipoDocumentoInformatizado = new TipoDocumentoInformatizadoService(this.request);
        this.tipoDocumentoUniversal = new TipoDocumentoUniversalService(this.request);
    }
}

