/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ConfiguraciNService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Obtiene una lista de posibles franjas horarias a seleccionar por el usuario
     * @returns string Ok
     * @throws ApiError
     */
    public getZonasHorariasConfiguraciones({
        xTimezone = 'Europe/Madrid',
    }: {
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
    }): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/comun/v1/configuraciones/zonas-horarias',
            headers: {
                'X-Timezone': xTimezone,
            },
        });
    }
}
