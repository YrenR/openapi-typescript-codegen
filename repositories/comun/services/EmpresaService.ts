/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ArchivoDTO_GET } from '../models/ArchivoDTO_GET';
import type { ArchivoDTO_GET_INFO } from '../models/ArchivoDTO_GET_INFO';
import type { EmpresaDtoRequestUpdate } from '../models/EmpresaDtoRequestUpdate';
import type { EmpresaDtoResponse } from '../models/EmpresaDtoResponse';
import type { FormatoEnum } from '../models/FormatoEnum';
import type { ModuloEnum } from '../models/ModuloEnum';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class EmpresaService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Recupera el listado de empresas mediante unos parámetros
     * Si no se pasan parámetros, devolverá todas las empresas
     * @returns EmpresaDtoResponse OK
     * @throws ApiError
     */
    public getEmpresas({
        cif,
        filtro,
        infoEntornos = false,
        listaIds,
        listaIdsPais,
        listaModulos,
        xTimezone = 'Europe/Madrid',
    }: {
        cif?: string,
        filtro?: string,
        infoEntornos?: boolean,
        listaIds?: Array<number>,
        listaIdsPais?: Array<number>,
        listaModulos?: Array<ModuloEnum>,
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
    }): CancelablePromise<Array<EmpresaDtoResponse>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/comun/v1/empresas',
            headers: {
                'X-Timezone': xTimezone,
            },
            query: {
                'CIF': cif,
                'filtro': filtro,
                'infoEntornos': infoEntornos,
                'listaIds': listaIds,
                'listaIdsPais': listaIdsPais,
                'listaModulos': listaModulos,
            },
            errors: {
                401: `Forbidden`,
                403: `- COM_0005 : No puede filtrar solo por provincia`,
            },
        });
    }
    /**
     * Obtiene el numero de empresas dadas de alta en el sistema
     * @returns number OK
     * @throws ApiError
     */
    public getContarEmpresas({
        xTimezone = 'Europe/Madrid',
    }: {
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
    }): CancelablePromise<number> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/comun/v1/empresas/contar',
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
     * Recupera una empresa por su id
     * @returns EmpresaDtoResponse OK
     * @throws ApiError
     */
    public getEmpresaPorIdEmpresa({
        idEmpresa,
        xTimezone = 'Europe/Madrid',
    }: {
        idEmpresa: number,
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
    }): CancelablePromise<EmpresaDtoResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/comun/v1/empresas/{idEmpresa}',
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
     * Actualiza una empresa existente
     * @returns EmpresaDtoResponse OK
     * @throws ApiError
     */
    public putEmpresaPorIdEmpresa({
        idEmpresa,
        xTimezone = 'Europe/Madrid',
        requestBody,
    }: {
        idEmpresa: number,
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
        requestBody?: EmpresaDtoRequestUpdate,
    }): CancelablePromise<EmpresaDtoResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/comun/v1/empresas/{idEmpresa}',
            path: {
                'idEmpresa': idEmpresa,
            },
            headers: {
                'X-Timezone': xTimezone,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `- COM_0008 : No se puede modificar los datos de un autónomo`,
                404: `Not found`,
            },
        });
    }
    /**
     * Borra una empresa
     * @returns EmpresaDtoResponse OK
     * @throws ApiError
     */
    public deleteEmpresaPorIdEmpresa({
        idEmpresa,
        xTimezone = 'Europe/Madrid',
    }: {
        idEmpresa: number,
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
    }): CancelablePromise<EmpresaDtoResponse> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/comun/v1/empresas/{idEmpresa}',
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
     * Crea o modifica un logotipo para una empresa determinada
     * *La llamada POST creará el archivo en BBDD en caso de no existir o lo actualizará en caso contrario
     * @returns ArchivoDTO_GET OK
     * @throws ApiError
     */
    public postLogotipoPorIdEmpresa({
        idEmpresa,
        xTimezone = 'Europe/Madrid',
        formData,
    }: {
        idEmpresa: number,
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
        formData?: {
            file: Blob;
            fileName: string;
        },
    }): CancelablePromise<ArchivoDTO_GET> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/comun/v1/empresas/{idEmpresa}/logotipo',
            path: {
                'idEmpresa': idEmpresa,
            },
            headers: {
                'X-Timezone': xTimezone,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                400: `Bad Request`,
                401: `Unauthorized`,
                403: `Forbidden`,
            },
        });
    }
    /**
     * Borra el logotipo de una empresa
     * @returns ArchivoDTO_GET OK
     * @throws ApiError
     */
    public deleteLogotipoPorIdEmpresa({
        idEmpresa,
        xTimezone = 'Europe/Madrid',
    }: {
        idEmpresa: number,
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
    }): CancelablePromise<ArchivoDTO_GET> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/comun/v1/empresas/{idEmpresa}/logotipo',
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
     * Comprueba que la empresa tiene foto, devuelve información
     * @returns ArchivoDTO_GET_INFO OK
     * @throws ApiError
     */
    public getInformacionLogotipoPorIdEmpresa({
        idEmpresa,
        xTimezone = 'Europe/Madrid',
    }: {
        idEmpresa: number,
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
    }): CancelablePromise<ArchivoDTO_GET_INFO> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/comun/v1/empresas/{idEmpresa}/logotipo/informacion',
            path: {
                'idEmpresa': idEmpresa,
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
    /**
     * Recupera el logotipo de una empresa determinada
     * *Este método necesita únicamente el jwt a través de la URL
     * @returns string OK
     * @throws ApiError
     */
    public getLogotipoPorIdEmpresaPorUuid({
        idEmpresa,
        uuid,
        alto,
        ancho,
        modoMiniaturizacion,
        xTimezone = 'Europe/Madrid',
    }: {
        idEmpresa: number,
        uuid: string,
        alto?: number,
        ancho?: number,
        modoMiniaturizacion?: FormatoEnum,
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
    }): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/comun/v1/empresas/{idEmpresa}/logotipo/{uuid}',
            path: {
                'idEmpresa': idEmpresa,
                'uuid': uuid,
            },
            headers: {
                'X-Timezone': xTimezone,
            },
            query: {
                'alto': alto,
                'ancho': ancho,
                'modoMiniaturizacion': modoMiniaturizacion,
            },
            errors: {
                401: `No autorizado`,
                404: `Not Found`,
            },
        });
    }
}
