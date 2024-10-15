/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CategoriaRecursoMaterialDTO_GET } from '../models/CategoriaRecursoMaterialDTO_GET';
import type { TipoRecursoMaterialDTO_GET } from '../models/TipoRecursoMaterialDTO_GET';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class CategorARecursoMaterialService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Devuelve las categorías de recursos materiales filtradas
     * @returns CategoriaRecursoMaterialDTO_GET OK
     * @throws ApiError
     */
    public getCategoriasRecursosMateriales({
        idPais,
        xTimezone = 'Europe/Madrid',
    }: {
        idPais?: number,
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
    }): CancelablePromise<Array<CategoriaRecursoMaterialDTO_GET>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/comun/v1/categorias-recursos-materiales',
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
     * Busca la entidad correspondiente al ID introducido
     * @returns CategoriaRecursoMaterialDTO_GET OK
     * @throws ApiError
     */
    public getCategoriaRecursoMaterialPorIdCategoria({
        idCategoria,
        xTimezone = 'Europe/Madrid',
    }: {
        idCategoria: number,
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
    }): CancelablePromise<CategoriaRecursoMaterialDTO_GET> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/comun/v1/categorias-recursos-materiales/{idCategoria}',
            path: {
                'idCategoria': idCategoria,
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
     * Obtiene los TipoRecursoMaterial de una categoría
     * @returns TipoRecursoMaterialDTO_GET OK
     * @throws ApiError
     */
    public getTiposRecursosMaterialesPorIdCategoria({
        idCategoria,
        xTimezone = 'Europe/Madrid',
    }: {
        idCategoria: number,
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
    }): CancelablePromise<Array<TipoRecursoMaterialDTO_GET>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/comun/v1/categorias-recursos-materiales/{idCategoria}/tipos-recursos-materiales',
            path: {
                'idCategoria': idCategoria,
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
     * Obtiene el TipoRecursoMaterial de una categoría por id
     * @returns TipoRecursoMaterialDTO_GET OK
     * @throws ApiError
     */
    public getTipoRecursoMaterialPorIdTipoRecursoMaterialPorIdCategoria({
        idCategoria,
        idTipoRecursoMaterial,
        xTimezone = 'Europe/Madrid',
    }: {
        idCategoria: number,
        idTipoRecursoMaterial: number,
        /**
         * Zona horaria desde la que se hace la petición
         */
        xTimezone?: string,
    }): CancelablePromise<TipoRecursoMaterialDTO_GET> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/comun/v1/categorias-recursos-materiales/{idCategoria}/tipos-recursos-materiales/{idTipoRecursoMaterial}',
            path: {
                'idCategoria': idCategoria,
                'idTipoRecursoMaterial': idTipoRecursoMaterial,
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
