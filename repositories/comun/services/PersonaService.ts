/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PersonaDTO_GET } from '../models/PersonaDTO_GET';
import type { PersonaDTO_POST_PUT } from '../models/PersonaDTO_POST_PUT';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PersonaService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Recupera todas las personas o la persona por el dni de su pasaporte y país
     * @returns PersonaDTO_GET OK
     * @throws ApiError
     */
    public getPersonas({
        dniPasaporte,
        idPaisDni,
        listaIdsPersonas,
        xTimezone = 'Europe/Madrid',
    }: {
        dniPasaporte?: string,
        idPaisDni?: number,
        listaIdsPersonas?: Array<number>,
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
    }): CancelablePromise<Array<PersonaDTO_GET>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/comun/v1/personas',
            headers: {
                'X-Timezone': xTimezone,
            },
            query: {
                'dniPasaporte': dniPasaporte,
                'idPaisDni': idPaisDni,
                'listaIdsPersonas': listaIdsPersonas,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Crea una nueva persona
     * @returns PersonaDTO_GET Created
     * @throws ApiError
     */
    public postPersona({
        xTimezone = 'Europe/Madrid',
        requestBody,
    }: {
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
        requestBody?: PersonaDTO_POST_PUT,
    }): CancelablePromise<PersonaDTO_GET> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/comun/v1/personas',
            headers: {
                'X-Timezone': xTimezone,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `- COM_0004 : La persona ya existe (DNI/Pasaporte - País) pero el nombre introducido no es correcto`,
            },
        });
    }
    /**
     * Cuento el numero de personas dadas de alta en el sistema
     * @returns number OK
     * @throws ApiError
     */
    public getContarPersonas({
        xTimezone = 'Europe/Madrid',
    }: {
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
    }): CancelablePromise<number> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/comun/v1/personas/contar',
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
     * Recupera una persona por su id
     * @returns PersonaDTO_GET OK
     * @throws ApiError
     */
    public getPersonaPorIdPersona({
        idPersona,
        xTimezone = 'Europe/Madrid',
    }: {
        idPersona: number,
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
    }): CancelablePromise<PersonaDTO_GET> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/comun/v1/personas/{idPersona}',
            path: {
                'idPersona': idPersona,
            },
            headers: {
                'X-Timezone': xTimezone,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * Actualiza una persona existente
     * @returns PersonaDTO_GET OK
     * @throws ApiError
     */
    public putPersonaPorIdPersona({
        idPersona,
        xTimezone = 'Europe/Madrid',
        requestBody,
    }: {
        idPersona: number,
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
        requestBody?: PersonaDTO_POST_PUT,
    }): CancelablePromise<PersonaDTO_GET> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/comun/v1/personas/{idPersona}',
            path: {
                'idPersona': idPersona,
            },
            headers: {
                'X-Timezone': xTimezone,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }
    /**
     * Borra una persona
     * @returns string OK
     * @throws ApiError
     */
    public deletePersonaPorIdPersona({
        idPersona,
        xTimezone = 'Europe/Madrid',
    }: {
        idPersona: number,
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/comun/v1/personas/{idPersona}',
            path: {
                'idPersona': idPersona,
            },
            headers: {
                'X-Timezone': xTimezone,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
