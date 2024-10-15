/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CriterioEstandarDtoResponse } from '../models/CriterioEstandarDtoResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CriterioEstNdarService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Devuelve un listado con todos los criterios estándar.
     * @returns CriterioEstandarDtoResponse OK
     * @throws ApiError
     */
    public getCriteriosEstandar({
        ids,
        xTimezone = 'Europe/Madrid',
    }: {
        ids?: Array<number>,
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
    }): CancelablePromise<Array<CriterioEstandarDtoResponse>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/comun/v1/criterios-estandar',
            headers: {
                'X-Timezone': xTimezone,
            },
            query: {
                'ids': ids,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
}
