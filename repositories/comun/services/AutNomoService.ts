/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AutonomoDtoRequestUpdate } from '../models/AutonomoDtoRequestUpdate';
import type { AutonomoDtoResponse } from '../models/AutonomoDtoResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class AutNomoService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Devuelve los datos de un autónomo
     * @returns AutonomoDtoResponse OK
     * @throws ApiError
     */
    public getAutonomoPorIdEmpresa({
        idEmpresa,
        xTimezone = 'Europe/Madrid',
    }: {
        idEmpresa: number,
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
    }): CancelablePromise<AutonomoDtoResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/comun/v1/autonomos/{idEmpresa}',
            path: {
                'idEmpresa': idEmpresa,
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
     * Edita los datos de un autónomo
     * @returns AutonomoDtoResponse OK
     * @throws ApiError
     */
    public putAutonomoPorIdEmpresa({
        idEmpresa,
        xTimezone = 'Europe/Madrid',
        requestBody,
    }: {
        idEmpresa: number,
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
        requestBody?: AutonomoDtoRequestUpdate,
    }): CancelablePromise<AutonomoDtoResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/comun/v1/autonomos/{idEmpresa}',
            path: {
                'idEmpresa': idEmpresa,
            },
            headers: {
                'X-Timezone': xTimezone,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `Unauthorized`,
                403: `- COM_0009 : No se puede modificar los datos de una empresa`,
                404: `Not Found`,
            },
        });
    }
}
