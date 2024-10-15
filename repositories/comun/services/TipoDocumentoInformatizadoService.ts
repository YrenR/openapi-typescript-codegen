/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TipoDocumentoInformatizadoDtoResponse } from '../models/TipoDocumentoInformatizadoDtoResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TipoDocumentoInformatizadoService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Devuelve todos los tipo documento informatizados del sistema
     * @returns TipoDocumentoInformatizadoDtoResponse OK
     * @throws ApiError
     */
    public getTiposDocumentosInformatizados({
        xTimezone = 'Europe/Madrid',
    }: {
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
    }): CancelablePromise<Array<TipoDocumentoInformatizadoDtoResponse>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/comun/v1/tipos-documentos-informatizados',
            headers: {
                'X-Timezone': xTimezone,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Devuelve tipo documento informatizado segun el id.
     * @returns any OK
     * @throws ApiError
     */
    public getTipoDocumentoInformatizadoPorIdTipoDocumentoInformatizado({
        idTipoDocumentoInformatizado,
        xTimezone = 'Europe/Madrid',
    }: {
        idTipoDocumentoInformatizado: number,
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
    }): CancelablePromise<{
        idDocInformatizado?: number;
        nombre?: string;
        codigo?: string;
        observaciones?: string;
    }> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/comun/v1/tipos-documentos-informatizados/{idTipoDocumentoInformatizado}',
            path: {
                'idTipoDocumentoInformatizado': idTipoDocumentoInformatizado,
            },
            headers: {
                'X-Timezone': xTimezone,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
