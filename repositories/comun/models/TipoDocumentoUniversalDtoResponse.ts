/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AplicableAEnum } from './AplicableAEnum';
import type { CriterioEstandarDtoResponse } from './CriterioEstandarDtoResponse';
import type { DepartamentoAreaEnum } from './DepartamentoAreaEnum';
import type { EspecificidadEnum } from './EspecificidadEnum';
import type { TipoDocumentoPrlEnum } from './TipoDocumentoPrlEnum';
import type { UnidadTiempoValidezEnum } from './UnidadTiempoValidezEnum';
import type { ZonedDateTime } from './ZonedDateTime';
export type TipoDocumentoUniversalDtoResponse = {
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
};

