/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AplicableAEnum } from './AplicableAEnum';
import type { DepartamentoAreaEnum } from './DepartamentoAreaEnum';
import type { EspecificidadEnum } from './EspecificidadEnum';
import type { TipoDocumentoPrlEnum } from './TipoDocumentoPrlEnum';
import type { UnidadTiempoValidezEnum } from './UnidadTiempoValidezEnum';
export type TipoDocumentoUniversalDtoResponseListado = {
    idTipoDocumentoUniversal?: number;
    nombre?: string;
    aplicableA?: AplicableAEnum;
    departamentoArea?: DepartamentoAreaEnum;
    tipo?: TipoDocumentoPrlEnum;
    validez?: number;
    unidadTiempoValidez?: UnidadTiempoValidezEnum;
    especificidad?: EspecificidadEnum;
    enUso?: boolean;
    idPais?: number;
    indefinido?: boolean;
};

