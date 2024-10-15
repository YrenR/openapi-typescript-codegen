/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AplicableAEnum } from '../models/AplicableAEnum';
import type { CriterioEstandarDtoResponse } from '../models/CriterioEstandarDtoResponse';
import type { DepartamentoAreaEnum } from '../models/DepartamentoAreaEnum';
import type { EspecificidadEnum } from '../models/EspecificidadEnum';
import type { TipoDocumentoPrlEnum } from '../models/TipoDocumentoPrlEnum';
import type { TipoDocumentoUniversalDtoRequest } from '../models/TipoDocumentoUniversalDtoRequest';
import type { TipoDocumentoUniversalDtoResponse } from '../models/TipoDocumentoUniversalDtoResponse';
import type { TipoDocumentoUniversalDtoResponseListado } from '../models/TipoDocumentoUniversalDtoResponseListado';
import type { UnidadTiempoValidezEnum } from '../models/UnidadTiempoValidezEnum';
import type { VersionDtoResponse } from '../models/VersionDtoResponse';
import type { ZonedDateTime } from '../models/ZonedDateTime';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class TipoDocumentoUniversalService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Recupera un listado tipo documentos universales pertenecientes a los ids de paises pasados.
     * @returns TipoDocumentoUniversalDtoResponseListado OK
     * @throws ApiError
     */
    public getTipoDocumentosUniversales({
        idPais,
        xTimezone = 'Europe/Madrid',
    }: {
        idPais?: number,
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
    }): CancelablePromise<Array<TipoDocumentoUniversalDtoResponseListado>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/comun/v1/tipos-documentos-universales',
            headers: {
                'X-Timezone': xTimezone,
            },
            query: {
                'idPais': idPais,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Inserta un tipo de documento universal junto al listado de sus criterios de validación.
     * @returns VersionDtoResponse Created
     * @throws ApiError
     */
    public postTipoDocumentoUniversal({
        xTimezone = 'Europe/Madrid',
        requestBody,
    }: {
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
        requestBody?: TipoDocumentoUniversalDtoRequest,
    }): CancelablePromise<VersionDtoResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/comun/v1/tipos-documentos-universales',
            headers: {
                'X-Timezone': xTimezone,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `- COM_0010: Ha ocurrido un error al validar los valores de los enumerados
                - COM_0011: Actualmente no se permite crear un tipo de documento universal que no sea para España`,
                404: `Not found`,
            },
        });
    }
    /**
     * Recupera un tipo documento universal según el id pasado.
     * @returns TipoDocumentoUniversalDtoResponse OK
     * @throws ApiError
     */
    public getTipoDocumentoUniversalPorIdTipoDocumentoUniversal({
        idTipoDocumentoUniversal,
        xTimezone = 'Europe/Madrid',
    }: {
        idTipoDocumentoUniversal: number,
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
    }): CancelablePromise<TipoDocumentoUniversalDtoResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/comun/v1/tipos-documentos-universales/{idTipoDocumentoUniversal}',
            path: {
                'idTipoDocumentoUniversal': idTipoDocumentoUniversal,
            },
            headers: {
                'X-Timezone': xTimezone,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not found`,
            },
        });
    }
    /**
     * Actualiza tanto la información general de un tipo de documento universal, como sus criterios de validación.
     * @returns TipoDocumentoUniversalDtoResponse OK
     * @throws ApiError
     */
    public putTipoDocumentoUniversalPorIdTipoDocumentoUniversal({
        idTipoDocumentoUniversal,
        xTimezone = 'Europe/Madrid',
        requestBody,
    }: {
        idTipoDocumentoUniversal: number,
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
        requestBody?: TipoDocumentoUniversalDtoRequest,
    }): CancelablePromise<TipoDocumentoUniversalDtoResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/comun/v1/tipos-documentos-universales/{idTipoDocumentoUniversal}',
            path: {
                'idTipoDocumentoUniversal': idTipoDocumentoUniversal,
            },
            headers: {
                'X-Timezone': xTimezone,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `- COM_0010: Ha ocurrido un error al validar los valores de los enumerados
                - COM_0011: Actualmente no se permite crear un tipo de documento universal que no sea para España`,
                404: `Not found`,
            },
        });
    }
    /**
     * Elimina un tipo de documento universal.
     * @returns TipoDocumentoUniversalDtoResponse OK
     * @throws ApiError
     */
    public deleteTipoDocumentoUniversalPorIdTipoDocumentoUniversal({
        idTipoDocumentoUniversal,
        xTimezone = 'Europe/Madrid',
    }: {
        idTipoDocumentoUniversal: number,
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
    }): CancelablePromise<TipoDocumentoUniversalDtoResponse> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/comun/v1/tipos-documentos-universales/{idTipoDocumentoUniversal}',
            path: {
                'idTipoDocumentoUniversal': idTipoDocumentoUniversal,
            },
            headers: {
                'X-Timezone': xTimezone,
            },
            errors: {
                401: `Unauthorized`,
                403: `COM_0016: No se puede eliminar un tipo de documento universal que está en uso`,
                404: `Not found`,
            },
        });
    }
    /**
     * Aumenta en 1 el número de usos del tipo de documento universal.
     * @returns any OK
     * @throws ApiError
     */
    public postAumentarUsosTipoDocumentoUniversalPorIdTipoDocumentoUniversal({
        idTipoDocumentoUniversal,
        xTimezone = 'Europe/Madrid',
    }: {
        idTipoDocumentoUniversal: number,
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
    }): CancelablePromise<{
        nombre?: string;
        aplicableA?: AplicableAEnum;
        departamentoArea?: DepartamentoAreaEnum;
        tipo?: TipoDocumentoPrlEnum;
        validez?: number;
        unidadTiempoValidez?: UnidadTiempoValidezEnum;
        especificidad?: EspecificidadEnum;
        idPais?: number;
        codigoMetabuzon?: string;
        indefinido?: boolean;
        diasPreaviso?: number;
        firmaRequerida?: boolean;
        adjuntoObligatorio?: boolean;
        idTipoDocumentoInformatizado?: number;
        idTipoDocumentoUniversal?: number;
        criteriosValidacionUltimaVersion?: Array<CriterioEstandarDtoResponse>;
        versiones?: Array<number>;
        fechaUltimaVersion?: ZonedDateTime;
        usuarioUltimaVersion?: string;
        enUso?: boolean;
    }> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/comun/v1/tipos-documentos-universales/{idTipoDocumentoUniversal}/aumentar-usos',
            path: {
                'idTipoDocumentoUniversal': idTipoDocumentoUniversal,
            },
            headers: {
                'X-Timezone': xTimezone,
            },
            errors: {
                404: `Not found`,
            },
        });
    }
    /**
     * Disminuye en 1 el número de usos del tipo de documento universal hasta un mínimo de 0 usos. Si se llama al endpoint cuando el tipo de documento universal ya tiene 0 usos, no se realiza ningún cambio.
     * @returns TipoDocumentoUniversalDtoResponse OK
     * @throws ApiError
     */
    public postDisminuirUsosTipoDocumentoUniversalPorIdTipoDocumentoUniversal({
        idTipoDocumentoUniversal,
        xTimezone = 'Europe/Madrid',
    }: {
        idTipoDocumentoUniversal: number,
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
    }): CancelablePromise<TipoDocumentoUniversalDtoResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/comun/v1/tipos-documentos-universales/{idTipoDocumentoUniversal}/disminuir-usos',
            path: {
                'idTipoDocumentoUniversal': idTipoDocumentoUniversal,
            },
            headers: {
                'X-Timezone': xTimezone,
            },
            errors: {
                404: `Not found`,
            },
        });
    }
    /**
     * Devuelve la información de una versión específica de un tipo de documento universal además de sus criterios de validación.
     * @returns VersionDtoResponse OK
     * @throws ApiError
     */
    public getVersionPorIdTipoDocumentoUniversalPorVersion({
        idTipoDocumentoUniversal,
        version,
        xTimezone = 'Europe/Madrid',
    }: {
        idTipoDocumentoUniversal: number,
        version: number,
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
    }): CancelablePromise<VersionDtoResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/comun/v1/tipos-documentos-universales/{idTipoDocumentoUniversal}/versiones/{version}',
            path: {
                'idTipoDocumentoUniversal': idTipoDocumentoUniversal,
                'version': version,
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
