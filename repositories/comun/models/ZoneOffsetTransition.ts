/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Duration } from './Duration';
import type { Instant } from './Instant';
import type { LocalDateTime } from './LocalDateTime';
import type { ZoneOffset } from './ZoneOffset';
export type ZoneOffsetTransition = {
    epochSecond?: number;
    transition?: LocalDateTime;
    offsetBefore?: ZoneOffset;
    offsetAfter?: ZoneOffset;
    instant?: Instant;
    dateTimeBefore?: LocalDateTime;
    dateTimeAfter?: LocalDateTime;
    duration?: Duration;
    durationSeconds?: number;
    gap?: boolean;
    overlap?: boolean;
    validOffsets?: Array<ZoneOffset>;
};

