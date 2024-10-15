/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { IdiomaDtoResponse } from '../models/IdiomaDtoResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class IdiomaService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Recupera todos los idiomas que hay en la aplicación
     * @returns IdiomaDtoResponse OK
     * @throws ApiError
     */
    public getIdiomas({
        xTimezone = 'Europe/Madrid',
    }: {
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
    }): CancelablePromise<Array<IdiomaDtoResponse>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/comun/v1/idiomas',
            headers: {
                'X-Timezone': xTimezone,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
    /**
     * Recupera un idioma que hay en la aplicación
     * @returns IdiomaDtoResponse OK
     * @throws ApiError
     */
    public getIdiomasPorIdIdioma({
        idIdioma,
        xTimezone = 'Europe/Madrid',
    }: {
        idIdioma: number,
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
    }): CancelablePromise<Array<IdiomaDtoResponse>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/comun/v1/idiomas/{idIdioma}',
            path: {
                'idIdioma': idIdioma,
            },
            headers: {
                'X-Timezone': xTimezone,
            },
            errors: {
                404: `Not Found`,
            },
        });
    }
}
