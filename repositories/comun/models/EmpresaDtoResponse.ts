/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EntornoDtoResponse } from './EntornoDtoResponse';
import type { TipoSolicitudAltaEnum } from './TipoSolicitudAltaEnum';
import type { ZonedDateTime } from './ZonedDateTime';
import type { ZoneId } from './ZoneId';
export type EmpresaDtoResponse = {
    cif: string;
    nombre: string;
    paisCif: number;
    observaciones: string;
    idEmpresa?: number;
    nombreUsuario?: string;
    apellidosUsuario?: string;
    emailUsuario?: string;
    tipoEmpresa?: TipoSolicitudAltaEnum;
    entornos?: Array<EntornoDtoResponse>;
    fechaCreacion?: ZonedDateTime;
    fechaUltimoAcceso?: ZonedDateTime;
    razonSocial?: string;
    zonaHoraria?: ZoneId;
};

