/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ZonedDateTime } from './ZonedDateTime';
export type ArchivoDTO_GET = {
    idTipoEntidad: number;
    idEntidad: number;
    idTipoEntidadSecundaria?: number;
    idEntidadSecundaria?: number;
    observaciones: string;
    nombre: string;
    binario: Blob;
    esCreacion?: boolean;
    extension?: string;
    numeroPaginas?: number;
    idArchivo?: number;
    uuid?: string;
    idEntorno?: number;
    fechaInsercion?: ZonedDateTime;
    fechaModificacion?: ZonedDateTime;
    tamano?: number;
};

